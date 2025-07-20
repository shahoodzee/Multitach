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
              <CardContent className="p-8">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                  {taskSteps.map((step, index) => {
                    const Icon = step.icon;
                    return (
                      <motion.div
                        key={step.id}
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: index * 0.1 }}
                        className="relative"
                      >
                        <div
                          className={`p-6 rounded-xl border-2 transition-all duration-300 ${
                            step.status === "completed"
                              ? "bg-green-50 border-green-200 shadow-sm"
                              : step.status === "current"
                                ? "bg-orange-50 border-orange-200 shadow-lg ring-2 ring-orange-100"
                                : "bg-gray-50 border-gray-200"
                          }`}
                        >
                          <div className="flex items-start space-x-4">
                            <div
                              className={`w-12 h-12 rounded-xl flex items-center justify-center ${
                                step.status === "completed"
                                  ? "bg-green-100 text-green-600"
                                  : step.status === "current"
                                    ? "bg-orange-100 text-orange-600"
                                    : "bg-gray-100 text-gray-400"
                              }`}
                            >
                              <Icon className="h-6 w-6" />
                            </div>
                            <div className="flex-1 min-w-0">
                              <div className="flex items-center space-x-2 mb-2">
                                <h4
                                  className={`font-semibold ${
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
                                  <CheckCircle className="h-5 w-5 text-green-500" />
                                )}
                                {step.status === "current" && (
                                  <div className="w-2 h-2 bg-orange-500 rounded-full animate-pulse" />
                                )}
                              </div>
                              <p className="text-sm text-gray-600 leading-relaxed">
                                {step.description}
                              </p>
                              {step.timestamp && (
                                <div className="mt-3 text-xs text-gray-500">
                                  Completed at{" "}
                                  {step.timestamp.toLocaleTimeString()}
                                </div>
                              )}
                            </div>
                          </div>
                        </div>
                        {step.status === "current" && (
                          <motion.div
                            className="absolute -inset-0.5 rounded-xl bg-gradient-to-r from-orange-400 to-orange-600 opacity-20 blur-sm"
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
          <div className="grid grid-cols-1 lg:grid-cols-4 gap-6">
            {/* Time Elapsed with Clock */}
            <motion.div variants={fadeInUp} className="lg:col-span-1">
              <Card className="border-0 shadow-lg bg-white h-full">
                <CardHeader className="text-center">
                  <CardTitle className="text-lg text-gray-900">
                    Task Timer
                  </CardTitle>
                  <CardDescription>Live tracking since initiation</CardDescription>
                </CardHeader>
                <CardContent className="flex items-center justify-center">
                  <ClockComponent startTime={mockTask.initiatedAt} size="medium" />
                </CardContent>
              </Card>
            </motion.div>

            {/* Task Stats */}
            <motion.div variants={fadeInUp} className="lg:col-span-2">
              <div className="grid grid-cols-2 gap-4 h-full">
                {/* Current Step */}
                <Card className="border-0 shadow-lg bg-white">
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
                    <p className="text-sm text-gray-500 mt-1">
                      Worker Confirmation
                    </p>
                    <div className="mt-3">
                      <Progress value={(mockTask.currentStep / taskSteps.length) * 100} className="h-2" />
                    </div>
                  </CardContent>
                </Card>

                {/* Budget */}
                <Card className="border-0 shadow-lg bg-white">
                  <CardHeader className="flex flex-row items-center justify-between pb-2">
                    <CardTitle className="text-sm font-medium text-gray-600">
                      Service Budget
                    </CardTitle>
                    <DollarSign className="h-4 w-4 text-green-500" />
                  </CardHeader>
                  <CardContent>
                    <div className="text-2xl font-bold text-green-600">
                      ${mockTask.budget}
                    </div>
                    <p className="text-sm text-gray-500 mt-1">Estimated cost</p>
                    <div className="mt-3 flex items-center text-xs text-green-600">
                      <TrendingUp className="h-3 w-3 mr-1" />
                      Fair market price
                    </div>
                  </CardContent>
                </Card>

                {/* Estimated Completion */}
                <Card className="border-0 shadow-lg bg-white">
                  <CardHeader className="flex flex-row items-center justify-between pb-2">
                    <CardTitle className="text-sm font-medium text-gray-600">
                      Completion ETA
                    </CardTitle>
                    <Clock className="h-4 w-4 text-blue-500" />
                  </CardHeader>
                  <CardContent>
                    <div className="text-lg font-bold text-blue-600">
                      Tomorrow
                    </div>
                    <p className="text-sm text-gray-500 mt-1">
                      {mockTask.estimatedCompletion.toLocaleDateString()}
                    </p>
                    <div className="text-xs text-gray-500 mt-1">
                      {mockTask.estimatedCompletion.toLocaleTimeString()}
                    </div>
                  </CardContent>
                </Card>

                {/* Service Rating */}
                <Card className="border-0 shadow-lg bg-white">
                  <CardHeader className="flex flex-row items-center justify-between pb-2">
                    <CardTitle className="text-sm font-medium text-gray-600">
                      Service Quality
                    </CardTitle>
                    <Award className="h-4 w-4 text-yellow-500" />
                  </CardHeader>
                  <CardContent>
                    <div className="text-2xl font-bold text-yellow-600">
                      4.8★
                    </div>
                    <p className="text-sm text-gray-500 mt-1">Average rating</p>
                    <div className="mt-3 flex items-center text-xs text-yellow-600">
                      <Users className="h-3 w-3 mr-1" />
                      Verified professional
                    </div>
                  </CardContent>
                </Card>
              </div>
            </motion.div>

            {/* Worker Information */}
            <motion.div variants={fadeInUp} className="lg:col-span-1">
              <Card className="border-0 shadow-lg bg-white h-full">
                <CardHeader>
                  <CardTitle className="text-lg text-gray-900">
                    Assigned Professional
                  </CardTitle>
                  <CardDescription>Your service provider</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="flex items-center space-x-3 mb-6">
                    <Avatar className="h-14 w-14">
                      <AvatarImage src="" alt={mockTask.worker.name} />
                      <AvatarFallback className="bg-brand-100 text-brand-700 text-lg font-semibold">
                        {mockTask.worker.name
                          .split(" ")
                          .map((n) => n[0])
                          .join("")}
                      </AvatarFallback>
                    </Avatar>
                    <div>
                      <h4 className="font-semibold text-gray-900 text-lg">
                        {mockTask.worker.name}
                      </h4>
                      <div className="flex items-center mt-1">
                        <Star className="h-4 w-4 text-yellow-400 fill-current" />
                        <span className="text-sm text-gray-600 ml-1">
                          {mockTask.worker.rating} • {mockTask.worker.experience}
                        </span>
                      </div>
                    </div>
                  </div>

                  <div className="space-y-3 mb-6">
                    <div className="flex items-center text-sm">
                      <Phone className="h-4 w-4 text-gray-400 mr-3" />
                      <span className="text-gray-900">{mockTask.worker.phone}</span>
                    </div>
                    <div className="flex items-center text-sm">
                      <Mail className="h-4 w-4 text-gray-400 mr-3" />
                      <span className="text-gray-900">{mockTask.worker.email}</span>
                    </div>
                    <div className="flex items-center text-sm">
                      <Wrench className="h-4 w-4 text-gray-400 mr-3" />
                      <span className="text-gray-900">
                        {mockTask.worker.specialization} Specialist
                      </span>
                    </div>
                    <div className="flex items-center text-sm">
                      <MapPin className="h-4 w-4 text-gray-400 mr-3" />
                      <span className="text-gray-900">{mockTask.location}</span>
                    </div>
                  </div>

                  <div className="space-y-3">
                    <Button className="w-full bg-brand-500 hover:bg-brand-600 text-white">
                      <Phone className="h-4 w-4 mr-2" />
                      Call Professional
                    </Button>
                    <Button variant="outline" className="w-full border-brand-200 hover:bg-brand-50">
                      <MessageCircle className="h-4 w-4 mr-2" />
                      Send Message
                    </Button>
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          </div>
        </div>
      </div>
    </Sidebar>
  );
}
