import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import {
  Wrench,
  ArrowRight,
  MapPin,
  Clock,
  Users,
  Heart,
  Zap,
  Award,
  Coffee,
  Laptop,
  Home,
  Globe,
  CheckCircle,
  Star,
  Building,
  TrendingUp,
  Target,
  Lightbulb,
} from "lucide-react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";

// Animation variants
const fadeInUp = {
  initial: { opacity: 0, y: 60 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.6, ease: "easeOut" },
};

const fadeInLeft = {
  initial: { opacity: 0, x: -60 },
  animate: { opacity: 1, x: 0 },
  transition: { duration: 0.6, ease: "easeOut" },
};

const staggerContainer = {
  animate: {
    transition: {
      staggerChildren: 0.1,
    },
  },
};

const scaleIn = {
  initial: { opacity: 0, scale: 0.8 },
  animate: { opacity: 1, scale: 1 },
  transition: { duration: 0.5, ease: "easeOut" },
};

const jobOpenings = [
  {
    title: "Senior Full Stack Engineer",
    department: "Engineering",
    location: "San Francisco, CA / Remote",
    type: "Full-time",
    salary: "$140k - $180k",
    description:
      "Build the future of AI-powered service matching. Work on our core platform that connects millions of users with professionals.",
    skills: ["React", "Node.js", "TypeScript", "PostgreSQL", "AWS"],
  },
  {
    title: "AI/ML Engineer",
    department: "Engineering",
    location: "Remote",
    type: "Full-time",
    salary: "$160k - $200k",
    description:
      "Develop and improve our matching algorithms that connect clients with the perfect maintenance professionals.",
    skills: [
      "Python",
      "TensorFlow",
      "PyTorch",
      "Machine Learning",
      "Data Science",
    ],
  },
  {
    title: "Product Designer",
    department: "Design",
    location: "New York, NY / Remote",
    type: "Full-time",
    salary: "$120k - $150k",
    description:
      "Design beautiful, intuitive experiences for both clients and professionals on our platform.",
    skills: [
      "Figma",
      "Design Systems",
      "User Research",
      "Prototyping",
      "UI/UX",
    ],
  },
  {
    title: "Customer Success Manager",
    department: "Customer Success",
    location: "Austin, TX / Remote",
    type: "Full-time",
    salary: "$80k - $110k",
    description:
      "Help our professional partners succeed and grow their businesses on the Multitach platform.",
    skills: [
      "Customer Relations",
      "Data Analysis",
      "Project Management",
      "Communication",
    ],
  },
  {
    title: "DevOps Engineer",
    department: "Engineering",
    location: "Remote",
    type: "Full-time",
    salary: "$130k - $170k",
    description:
      "Scale our infrastructure to handle millions of service requests while maintaining 99.9% uptime.",
    skills: ["AWS", "Kubernetes", "Docker", "Terraform", "CI/CD"],
  },
  {
    title: "Marketing Manager",
    department: "Marketing",
    location: "Los Angeles, CA / Remote",
    type: "Full-time",
    salary: "$90k - $120k",
    description:
      "Drive growth and brand awareness for Multitach across digital channels and partnerships.",
    skills: [
      "Digital Marketing",
      "Analytics",
      "Content Strategy",
      "SEO",
      "Growth Marketing",
    ],
  },
];

const benefits = [
  {
    icon: Heart,
    title: "Health & Wellness",
    description:
      "Comprehensive health insurance, dental, vision, and mental health support",
  },
  {
    icon: Home,
    title: "Remote-First",
    description:
      "Work from anywhere with optional access to beautiful co-working spaces",
  },
  {
    icon: Laptop,
    title: "Top Equipment",
    description:
      "Latest MacBook Pro, monitor, and any tools you need to do your best work",
  },
  {
    icon: Coffee,
    title: "Unlimited PTO",
    description:
      "Take the time you need to recharge and maintain work-life balance",
  },
  {
    icon: Target,
    title: "Equity Package",
    description: "Share in our success with competitive equity compensation",
  },
  {
    icon: Lightbulb,
    title: "Learning Budget",
    description:
      "$2,000 annual budget for courses, conferences, and professional development",
  },
];

const values = [
  {
    icon: Users,
    title: "People First",
    description:
      "We put our team, customers, and professionals at the center of everything we do.",
  },
  {
    icon: Zap,
    title: "Move Fast",
    description:
      "We iterate quickly, learn from feedback, and continuously improve our platform.",
  },
  {
    icon: Award,
    title: "Excellence",
    description:
      "We strive for the highest quality in our work and the experiences we create.",
  },
  {
    icon: Globe,
    title: "Inclusive",
    description:
      "We build diverse teams and create opportunities for everyone to succeed.",
  },
];

export default function Careers() {
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
              <motion.div
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <Link to="/">
                  <Button
                    variant="outline"
                    size="sm"
                    className="border-brand-200 hover:bg-brand-50"
                  >
                    Back to Home
                  </Button>
                </Link>
              </motion.div>
            </div>
          </div>
        </div>
      </motion.nav>

      {/* Hero Section */}
      <section className="pt-20 pb-16 px-4 sm:px-6 lg:px-8 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-brand-50/40 via-purple-50/40 to-blue-50/40" />
        <div className="absolute -top-24 -right-24 w-96 h-96 bg-gradient-to-br from-brand-400/10 to-purple-400/10 rounded-full blur-3xl" />

        <div className="max-w-4xl mx-auto text-center relative">
          <motion.div
            initial="initial"
            animate="animate"
            variants={staggerContainer}
          >
            <motion.div variants={fadeInUp}>
              <Badge
                variant="secondary"
                className="mb-6 bg-gradient-to-r from-brand-100 to-purple-100 text-brand-700 border-brand-200/50 shadow-sm"
              >
                <Building className="w-4 h-4 mr-2" />
                Join Our Team
              </Badge>
            </motion.div>

            <motion.h1
              variants={fadeInUp}
              className="text-5xl sm:text-6xl font-bold leading-tight mb-6"
            >
              <span className="bg-gradient-to-r from-gray-900 via-brand-800 to-purple-800 bg-clip-text text-transparent">
                Build the Future of
              </span>
              <br />
              <span className="bg-gradient-to-r from-brand-600 to-purple-600 bg-clip-text text-transparent">
                Service Connections
              </span>
            </motion.h1>

            <motion.p
              variants={fadeInUp}
              className="text-xl text-gray-600 max-w-3xl mx-auto mb-8 leading-relaxed"
            >
              Join a team of passionate builders creating AI-powered solutions
              that connect millions of people with trusted professionals. We're
              reshaping how the world thinks about home services.
            </motion.p>

            <motion.div
              variants={fadeInUp}
              className="flex flex-col sm:flex-row gap-4 justify-center"
            >
              <motion.div
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <Button
                  size="lg"
                  className="text-lg px-8 py-4 bg-gradient-to-r from-brand-500 to-purple-600 hover:from-brand-600 hover:to-purple-700 shadow-xl hover:shadow-2xl transition-all duration-300"
                >
                  View Open Positions
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Button>
              </motion.div>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Company Stats */}
      <motion.section
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
        className="py-16 bg-white/50 backdrop-blur-sm"
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            variants={staggerContainer}
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
            className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center"
          >
            <motion.div variants={scaleIn}>
              <div className="text-4xl font-bold bg-gradient-to-r from-brand-600 to-purple-600 bg-clip-text text-transparent">
                150+
              </div>
              <div className="text-gray-600 mt-2 font-medium">Team Members</div>
            </motion.div>
            <motion.div variants={scaleIn}>
              <div className="text-4xl font-bold bg-gradient-to-r from-purple-600 to-blue-600 bg-clip-text text-transparent">
                $50M
              </div>
              <div className="text-gray-600 mt-2 font-medium">
                Series B Funding
              </div>
            </motion.div>
            <motion.div variants={scaleIn}>
              <div className="text-4xl font-bold bg-gradient-to-r from-blue-600 to-brand-600 bg-clip-text text-transparent">
                5★
              </div>
              <div className="text-gray-600 mt-2 font-medium">
                Glassdoor Rating
              </div>
            </motion.div>
            <motion.div variants={scaleIn}>
              <div className="text-4xl font-bold bg-gradient-to-r from-brand-600 to-purple-600 bg-clip-text text-transparent">
                100%
              </div>
              <div className="text-gray-600 mt-2 font-medium">
                Remote Friendly
              </div>
            </motion.div>
          </motion.div>
        </div>
      </motion.section>

      {/* Our Values */}
      <section className="py-20 bg-gradient-to-br from-slate-50 to-brand-50/30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl sm:text-5xl font-bold bg-gradient-to-r from-gray-900 to-brand-800 bg-clip-text text-transparent mb-4">
              Our Values
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              The principles that guide everything we do
            </p>
          </motion.div>

          <motion.div
            variants={staggerContainer}
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
            className="grid md:grid-cols-2 lg:grid-cols-4 gap-8"
          >
            {values.map((value, index) => (
              <motion.div key={index} variants={fadeInUp}>
                <Card className="text-center border-0 shadow-xl bg-white/80 backdrop-blur-sm hover:shadow-2xl transition-all duration-500 group hover:-translate-y-2 h-full">
                  <CardHeader className="pb-4">
                    <motion.div
                      whileHover={{ scale: 1.1, rotate: 360 }}
                      transition={{ duration: 0.5 }}
                      className="w-16 h-16 bg-gradient-to-br from-brand-500 to-purple-500 rounded-2xl flex items-center justify-center mx-auto mb-4 shadow-lg group-hover:shadow-brand-500/25"
                    >
                      <value.icon className="h-8 w-8 text-white" />
                    </motion.div>
                    <CardTitle className="text-xl mb-3">
                      {value.title}
                    </CardTitle>
                    <CardDescription className="text-base leading-relaxed">
                      {value.description}
                    </CardDescription>
                  </CardHeader>
                </Card>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Benefits */}
      <section className="py-20 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-white via-purple-50/20 to-brand-50/20" />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl sm:text-5xl font-bold bg-gradient-to-r from-gray-900 to-brand-800 bg-clip-text text-transparent mb-4">
              Why You'll Love Working Here
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              We believe in taking care of our team so they can do their best
              work
            </p>
          </motion.div>

          <motion.div
            variants={staggerContainer}
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
            className="grid md:grid-cols-2 lg:grid-cols-3 gap-8"
          >
            {benefits.map((benefit, index) => (
              <motion.div key={index} variants={fadeInUp}>
                <Card className="border-0 shadow-xl bg-white/90 backdrop-blur-sm hover:shadow-2xl transition-all duration-500 group hover:-translate-y-2 h-full">
                  <CardHeader>
                    <div className="flex items-start space-x-4">
                      <motion.div
                        whileHover={{ scale: 1.1 }}
                        transition={{ duration: 0.3 }}
                        className="w-12 h-12 bg-gradient-to-br from-brand-100 to-purple-100 rounded-xl flex items-center justify-center flex-shrink-0 group-hover:shadow-lg"
                      >
                        <benefit.icon className="h-6 w-6 text-brand-600" />
                      </motion.div>
                      <div>
                        <CardTitle className="text-lg mb-2">
                          {benefit.title}
                        </CardTitle>
                        <CardDescription className="text-base leading-relaxed">
                          {benefit.description}
                        </CardDescription>
                      </div>
                    </div>
                  </CardHeader>
                </Card>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Open Positions */}
      <section className="py-20 bg-gradient-to-br from-slate-50 to-brand-50/30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl sm:text-5xl font-bold bg-gradient-to-r from-gray-900 to-brand-800 bg-clip-text text-transparent mb-4">
              Open Positions
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Find your next opportunity to make an impact
            </p>
          </motion.div>

          <motion.div
            variants={staggerContainer}
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
            className="space-y-6"
          >
            {jobOpenings.map((job, index) => (
              <motion.div key={index} variants={fadeInUp}>
                <Card className="border-0 shadow-lg bg-white/90 backdrop-blur-sm hover:shadow-xl transition-all duration-300 group hover:-translate-y-1">
                  <CardHeader>
                    <div className="flex flex-col md:flex-row md:items-center justify-between">
                      <div className="flex-1">
                        <div className="flex items-center space-x-3 mb-2">
                          <CardTitle className="text-2xl">
                            {job.title}
                          </CardTitle>
                          <Badge
                            variant="secondary"
                            className="bg-brand-100 text-brand-700"
                          >
                            {job.department}
                          </Badge>
                        </div>
                        <div className="flex flex-wrap items-center gap-4 text-sm text-gray-600 mb-4">
                          <div className="flex items-center">
                            <MapPin className="h-4 w-4 mr-1" />
                            {job.location}
                          </div>
                          <div className="flex items-center">
                            <Clock className="h-4 w-4 mr-1" />
                            {job.type}
                          </div>
                          <div className="flex items-center">
                            <TrendingUp className="h-4 w-4 mr-1" />
                            {job.salary}
                          </div>
                        </div>
                        <CardDescription className="text-base leading-relaxed mb-4">
                          {job.description}
                        </CardDescription>
                        <div className="flex flex-wrap gap-2">
                          {job.skills.map((skill, skillIndex) => (
                            <Badge
                              key={skillIndex}
                              variant="outline"
                              className="text-xs"
                            >
                              {skill}
                            </Badge>
                          ))}
                        </div>
                      </div>
                      <div className="mt-4 md:mt-0 md:ml-6">
                        <motion.div
                          whileHover={{ scale: 1.05 }}
                          whileTap={{ scale: 0.95 }}
                        >
                          <Button className="bg-gradient-to-r from-brand-500 to-purple-600 hover:from-brand-600 hover:to-purple-700 shadow-lg hover:shadow-xl transition-all duration-300">
                            Apply Now
                            <ArrowRight className="ml-2 h-4 w-4" />
                          </Button>
                        </motion.div>
                      </div>
                    </div>
                  </CardHeader>
                </Card>
              </motion.div>
            ))}
          </motion.div>

          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            viewport={{ once: true }}
            className="text-center mt-12"
          >
            <p className="text-gray-600 mb-6">
              Don't see a role that fits? We're always looking for exceptional
              talent.
            </p>
            <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
              <Button
                variant="outline"
                size="lg"
                className="border-brand-200 hover:bg-brand-50 hover:border-brand-300"
              >
                Send Us Your Resume
              </Button>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-brand-600 via-purple-600 to-brand-700 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-brand-600/90 via-purple-600/90 to-brand-700/90" />
        <div className="absolute -top-24 -left-24 w-96 h-96 bg-white/10 rounded-full blur-3xl" />
        <div className="absolute -bottom-24 -right-24 w-96 h-96 bg-white/10 rounded-full blur-3xl" />

        <div className="max-w-4xl mx-auto text-center px-4 sm:px-6 lg:px-8 relative">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl sm:text-5xl font-bold text-white mb-6">
              Ready to Join Our Team?
            </h2>
            <p className="text-xl text-purple-100 mb-8 leading-relaxed">
              Be part of a mission-driven team that's transforming how people
              connect with trusted professionals. Your next adventure starts
              here.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <motion.div
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <Button
                  size="lg"
                  variant="secondary"
                  className="text-lg px-8 py-4 bg-white hover:bg-gray-100 text-brand-600 shadow-xl hover:shadow-2xl transition-all duration-300"
                >
                  Browse Open Roles
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Button>
              </motion.div>
              <motion.div
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <Button
                  size="lg"
                  variant="outline"
                  className="text-lg px-8 py-4 border-white/30 text-white hover:bg-white/10 hover:border-white/50 backdrop-blur-sm transition-all duration-300"
                >
                  Learn About Culture
                </Button>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gradient-to-br from-slate-900 to-slate-800 text-white py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <Link to="/" className="inline-flex items-center mb-4">
              <motion.div
                whileHover={{ rotate: 360 }}
                transition={{ duration: 0.5 }}
                className="h-10 w-10 bg-gradient-to-br from-brand-500 to-purple-500 rounded-xl flex items-center justify-center shadow-lg"
              >
                <Wrench className="h-6 w-6 text-white" />
              </motion.div>
              <span className="ml-3 text-2xl font-bold bg-gradient-to-r from-white to-purple-200 bg-clip-text text-transparent">
                Multitach
              </span>
            </Link>
            <p className="text-slate-400 mb-6">
              Building the future of service connections, one hire at a time.
            </p>
            <div className="flex justify-center space-x-6">
              <motion.a
                whileHover={{ y: -2, color: "#fff" }}
                href="#"
                className="text-slate-400 hover:text-white transition-all duration-200"
              >
                Privacy Policy
              </motion.a>
              <motion.a
                whileHover={{ y: -2, color: "#fff" }}
                href="#"
                className="text-slate-400 hover:text-white transition-all duration-200"
              >
                Equal Opportunity
              </motion.a>
              <motion.a
                whileHover={{ y: -2, color: "#fff" }}
                href="#"
                className="text-slate-400 hover:text-white transition-all duration-200"
              >
                Contact HR
              </motion.a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
