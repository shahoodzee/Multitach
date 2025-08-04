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
import { Checkbox } from "@/components/ui/checkbox";
import {
  Wrench,
  ArrowRight,
  User,
  CheckCircle,
  AlertCircle,
  Search,
  Shield,
  Clock,
  Star,
  Zap,
  Upload,
  Camera,
} from "lucide-react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";

const genderOptions = ["Male", "Female", "Other", "Prefer not to say"];

interface FormData {
  fullName: string;
  email: string;
  phone: string;
  dateOfBirth: string;
  gender: string;
  profileImage: File | null;
  cnic: string;
  address: string;
  agreeToTerms: boolean;
}

const initialFormData: FormData = {
  fullName: "",
  email: "",
  phone: "",
  dateOfBirth: "",
  gender: "",
  profileImage: null,
  cnic: "",
  address: "",
  agreeToTerms: false,
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

export default function ClientSignup() {
  const [formData, setFormData] = useState<FormData>(initialFormData);
  const [errors, setErrors] = useState<Record<string, string>>({});
  const [isSubmitting, setIsSubmitting] = useState(false);

  const updateFormData = (field: keyof FormData, value: any) => {
    setFormData((prev) => ({ ...prev, [field]: value }));
    // Clear error when user starts typing
    if (errors[field]) {
      setErrors((prev) => ({ ...prev, [field]: "" }));
    }
  };

  const validateForm = (): boolean => {
    const newErrors: Record<string, string> = {};

    if (!formData.fullName.trim()) newErrors.fullName = "Full name is required";
    if (!formData.email.trim()) {
      newErrors.email = "Email is required";
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      newErrors.email = "Please enter a valid email address";
    }
    if (!formData.phone.trim()) {
      newErrors.phone = "Phone number is required";
    } else if (!/^\+?[\d\s\-\(\)]+$/.test(formData.phone)) {
      newErrors.phone = "Please enter a valid phone number";
    }
    if (!formData.dateOfBirth)
      newErrors.dateOfBirth = "Date of birth is required";
    if (!formData.gender) newErrors.gender = "Gender is required";
    if (!formData.address.trim()) newErrors.address = "Address is required";
    if (!formData.agreeToTerms)
      newErrors.agreeToTerms = "You must agree to the terms and conditions";

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (validateForm()) {
      setIsSubmitting(true);
      try {
        // Here you would normally submit to your API
        console.log("Form submitted:", formData);
        // Simulate API call
        await new Promise((resolve) => setTimeout(resolve, 2000));
        alert("Account created successfully! Welcome to Multitach!");
      } catch (error) {
        alert("Something went wrong. Please try again.");
      } finally {
        setIsSubmitting(false);
      }
    }
  };

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
              <Link to="/worker-signup">
                <Button
                  variant="ghost"
                  size="sm"
                  className="text-brand-600 hover:text-brand-700 hover:bg-brand-50"
                >
                  Join as Professional
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </motion.nav>

      {/* Main Content */}
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid lg:grid-cols-2 gap-12 items-start">
          {/* Left Column - Benefits */}
          <motion.div
            initial="initial"
            animate="animate"
            variants={staggerContainer}
            className="lg:sticky lg:top-24"
          >
            <motion.div variants={fadeInUp}>
              <Badge
                variant="secondary"
                className="mb-4 bg-gradient-to-r from-brand-100 to-purple-100 text-brand-700 border-brand-200/50 shadow-sm"
              >
                <Search className="w-4 h-4 mr-2" />
                Client Registration
              </Badge>
              <h1 className="text-4xl sm:text-5xl font-bold bg-gradient-to-r from-gray-900 to-brand-800 bg-clip-text text-transparent mb-6">
                Find the Perfect Professional
              </h1>
              <p className="text-xl text-gray-600 mb-8 leading-relaxed">
                Join thousands of satisfied customers who trust Multitach to
                connect them with reliable, skilled professionals for all their
                maintenance needs.
              </p>
            </motion.div>

            <motion.div variants={fadeInUp} className="space-y-6">
              <div className="flex items-start space-x-4">
                <div className="w-12 h-12 bg-gradient-to-br from-brand-100 to-purple-100 rounded-xl flex items-center justify-center flex-shrink-0">
                  <Zap className="h-6 w-6 text-brand-600" />
                </div>
                <div>
                  <h3 className="font-semibold text-gray-900 mb-2">
                    AI-Powered Matching
                  </h3>
                  <p className="text-gray-600">
                    Our smart algorithm finds the perfect professional for your
                    specific needs in seconds.
                  </p>
                </div>
              </div>

              <div className="flex items-start space-x-4">
                <div className="w-12 h-12 bg-gradient-to-br from-green-100 to-emerald-100 rounded-xl flex items-center justify-center flex-shrink-0">
                  <Shield className="h-6 w-6 text-green-600" />
                </div>
                <div>
                  <h3 className="font-semibold text-gray-900 mb-2">
                    Verified Professionals
                  </h3>
                  <p className="text-gray-600">
                    All professionals are background-checked and verified for
                    your safety and peace of mind.
                  </p>
                </div>
              </div>

              <div className="flex items-start space-x-4">
                <div className="w-12 h-12 bg-gradient-to-br from-blue-100 to-cyan-100 rounded-xl flex items-center justify-center flex-shrink-0">
                  <Clock className="h-6 w-6 text-blue-600" />
                </div>
                <div>
                  <h3 className="font-semibold text-gray-900 mb-2">
                    Quick Response
                  </h3>
                  <p className="text-gray-600">
                    Get matched and connected with professionals in under 24
                    hours.
                  </p>
                </div>
              </div>

              <div className="flex items-start space-x-4">
                <div className="w-12 h-12 bg-gradient-to-br from-yellow-100 to-orange-100 rounded-xl flex items-center justify-center flex-shrink-0">
                  <Star className="h-6 w-6 text-yellow-600" />
                </div>
                <div>
                  <h3 className="font-semibold text-gray-900 mb-2">
                    Quality Guaranteed
                  </h3>
                  <p className="text-gray-600">
                    All work comes with our satisfaction guarantee and
                    professional insurance coverage.
                  </p>
                </div>
              </div>
            </motion.div>
          </motion.div>

          {/* Right Column - Form */}
          <motion.div
            initial={{ opacity: 0, x: 60 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <Card className="border-0 shadow-2xl bg-white/90 backdrop-blur-sm">
              <CardHeader className="text-center pb-6">
                <User className="h-16 w-16 mx-auto mb-4 text-brand-500" />
                <CardTitle className="text-3xl bg-gradient-to-r from-gray-900 to-brand-800 bg-clip-text text-transparent">
                  Create Your Account
                </CardTitle>
                <CardDescription className="text-lg">
                  Get started with your free Multitach account
                </CardDescription>
              </CardHeader>
              <CardContent className="p-8">
                <form
                  onSubmit={handleSubmit}
                  className="space-y-6 flex flex-col"
                >
                  <div className="grid md:grid-cols-2 gap-6">
                    <div>
                      <Label htmlFor="fullName">Full Name *</Label>
                      <Input
                        id="fullName"
                        value={formData.fullName}
                        onChange={(e) =>
                          updateFormData("fullName", e.target.value)
                        }
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
                      <Label htmlFor="email">Email Address *</Label>
                      <Input
                        id="email"
                        type="email"
                        value={formData.email}
                        onChange={(e) =>
                          updateFormData("email", e.target.value)
                        }
                        placeholder="your.email@example.com"
                        className={errors.email ? "border-red-500" : ""}
                      />
                      {errors.email && (
                        <p className="text-red-500 text-sm mt-1 flex items-center">
                          <AlertCircle className="h-4 w-4 mr-1" />
                          {errors.email}
                        </p>
                      )}
                    </div>

                    <div>
                      <Label htmlFor="phone">Phone Number *</Label>
                      <Input
                        id="phone"
                        value={formData.phone}
                        onChange={(e) =>
                          updateFormData("phone", e.target.value)
                        }
                        placeholder="+92 300 1234567"
                        className={errors.phone ? "border-red-500" : ""}
                      />
                      {errors.phone && (
                        <p className="text-red-500 text-sm mt-1 flex items-center">
                          <AlertCircle className="h-4 w-4 mr-1" />
                          {errors.phone}
                        </p>
                      )}
                    </div>

                    <div>
                      <Label htmlFor="dateOfBirth">Date of Birth *</Label>
                      <Input
                        id="dateOfBirth"
                        type="date"
                        value={formData.dateOfBirth}
                        onChange={(e) =>
                          updateFormData("dateOfBirth", e.target.value)
                        }
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
                        onValueChange={(value) =>
                          updateFormData("gender", value)
                        }
                      >
                        <SelectTrigger
                          className={errors.gender ? "border-red-500" : ""}
                        >
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
                      <Label htmlFor="profileImage">Profile Image</Label>
                      <div className="border-2 border-dashed border-gray-300 rounded-lg p-4 text-center hover:border-brand-400 transition-colors">
                        <input
                          type="file"
                          accept="image/*"
                          onChange={(e) =>
                            updateFormData(
                              "profileImage",
                              e.target.files?.[0] || null,
                            )
                          }
                          className="hidden"
                          id="profileImage"
                        />
                        <label
                          htmlFor="profileImage"
                          className="cursor-pointer"
                        >
                          {formData.profileImage ? (
                            <div className="flex items-center justify-center space-x-2">
                              <Camera className="h-6 w-6 text-brand-500" />
                              <span className="text-sm font-medium text-brand-600">
                                {formData.profileImage.name}
                              </span>
                            </div>
                          ) : (
                            <>
                              <Upload className="h-8 w-8 mx-auto mb-2 text-gray-400" />
                              <p className="text-sm font-medium text-gray-600">
                                Click to upload profile photo
                              </p>
                              <p className="text-xs text-gray-500">
                                Optional: JPG, PNG up to 5MB
                              </p>
                            </>
                          )}
                        </label>
                      </div>
                    </div>
                  </div>

                  <div>
                    <Label htmlFor="cnic">
                      CNIC Number{" "}
                      <span className="text-brand-600 font-medium">
                        (Recommended)
                      </span>
                    </Label>
                    <Input
                      id="cnic"
                      value={formData.cnic}
                      onChange={(e) => updateFormData("cnic", e.target.value)}
                      placeholder="12345-1234567-1"
                    />
                    <p className="text-sm text-gray-600 mt-1 flex items-center">
                      <Shield className="h-4 w-4 text-green-500 m-auto" />
                      <span className="m-auto">
                        Your CNIC helps professionals verify your identity and
                        builds trust
                      </span>
                    </p>
                  </div>

                  <div>
                    <Label htmlFor="address">Address *</Label>
                    <Textarea
                      id="address"
                      value={formData.address}
                      onChange={(e) =>
                        updateFormData("address", e.target.value)
                      }
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

                  <div className="flex items-start space-x-3">
                    <Checkbox
                      id="agreeToTerms"
                      checked={formData.agreeToTerms}
                      onCheckedChange={(checked) =>
                        updateFormData("agreeToTerms", checked)
                      }
                      className={`my-auto ${errors.agreeToTerms ? "border-red-500" : ""}`}
                    />
                    <div className="flex-1 my-auto">
                      <Label
                        htmlFor="agreeToTerms"
                        className="text-sm leading-relaxed cursor-pointer"
                      >
                        &nbsp;I agree to the{" "}
                        <a
                          href="#"
                          className="text-brand-600 hover:text-brand-700 underline"
                        >
                          Terms and Conditions
                        </a>{" "}
                        and{" "}
                        <a
                          href="#"
                          className="text-brand-600 hover:text-brand-700 underline"
                        >
                          Privacy Policy
                        </a>
                      </Label>
                      {errors.agreeToTerms && (
                        <p className="text-red-500 text-sm mt-1 flex items-center">
                          <AlertCircle className="h-4 w-4 mr-1" />
                          {errors.agreeToTerms}
                        </p>
                      )}
                    </div>
                  </div>

                  <motion.div
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                    className="pt-4"
                  >
                    <Button
                      type="submit"
                      size="lg"
                      disabled={isSubmitting}
                      className="w-full bg-gradient-to-r from-brand-500 to-purple-600 hover:from-brand-600 hover:to-purple-700 shadow-xl hover:shadow-2xl transition-all duration-300 text-lg py-4"
                    >
                      {isSubmitting ? (
                        <div className="flex items-center">
                          <div className="animate-spin rounded-full h-5 w-5 border-b-2 border-white mr-2"></div>
                          Creating Account...
                        </div>
                      ) : (
                        <>
                          Create Account & Start Finding Professionals
                          <ArrowRight className="ml-2 h-5 w-5" />
                        </>
                      )}
                    </Button>
                  </motion.div>

                  <div className="text-center pt-4">
                    <p className="text-sm text-gray-600">
                      Already have an account?{" "}
                      <a
                        href="/sign-in"
                        className="text-brand-600 hover:text-brand-700 font-medium"
                      >
                        Sign in here
                      </a>
                    </p>
                  </div>
                </form>
              </CardContent>
            </Card>
          </motion.div>
        </div>
      </div>
    </div>
  );
}
