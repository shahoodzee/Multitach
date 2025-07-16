import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Progress } from "@/components/ui/progress";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import {
  Wrench,
  User,
  Users,
  Settings,
  LogOut,
  Clock,
  CheckCircle,
  Search,
  Calendar,
  CreditCard,
  MessageCircle,
  ChevronDown,
  Phone,
  Mail,
  MapPin,
  Star,
  DollarSign,
} from "lucide-react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";

// Mock task data
const mockTask = {
  id: "TASK-001",
  title: "Kitchen Sink Repair",
  description: "Fix leaking kitchen sink and replace worn gaskets",
  category: "Plumbing",
  initiatedAt: new Date(Date.now() - 2 * 60 * 60 * 1000), // 2 hours ago
  currentStep: 3, // Confirming worker
  estimatedCompletion: new Date(Date.now() + 24 * 60 * 60 * 1000), // Tomorrow
  budget: 150,
  location: "123 Main St, Apartment 4B",
  urgency: "Medium",
  worker: {
    name: "Ahmed Khan",
    rating: 4.8,
    phone: "+92 300 1234567",
    email: "ahmed.khan@multitach.com",
    specialization: "Plumbing",
    experience: "5+ years",
    profileImage: null,
  },
};

const taskSteps = [
  {
    id: 1,
    title: "Task Initiated",
    description: "Your service request has been submitted",
    icon: CheckCircle,
    status: "completed",
  },
  {
    id: 2,
    title: "Finding Workers",
    description: "AI is matching you with suitable professionals",
    icon: Search,
    status: "completed",
  },
  {
    id: 3,
    title: "Worker Confirmation",
    description: "Confirming worker availability and scheduling",
    icon: Calendar,
    status: "current",
  },
  {
    id: 4,
    title: "Task in Progress",
    description: "Professional is working on your task",
    icon: Wrench,
    status: "pending",
  },
  {
    id: 5,
    title: "Payment",
    description: "Complete payment for the service",
    icon: CreditCard,
    status: "pending",
  },
  {
    id: 6,
    title: "Feedback",
    description: "Rate your experience and provide feedback",
    icon: MessageCircle,
    status: "pending",
  },
];

const fadeInUp = {
  initial: { opacity: 0, y: 20 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.6, ease: "easeOut" },
};

const staggerContainer = {
  animate: {
    transition: {
      staggerChildren: 0.1,
    },
  },
};

export default function Dashboard() {
  const [currentTime, setCurrentTime] = useState(new Date());
  const [timeElapsed, setTimeElapsed] = useState("");

  // Update current time every second
  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentTime(new Date());
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  // Calculate time elapsed since task initiation
  useEffect(() => {
    const calculateTimeElapsed = () => {
      const diff = currentTime.getTime() - mockTask.initiatedAt.getTime();
      const hours = Math.floor(diff / (1000 * 60 * 60));
      const minutes = Math.floor((diff % (1000 * 60 * 60)) / (1000 * 60));
      const seconds = Math.floor((diff % (1000 * 60)) / 1000);

      if (hours > 0) {
        setTimeElapsed(`${hours}h ${minutes}m ${seconds}s`);
      } else if (minutes > 0) {
        setTimeElapsed(`${minutes}m ${seconds}s`);
      } else {
        setTimeElapsed(`${seconds}s`);
      }
    };

    calculateTimeElapsed();
  }, [currentTime]);

  const getStepProgress = () => {
    const completedSteps = taskSteps.filter(
      (step) => step.status === "completed",
    ).length;
    const currentStepProgress = taskSteps.find(
      (step) => step.status === "current",
    )
      ? 0.5
      : 0;
    return ((completedSteps + currentStepProgress) / taskSteps.length) * 100;
  };

  const handleLogout = () => {
    alert("Logged out successfully!");
    // Here you would handle actual logout
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-blue-50/30">
      {/* Dashboard Navbar */}
      <motion.nav
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="bg-white/95 backdrop-blur-lg border-b border-gray-200 sticky top-0 z-50 shadow-sm"
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            {/* Logo */}
            <Link to="/dashboard" className="flex items-center">
              <motion.div
                whileHover={{ rotate: 360 }}
                transition={{ duration: 0.5 }}
                className="h-10 w-10 bg-gradient-to-br from-brand-500 to-brand-600 rounded-xl flex items-center justify-center shadow-lg"
              >
                <Wrench className="h-6 w-6 text-white" />
              </motion.div>
              <span className="ml-3 text-xl font-bold bg-gradient-to-r from-brand-600 to-purple-600 bg-clip-text text-transparent">
                Multitach
              </span>
            </Link>

            {/* Navigation Items */}
            <div className="hidden md:flex items-center space-x-8">
              <Link
                to="/dashboard/workers"
                className="text-gray-700 hover:text-brand-600 px-3 py-2 text-sm font-medium transition-colors"
              >
                Workers
              </Link>
              <Link
                to="/dashboard/pricing"
                className="text-gray-700 hover:text-brand-600 px-3 py-2 text-sm font-medium transition-colors"
              >
                Task Pricing
              </Link>

              {/* Profile Dropdown */}
              <DropdownMenu>
                <DropdownMenuTrigger asChild>
                  <Button
                    variant="ghost"
                    className="flex items-center space-x-2 hover:bg-brand-50"
                  >
                    <Avatar className="h-8 w-8">
                      <AvatarImage src="" alt="Profile" />
                      <AvatarFallback className="bg-brand-100 text-brand-700">
                        JD
                      </AvatarFallback>
                    </Avatar>
                    <span className="text-sm font-medium text-gray-700">
                      John Doe
                    </span>
                    <ChevronDown className="h-4 w-4 text-gray-500" />
                  </Button>
                </DropdownMenuTrigger>
                <DropdownMenuContent align="end" className="w-48">
                  <DropdownMenuItem>
                    <User className="mr-2 h-4 w-4" />
                    Profile
                  </DropdownMenuItem>
                  <DropdownMenuItem>
                    <User className="mr-2 h-4 w-4" />
                    Account
                  </DropdownMenuItem>
                  <DropdownMenuItem>
                    <Settings className="mr-2 h-4 w-4" />
                    Settings
                  </DropdownMenuItem>
                  <DropdownMenuSeparator />
                  <DropdownMenuItem onClick={handleLogout}>
                    <LogOut className="mr-2 h-4 w-4" />
                    Logout
                  </DropdownMenuItem>
                </DropdownMenuContent>
              </DropdownMenu>
            </div>

            {/* Mobile Menu */}
            <div className="md:hidden">
              <DropdownMenu>
                <DropdownMenuTrigger asChild>
                  <Button variant="ghost" size="icon">
                    <Users className="h-6 w-6" />
                  </Button>
                </DropdownMenuTrigger>
                <DropdownMenuContent align="end" className="w-48">
                  <DropdownMenuItem>
                    <Users className="mr-2 h-4 w-4" />
                    Workers
                  </DropdownMenuItem>
                  <DropdownMenuItem>
                    <DollarSign className="mr-2 h-4 w-4" />
                    Task Pricing
                  </DropdownMenuItem>
                  <DropdownMenuSeparator />
                  <DropdownMenuItem>
                    <User className="mr-2 h-4 w-4" />
                    Profile
                  </DropdownMenuItem>
                  <DropdownMenuItem>
                    <Settings className="mr-2 h-4 w-4" />
                    Settings
                  </DropdownMenuItem>
                  <DropdownMenuItem onClick={handleLogout}>
                    <LogOut className="mr-2 h-4 w-4" />
                    Logout
                  </DropdownMenuItem>
                </DropdownMenuContent>
              </DropdownMenu>
            </div>
          </div>
        </div>
      </motion.nav>

      {/* Dashboard Content */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <motion.div
          initial="initial"
          animate="animate"
          variants={staggerContainer}
          className="space-y-8"
        >
          {/* Header */}
          <motion.div variants={fadeInUp}>
            <h1 className="text-3xl font-bold text-gray-900 mb-2">
              Task Dashboard
            </h1>
            <p className="text-gray-600">
              Track your service request progress and manage tasks
            </p>
          </motion.div>

          {/* Task Overview Cards */}
          <motion.div
            variants={fadeInUp}
            className="grid grid-cols-1 md:grid-cols-3 gap-6"
          >
            {/* Task Time Card */}
            <Card className="border-0 shadow-lg bg-white/90 backdrop-blur-sm">
              <CardHeader className="flex flex-row items-center justify-between pb-2">
                <CardTitle className="text-sm font-medium text-gray-600">
                  Time Elapsed
                </CardTitle>
                <Clock className="h-4 w-4 text-brand-500" />
              </CardHeader>
              <CardContent>
                <div className="text-2xl font-bold text-brand-600">
                  {timeElapsed}
                </div>
                <p className="text-xs text-gray-500 mt-1">
                  Since task initiated
                </p>
              </CardContent>
            </Card>

            {/* Current Step Card */}
            <Card className="border-0 shadow-lg bg-white/90 backdrop-blur-sm">
              <CardHeader className="flex flex-row items-center justify-between pb-2">
                <CardTitle className="text-sm font-medium text-gray-600">
                  Current Step
                </CardTitle>
                <Calendar className="h-4 w-4 text-orange-500" />
              </CardHeader>
              <CardContent>
                <div className="text-2xl font-bold text-orange-600">
                  {mockTask.currentStep} of {taskSteps.length}
                </div>
                <p className="text-xs text-gray-500 mt-1">
                  Worker Confirmation
                </p>
              </CardContent>
            </Card>

            {/* Budget Card */}
            <Card className="border-0 shadow-lg bg-white/90 backdrop-blur-sm">
              <CardHeader className="flex flex-row items-center justify-between pb-2">
                <CardTitle className="text-sm font-medium text-gray-600">
                  Budget
                </CardTitle>
                <DollarSign className="h-4 w-4 text-green-500" />
              </CardHeader>
              <CardContent>
                <div className="text-2xl font-bold text-green-600">
                  ${mockTask.budget}
                </div>
                <p className="text-xs text-gray-500 mt-1">Estimated cost</p>
              </CardContent>
            </Card>
          </motion.div>

          {/* Main Content Grid */}
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {/* Task Progress */}
            <motion.div variants={fadeInUp} className="lg:col-span-2">
              <Card className="border-0 shadow-xl bg-white/90 backdrop-blur-sm">
                <CardHeader>
                  <div className="flex items-center justify-between">
                    <div>
                      <CardTitle className="text-xl">Task Progress</CardTitle>
                      <CardDescription>
                        {mockTask.title} - {mockTask.category}
                      </CardDescription>
                    </div>
                    <Badge
                      variant="secondary"
                      className="bg-orange-100 text-orange-700"
                    >
                      {mockTask.urgency} Priority
                    </Badge>
                  </div>
                  <div className="mt-4">
                    <div className="flex items-center justify-between mb-2">
                      <span className="text-sm font-medium text-gray-600">
                        Overall Progress
                      </span>
                      <span className="text-sm text-gray-500">
                        {Math.round(getStepProgress())}%
                      </span>
                    </div>
                    <Progress value={getStepProgress()} className="h-2" />
                  </div>
                </CardHeader>
                <CardContent>
                  <div className="space-y-6">
                    {taskSteps.map((step, index) => {
                      const Icon = step.icon;
                      return (
                        <motion.div
                          key={step.id}
                          initial={{ opacity: 0, x: -20 }}
                          animate={{ opacity: 1, x: 0 }}
                          transition={{ delay: index * 0.1 }}
                          className="flex items-start space-x-4"
                        >
                          <div
                            className={`w-10 h-10 rounded-full flex items-center justify-center ${
                              step.status === "completed"
                                ? "bg-green-100 text-green-600"
                                : step.status === "current"
                                  ? "bg-orange-100 text-orange-600"
                                  : "bg-gray-100 text-gray-400"
                            }`}
                          >
                            <Icon className="h-5 w-5" />
                          </div>
                          <div className="flex-1 min-w-0">
                            <div className="flex items-center space-x-2">
                              <h4
                                className={`text-sm font-medium ${
                                  step.status === "completed"
                                    ? "text-green-900"
                                    : step.status === "current"
                                      ? "text-orange-900"
                                      : "text-gray-500"
                                }`}
                              >
                                {step.title}
                              </h4>
                              {step.status === "completed" && (
                                <CheckCircle className="h-4 w-4 text-green-500" />
                              )}
                              {step.status === "current" && (
                                <div className="w-2 h-2 bg-orange-500 rounded-full animate-pulse" />
                              )}
                            </div>
                            <p className="text-sm text-gray-500 mt-1">
                              {step.description}
                            </p>
                          </div>
                        </motion.div>
                      );
                    })}
                  </div>
                </CardContent>
              </Card>
            </motion.div>

            {/* Sidebar - Task Details & Worker Info */}
            <motion.div variants={fadeInUp} className="space-y-6">
              {/* Task Details */}
              <Card className="border-0 shadow-lg bg-white/90 backdrop-blur-sm">
                <CardHeader>
                  <CardTitle className="text-lg">Task Details</CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div>
                    <label className="text-sm font-medium text-gray-600">
                      Description
                    </label>
                    <p className="text-sm text-gray-900 mt-1">
                      {mockTask.description}
                    </p>
                  </div>
                  <div>
                    <label className="text-sm font-medium text-gray-600">
                      Location
                    </label>
                    <div className="flex items-center mt-1">
                      <MapPin className="h-4 w-4 text-gray-400 mr-2" />
                      <span className="text-sm text-gray-900">
                        {mockTask.location}
                      </span>
                    </div>
                  </div>
                  <div>
                    <label className="text-sm font-medium text-gray-600">
                      Estimated Completion
                    </label>
                    <p className="text-sm text-gray-900 mt-1">
                      {mockTask.estimatedCompletion.toLocaleDateString()}{" "}
                      {mockTask.estimatedCompletion.toLocaleTimeString()}
                    </p>
                  </div>
                </CardContent>
              </Card>

              {/* Assigned Worker */}
              <Card className="border-0 shadow-lg bg-white/90 backdrop-blur-sm">
                <CardHeader>
                  <CardTitle className="text-lg">Assigned Worker</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="flex items-center space-x-3 mb-4">
                    <Avatar className="h-12 w-12">
                      <AvatarImage src="" alt={mockTask.worker.name} />
                      <AvatarFallback className="bg-brand-100 text-brand-700">
                        {mockTask.worker.name
                          .split(" ")
                          .map((n) => n[0])
                          .join("")}
                      </AvatarFallback>
                    </Avatar>
                    <div>
                      <h4 className="font-medium text-gray-900">
                        {mockTask.worker.name}
                      </h4>
                      <div className="flex items-center">
                        <Star className="h-4 w-4 text-yellow-400 fill-current" />
                        <span className="text-sm text-gray-600 ml-1">
                          {mockTask.worker.rating} ({mockTask.worker.experience}
                          )
                        </span>
                      </div>
                    </div>
                  </div>
                  <div className="space-y-2">
                    <div className="flex items-center">
                      <Phone className="h-4 w-4 text-gray-400 mr-2" />
                      <span className="text-sm text-gray-900">
                        {mockTask.worker.phone}
                      </span>
                    </div>
                    <div className="flex items-center">
                      <Mail className="h-4 w-4 text-gray-400 mr-2" />
                      <span className="text-sm text-gray-900">
                        {mockTask.worker.email}
                      </span>
                    </div>
                    <div className="flex items-center">
                      <Wrench className="h-4 w-4 text-gray-400 mr-2" />
                      <span className="text-sm text-gray-900">
                        {mockTask.worker.specialization}
                      </span>
                    </div>
                  </div>
                  <div className="mt-4 space-y-2">
                    <Button className="w-full bg-brand-500 hover:bg-brand-600">
                      <Phone className="h-4 w-4 mr-2" />
                      Call Worker
                    </Button>
                    <Button variant="outline" className="w-full">
                      <MessageCircle className="h-4 w-4 mr-2" />
                      Send Message
                    </Button>
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </div>
  );
}
