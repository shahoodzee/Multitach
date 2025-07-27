import { useState } from "react";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Textarea } from "@/components/ui/textarea";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import {
  MessageSquare,
  CheckCircle,
  Star,
  User,
  Calendar,
  MapPin,
  Edit3,
  Clock,
  ChevronLeft,
  ChevronRight,
} from "lucide-react";
import { motion } from "framer-motion";
import Sidebar from "@/components/Sidebar";
import Navbar from "@/components/Navbar";

interface Task {
  id: number;
  title: string;
  category: string;
  description: string;
  workerName: string;
  workerSpecialization: string;
  completedDate: Date;
  location: string;
  duration: string;
  hasFeedback: boolean;
  feedback?: {
    rating: number;
    comment: string;
    submittedDate: Date;
  };
}

const mockCompletedTasks: Task[] = [
  {
    id: 1,
    title: "Kitchen Sink Repair",
    category: "Plumbing",
    description: "Fix leaking kitchen sink and replace faulty pipes",
    workerName: "Ahmed Khan",
    workerSpecialization: "Plumbing Specialist",
    completedDate: new Date("2024-01-15"),
    location: "Downtown Area",
    duration: "2 hours",
    hasFeedback: true,
    feedback: {
      rating: 5,
      comment: "Excellent work! Ahmed was very professional and completed the job efficiently. The sink works perfectly now and he cleaned up after himself. Highly recommend!",
      submittedDate: new Date("2024-01-15"),
    },
  },
  {
    id: 2,
    title: "Air Conditioning Service",
    category: "HVAC",
    description: "Annual AC maintenance and filter replacement",
    workerName: "Sarah Ahmed",
    workerSpecialization: "HVAC Technician",
    completedDate: new Date("2024-01-10"),
    location: "North City",
    duration: "1.5 hours",
    hasFeedback: false,
  },
  {
    id: 3,
    title: "Electrical Outlet Installation",
    category: "Electrical",
    description: "Install new electrical outlets in the bedroom",
    workerName: "Muhammad Ali",
    workerSpecialization: "Licensed Electrician",
    completedDate: new Date("2024-01-08"),
    location: "East District",
    duration: "3 hours",
    hasFeedback: true,
    feedback: {
      rating: 4,
      comment: "Good work overall. Muhammad was punctual and knew what he was doing. The outlets work perfectly. Only minor issue was that he took a bit longer than expected, but the quality was good.",
      submittedDate: new Date("2024-01-08"),
    },
  },
  {
    id: 4,
    title: "Bathroom Tile Repair",
    category: "Home Repair",
    description: "Replace damaged bathroom tiles and re-grout",
    workerName: "Fatima Sheikh",
    workerSpecialization: "Tile & Flooring Expert",
    completedDate: new Date("2024-01-05"),
    location: "South Zone",
    duration: "4 hours",
    hasFeedback: false,
  },
  {
    id: 5,
    title: "Living Room Painting",
    category: "Painting",
    description: "Paint living room walls with premium paint",
    workerName: "Omar Hassan",
    workerSpecialization: "Professional Painter",
    completedDate: new Date("2024-01-03"),
    location: "Central District",
    duration: "6 hours",
    hasFeedback: false,
  },
];

export default function Feedbacks() {
  const [selectedTask, setSelectedTask] = useState<Task | null>(null);
  const [feedbackText, setFeedbackText] = useState("");
  const [rating, setRating] = useState(0);
  const [isSubmitting, setIsSubmitting] = useState(false);

  // Pagination for Pending Feedbacks
  const PENDING_PER_PAGE = 3;
  const [pendingCurrentPage, setPendingCurrentPage] = useState(1);

  // Pagination for Completed Feedbacks
  const COMPLETED_PER_PAGE = 3;
  const [completedCurrentPage, setCompletedCurrentPage] = useState(1);

  const handleSubmitFeedback = async () => {
    if (!selectedTask || !feedbackText.trim() || rating === 0) return;

    setIsSubmitting(true);

    // Simulate API call
    await new Promise(resolve => setTimeout(resolve, 1000));

    // Update task with feedback (in a real app, this would be handled by state management)
    const taskIndex = mockCompletedTasks.findIndex(t => t.id === selectedTask.id);
    if (taskIndex !== -1) {
      mockCompletedTasks[taskIndex] = {
        ...selectedTask,
        hasFeedback: true,
        feedback: {
          rating,
          comment: feedbackText,
          submittedDate: new Date(),
        },
      };
    }

    setIsSubmitting(false);
    setSelectedTask(null);
    setFeedbackText("");
    setRating(0);

    // Show success message
    alert("Feedback submitted successfully!");
  };

  const handleEditFeedback = (task: Task) => {
    setSelectedTask(task);
    setFeedbackText(task.feedback?.comment || "");
    setRating(task.feedback?.rating || 0);
  };

  const pendingFeedbacks = mockCompletedTasks.filter(task => !task.hasFeedback);
  const completedFeedbacks = mockCompletedTasks.filter(task => task.hasFeedback);

  // Pagination calculations for Pending Feedbacks
  const pendingTotalPages = Math.ceil(pendingFeedbacks.length / PENDING_PER_PAGE);
  const pendingStartIndex = (pendingCurrentPage - 1) * PENDING_PER_PAGE;
  const pendingEndIndex = pendingStartIndex + PENDING_PER_PAGE;
  const currentPendingFeedbacks = pendingFeedbacks.slice(pendingStartIndex, pendingEndIndex);

  // Pagination calculations for Completed Feedbacks
  const completedTotalPages = Math.ceil(completedFeedbacks.length / COMPLETED_PER_PAGE);
  const completedStartIndex = (completedCurrentPage - 1) * COMPLETED_PER_PAGE;
  const completedEndIndex = completedStartIndex + COMPLETED_PER_PAGE;
  const currentCompletedFeedbacks = completedFeedbacks.slice(completedStartIndex, completedEndIndex);

  // Pagination functions for Pending Feedbacks
  const goToPendingPage = (page: number) => {
    setPendingCurrentPage(page);
  };

  const goToPendingPrevPage = () => {
    setPendingCurrentPage(prev => Math.max(prev - 1, 1));
  };

  const goToPendingNextPage = () => {
    setPendingCurrentPage(prev => Math.min(prev + 1, pendingTotalPages));
  };

  // Pagination functions for Completed Feedbacks
  const goToCompletedPage = (page: number) => {
    setCompletedCurrentPage(page);
  };

  const goToCompletedPrevPage = () => {
    setCompletedCurrentPage(prev => Math.max(prev - 1, 1));
  };

  const goToCompletedNextPage = () => {
    setCompletedCurrentPage(prev => Math.min(prev + 1, completedTotalPages));
  };

  return (
    <Sidebar>
      <div className="min-h-screen bg-gradient-to-br from-gray-50 to-slate-100">
        <Navbar />

        {/* Header */}
        <div className="bg-white border-b border-gray-200">
          <div className="px-6 py-6">
            <div className="flex items-center justify-between">
              <div>
                <h1 className="text-2xl font-bold text-gray-900">Task Feedbacks</h1>
                <p className="text-gray-600 mt-1">
                  Provide feedback for your completed maintenance tasks
                </p>
              </div>
              <div className="flex items-center space-x-4">
                <Badge variant="destructive" className="px-3 py-1">
                  {pendingFeedbacks.length} pending
                </Badge>
                <Badge variant="default" className="px-3 py-1 bg-green-500">
                  {completedFeedbacks.length} completed
                </Badge>
              </div>
            </div>
          </div>
        </div>

        <div className="p-6 space-y-8">
          {/* Pending Feedbacks Section */}
          {pendingFeedbacks.length > 0 && (
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
            >
              <div className="mb-6">
                <div className="flex items-center justify-between">
                  <div>
                    <h2 className="text-xl font-semibold text-gray-900 mb-2">
                      Pending Feedbacks
                    </h2>
                    <p className="text-gray-600">
                      Tasks completed but awaiting your feedback
                    </p>
                  </div>
                  <Badge variant="secondary" className="px-3 py-1">
                    {pendingFeedbacks.length} total
                  </Badge>
                </div>
              </div>

              <div className="space-y-4">
                {currentPendingFeedbacks.map((task, index) => (
                  <motion.div
                    key={task.id}
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: index * 0.1 }}
                  >
                    <Card className="border-0 shadow-lg bg-white hover:shadow-xl transition-all duration-300">
                      <CardContent className="p-6">
                        <div className="flex items-center justify-between">
                          <div className="flex-1">
                            <div className="flex items-start space-x-4">
                              <Avatar className="h-12 w-12">
                                <AvatarImage src="" alt={task.workerName} />
                                <AvatarFallback className="bg-brand-100 text-brand-700">
                                  {task.workerName.split(" ").map(n => n[0]).join("")}
                                </AvatarFallback>
                              </Avatar>

                              <div className="flex-1">
                                <div className="flex items-center justify-between mb-2">
                                  <h3 className="text-lg font-semibold text-gray-900">
                                    {task.title}
                                  </h3>
                                  <Badge variant="outline" className="border-orange-200 text-orange-700 bg-orange-50">
                                    Feedback Pending
                                  </Badge>
                                </div>

                                <p className="text-gray-600 mb-3">{task.description}</p>

                                <div className="grid grid-cols-2 md:grid-cols-4 gap-4 text-sm">
                                  <div className="flex items-center text-gray-500">
                                    <User className="h-4 w-4 mr-2" />
                                    <div>
                                      <div className="font-medium text-gray-900">{task.workerName}</div>
                                      <div>{task.workerSpecialization}</div>
                                    </div>
                                  </div>

                                  <div className="flex items-center text-gray-500">
                                    <Calendar className="h-4 w-4 mr-2" />
                                    <div>
                                      <div className="font-medium text-gray-900">Completed</div>
                                      <div>{task.completedDate.toLocaleDateString()}</div>
                                    </div>
                                  </div>

                                  <div className="flex items-center text-gray-500">
                                    <MapPin className="h-4 w-4 mr-2" />
                                    <div>
                                      <div className="font-medium text-gray-900">Location</div>
                                      <div>{task.location}</div>
                                    </div>
                                  </div>

                                  <div className="flex items-center text-gray-500">
                                    <Clock className="h-4 w-4 mr-2" />
                                    <div>
                                      <div className="font-medium text-gray-900">Duration</div>
                                      <div>{task.duration}</div>
                                    </div>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>

                          <div className="ml-6">
                            <Dialog>
                              <DialogTrigger asChild>
                                <Button
                                  onClick={() => setSelectedTask(task)}
                                  className="bg-brand-500 hover:bg-brand-600"
                                >
                                  <MessageSquare className="h-4 w-4 mr-2" />
                                  Give Feedback
                                </Button>
                              </DialogTrigger>
                              <DialogContent className="sm:max-w-[500px]">
                                <DialogHeader>
                                  <DialogTitle>Provide Feedback</DialogTitle>
                                  <DialogDescription>
                                    Share your experience with {task.workerName} for "{task.title}"
                                  </DialogDescription>
                                </DialogHeader>

                                <div className="space-y-4 py-4">
                                  {/* Rating */}
                                  <div>
                                    <label className="text-sm font-medium text-gray-700 mb-2 block">
                                      Rating
                                    </label>
                                    <div className="flex items-center space-x-1">
                                      {[1, 2, 3, 4, 5].map((star) => (
                                        <button
                                          key={star}
                                          onClick={() => setRating(star)}
                                          className="focus:outline-none"
                                        >
                                          <Star
                                            className={`h-6 w-6 ${
                                              star <= rating
                                                ? "text-yellow-400 fill-current"
                                                : "text-gray-300"
                                            }`}
                                          />
                                        </button>
                                      ))}
                                      <span className="ml-2 text-sm text-gray-600">
                                        ({rating}/5)
                                      </span>
                                    </div>
                                  </div>

                                  {/* Feedback Text */}
                                  <div>
                                    <label className="text-sm font-medium text-gray-700 mb-2 block">
                                      Your Feedback
                                    </label>
                                    <Textarea
                                      placeholder="Write your detailed feedback about the worker's performance, quality of work, punctuality, professionalism, etc."
                                      value={feedbackText}
                                      onChange={(e) => setFeedbackText(e.target.value)}
                                      className="min-h-[120px] resize-none"
                                    />
                                  </div>
                                </div>

                                <DialogFooter>
                                  <Button
                                    variant="outline"
                                    onClick={() => {
                                      setSelectedTask(null);
                                      setFeedbackText("");
                                      setRating(0);
                                    }}
                                  >
                                    Cancel
                                  </Button>
                                  <Button
                                    onClick={handleSubmitFeedback}
                                    disabled={!feedbackText.trim() || rating === 0 || isSubmitting}
                                    className="bg-brand-500 hover:bg-brand-600"
                                  >
                                    {isSubmitting ? "Submitting..." : "Submit Feedback"}
                                  </Button>
                                </DialogFooter>
                              </DialogContent>
                            </Dialog>
                          </div>
                        </div>
                      </CardContent>
                    </Card>
                  </motion.div>
                ))}
              </div>

              {/* Pagination for Pending Feedbacks */}
              {pendingTotalPages > 1 && (
                <div className="flex items-center justify-center mt-6 space-x-2">
                  <Button
                    variant="outline"
                    onClick={goToPendingPrevPage}
                    disabled={pendingCurrentPage === 1}
                    className="flex items-center"
                  >
                    <ChevronLeft className="h-4 w-4 mr-1" />
                    Previous
                  </Button>

                  <div className="flex items-center space-x-1">
                    {Array.from({ length: pendingTotalPages }, (_, i) => i + 1).map((page) => (
                      <Button
                        key={page}
                        variant={pendingCurrentPage === page ? "default" : "outline"}
                        onClick={() => goToPendingPage(page)}
                        className={`w-10 h-10 ${
                          pendingCurrentPage === page
                            ? "bg-brand-500 hover:bg-brand-600"
                            : ""
                        }`}
                      >
                        {page}
                      </Button>
                    ))}
                  </div>

                  <Button
                    variant="outline"
                    onClick={goToPendingNextPage}
                    disabled={pendingCurrentPage === pendingTotalPages}
                    className="flex items-center"
                  >
                    Next
                    <ChevronRight className="h-4 w-4 ml-1" />
                  </Button>
                </div>
              )}
            </motion.div>
          )}

          {/* Completed Feedbacks Section */}
          {completedFeedbacks.length > 0 && (
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              <div className="mb-6">
                <div className="flex items-center justify-between">
                  <div>
                    <h2 className="text-xl font-semibold text-gray-900 mb-2">
                      Completed Feedbacks
                    </h2>
                    <p className="text-gray-600">
                      Your submitted feedback for completed tasks
                    </p>
                  </div>
                  <Badge variant="default" className="px-3 py-1 bg-green-500">
                    {completedFeedbacks.length} total
                  </Badge>
                </div>
              </div>

              <div className="space-y-4">
                {currentCompletedFeedbacks.map((task, index) => (
                  <motion.div
                    key={task.id}
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: index * 0.1 }}
                  >
                    <Card className="border-0 shadow-lg bg-white">
                      <CardContent className="p-6">
                        <div className="flex items-start justify-between mb-4">
                          <div className="flex items-center space-x-3">
                            <CheckCircle className="h-5 w-5 text-green-500" />
                            <h3 className="text-lg font-semibold text-gray-900">
                              {task.title}
                            </h3>
                          </div>
                          <div className="flex items-center space-x-2">
                            <Badge variant="default" className="bg-green-500">
                              Feedback Completed
                            </Badge>
                            <Button
                              variant="ghost"
                              size="sm"
                              onClick={() => handleEditFeedback(task)}
                            >
                              <Edit3 className="h-4 w-4" />
                            </Button>
                          </div>
                        </div>

                        <div className="flex items-start space-x-4">
                          <Avatar className="h-10 w-10">
                            <AvatarImage src="" alt={task.workerName} />
                            <AvatarFallback className="bg-brand-100 text-brand-700">
                              {task.workerName.split(" ").map(n => n[0]).join("")}
                            </AvatarFallback>
                          </Avatar>

                          <div className="flex-1">
                            <div className="flex items-center space-x-2 mb-2">
                              <span className="font-medium text-gray-900">{task.workerName}</span>
                              <span className="text-gray-500">•</span>
                              <span className="text-gray-600">{task.workerSpecialization}</span>
                              <span className="text-gray-500">•</span>
                              <span className="text-gray-600">Completed {task.completedDate.toLocaleDateString()}</span>
                            </div>

                            {task.feedback && (
                              <div className="bg-gray-50 rounded-lg p-4 mt-3">
                                <div className="flex items-center space-x-2 mb-2">
                                  <div className="flex items-center">
                                    {[1, 2, 3, 4, 5].map((star) => (
                                      <Star
                                        key={star}
                                        className={`h-4 w-4 ${
                                          star <= task.feedback!.rating
                                            ? "text-yellow-400 fill-current"
                                            : "text-gray-300"
                                        }`}
                                      />
                                    ))}
                                  </div>
                                  <span className="text-sm text-gray-600">
                                    ({task.feedback.rating}/5)
                                  </span>
                                  <span className="text-gray-500">•</span>
                                  <span className="text-sm text-gray-500">
                                    {task.feedback.submittedDate.toLocaleDateString()}
                                  </span>
                                </div>
                                <p className="text-gray-700 leading-relaxed">
                                  {task.feedback.comment}
                                </p>
                              </div>
                            )}
                          </div>
                        </div>
                      </CardContent>
                    </Card>
                  </motion.div>
                ))}
              </div>

              {/* Pagination for Completed Feedbacks */}
              {completedTotalPages > 1 && (
                <div className="flex items-center justify-center mt-6 space-x-2">
                  <Button
                    variant="outline"
                    onClick={goToCompletedPrevPage}
                    disabled={completedCurrentPage === 1}
                    className="flex items-center"
                  >
                    <ChevronLeft className="h-4 w-4 mr-1" />
                    Previous
                  </Button>

                  <div className="flex items-center space-x-1">
                    {Array.from({ length: completedTotalPages }, (_, i) => i + 1).map((page) => (
                      <Button
                        key={page}
                        variant={completedCurrentPage === page ? "default" : "outline"}
                        onClick={() => goToCompletedPage(page)}
                        className={`w-10 h-10 ${
                          completedCurrentPage === page
                            ? "bg-brand-500 hover:bg-brand-600"
                            : ""
                        }`}
                      >
                        {page}
                      </Button>
                    ))}
                  </div>

                  <Button
                    variant="outline"
                    onClick={goToCompletedNextPage}
                    disabled={completedCurrentPage === completedTotalPages}
                    className="flex items-center"
                  >
                    Next
                    <ChevronRight className="h-4 w-4 ml-1" />
                  </Button>
                </div>
              )}
            </motion.div>
          )}

          {/* Empty State */}
          {mockCompletedTasks.length === 0 && (
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="text-center py-12"
            >
              <MessageSquare className="h-16 w-16 mx-auto text-gray-400 mb-4" />
              <h3 className="text-xl font-medium text-gray-900 mb-2">
                No Completed Tasks Yet
              </h3>
              <p className="text-gray-600 max-w-md mx-auto">
                Once you complete tasks with our professionals, you'll be able to provide feedback here.
              </p>
            </motion.div>
          )}
        </div>
      </div>
    </Sidebar>
  );
}
