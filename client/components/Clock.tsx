import { useEffect, useState } from "react";
import { motion } from "framer-motion";

interface ClockProps {
  startTime: Date;
  size?: "small" | "medium" | "large";
}

export default function Clock({ startTime, size = "medium" }: ClockProps) {
  const [currentTime, setCurrentTime] = useState(new Date());
  const [timeElapsed, setTimeElapsed] = useState({
    hours: 0,
    minutes: 0,
    seconds: 0,
    totalSeconds: 0,
  });

  // Update current time every second
  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentTime(new Date());
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  // Calculate time elapsed
  useEffect(() => {
    const calculateTimeElapsed = () => {
      const diff = currentTime.getTime() - startTime.getTime();
      const totalSeconds = Math.floor(diff / 1000);
      const hours = Math.floor(totalSeconds / 3600);
      const minutes = Math.floor((totalSeconds % 3600) / 60);
      const seconds = totalSeconds % 60;

      setTimeElapsed({
        hours,
        minutes,
        seconds,
        totalSeconds,
      });
    };

    calculateTimeElapsed();
  }, [currentTime, startTime]);

  const formatTime = (value: number) => {
    return value.toString().padStart(2, "0");
  };

  const getSizeClasses = () => {
    switch (size) {
      case "small":
        return {
          container: "w-32 h-32",
          outerCircle: "w-32 h-32",
          innerCircle: "w-24 h-24",
          digital: "text-lg",
          label: "text-xs",
        };
      case "large":
        return {
          container: "w-48 h-48",
          outerCircle: "w-48 h-48",
          innerCircle: "w-36 h-36",
          digital: "text-3xl",
          label: "text-base",
        };
      default:
        return {
          container: "w-40 h-40",
          outerCircle: "w-40 h-40",
          innerCircle: "w-32 h-32",
          digital: "text-xl",
          label: "text-sm",
        };
    }
  };

  const sizeClasses = getSizeClasses();

  // Calculate progress for circular indicator (360 degrees for 24 hours)
  const progressDegrees = Math.min((timeElapsed.totalSeconds / 86400) * 360, 360);

  return (
    <div className="flex flex-col items-center space-y-4">
      {/* Analog Clock */}
      <div className={`relative ${sizeClasses.container}`}>
        {/* Outer Ring */}
        <div
          className={`${sizeClasses.outerCircle} rounded-full bg-gradient-to-br from-brand-50 to-purple-50 border-4 border-brand-200 shadow-lg flex items-center justify-center relative overflow-hidden`}
        >
          {/* Progress Ring */}
          <motion.div
            className="absolute inset-0 rounded-full"
            style={{
              background: `conic-gradient(from 0deg, #7c3aed ${progressDegrees}deg, transparent ${progressDegrees}deg)`,
            }}
            initial={{ rotate: 0 }}
            animate={{ rotate: 360 }}
            transition={{ duration: 60, repeat: Infinity, ease: "linear" }}
          />

          {/* Inner Clock Face */}
          <div
            className={`${sizeClasses.innerCircle} rounded-full bg-white shadow-inner flex flex-col items-center justify-center relative z-10`}
          >
            {/* Hour Markers */}
            {[...Array(12)].map((_, i) => (
              <div
                key={i}
                className="absolute w-0.5 h-3 bg-gray-300"
                style={{
                  transform: `rotate(${i * 30}deg) translateY(-${size === "large" ? "66" : size === "small" ? "46" : "56"}px)`,
                  transformOrigin: "center bottom",
                }}
              />
            ))}

            {/* Clock Hands */}
            {/* Hour Hand */}
            <motion.div
              className="absolute w-1 bg-gray-700 rounded-full origin-bottom z-20"
              style={{
                height: size === "large" ? "40px" : size === "small" ? "24px" : "32px",
                transform: `rotate(${(timeElapsed.hours % 12) * 30 + (timeElapsed.minutes * 0.5)}deg)`,
              }}
              animate={{
                transform: `rotate(${(timeElapsed.hours % 12) * 30 + (timeElapsed.minutes * 0.5)}deg)`,
              }}
              transition={{ duration: 0.5, ease: "easeInOut" }}
            />

            {/* Minute Hand */}
            <motion.div
              className="absolute w-0.5 bg-brand-600 rounded-full origin-bottom z-30"
              style={{
                height: size === "large" ? "50px" : size === "small" ? "32px" : "40px",
                transform: `rotate(${timeElapsed.minutes * 6}deg)`,
              }}
              animate={{
                transform: `rotate(${timeElapsed.minutes * 6}deg)`,
              }}
              transition={{ duration: 0.5, ease: "easeInOut" }}
            />

            {/* Second Hand */}
            <motion.div
              className="absolute w-px bg-red-500 rounded-full origin-bottom z-40"
              style={{
                height: size === "large" ? "55px" : size === "small" ? "36px" : "44px",
                transform: `rotate(${timeElapsed.seconds * 6}deg)`,
              }}
              animate={{
                transform: `rotate(${timeElapsed.seconds * 6}deg)`,
              }}
              transition={{ duration: 0.1, ease: "easeInOut" }}
            />

            {/* Center Dot */}
            <div className="absolute w-3 h-3 bg-gray-800 rounded-full z-50" />
          </div>
        </div>
      </div>

      {/* Digital Time Display */}
      <div className="text-center">
        <motion.div
          className={`font-mono font-bold text-gray-900 ${sizeClasses.digital}`}
          key={`${timeElapsed.hours}:${timeElapsed.minutes}:${timeElapsed.seconds}`}
          initial={{ scale: 0.9, opacity: 0.7 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ duration: 0.1 }}
        >
          {formatTime(timeElapsed.hours)}:
          {formatTime(timeElapsed.minutes)}:
          <motion.span
            className="text-brand-600"
            animate={{ color: ["#7c3aed", "#a855f7", "#7c3aed"] }}
            transition={{ duration: 1, repeat: Infinity }}
          >
            {formatTime(timeElapsed.seconds)}
          </motion.span>
        </motion.div>
        <div className={`text-gray-500 ${sizeClasses.label} mt-1`}>
          Time Elapsed
        </div>
      </div>

      {/* Stats */}
      <div className="grid grid-cols-3 gap-4 text-center">
        <div>
          <div className="text-lg font-bold text-brand-600">
            {timeElapsed.hours}
          </div>
          <div className="text-xs text-gray-500">Hours</div>
        </div>
        <div>
          <div className="text-lg font-bold text-purple-600">
            {timeElapsed.minutes}
          </div>
          <div className="text-xs text-gray-500">Minutes</div>
        </div>
        <div>
          <div className="text-lg font-bold text-blue-600">
            {timeElapsed.seconds}
          </div>
          <div className="text-xs text-gray-500">Seconds</div>
        </div>
      </div>
    </div>
  );
}
