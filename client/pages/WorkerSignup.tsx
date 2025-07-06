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
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Textarea } from "@/components/ui/textarea";
import {
  Wrench,
  ArrowRight,
  ArrowLeft,
  User,
  FileText,
  CheckCircle,
  Upload,
  X,
  Calendar,
  MapPin,
  Briefcase,
  Camera,
  Plus,
  AlertCircle,
} from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { Link } from "react-router-dom";

const workerTypes = [
  "Plumber",
  "Electrician",
  "HVAC Technician",
  "Carpenter",
  "Painter",
  "Handyman",
  "Tile Installer",
  "Roofer",
  "Landscaper",
  "Appliance Repair",
  "Locksmith",
  "Pest Control",
];

const genderOptions = ["Male", "Female", "Other", "Prefer not to say"];

interface FormData {
  fullName: string;
  dateOfBirth: string;
  gender: string;
  profileImage: File | null;
  cnic: string;
  address: string;
  workerType: string;
  workAddress: string;
  workPhotos: string[];
  proofFiles: File[];
}

const initialFormData: FormData = {
  fullName: "",
  dateOfBirth: "",
  gender: "",
  profileImage: null,
  cnic: "",
  address: "",
  workerType: "",
  workAddress: "",
  workPhotos: ["", "", ""],
  proofFiles: [],
};

// Animation variants
const slideVariants = {
  enter: (direction: number) => ({
    x: direction > 0 ? 300 : -300,
    opacity: 0,
  }),
  center: {
    zIndex: 1,
    x: 0,
    opacity: 1,
  },
  exit: (direction: number) => ({
    zIndex: 0,
    x: direction < 0 ? 300 : -300,
    opacity: 0,
  }),
};

const fadeInUp = {
  initial: { opacity: 0, y: 60 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.6, ease: "easeOut" },
};

export default function WorkerSignup() {
  const [currentStep, setCurrentStep] = useState(1);
  const [direction, setDirection] = useState(0);
  const [formData, setFormData] = useState<FormData>(initialFormData);
  const [errors, setErrors] = useState<Record<string, string>>({});

  const totalSteps = 3;

  const updateFormData = (field: keyof FormData, value: any) => {
    setFormData((prev) => ({ ...prev, [field]: value }));
    // Clear error when user starts typing
    if (errors[field]) {
      setErrors((prev) => ({ ...prev, [field]: "" }));
    }
  };

  const validateStep = (step: number): boolean => {
    const newErrors: Record<string, string> = {};

    if (step === 1) {
      if (!formData.fullName.trim())
        newErrors.fullName = "Full name is required";
      if (!formData.dateOfBirth)
        newErrors.dateOfBirth = "Date of birth is required";
      if (!formData.gender) newErrors.gender = "Gender is required";
      if (!formData.cnic.trim()) newErrors.cnic = "CNIC is required";
      if (!formData.address.trim()) newErrors.address = "Address is required";
    }

    if (step === 2) {
      if (!formData.workerType)
        newErrors.workerType = "Worker type is required";
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const nextStep = () => {
    if (validateStep(currentStep)) {
      setDirection(1);
      setCurrentStep((prev) => Math.min(prev + 1, totalSteps));
    }
  };

  const prevStep = () => {
    setDirection(-1);
    setCurrentStep((prev) => Math.max(prev - 1, 1));
  };

  const handleFileUpload = (files: FileList | null) => {
    if (files) {
      const newFiles = Array.from(files);
      setFormData((prev) => ({
        ...prev,
        proofFiles: [...prev.proofFiles, ...newFiles],
      }));
    }
  };

  const removeProofFile = (index: number) => {
    setFormData((prev) => ({
      ...prev,
      proofFiles: prev.proofFiles.filter((_, i) => i !== index),
    }));
  };

  const updateWorkPhoto = (index: number, url: string) => {
    setFormData((prev) => ({
      ...prev,
      workPhotos: prev.workPhotos.map((photo, i) =>
        i === index ? url : photo,
      ),
    }));
  };

  const handleSubmit = () => {
    if (validateStep(currentStep)) {
      // Here you would normally submit to your API
      console.log("Form submitted:", formData);
      alert(
        "Application submitted successfully! We'll review it and get back to you.",
      );
    }
  };

  const renderStepIndicator = () => (
    <div className="flex items-center justify-center space-x-4 mb-8">
      {[1, 2, 3].map((step) => (
        <div key={step} className="flex items-center">
          <motion.div
            className={`w-10 h-10 rounded-full flex items-center justify-center text-sm font-medium transition-all duration-300 ${
              step < currentStep
                ? "bg-green-500 text-white"
                : step === currentStep
                  ? "bg-brand-500 text-white"
                  : "bg-gray-200 text-gray-600"
            }`}
            whileHover={{ scale: 1.1 }}
          >
            {step < currentStep ? <CheckCircle className="h-5 w-5" /> : step}
          </motion.div>
          {step < 3 && (
            <div
              className={`w-12 h-0.5 mx-2 transition-all duration-300 ${
                step < currentStep ? "bg-green-500" : "bg-gray-200"
              }`}
            />
          )}
        </div>
      ))}
    </div>
  );

  const renderPersonalInfo = () => (
    <motion.div
      key="step1"
      custom={direction}
      variants={slideVariants}
      initial="enter"
      animate="center"
      exit="exit"
      transition={{ duration: 0.3 }}
      className="space-y-6"
    >
      <div className="text-center mb-8">
        <User className="h-16 w-16 mx-auto mb-4 text-brand-500" />
        <h2 className="text-3xl font-bold bg-gradient-to-r from-gray-900 to-brand-800 bg-clip-text text-transparent">
          Personal Information
        </h2>
        <p className="text-gray-600 mt-2">Tell us about yourself</p>
      </div>

      <div className="grid md:grid-cols-2 gap-6">
        <div>
          <Label htmlFor="fullName">Full Name *</Label>
          <Input
            id="fullName"
            value={formData.fullName}
            onChange={(e) => updateFormData("fullName", e.target.value)}
            placeholder="Enter your full name"
            className={errors.fullName ? "border-red-500" : ""}
          />
          {errors.fullName && (
            <p className="text-red-500 text-sm mt-1 flex items-center">
              <AlertCircle className="h-4 w-4 mr-1" />
              {errors.fullName}
            </p>
          )}
        </div>

        <div>
          <Label htmlFor="dateOfBirth">Date of Birth *</Label>
          <Input
            id="dateOfBirth"
            type="date"
            value={formData.dateOfBirth}
            onChange={(e) => updateFormData("dateOfBirth", e.target.value)}
            className={errors.dateOfBirth ? "border-red-500" : ""}
          />
          {errors.dateOfBirth && (
            <p className="text-red-500 text-sm mt-1 flex items-center">
              <AlertCircle className="h-4 w-4 mr-1" />
              {errors.dateOfBirth}
            </p>
          )}
        </div>

        <div>
          <Label htmlFor="gender">Gender *</Label>
          <Select
            value={formData.gender}
            onValueChange={(value) => updateFormData("gender", value)}
          >
            <SelectTrigger className={errors.gender ? "border-red-500" : ""}>
              <SelectValue placeholder="Select gender" />
            </SelectTrigger>
            <SelectContent>
              {genderOptions.map((option) => (
                <SelectItem key={option} value={option}>
                  {option}
                </SelectItem>
              ))}
            </SelectContent>
          </Select>
          {errors.gender && (
            <p className="text-red-500 text-sm mt-1 flex items-center">
              <AlertCircle className="h-4 w-4 mr-1" />
              {errors.gender}
            </p>
          )}
        </div>

        <div>
          <Label htmlFor="imageUrl">Profile Image URL</Label>
          <Input
            id="imageUrl"
            value={formData.imageUrl}
            onChange={(e) => updateFormData("imageUrl", e.target.value)}
            placeholder="https://example.com/your-photo.jpg"
          />
          <p className="text-sm text-gray-500 mt-1">
            Optional: Link to your profile photo
          </p>
        </div>

        <div>
          <Label htmlFor="cnic">CNIC Number *</Label>
          <Input
            id="cnic"
            value={formData.cnic}
            onChange={(e) => updateFormData("cnic", e.target.value)}
            placeholder="12345-1234567-1"
            className={errors.cnic ? "border-red-500" : ""}
          />
          {errors.cnic && (
            <p className="text-red-500 text-sm mt-1 flex items-center">
              <AlertCircle className="h-4 w-4 mr-1" />
              {errors.cnic}
            </p>
          )}
        </div>

        <div className="md:col-span-2">
          <Label htmlFor="address">Home Address *</Label>
          <Textarea
            id="address"
            value={formData.address}
            onChange={(e) => updateFormData("address", e.target.value)}
            placeholder="Enter your complete address"
            className={errors.address ? "border-red-500" : ""}
          />
          {errors.address && (
            <p className="text-red-500 text-sm mt-1 flex items-center">
              <AlertCircle className="h-4 w-4 mr-1" />
              {errors.address}
            </p>
          )}
        </div>
      </div>
    </motion.div>
  );

  const renderWorkInfo = () => (
    <motion.div
      key="step2"
      custom={direction}
      variants={slideVariants}
      initial="enter"
      animate="center"
      exit="exit"
      transition={{ duration: 0.3 }}
      className="space-y-6"
    >
      <div className="text-center mb-8">
        <Briefcase className="h-16 w-16 mx-auto mb-4 text-brand-500" />
        <h2 className="text-3xl font-bold bg-gradient-to-r from-gray-900 to-brand-800 bg-clip-text text-transparent">
          Work Information
        </h2>
        <p className="text-gray-600 mt-2">Tell us about your expertise</p>
      </div>

      <div className="space-y-6">
        <div>
          <Label htmlFor="workerType">Type of Worker *</Label>
          <Select
            value={formData.workerType}
            onValueChange={(value) => updateFormData("workerType", value)}
          >
            <SelectTrigger
              className={errors.workerType ? "border-red-500" : ""}
            >
              <SelectValue placeholder="Select your specialization" />
            </SelectTrigger>
            <SelectContent>
              {workerTypes.map((type) => (
                <SelectItem key={type} value={type}>
                  {type}
                </SelectItem>
              ))}
            </SelectContent>
          </Select>
          {errors.workerType && (
            <p className="text-red-500 text-sm mt-1 flex items-center">
              <AlertCircle className="h-4 w-4 mr-1" />
              {errors.workerType}
            </p>
          )}
        </div>

        <div>
          <Label htmlFor="workAddress">Work Address / Shop Location</Label>
          <Textarea
            id="workAddress"
            value={formData.workAddress}
            onChange={(e) => updateFormData("workAddress", e.target.value)}
            placeholder="Enter your shop/workshop address (optional)"
          />
          <p className="text-sm text-gray-500 mt-1">
            Optional: Only fill if you have a physical shop or workshop
          </p>
        </div>

        {formData.workAddress && (
          <div>
            <Label>Work Location Photos</Label>
            <p className="text-sm text-gray-600 mb-3">
              Please provide 3 photos of your work location
            </p>
            <div className="grid md:grid-cols-3 gap-4">
              {formData.workPhotos.map((photo, index) => (
                <div key={index}>
                  <Label htmlFor={`workPhoto${index}`}>Photo {index + 1}</Label>
                  <Input
                    id={`workPhoto${index}`}
                    value={photo}
                    onChange={(e) => updateWorkPhoto(index, e.target.value)}
                    placeholder={`https://example.com/photo${index + 1}.jpg`}
                  />
                </div>
              ))}
            </div>
          </div>
        )}
      </div>
    </motion.div>
  );

  const renderProofUpload = () => (
    <motion.div
      key="step3"
      custom={direction}
      variants={slideVariants}
      initial="enter"
      animate="center"
      exit="exit"
      transition={{ duration: 0.3 }}
      className="space-y-6"
    >
      <div className="text-center mb-8">
        <FileText className="h-16 w-16 mx-auto mb-4 text-brand-500" />
        <h2 className="text-3xl font-bold bg-gradient-to-r from-gray-900 to-brand-800 bg-clip-text text-transparent">
          Proof of Work
        </h2>
        <p className="text-gray-600 mt-2">
          Upload documents that verify your expertise
        </p>
      </div>

      <div className="space-y-6">
        <div>
          <Label>Upload Proof Documents</Label>
          <p className="text-sm text-gray-600 mb-4">
            Upload certificates, licenses, or examples of your work. Accepted
            formats: PDF, JPG, PNG
          </p>

          <div className="border-2 border-dashed border-gray-300 rounded-lg p-6 text-center hover:border-brand-400 transition-colors">
            <input
              type="file"
              multiple
              accept=".pdf,.jpg,.jpeg,.png"
              onChange={(e) => handleFileUpload(e.target.files)}
              className="hidden"
              id="file-upload"
            />
            <label htmlFor="file-upload" className="cursor-pointer">
              <Upload className="h-12 w-12 mx-auto mb-4 text-gray-400" />
              <p className="text-lg font-medium text-gray-600">
                Click to upload files
              </p>
              <p className="text-sm text-gray-500">or drag and drop</p>
            </label>
          </div>

          {formData.proofFiles.length > 0 && (
            <div className="mt-4">
              <h4 className="font-medium text-gray-900 mb-2">
                Uploaded Files:
              </h4>
              <div className="space-y-2">
                {formData.proofFiles.map((file, index) => (
                  <div
                    key={index}
                    className="flex items-center justify-between bg-gray-50 p-3 rounded-lg"
                  >
                    <div className="flex items-center">
                      <FileText className="h-5 w-5 mr-2 text-gray-600" />
                      <span className="text-sm text-gray-900">{file.name}</span>
                      <Badge variant="secondary" className="ml-2 text-xs">
                        {(file.size / 1024 / 1024).toFixed(2)} MB
                      </Badge>
                    </div>
                    <Button
                      variant="ghost"
                      size="sm"
                      onClick={() => removeProofFile(index)}
                      className="text-red-500 hover:text-red-700"
                    >
                      <X className="h-4 w-4" />
                    </Button>
                  </div>
                ))}
              </div>
            </div>
          )}
        </div>

        <div className="bg-blue-50 border border-blue-200 rounded-lg p-4">
          <h4 className="font-medium text-blue-900 mb-2">
            Examples of acceptable proof:
          </h4>
          <ul className="text-sm text-blue-800 space-y-1">
            <li>• Professional licenses or certifications</li>
            <li>• Photos of completed work projects</li>
            <li>• Customer testimonials or reviews</li>
            <li>• Training certificates</li>
            <li>• Business registration documents</li>
          </ul>
        </div>
      </div>
    </motion.div>
  );

  return (
    <div className="min-h-screen bg-gradient-to-br from-white via-purple-50/30 to-blue-50/30">
      {/* Navigation */}
      <motion.nav
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="border-b bg-white/80 backdrop-blur-lg supports-[backdrop-filter]:bg-white/60 sticky top-0 z-50 shadow-sm"
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <Link to="/" className="flex items-center">
              <motion.div
                whileHover={{ rotate: 360 }}
                transition={{ duration: 0.5 }}
                className="h-10 w-10 bg-gradient-to-br from-brand-500 to-brand-600 rounded-xl flex items-center justify-center shadow-lg"
              >
                <Wrench className="h-6 w-6 text-white" />
              </motion.div>
              <span className="ml-3 text-2xl font-bold bg-gradient-to-r from-brand-600 to-purple-600 bg-clip-text text-transparent">
                Multitach
              </span>
            </Link>
            <div className="flex items-center space-x-4">
              <Link to="/">
                <Button
                  variant="outline"
                  size="sm"
                  className="border-brand-200 hover:bg-brand-50"
                >
                  Back to Home
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </motion.nav>

      {/* Main Content */}
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <motion.div
          initial="initial"
          animate="animate"
          variants={fadeInUp}
          className="text-center mb-12"
        >
          <Badge
            variant="secondary"
            className="mb-4 bg-gradient-to-r from-brand-100 to-purple-100 text-brand-700 border-brand-200/50 shadow-sm"
          >
            Professional Registration
          </Badge>
          <h1 className="text-4xl sm:text-5xl font-bold bg-gradient-to-r from-gray-900 to-brand-800 bg-clip-text text-transparent mb-4">
            Join Multitach as a Professional
          </h1>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Start your journey with us by completing this simple registration
            process
          </p>
        </motion.div>

        {/* Step Indicator */}
        {renderStepIndicator()}

        {/* Form Card */}
        <Card className="border-0 shadow-2xl bg-white/90 backdrop-blur-sm">
          <CardHeader className="text-center pb-6">
            <CardTitle className="text-2xl">
              Step {currentStep} of {totalSteps}
            </CardTitle>
          </CardHeader>
          <CardContent className="p-8">
            <div className="min-h-[500px]">
              <AnimatePresence mode="wait" custom={direction}>
                {currentStep === 1 && renderPersonalInfo()}
                {currentStep === 2 && renderWorkInfo()}
                {currentStep === 3 && renderProofUpload()}
              </AnimatePresence>
            </div>

            {/* Navigation Buttons */}
            <div className="flex justify-between mt-8 pt-6 border-t">
              <div>
                {currentStep > 1 && (
                  <motion.div
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    <Button
                      variant="outline"
                      onClick={prevStep}
                      className="flex items-center"
                    >
                      <ArrowLeft className="mr-2 h-4 w-4" />
                      Previous
                    </Button>
                  </motion.div>
                )}
              </div>
              <div>
                {currentStep < totalSteps ? (
                  <motion.div
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    <Button
                      onClick={nextStep}
                      className="bg-gradient-to-r from-brand-500 to-purple-600 hover:from-brand-600 hover:to-purple-700 flex items-center"
                    >
                      Next
                      <ArrowRight className="ml-2 h-4 w-4" />
                    </Button>
                  </motion.div>
                ) : (
                  <motion.div
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    <Button
                      onClick={handleSubmit}
                      className="bg-gradient-to-r from-green-500 to-green-600 hover:from-green-600 hover:to-green-700 flex items-center"
                    >
                      Submit Application
                      <CheckCircle className="ml-2 h-4 w-4" />
                    </Button>
                  </motion.div>
                )}
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}
