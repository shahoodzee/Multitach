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
import { Textarea } from "@/components/ui/textarea";
import { Badge } from "@/components/ui/badge";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import {
  AlertCircle,
  MapPin,
  Clock,
  FileText,
  Wrench,
  CheckCircle,
  ArrowRight,
  Calendar,
  Users,
} from "lucide-react";
import { motion } from "framer-motion";
import Sidebar from "@/components/Sidebar";
import Navbar from "@/components/Navbar";

interface FormData {
  taskDescription: string;
  detectedCategory: string;
  location: string;
  address: string;
  preferredDate: string;
  preferredTime: string;
  urgency: string;
  budget: string;
  contactMethod: string;
  additionalNotes: string;
}

const initialFormData: FormData = {
  taskDescription: "",
  detectedCategory: "",
  location: "",
  address: "",
  preferredDate: "",
  preferredTime: "",
  urgency: "normal",
  budget: "",
  contactMethod: "phone",
  additionalNotes: "",
};

// Mock AI categories based on keywords
const detectTaskCategory = (description: string): string => {
  const desc = description.toLowerCase();
  
  if (desc.includes("pipe") || desc.includes("sink") || desc.includes("water") || desc.includes("leak") || desc.includes("plumb")) {
    return "Plumbing";
  } else if (desc.includes("electrical") || desc.includes("wire") || desc.includes("light") || desc.includes("power") || desc.includes("socket")) {
    return "Electrical";
  } else if (desc.includes("ac") || desc.includes("air") || desc.includes("heating") || desc.includes("hvac") || desc.includes("cooling")) {
    return "HVAC";
  } else if (desc.includes("carpenter") || desc.includes("wood") || desc.includes("furniture") || desc.includes("cabinet") || desc.includes("door")) {
    return "Carpentry";
  } else if (desc.includes("paint") || desc.includes("wall") || desc.includes("color") || desc.includes("brush")) {
    return "Painting";
  } else if (desc.includes("clean") || desc.includes("tidy") || desc.includes("wash") || desc.includes("dust")) {
    return "Cleaning";
  } else if (desc.includes("garden") || desc.includes("plant") || desc.includes("lawn") || desc.includes("trim")) {
    return "Gardening";
  } else if (desc.includes("appliance") || desc.includes("repair") || desc.includes("fix") || desc.includes("broken")) {
    return "Appliance Repair";
  } else {
    return "General Maintenance";
  }
};

const fadeInUp = {
  initial: { opacity: 0, y: 60 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.6, ease: "easeOut" },
};

export default function TaskPost() {
  const [currentStep, setCurrentStep] = useState(1);
  const [formData, setFormData] = useState<FormData>(initialFormData);
  const [errors, setErrors] = useState<Record<string, string>>({});
  const [isSubmitting, setIsSubmitting] = useState(false);

  const updateFormData = (field: keyof FormData, value: string) => {
    setFormData((prev) => {
      const updated = { ...prev, [field]: value };
      
      // Auto-detect category when description changes
      if (field === "taskDescription" && value.trim()) {
        updated.detectedCategory = detectTaskCategory(value);
      }
      
      return updated;
    });
    
    // Clear error when user starts typing
    if (errors[field]) {
      setErrors((prev) => ({ ...prev, [field]: "" }));
    }
  };

  const validateStep = (step: number): boolean => {
    const newErrors: Record<string, string> = {};

    if (step === 1) {
      if (!formData.taskDescription.trim()) {
        newErrors.taskDescription = "Task description is required";
      } else if (formData.taskDescription.length < 10) {
        newErrors.taskDescription = "Please provide a more detailed description (at least 10 characters)";
      }
    }

    if (step === 2) {
      if (!formData.location.trim()) {
        newErrors.location = "Location is required";
      }
      if (!formData.address.trim()) {
        newErrors.address = "Full address is required";
      }
    }

    if (step === 3) {
      if (!formData.preferredDate) {
        newErrors.preferredDate = "Preferred date is required";
      }
      if (!formData.preferredTime) {
        newErrors.preferredTime = "Preferred time is required";
      }
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleNext = () => {
    if (validateStep(currentStep)) {
      setCurrentStep((prev) => Math.min(prev + 1, 3));
    }
  };

  const handlePrevious = () => {
    setCurrentStep((prev) => Math.max(prev - 1, 1));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!validateStep(3)) return;
    
    setIsSubmitting(true);
    try {
      // Simulate API call
      await new Promise((resolve) => setTimeout(resolve, 2000));
      alert("Task posted successfully! We'll match you with the best professionals.");
      // Reset form or redirect
      setFormData(initialFormData);
      setCurrentStep(1);
    } catch (error) {
      alert("Failed to post task. Please try again.");
    } finally {
      setIsSubmitting(false);
    }
  };

  const steps = [
    {
      number: 1,
      title: "Task Description",
      description: "Tell us what you need done",
      icon: FileText,
    },
    {
      number: 2,
      title: "Location Details",
      description: "Where should the work be done",
      icon: MapPin,
    },
    {
      number: 3,
      title: "Timing & Preferences",
      description: "When do you need it done",
      icon: Clock,
    },
  ];

  return (
    <Sidebar>
      <div className="h-screen bg-gradient-to-br from-gray-50 to-slate-100 overflow-hidden">
        <Navbar />

        {/* Header */}
        <div className="bg-white border-b border-gray-200">
          <div className="px-6 py-3">
            <div className="flex items-center justify-between">
              <div>
                <h1 className="text-xl font-bold text-gray-900">Post a Task</h1>
                <p className="text-gray-600 text-sm">
                  Get connected with skilled professionals for your maintenance needs
                </p>
              </div>
              <Badge variant="secondary" className="px-3 py-1">
                Step {currentStep} of 3
              </Badge>
            </div>
          </div>
        </div>

        <div className="p-4 h-[calc(100vh-140px)] overflow-y-auto">
          <div className="max-w-2xl mx-auto">
            {/* Progress Steps */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="mb-6"
            >
              <div className="flex items-center justify-between">
                {steps.map((step, index) => {
                  const Icon = step.icon;
                  const isActive = currentStep === step.number;
                  const isCompleted = currentStep > step.number;
                  
                  return (
                    <div key={step.number} className="flex items-center flex-1">
                      <div className="flex flex-col items-center">
                        <div
                          className={`w-10 h-10 rounded-full flex items-center justify-center ${
                            isCompleted
                              ? "bg-green-500 text-white"
                              : isActive
                                ? "bg-brand-500 text-white"
                                : "bg-gray-200 text-gray-500"
                          }`}
                        >
                          {isCompleted ? (
                            <CheckCircle className="h-5 w-5" />
                          ) : (
                            <Icon className="h-5 w-5" />
                          )}
                        </div>
                        <div className="text-center mt-2">
                          <div className={`text-sm font-medium ${isActive ? "text-brand-600" : "text-gray-500"}`}>
                            {step.title}
                          </div>
                          <div className="text-xs text-gray-500 max-w-20">
                            {step.description}
                          </div>
                        </div>
                      </div>
                      {index < steps.length - 1 && (
                        <div
                          className={`flex-1 h-0.5 mx-4 ${
                            currentStep > step.number ? "bg-green-500" : "bg-gray-200"
                          }`}
                        />
                      )}
                    </div>
                  );
                })}
              </div>
            </motion.div>

            {/* Form Card */}
            <motion.div
              key={currentStep}
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5 }}
            >
              <Card className="border-0 shadow-xl bg-white">
                <CardHeader className="text-center">
                  <CardTitle className="text-xl flex items-center justify-center">
                    {steps[currentStep - 1].icon && (
                      <steps[currentStep - 1].icon className="h-6 w-6 mr-2 text-brand-500" />
                    )}
                    {steps[currentStep - 1].title}
                  </CardTitle>
                  <CardDescription>
                    {steps[currentStep - 1].description}
                  </CardDescription>
                </CardHeader>
                
                <CardContent className="p-6">
                  <form onSubmit={handleSubmit} className="space-y-4">
                    {/* Step 1: Task Description */}
                    {currentStep === 1 && (
                      <motion.div variants={fadeInUp} className="space-y-4">
                        <div>
                          <Label htmlFor="taskDescription">Task Description *</Label>
                          <Textarea
                            id="taskDescription"
                            value={formData.taskDescription}
                            onChange={(e) => updateFormData("taskDescription", e.target.value)}
                            placeholder="Describe what you need done. Be specific about the problem or task. For example: 'Kitchen sink is leaking from the faucet and needs repair' or 'Need to install 3 ceiling fans in bedrooms'"
                            className={`min-h-[120px] ${errors.taskDescription ? "border-red-500" : ""}`}
                          />
                          {errors.taskDescription && (
                            <p className="text-red-500 text-sm mt-1 flex items-center">
                              <AlertCircle className="h-4 w-4 mr-1" />
                              {errors.taskDescription}
                            </p>
                          )}
                        </div>

                        {/* AI Detection Result */}
                        {formData.detectedCategory && (
                          <motion.div
                            initial={{ opacity: 0, scale: 0.95 }}
                            animate={{ opacity: 1, scale: 1 }}
                            className="bg-brand-50 border border-brand-200 rounded-lg p-4"
                          >
                            <div className="flex items-center space-x-2">
                              <Wrench className="h-5 w-5 text-brand-600" />
                              <div>
                                <p className="text-sm font-medium text-brand-900">
                                  AI Detected Category
                                </p>
                                <p className="text-sm text-brand-700">
                                  This looks like a <span className="font-semibold">{formData.detectedCategory}</span> task
                                </p>
                              </div>
                            </div>
                          </motion.div>
                        )}

                        <div>
                          <Label htmlFor="urgency">Task Urgency</Label>
                          <Select
                            value={formData.urgency}
                            onValueChange={(value) => updateFormData("urgency", value)}
                          >
                            <SelectTrigger>
                              <SelectValue placeholder="Select urgency level" />
                            </SelectTrigger>
                            <SelectContent>
                              <SelectItem value="low">Low - Can wait a week</SelectItem>
                              <SelectItem value="normal">Normal - Within a few days</SelectItem>
                              <SelectItem value="high">High - Within 24 hours</SelectItem>
                              <SelectItem value="emergency">Emergency - ASAP</SelectItem>
                            </SelectContent>
                          </Select>
                        </div>
                      </motion.div>
                    )}

                    {/* Step 2: Location Details */}
                    {currentStep === 2 && (
                      <motion.div variants={fadeInUp} className="space-y-4">
                        <div>
                          <Label htmlFor="location">City/Area *</Label>
                          <Input
                            id="location"
                            value={formData.location}
                            onChange={(e) => updateFormData("location", e.target.value)}
                            placeholder="e.g., Downtown, North City, East District"
                            className={errors.location ? "border-red-500" : ""}
                          />
                          {errors.location && (
                            <p className="text-red-500 text-sm mt-1 flex items-center">
                              <AlertCircle className="h-4 w-4 mr-1" />
                              {errors.location}
                            </p>
                          )}
                        </div>

                        <div>
                          <Label htmlFor="address">Complete Address *</Label>
                          <Textarea
                            id="address"
                            value={formData.address}
                            onChange={(e) => updateFormData("address", e.target.value)}
                            placeholder="Enter your complete address including building/house number, street, area, and any landmarks"
                            className={`min-h-[100px] ${errors.address ? "border-red-500" : ""}`}
                          />
                          {errors.address && (
                            <p className="text-red-500 text-sm mt-1 flex items-center">
                              <AlertCircle className="h-4 w-4 mr-1" />
                              {errors.address}
                            </p>
                          )}
                        </div>

                        <div className="bg-blue-50 border border-blue-200 rounded-lg p-4">
                          <div className="flex items-start space-x-2">
                            <MapPin className="h-5 w-5 text-blue-600 mt-0.5" />
                            <div>
                              <p className="text-sm font-medium text-blue-900">Location Privacy</p>
                              <p className="text-sm text-blue-700">
                                Your exact address will only be shared with matched professionals after you approve them.
                              </p>
                            </div>
                          </div>
                        </div>
                      </motion.div>
                    )}

                    {/* Step 3: Timing & Preferences */}
                    {currentStep === 3 && (
                      <motion.div variants={fadeInUp} className="space-y-4">
                        <div className="grid md:grid-cols-2 gap-4">
                          <div>
                            <Label htmlFor="preferredDate">Preferred Date *</Label>
                            <Input
                              id="preferredDate"
                              type="date"
                              value={formData.preferredDate}
                              onChange={(e) => updateFormData("preferredDate", e.target.value)}
                              min={new Date().toISOString().split('T')[0]}
                              className={errors.preferredDate ? "border-red-500" : ""}
                            />
                            {errors.preferredDate && (
                              <p className="text-red-500 text-sm mt-1 flex items-center">
                                <AlertCircle className="h-4 w-4 mr-1" />
                                {errors.preferredDate}
                              </p>
                            )}
                          </div>

                          <div>
                            <Label htmlFor="preferredTime">Preferred Time *</Label>
                            <Select
                              value={formData.preferredTime}
                              onValueChange={(value) => updateFormData("preferredTime", value)}
                            >
                              <SelectTrigger className={errors.preferredTime ? "border-red-500" : ""}>
                                <SelectValue placeholder="Select time" />
                              </SelectTrigger>
                              <SelectContent>
                                <SelectItem value="morning">Morning (8 AM - 12 PM)</SelectItem>
                                <SelectItem value="afternoon">Afternoon (12 PM - 5 PM)</SelectItem>
                                <SelectItem value="evening">Evening (5 PM - 8 PM)</SelectItem>
                                <SelectItem value="flexible">Flexible</SelectItem>
                              </SelectContent>
                            </Select>
                            {errors.preferredTime && (
                              <p className="text-red-500 text-sm mt-1 flex items-center">
                                <AlertCircle className="h-4 w-4 mr-1" />
                                {errors.preferredTime}
                              </p>
                            )}
                          </div>
                        </div>

                        <div>
                          <Label htmlFor="budget">Expected Budget (Optional)</Label>
                          <Input
                            id="budget"
                            value={formData.budget}
                            onChange={(e) => updateFormData("budget", e.target.value)}
                            placeholder="e.g., $50-100, or leave blank for quotes"
                          />
                        </div>

                        <div>
                          <Label htmlFor="contactMethod">Preferred Contact Method</Label>
                          <Select
                            value={formData.contactMethod}
                            onValueChange={(value) => updateFormData("contactMethod", value)}
                          >
                            <SelectTrigger>
                              <SelectValue />
                            </SelectTrigger>
                            <SelectContent>
                              <SelectItem value="phone">Phone Call</SelectItem>
                              <SelectItem value="message">Text Message</SelectItem>
                              <SelectItem value="app">In-App Messaging</SelectItem>
                            </SelectContent>
                          </Select>
                        </div>

                        <div>
                          <Label htmlFor="additionalNotes">Additional Notes (Optional)</Label>
                          <Textarea
                            id="additionalNotes"
                            value={formData.additionalNotes}
                            onChange={(e) => updateFormData("additionalNotes", e.target.value)}
                            placeholder="Any additional information, special requirements, or preferences"
                            className="min-h-[80px]"
                          />
                        </div>

                        <div className="bg-green-50 border border-green-200 rounded-lg p-4">
                          <div className="flex items-start space-x-2">
                            <Users className="h-5 w-5 text-green-600 mt-0.5" />
                            <div>
                              <p className="text-sm font-medium text-green-900">What happens next?</p>
                              <p className="text-sm text-green-700">
                                We'll match you with qualified professionals in your area and they'll contact you with quotes.
                              </p>
                            </div>
                          </div>
                        </div>
                      </motion.div>
                    )}

                    {/* Navigation Buttons */}
                    <div className="flex items-center justify-between pt-4 border-t">
                      {currentStep > 1 ? (
                        <Button
                          type="button"
                          variant="outline"
                          onClick={handlePrevious}
                          className="flex items-center"
                        >
                          Previous
                        </Button>
                      ) : (
                        <div />
                      )}

                      {currentStep < 3 ? (
                        <Button
                          type="button"
                          onClick={handleNext}
                          className="bg-brand-500 hover:bg-brand-600 flex items-center"
                        >
                          Next
                          <ArrowRight className="h-4 w-4 ml-2" />
                        </Button>
                      ) : (
                        <Button
                          type="submit"
                          disabled={isSubmitting}
                          className="bg-brand-500 hover:bg-brand-600 flex items-center"
                        >
                          {isSubmitting ? (
                            <>
                              <div className="animate-spin rounded-full h-4 w-4 border-b-2 border-white mr-2"></div>
                              Posting Task...
                            </>
                          ) : (
                            <>
                              Post Task
                              <CheckCircle className="h-4 w-4 ml-2" />
                            </>
                          )}
                        </Button>
                      )}
                    </div>
                  </form>
                </CardContent>
              </Card>
            </motion.div>
          </div>
        </div>
      </div>
    </Sidebar>
  );
}