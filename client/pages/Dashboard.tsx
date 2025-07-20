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
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import {
  Wrench,
  CheckCircle,
  Search,
  Calendar,
  CreditCard,
  MessageCircle,
  Phone,
  Mail,
  MapPin,
  Star,
  DollarSign,
  Clock,
  TrendingUp,
  Users,
  Award,
} from "lucide-react";
import { motion } from "framer-motion";
import Sidebar from "@/components/Sidebar";
import ClockComponent from "@/components/Clock";

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
    description: "Your service request has been submitted successfully",
    icon: CheckCircle,
    status: "completed",
    timestamp: new Date(Date.now() - 2 * 60 * 60 * 1000),
  },
  {
    id: 2,
    title: "Finding Workers",
    description: "AI is matching you with suitable professionals in your area",
    icon: Search,
    status: "completed",
    timestamp: new Date(Date.now() - 90 * 60 * 1000),
  },
  {
    id: 3,
    title: "Worker Confirmation",
    description: "Confirming worker availability and scheduling appointment",
    icon: Calendar,
    status: "current",
    timestamp: null,
  },
  {
    id: 4,
    title: "Task in Progress",
    description: "Professional is working on your maintenance task",
    icon: Wrench,
    status: "pending",
    timestamp: null,
  },
  {
    id: 5,
    title: "Payment",
    description: "Complete secure payment for the completed service",
    icon: CreditCard,
    status: "pending",
    timestamp: null,
  },
  {
    id: 6,
    title: "Feedback",
    description: "Rate your experience and provide valuable feedback",
    icon: MessageCircle,
    status: "pending",
    timestamp: null,
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

  return (
    <Sidebar>
      <div className="min-h-screen bg-gradient-to-br from-gray-50 to-slate-100">
        {/* Header */}
        <div className="bg-white border-b border-gray-200">
          <div className="px-6 py-6">
            <div className="flex items-center justify-between">
              <div>
                <h1 className="text-2xl font-bold text-gray-900">Dashboard</h1>
                <p className="text-gray-600 mt-1">
                  Track your service request progress - Task #{mockTask.id}
                </p>
              </div>
              <div className="flex items-center space-x-3">
                <Badge
                  variant="secondary"
                  className="bg-orange-100 text-orange-700 px-3 py-1"
                >
                  {mockTask.urgency} Priority
                </Badge>
                <Badge
                  variant="outline"
                  className="border-green-200 text-green-700"
                >
                  Active Task
                </Badge>
              </div>
            </div>
          </div>
        </div>

        <div className="p-6 space-y-8">
          {/* Task Progress Section - Full Width */}
          <motion.div
            initial="initial"
            animate="animate"
            variants={fadeInUp}
            className="w-full"
          >
            <Card className="border-0 shadow-xl bg-white">
              <CardHeader className="border-b border-gray-100">
                <div className="flex items-center justify-between">
                  <div>
                    <CardTitle className="text-xl text-gray-900">
                      {mockTask.title}
                    </CardTitle>
                    <CardDescription className="text-base text-gray-600 mt-1">
                      {mockTask.category} • {mockTask.description}
                    </CardDescription>
                  </div>
                  <div className="text-right">
                    <div className="text-sm text-gray-500 mb-1">
                      Overall Progress
                    </div>
                    <div className="text-2xl font-bold text-brand-600">
                      {Math.round(getStepProgress())}%
                    </div>
                  </div>
                </div>
                <div className="mt-6">
                  <Progress value={getStepProgress()} className="h-3" />
                </div>
              </CardHeader>
              <CardContent className="p-6">
                <div className="grid grid-cols-6 gap-4">
                  {taskSteps.map((step, index) => {
                    const Icon = step.icon;
                    return (
                      <motion.div
                        key={step.id}
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: index * 0.05 }}
                        className="relative"
                      >
                        <div
                          className={`p-4 rounded-lg border-2 transition-all duration-300 text-center ${
                            step.status === "completed"
                              ? "bg-green-50 border-green-200 shadow-sm"
                              : step.status === "current"
                                ? "bg-orange-50 border-orange-200 shadow-lg ring-2 ring-orange-100"
                                : "bg-gray-50 border-gray-200"
                          }`}
                        >
                          <div className="flex flex-col items-center space-y-3">
                            <div
                              className={`w-10 h-10 rounded-lg flex items-center justify-center ${
                                step.status === "completed"
                                  ? "bg-green-100 text-green-600"
                                  : step.status === "current"
                                    ? "bg-orange-100 text-orange-600"
                                    : "bg-gray-100 text-gray-400"
                              }`}
                            >
                              <Icon className="h-5 w-5" />
                            </div>
                            <div className="min-w-0">
                              <div className="flex items-center justify-center space-x-1 mb-1">
                                <h4
                                  className={`text-sm font-semibold ${
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
                                  <div className="w-1.5 h-1.5 bg-orange-500 rounded-full animate-pulse" />
                                )}
                              </div>
                              <p className="text-xs text-gray-600 leading-relaxed">
                                {step.description.length > 50
                                  ? step.description.substring(0, 50) + "..."
                                  : step.description}
                              </p>
                              {step.timestamp && (
                                <div className="mt-2 text-xs text-gray-500">
                                  {step.timestamp.toLocaleTimeString()}
                                </div>
                              )}
                            </div>
                          </div>
                        </div>
                        {step.status === "current" && (
                          <motion.div
                            className="absolute -inset-0.5 rounded-lg bg-gradient-to-r from-orange-400 to-orange-600 opacity-20 blur-sm"
                            animate={{ opacity: [0.2, 0.4, 0.2] }}
                            transition={{ duration: 2, repeat: Infinity }}
                          />
                        )}
                      </motion.div>
                    );
                  })}
                </div>
              </CardContent>
            </Card>
          </motion.div>

          {/* Task Stats and Details */}
          <div className="space-y-6">
            {/* Top Row: Stat Cards */}
            <motion.div variants={fadeInUp}>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                {/* Current Step */}
                <Card className="border-0 shadow-lg bg-white">
                  <CardContent className="p-6">
                    <div className="flex items-center justify-between mb-4">
                      <div className="flex items-center space-x-2">
                        <Calendar className="h-5 w-5 text-orange-500" />
                        <span className="text-sm font-medium text-gray-600">Current Step</span>
                      </div>
                      <Badge variant="secondary" className="bg-orange-100 text-orange-700">
                        Active
                      </Badge>
                    </div>
                    <div className="text-3xl font-bold text-orange-600 mb-2">
                      {mockTask.currentStep} of {taskSteps.length}
                    </div>
                    <p className="text-sm text-gray-500 mb-3">
                      Worker Confirmation
                    </p>
                    <Progress value={(mockTask.currentStep / taskSteps.length) * 100} className="h-2" />
                  </CardContent>
                </Card>

                {/* Budget */}
                <Card className="border-0 shadow-lg bg-white">
                  <CardContent className="p-6">
                    <div className="flex items-center justify-between mb-4">
                      <div className="flex items-center space-x-2">
                        <DollarSign className="h-5 w-5 text-green-500" />
                        <span className="text-sm font-medium text-gray-600">Service Budget</span>
                      </div>
                      <Badge variant="secondary" className="bg-green-100 text-green-700">
                        Approved
                      </Badge>
                    </div>
                    <div className="text-3xl font-bold text-green-600 mb-2">
                      ${mockTask.budget}
                    </div>
                    <p className="text-sm text-gray-500 mb-3">Estimated cost</p>
                    <div className="flex items-center text-xs text-green-600">
                      <TrendingUp className="h-3 w-3 mr-1" />
                      Fair market price
                    </div>
                  </CardContent>
                </Card>

                {/* Service Rating */}
                <Card className="border-0 shadow-lg bg-white">
                  <CardContent className="p-6">
                    <div className="flex items-center justify-between mb-4">
                      <div className="flex items-center space-x-2">
                        <Award className="h-5 w-5 text-yellow-500" />
                        <span className="text-sm font-medium text-gray-600">Service Quality</span>
                      </div>
                      <Badge variant="secondary" className="bg-yellow-100 text-yellow-700">
                        Excellent
                      </Badge>
                    </div>
                    <div className="text-3xl font-bold text-yellow-600 mb-2">
                      4.8★
                    </div>
                    <p className="text-sm text-gray-500 mb-3">Average rating</p>
                    <div className="flex items-center text-xs text-yellow-600">
                      <Users className="h-3 w-3 mr-1" />
                      Verified professional
                    </div>
                  </CardContent>
                </Card>
              </div>
            </motion.div>

            {/* Bottom Row: Timer and Worker Info */}
            <motion.div variants={fadeInUp}>
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
                {/* Task Timer */}
                <Card className="border-0 shadow-lg bg-white">
                  <CardHeader className="text-center border-b border-gray-100">
                    <div className="flex items-center justify-center space-x-2 mb-2">
                      <Clock className="h-6 w-6 text-brand-500" />
                      <CardTitle className="text-xl text-gray-900">
                        Task Timer
                      </CardTitle>
                    </div>
                    <CardDescription>Live tracking since task initiation</CardDescription>
                  </CardHeader>
                  <CardContent className="flex items-center justify-center py-8">
                    <ClockComponent startTime={mockTask.initiatedAt} size="medium" />
                  </CardContent>
                </Card>

                {/* Assigned Professional */}
                <Card className="border-0 shadow-lg bg-white">
                  <CardHeader className="text-center border-b border-gray-100">
                    <div className="flex items-center justify-center space-x-2 mb-2">
                      <Users className="h-6 w-6 text-brand-500" />
                      <CardTitle className="text-xl text-gray-900">
                        Assigned Professional
                      </CardTitle>
                    </div>
                    <CardDescription>Your dedicated service provider</CardDescription>
                  </CardHeader>
                  <CardContent className="p-6">
                    {/* Professional Profile */}
                    <div className="text-center mb-6">
                      <Avatar className="h-20 w-20 mx-auto mb-4 ring-4 ring-brand-100">
                        <AvatarImage src="" alt={mockTask.worker.name} />
                        <AvatarFallback className="bg-brand-100 text-brand-700 text-xl font-bold">
                          {mockTask.worker.name
                            .split(" ")
                            .map((n) => n[0])
                            .join("")}
                        </AvatarFallback>
                      </Avatar>
                      <h3 className="text-lg font-semibold text-gray-900 mb-1">
                        {mockTask.worker.name}
                      </h3>
                      <p className="text-brand-600 font-medium mb-2">
                        {mockTask.worker.specialization} Specialist
                      </p>
                      <div className="flex items-center justify-center">
                        <div className="flex items-center bg-yellow-50 px-3 py-1 rounded-full">
                          <Star className="h-4 w-4 text-yellow-400 fill-current mr-1" />
                          <span className="text-sm font-semibold text-yellow-700">
                            {mockTask.worker.rating}
                          </span>
                          <span className="text-xs text-yellow-600 ml-1">
                            ({mockTask.worker.experience})
                          </span>
                        </div>
                      </div>
                    </div>

                    {/* Contact Information */}
                    <div className="space-y-3 mb-6">
                      <div className="flex items-center justify-between p-3 bg-gray-50 rounded-lg">
                        <div className="flex items-center">
                          <Phone className="h-4 w-4 text-brand-500 mr-3" />
                          <span className="text-sm font-medium text-gray-700">Phone</span>
                        </div>
                        <span className="text-sm text-gray-900 font-mono">{mockTask.worker.phone}</span>
                      </div>
                      <div className="flex items-center justify-between p-3 bg-gray-50 rounded-lg">
                        <div className="flex items-center">
                          <Mail className="h-4 w-4 text-brand-500 mr-3" />
                          <span className="text-sm font-medium text-gray-700">Email</span>
                        </div>
                        <span className="text-sm text-gray-900">{mockTask.worker.email}</span>
                      </div>
                      <div className="flex items-center justify-between p-3 bg-gray-50 rounded-lg">
                        <div className="flex items-center">
                          <MapPin className="h-4 w-4 text-brand-500 mr-3" />
                          <span className="text-sm font-medium text-gray-700">Location</span>
                        </div>
                        <span className="text-sm text-gray-900">{mockTask.location}</span>
                      </div>
                    </div>

                    {/* Action Buttons */}
                    <div className="space-y-3">
                      <Button className="w-full bg-gradient-to-r from-brand-500 to-brand-600 hover:from-brand-600 hover:to-brand-700 text-white shadow-lg">
                        <Phone className="h-4 w-4 mr-2" />
                        Call Now
                      </Button>
                      <Button variant="outline" className="w-full border-brand-200 hover:bg-brand-50 text-brand-700">
                        <MessageCircle className="h-4 w-4 mr-2" />
                        Send Message
                      </Button>
                    </div>
                  </CardContent>
                </Card>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </Sidebar>
  );
}
