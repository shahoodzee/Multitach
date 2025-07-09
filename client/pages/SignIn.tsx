import { useState } from "react";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Badge } from "@/components/ui/badge";
import { Separator } from "@/components/ui/separator";
import {
  Wrench,
  ArrowRight,
  User,
  Mail,
  Lock,
  AlertCircle,
  Eye,
  EyeOff,
  LogIn,
} from "lucide-react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";

interface FormData {
  email: string;
  password: string;
}

const initialFormData: FormData = {
  email: "",
  password: "",
};

const fadeInUp = {
  initial: { opacity: 0, y: 60 },
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

export default function SignIn() {
  const [formData, setFormData] = useState<FormData>(initialFormData);
  const [errors, setErrors] = useState<Record<string, string>>({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [showPassword, setShowPassword] = useState(false);

  const updateFormData = (field: keyof FormData, value: string) => {
    setFormData((prev) => ({ ...prev, [field]: value }));
    // Clear error when user starts typing
    if (errors[field]) {
      setErrors((prev) => ({ ...prev, [field]: "" }));
    }
  };

  const validateForm = (): boolean => {
    const newErrors: Record<string, string> = {};

    if (!formData.email.trim()) {
      newErrors.email = "Email is required";
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      newErrors.email = "Please enter a valid email address";
    }

    if (!formData.password.trim()) {
      newErrors.password = "Password is required";
    } else if (formData.password.length < 6) {
      newErrors.password = "Password must be at least 6 characters";
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (validateForm()) {
      setIsSubmitting(true);
      try {
        // Simulate API call
        await new Promise((resolve) => setTimeout(resolve, 1500));
        alert("Sign in successful! Welcome to Multitach!");
        // Here you would normally redirect the user
      } catch (error) {
        alert("Sign in failed. Please check your credentials and try again.");
      } finally {
        setIsSubmitting(false);
      }
    }
  };

  const handleGoogleSignIn = () => {
    alert("Google Sign-In functionality will be implemented soon!");
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-white via-purple-50/30 to-blue-50/30 flex items-center justify-center">
      {/* Background Elements */}
      <div className="absolute inset-0 bg-gradient-to-br from-brand-50/40 via-purple-50/40 to-blue-50/40" />
      <div className="absolute -top-24 -right-24 w-96 h-96 bg-gradient-to-br from-brand-400/10 to-purple-400/10 rounded-full blur-3xl" />
      <div className="absolute -bottom-24 -left-24 w-96 h-96 bg-gradient-to-br from-purple-400/10 to-blue-400/10 rounded-full blur-3xl" />

      <div className="w-full max-w-md px-4 relative">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-8"
        >
          <Link to="/" className="inline-flex items-center mb-6">
            <motion.div
              whileHover={{ rotate: 360 }}
              transition={{ duration: 0.5 }}
              className="h-12 w-12 bg-gradient-to-br from-brand-500 to-brand-600 rounded-xl flex items-center justify-center shadow-lg"
            >
              <Wrench className="h-7 w-7 text-white" />
            </motion.div>
            <span className="ml-3 text-3xl font-bold bg-gradient-to-r from-brand-600 to-purple-600 bg-clip-text text-transparent">
              Multitach
            </span>
          </Link>

          <motion.div variants={fadeInUp}>
            <Badge
              variant="secondary"
              className="mb-4 bg-gradient-to-r from-brand-100 to-purple-100 text-brand-700 border-brand-200/50 shadow-sm"
            >
              <LogIn className="w-4 h-4 mr-2" />
              Welcome Back
            </Badge>
            <h1 className="text-3xl sm:text-4xl font-bold bg-gradient-to-r from-gray-900 to-brand-800 bg-clip-text text-transparent mb-2">
              Sign In to Multitach
            </h1>
            <p className="text-gray-600">
              Access your account to find professionals or manage your services
            </p>
          </motion.div>
        </motion.div>

        {/* Sign In Card */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          <Card className="border-0 shadow-2xl bg-white/90 backdrop-blur-sm">
            <CardHeader className="text-center pb-6">
              <User className="h-16 w-16 mx-auto mb-4 text-brand-500" />
              <CardTitle className="text-2xl">Sign In</CardTitle>
              <CardDescription>
                Enter your credentials to access your account
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-6">
              {/* Google Sign In Button */}
              <motion.div
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
              >
                <Button
                  type="button"
                  variant="outline"
                  className="w-full h-12 border-2 hover:bg-gray-50"
                  onClick={handleGoogleSignIn}
                >
                  <svg
                    className="w-5 h-5 mr-3"
                    viewBox="0 0 24 24"
                    fill="currentColor"
                  >
                    <path d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z" />
                    <path d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z" />
                    <path d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z" />
                    <path d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z" />
                  </svg>
                  Continue with Google
                </Button>
              </motion.div>

              <div className="relative">
                <div className="absolute inset-0 flex items-center">
                  <Separator className="w-full" />
                </div>
                <div className="relative flex justify-center text-xs uppercase">
                  <span className="bg-white px-2 text-gray-500">
                    Or continue with email
                  </span>
                </div>
              </div>

              {/* Sign In Form */}
              <form onSubmit={handleSubmit} className="space-y-4">
                <div>
                  <Label htmlFor="email">Email Address</Label>
                  <div className="relative">
                    <Mail className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-gray-400" />
                    <Input
                      id="email"
                      type="email"
                      value={formData.email}
                      onChange={(e) => updateFormData("email", e.target.value)}
                      placeholder="your.email@example.com"
                      className={`pl-10 ${errors.email ? "border-red-500" : ""}`}
                    />
                  </div>
                  {errors.email && (
                    <p className="text-red-500 text-sm mt-1 flex items-center">
                      <AlertCircle className="h-4 w-4 mr-1" />
                      {errors.email}
                    </p>
                  )}
                </div>

                <div>
                  <Label htmlFor="password">Password</Label>
                  <div className="relative">
                    <Lock className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-gray-400" />
                    <Input
                      id="password"
                      type={showPassword ? "text" : "password"}
                      value={formData.password}
                      onChange={(e) =>
                        updateFormData("password", e.target.value)
                      }
                      placeholder="Enter your password"
                      className={`pl-10 pr-10 ${errors.password ? "border-red-500" : ""}`}
                    />
                    <button
                      type="button"
                      onClick={() => setShowPassword(!showPassword)}
                      className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-400 hover:text-gray-600"
                    >
                      {showPassword ? (
                        <EyeOff className="h-4 w-4" />
                      ) : (
                        <Eye className="h-4 w-4" />
                      )}
                    </button>
                  </div>
                  {errors.password && (
                    <p className="text-red-500 text-sm mt-1 flex items-center">
                      <AlertCircle className="h-4 w-4 mr-1" />
                      {errors.password}
                    </p>
                  )}
                </div>

                <div className="flex items-center justify-between text-sm">
                  <label className="flex items-center space-x-2 cursor-pointer">
                    <input
                      type="checkbox"
                      className="rounded border-gray-300 text-brand-600 focus:ring-brand-500"
                    />
                    <span className="text-gray-600">Remember me</span>
                  </label>
                  <a
                    href="#"
                    className="text-brand-600 hover:text-brand-700 font-medium"
                  >
                    Forgot password?
                  </a>
                </div>

                <motion.div
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  className="pt-2"
                >
                  <Button
                    type="submit"
                    size="lg"
                    disabled={isSubmitting}
                    className="w-full bg-gradient-to-r from-brand-500 to-purple-600 hover:from-brand-600 hover:to-purple-700 shadow-xl hover:shadow-2xl transition-all duration-300"
                  >
                    {isSubmitting ? (
                      <div className="flex items-center">
                        <div className="animate-spin rounded-full h-5 w-5 border-b-2 border-white mr-2"></div>
                        Signing In...
                      </div>
                    ) : (
                      <>
                        Sign In
                        <ArrowRight className="ml-2 h-4 w-4" />
                      </>
                    )}
                  </Button>
                </motion.div>
              </form>

              {/* Sign Up Links */}
              <div className="text-center pt-6 border-t space-y-2">
                <p className="text-sm text-gray-600">Don't have an account?</p>
                <div className="flex flex-col sm:flex-row gap-2 justify-center">
                  <Link to="/client-signup">
                    <Button
                      variant="ghost"
                      size="sm"
                      className="text-brand-600 hover:text-brand-700 hover:bg-brand-50"
                    >
                      Sign up as Client
                    </Button>
                  </Link>
                  <Link to="/worker-signup">
                    <Button
                      variant="ghost"
                      size="sm"
                      className="text-purple-600 hover:text-purple-700 hover:bg-purple-50"
                    >
                      Sign up as Professional
                    </Button>
                  </Link>
                </div>
              </div>

              {/* Back to Home */}
              <div className="text-center">
                <Link to="/">
                  <Button
                    variant="outline"
                    size="sm"
                    className="border-brand-200 hover:bg-brand-50"
                  >
                    ← Back to Home
                  </Button>
                </Link>
              </div>
            </CardContent>
          </Card>
        </motion.div>

        {/* Features */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="mt-8 text-center"
        >
          <div className="grid grid-cols-2 gap-4 text-sm text-gray-600">
            <div className="flex items-center justify-center space-x-2">
              <div className="w-2 h-2 bg-green-500 rounded-full"></div>
              <span>Secure Login</span>
            </div>
            <div className="flex items-center justify-center space-x-2">
              <div className="w-2 h-2 bg-blue-500 rounded-full"></div>
              <span>24/7 Support</span>
            </div>
            <div className="flex items-center justify-center space-x-2">
              <div className="w-2 h-2 bg-purple-500 rounded-full"></div>
              <span>AI-Powered Matching</span>
            </div>
            <div className="flex items-center justify-center space-x-2">
              <div className="w-2 h-2 bg-brand-500 rounded-full"></div>
              <span>Trusted Platform</span>
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  );
}
