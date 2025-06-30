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
  Users,
  Zap,
  Shield,
  Star,
  CheckCircle,
  ArrowRight,
  Hammer,
  Droplets,
  Thermometer,
  Paintbrush,
  Menu,
  Sparkles,
  Clock,
  Award,
  TrendingUp,
} from "lucide-react";
import { motion } from "framer-motion";

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

const fadeInRight = {
  initial: { opacity: 0, x: 60 },
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

export default function Index() {
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
            <div className="flex items-center">
              <div className="flex-shrink-0 flex items-center">
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
              </div>
            </div>
            <div className="hidden md:block">
              <div className="ml-10 flex items-baseline space-x-8">
                <motion.a
                  whileHover={{ y: -2 }}
                  href="#how-it-works"
                  className="text-gray-600 hover:text-brand-600 px-3 py-2 text-sm font-medium transition-colors"
                >
                  How it Works
                </motion.a>
                <motion.a
                  whileHover={{ y: -2 }}
                  href="#services"
                  className="text-gray-600 hover:text-brand-600 px-3 py-2 text-sm font-medium transition-colors"
                >
                  Services
                </motion.a>
                <motion.a
                  whileHover={{ y: -2 }}
                  href="#for-professionals"
                  className="text-gray-600 hover:text-brand-600 px-3 py-2 text-sm font-medium transition-colors"
                >
                  For Professionals
                </motion.a>
                <motion.div
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <Button
                    variant="outline"
                    size="sm"
                    className="border-brand-200 hover:bg-brand-50"
                  >
                    Sign In
                  </Button>
                </motion.div>
                <motion.div
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <Button
                    size="sm"
                    className="bg-gradient-to-r from-brand-500 to-purple-600 hover:from-brand-600 hover:to-purple-700 shadow-lg"
                  >
                    Get Started
                  </Button>
                </motion.div>
              </div>
            </div>
            <div className="md:hidden">
              <Button variant="ghost" size="icon">
                <Menu className="h-6 w-6" />
              </Button>
            </div>
          </div>
        </div>
      </motion.nav>

      {/* Hero Section */}
      <section className="pt-20 pb-16 px-4 sm:px-6 lg:px-8 relative overflow-hidden">
        {/* Background Elements */}
        <div className="absolute inset-0 bg-gradient-to-br from-brand-50/40 via-purple-50/40 to-blue-50/40" />
        <div className="absolute -top-24 -right-24 w-96 h-96 bg-gradient-to-br from-brand-400/10 to-purple-400/10 rounded-full blur-3xl" />
        <div className="absolute -bottom-24 -left-24 w-96 h-96 bg-gradient-to-br from-purple-400/10 to-blue-400/10 rounded-full blur-3xl" />

        <div className="max-w-7xl mx-auto relative">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial="initial"
              animate="animate"
              variants={staggerContainer}
              className="text-center lg:text-left"
            >
              <motion.div variants={fadeInUp}>
                <Badge
                  variant="secondary"
                  className="mb-6 bg-gradient-to-r from-brand-100 to-purple-100 text-brand-700 border-brand-200/50 shadow-sm"
                >
                  <Sparkles className="w-4 h-4 mr-2" />
                  AI-Powered Service Matching
                </Badge>
              </motion.div>

              <motion.h1
                variants={fadeInUp}
                className="text-5xl sm:text-6xl lg:text-7xl font-bold leading-tight mb-6"
              >
                <span className="bg-gradient-to-r from-gray-900 via-brand-800 to-purple-800 bg-clip-text text-transparent">
                  Connect with Expert
                </span>
                <br />
                <span className="bg-gradient-to-r from-brand-600 to-purple-600 bg-clip-text text-transparent">
                  Maintenance Professionals
                </span>
              </motion.h1>

              <motion.p
                variants={fadeInUp}
                className="text-xl text-gray-600 max-w-2xl mx-auto lg:mx-0 mb-8 leading-relaxed"
              >
                Get matched with the perfect maintenance worker for your needs
                in seconds. From plumbing to HVAC, our AI finds the best
                professionals in your area instantly.
              </motion.p>

              <motion.div
                variants={fadeInUp}
                className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start"
              >
                <motion.div
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <Button
                    size="lg"
                    className="text-lg px-8 py-4 bg-gradient-to-r from-brand-500 to-purple-600 hover:from-brand-600 hover:to-purple-700 shadow-xl hover:shadow-2xl transition-all duration-300"
                  >
                    Find a Professional
                    <ArrowRight className="ml-2 h-5 w-5" />
                  </Button>
                </motion.div>
                <motion.div
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <Button
                    variant="outline"
                    size="lg"
                    className="text-lg px-8 py-4 border-brand-200 hover:bg-brand-50 hover:border-brand-300 transition-all duration-300"
                  >
                    Join as Professional
                  </Button>
                </motion.div>
              </motion.div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="relative"
            >
              <div className="relative rounded-2xl overflow-hidden shadow-2xl">
                <img
                  src="https://images.pexels.com/photos/5691550/pexels-photo-5691550.jpeg"
                  alt="Professional maintenance worker"
                  className="w-full h-[500px] object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent" />

                {/* Floating elements */}
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 1, duration: 0.6 }}
                  className="absolute top-6 right-6 bg-white/90 backdrop-blur-sm rounded-xl p-4 shadow-lg"
                >
                  <div className="flex items-center space-x-2">
                    <div className="w-3 h-3 bg-green-500 rounded-full animate-pulse" />
                    <span className="text-sm font-medium text-gray-800">
                      AI Matching Active
                    </span>
                  </div>
                </motion.div>

                <motion.div
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 1.2, duration: 0.6 }}
                  className="absolute bottom-6 left-6 bg-white/90 backdrop-blur-sm rounded-xl p-4 shadow-lg"
                >
                  <div className="flex items-center space-x-3">
                    <div className="flex -space-x-2">
                      <div className="w-8 h-8 bg-brand-500 rounded-full border-2 border-white" />
                      <div className="w-8 h-8 bg-purple-500 rounded-full border-2 border-white" />
                      <div className="w-8 h-8 bg-blue-500 rounded-full border-2 border-white" />
                    </div>
                    <div>
                      <div className="text-sm font-medium text-gray-800">
                        2,500+ Professionals
                      </div>
                      <div className="text-xs text-gray-600">Ready to help</div>
                    </div>
                  </div>
                </motion.div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
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
                10K+
              </div>
              <div className="text-gray-600 mt-2 font-medium">
                Verified Professionals
              </div>
            </motion.div>
            <motion.div variants={scaleIn}>
              <div className="text-4xl font-bold bg-gradient-to-r from-purple-600 to-blue-600 bg-clip-text text-transparent">
                50K+
              </div>
              <div className="text-gray-600 mt-2 font-medium">
                Jobs Completed
              </div>
            </motion.div>
            <motion.div variants={scaleIn}>
              <div className="text-4xl font-bold bg-gradient-to-r from-blue-600 to-brand-600 bg-clip-text text-transparent">
                4.9
              </div>
              <div className="text-gray-600 mt-2 font-medium">
                Average Rating
              </div>
            </motion.div>
            <motion.div variants={scaleIn}>
              <div className="text-4xl font-bold bg-gradient-to-r from-brand-600 to-purple-600 bg-clip-text text-transparent">
                24/7
              </div>
              <div className="text-gray-600 mt-2 font-medium">
                Support Available
              </div>
            </motion.div>
          </motion.div>
        </div>
      </motion.section>

      {/* How It Works Section */}
      <section
        id="how-it-works"
        className="py-20 bg-gradient-to-br from-slate-50 to-brand-50/30"
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl sm:text-5xl font-bold bg-gradient-to-r from-gray-900 to-brand-800 bg-clip-text text-transparent mb-4">
              How Multitach Works
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Get matched with the perfect professional in minutes
            </p>
          </motion.div>

          <motion.div
            variants={staggerContainer}
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
            className="grid md:grid-cols-3 gap-8"
          >
            <motion.div variants={fadeInUp}>
              <Card className="text-center border-0 shadow-xl bg-white/80 backdrop-blur-sm hover:shadow-2xl transition-all duration-500 group hover:-translate-y-2">
                <CardHeader className="pb-4">
                  <motion.div
                    whileHover={{ scale: 1.1, rotate: 360 }}
                    transition={{ duration: 0.5 }}
                    className="w-20 h-20 bg-gradient-to-br from-brand-500 to-purple-500 rounded-2xl flex items-center justify-center mx-auto mb-6 shadow-lg group-hover:shadow-brand-500/25"
                  >
                    <Users className="h-10 w-10 text-white" />
                  </motion.div>
                  <CardTitle className="text-2xl mb-4">
                    1. Tell Us What You Need
                  </CardTitle>
                  <CardDescription className="text-base leading-relaxed">
                    Describe your maintenance job and requirements. Our smart
                    form captures all the details to find your perfect match.
                  </CardDescription>
                </CardHeader>
              </Card>
            </motion.div>

            <motion.div variants={fadeInUp}>
              <Card className="text-center border-0 shadow-xl bg-white/80 backdrop-blur-sm hover:shadow-2xl transition-all duration-500 group hover:-translate-y-2">
                <CardHeader className="pb-4">
                  <motion.div
                    whileHover={{ scale: 1.1 }}
                    transition={{ duration: 0.5 }}
                    className="w-20 h-20 bg-gradient-to-br from-purple-500 to-blue-500 rounded-2xl flex items-center justify-center mx-auto mb-6 shadow-lg group-hover:shadow-purple-500/25"
                  >
                    <Zap className="h-10 w-10 text-white" />
                  </motion.div>
                  <CardTitle className="text-2xl mb-4">
                    2. AI Finds Perfect Matches
                  </CardTitle>
                  <CardDescription className="text-base leading-relaxed">
                    Our AI analyzes thousands of professionals to find the best
                    matches based on skills, location, and availability.
                  </CardDescription>
                </CardHeader>
              </Card>
            </motion.div>

            <motion.div variants={fadeInUp}>
              <Card className="text-center border-0 shadow-xl bg-white/80 backdrop-blur-sm hover:shadow-2xl transition-all duration-500 group hover:-translate-y-2">
                <CardHeader className="pb-4">
                  <motion.div
                    whileHover={{ scale: 1.1 }}
                    transition={{ duration: 0.5 }}
                    className="w-20 h-20 bg-gradient-to-br from-blue-500 to-brand-500 rounded-2xl flex items-center justify-center mx-auto mb-6 shadow-lg group-hover:shadow-blue-500/25"
                  >
                    <CheckCircle className="h-10 w-10 text-white" />
                  </motion.div>
                  <CardTitle className="text-2xl mb-4">
                    3. Get Connected & Done
                  </CardTitle>
                  <CardDescription className="text-base leading-relaxed">
                    Connect with your matched professional, schedule the work,
                    and get it done right the first time.
                  </CardDescription>
                </CardHeader>
              </Card>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Services Section */}
      <section id="services" className="py-20 relative overflow-hidden">
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
              Our Services
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Professional maintenance services for every need
            </p>
          </motion.div>

          <motion.div
            variants={staggerContainer}
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
            className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6"
          >
            <motion.div variants={fadeInUp}>
              <Card className="overflow-hidden border-0 shadow-xl hover:shadow-2xl transition-all duration-500 group hover:-translate-y-2 bg-white/90 backdrop-blur-sm">
                <div className="aspect-video relative overflow-hidden">
                  <img
                    src="https://images.pexels.com/photos/8486923/pexels-photo-8486923.jpeg"
                    alt="Professional plumber at work"
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-blue-900/60 to-transparent" />
                  <div className="absolute bottom-4 left-4">
                    <div className="w-12 h-12 bg-blue-500/90 backdrop-blur-sm rounded-xl flex items-center justify-center">
                      <Droplets className="h-6 w-6 text-white" />
                    </div>
                  </div>
                </div>
                <CardHeader>
                  <CardTitle className="text-xl">Plumbing</CardTitle>
                  <CardDescription className="leading-relaxed">
                    Leaks, installations, repairs, and emergency plumbing
                    services from certified professionals.
                  </CardDescription>
                </CardHeader>
              </Card>
            </motion.div>

            <motion.div variants={fadeInUp}>
              <Card className="overflow-hidden border-0 shadow-xl hover:shadow-2xl transition-all duration-500 group hover:-translate-y-2 bg-white/90 backdrop-blur-sm">
                <div className="aspect-video relative overflow-hidden">
                  <img
                    src="https://images.pexels.com/photos/6755174/pexels-photo-6755174.jpeg"
                    alt="HVAC technician working"
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-orange-900/60 to-transparent" />
                  <div className="absolute bottom-4 left-4">
                    <div className="w-12 h-12 bg-orange-500/90 backdrop-blur-sm rounded-xl flex items-center justify-center">
                      <Thermometer className="h-6 w-6 text-white" />
                    </div>
                  </div>
                </div>
                <CardHeader>
                  <CardTitle className="text-xl">HVAC</CardTitle>
                  <CardDescription className="leading-relaxed">
                    Heating, cooling, ventilation, and air quality solutions for
                    optimal comfort.
                  </CardDescription>
                </CardHeader>
              </Card>
            </motion.div>

            <motion.div variants={fadeInUp}>
              <Card className="overflow-hidden border-0 shadow-xl hover:shadow-2xl transition-all duration-500 group hover:-translate-y-2 bg-white/90 backdrop-blur-sm">
                <div className="aspect-video relative overflow-hidden">
                  <img
                    src="https://images.pexels.com/photos/4491851/pexels-photo-4491851.jpeg"
                    alt="Carpenter with woodworking tools"
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-amber-900/60 to-transparent" />
                  <div className="absolute bottom-4 left-4">
                    <div className="w-12 h-12 bg-amber-500/90 backdrop-blur-sm rounded-xl flex items-center justify-center">
                      <Hammer className="h-6 w-6 text-white" />
                    </div>
                  </div>
                </div>
                <CardHeader>
                  <CardTitle className="text-xl">Carpentry</CardTitle>
                  <CardDescription className="leading-relaxed">
                    Custom builds, repairs, installations, and expert
                    woodworking services.
                  </CardDescription>
                </CardHeader>
              </Card>
            </motion.div>

            <motion.div variants={fadeInUp}>
              <Card className="overflow-hidden border-0 shadow-xl hover:shadow-2xl transition-all duration-500 group hover:-translate-y-2 bg-white/90 backdrop-blur-sm">
                <div className="aspect-video relative overflow-hidden bg-gradient-to-br from-green-400 to-emerald-600 flex items-center justify-center">
                  <Paintbrush className="h-16 w-16 text-white/80" />
                  <div className="absolute bottom-4 left-4">
                    <div className="w-12 h-12 bg-green-500/90 backdrop-blur-sm rounded-xl flex items-center justify-center">
                      <Paintbrush className="h-6 w-6 text-white" />
                    </div>
                  </div>
                </div>
                <CardHeader>
                  <CardTitle className="text-xl">General Repairs</CardTitle>
                  <CardDescription className="leading-relaxed">
                    Handyman services, maintenance, and comprehensive home
                    improvements.
                  </CardDescription>
                </CardHeader>
              </Card>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* For Professionals Section */}
      <section
        id="for-professionals"
        className="py-20 bg-gradient-to-br from-slate-900 via-purple-900/10 to-slate-900 text-white relative overflow-hidden"
      >
        <div className="absolute inset-0 bg-gradient-to-br from-slate-900/95 to-purple-900/20" />
        <div className="absolute -top-24 -right-24 w-96 h-96 bg-gradient-to-br from-brand-500/10 to-purple-500/10 rounded-full blur-3xl" />

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial="initial"
              whileInView="animate"
              variants={staggerContainer}
              viewport={{ once: true }}
            >
              <motion.h2
                variants={fadeInLeft}
                className="text-4xl sm:text-5xl font-bold mb-6"
              >
                <span className="bg-gradient-to-r from-white to-purple-200 bg-clip-text text-transparent">
                  Join Multitach as a Professional
                </span>
              </motion.h2>

              <motion.p
                variants={fadeInLeft}
                className="text-xl text-slate-300 mb-8 leading-relaxed"
              >
                Grow your business with a steady stream of qualified leads. Our
                AI matches you with clients who need exactly what you offer.
              </motion.p>

              <motion.div variants={fadeInLeft} className="space-y-4 mb-8">
                <div className="flex items-center group">
                  <motion.div
                    whileHover={{ scale: 1.2, rotate: 360 }}
                    transition={{ duration: 0.3 }}
                  >
                    <CheckCircle className="h-6 w-6 text-brand-400 mr-4" />
                  </motion.div>
                  <span className="group-hover:text-white transition-colors">
                    Get matched with qualified clients automatically
                  </span>
                </div>
                <div className="flex items-center group">
                  <motion.div
                    whileHover={{ scale: 1.2, rotate: 360 }}
                    transition={{ duration: 0.3 }}
                  >
                    <Clock className="h-6 w-6 text-brand-400 mr-4" />
                  </motion.div>
                  <span className="group-hover:text-white transition-colors">
                    Set your own rates and schedule
                  </span>
                </div>
                <div className="flex items-center group">
                  <motion.div
                    whileHover={{ scale: 1.2, rotate: 360 }}
                    transition={{ duration: 0.3 }}
                  >
                    <Shield className="h-6 w-6 text-brand-400 mr-4" />
                  </motion.div>
                  <span className="group-hover:text-white transition-colors">
                    Fast, secure payments
                  </span>
                </div>
                <div className="flex items-center group">
                  <motion.div
                    whileHover={{ scale: 1.2, rotate: 360 }}
                    transition={{ duration: 0.3 }}
                  >
                    <Award className="h-6 w-6 text-brand-400 mr-4" />
                  </motion.div>
                  <span className="group-hover:text-white transition-colors">
                    Build your reputation with reviews
                  </span>
                </div>
              </motion.div>

              <motion.div variants={fadeInLeft}>
                <motion.div
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <Button
                    size="lg"
                    className="bg-gradient-to-r from-brand-600 to-purple-600 hover:from-brand-700 hover:to-purple-700 shadow-xl hover:shadow-2xl transition-all duration-300"
                  >
                    Apply to Join
                    <ArrowRight className="ml-2 h-5 w-5" />
                  </Button>
                </motion.div>
              </motion.div>
            </motion.div>

            <motion.div
              variants={staggerContainer}
              initial="initial"
              whileInView="animate"
              viewport={{ once: true }}
              className="grid grid-cols-2 gap-6"
            >
              <motion.div variants={scaleIn}>
                <Card className="bg-slate-800/50 border-slate-700/50 backdrop-blur-sm hover:bg-slate-800/70 transition-all duration-300 group">
                  <CardHeader className="text-center">
                    <motion.div
                      whileHover={{ scale: 1.1 }}
                      className="text-3xl font-bold bg-gradient-to-r from-brand-400 to-purple-400 bg-clip-text text-transparent group-hover:from-brand-300 group-hover:to-purple-300"
                    >
                      $75K+
                    </motion.div>
                    <CardDescription className="text-slate-400 group-hover:text-slate-300">
                      Average Annual Earnings
                    </CardDescription>
                  </CardHeader>
                </Card>
              </motion.div>

              <motion.div variants={scaleIn}>
                <Card className="bg-slate-800/50 border-slate-700/50 backdrop-blur-sm hover:bg-slate-800/70 transition-all duration-300 group">
                  <CardHeader className="text-center">
                    <motion.div
                      whileHover={{ scale: 1.1 }}
                      className="text-3xl font-bold bg-gradient-to-r from-brand-400 to-purple-400 bg-clip-text text-transparent group-hover:from-brand-300 group-hover:to-purple-300"
                    >
                      4.8★
                    </motion.div>
                    <CardDescription className="text-slate-400 group-hover:text-slate-300">
                      Average Professional Rating
                    </CardDescription>
                  </CardHeader>
                </Card>
              </motion.div>

              <motion.div variants={scaleIn}>
                <Card className="bg-slate-800/50 border-slate-700/50 backdrop-blur-sm hover:bg-slate-800/70 transition-all duration-300 group">
                  <CardHeader className="text-center">
                    <motion.div
                      whileHover={{ scale: 1.1 }}
                      className="text-3xl font-bold bg-gradient-to-r from-brand-400 to-purple-400 bg-clip-text text-transparent group-hover:from-brand-300 group-hover:to-purple-300"
                    >
                      2,500+
                    </motion.div>
                    <CardDescription className="text-slate-400 group-hover:text-slate-300">
                      Active Professionals
                    </CardDescription>
                  </CardHeader>
                </Card>
              </motion.div>

              <motion.div variants={scaleIn}>
                <Card className="bg-slate-800/50 border-slate-700/50 backdrop-blur-sm hover:bg-slate-800/70 transition-all duration-300 group">
                  <CardHeader className="text-center">
                    <motion.div
                      whileHover={{ scale: 1.1 }}
                      className="text-3xl font-bold bg-gradient-to-r from-brand-400 to-purple-400 bg-clip-text text-transparent group-hover:from-brand-300 group-hover:to-purple-300"
                    >
                      24hr
                    </motion.div>
                    <CardDescription className="text-slate-400 group-hover:text-slate-300">
                      Average Response Time
                    </CardDescription>
                  </CardHeader>
                </Card>
              </motion.div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-20 bg-gradient-to-br from-white via-purple-50/20 to-brand-50/20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl sm:text-5xl font-bold bg-gradient-to-r from-gray-900 to-brand-800 bg-clip-text text-transparent mb-4">
              What Our Customers Say
            </h2>
            <p className="text-xl text-gray-600">
              Real stories from satisfied customers and professionals
            </p>
          </motion.div>

          <motion.div
            variants={staggerContainer}
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
            className="grid md:grid-cols-3 gap-8"
          >
            <motion.div variants={fadeInUp}>
              <Card className="border-0 shadow-xl bg-white/90 backdrop-blur-sm hover:shadow-2xl transition-all duration-500 hover:-translate-y-2">
                <CardHeader className="pb-6">
                  <div className="flex items-center justify-between mb-4">
                    <div className="flex text-yellow-400">
                      {[...Array(5)].map((_, i) => (
                        <motion.div
                          key={i}
                          initial={{ opacity: 0, scale: 0 }}
                          whileInView={{ opacity: 1, scale: 1 }}
                          transition={{ delay: i * 0.1, duration: 0.3 }}
                          viewport={{ once: true }}
                        >
                          <Star className="h-5 w-5 fill-current" />
                        </motion.div>
                      ))}
                    </div>
                    <TrendingUp className="h-5 w-5 text-green-500" />
                  </div>
                  <CardDescription className="text-base leading-relaxed text-gray-700">
                    "Found an amazing plumber through Multitach in just 10
                    minutes. The AI matching really works - he was perfect for
                    my specific problem and very affordable."
                  </CardDescription>
                  <div className="mt-6 flex items-center space-x-3">
                    <div className="w-12 h-12 bg-gradient-to-br from-brand-400 to-purple-400 rounded-full flex items-center justify-center text-white font-bold">
                      SJ
                    </div>
                    <div>
                      <div className="font-semibold text-gray-900">
                        Sarah Johnson
                      </div>
                      <div className="text-sm text-gray-500">
                        Homeowner, Seattle
                      </div>
                    </div>
                  </div>
                </CardHeader>
              </Card>
            </motion.div>

            <motion.div variants={fadeInUp}>
              <Card className="border-0 shadow-xl bg-white/90 backdrop-blur-sm hover:shadow-2xl transition-all duration-500 hover:-translate-y-2">
                <CardHeader className="pb-6">
                  <div className="flex items-center justify-between mb-4">
                    <div className="flex text-yellow-400">
                      {[...Array(5)].map((_, i) => (
                        <motion.div
                          key={i}
                          initial={{ opacity: 0, scale: 0 }}
                          whileInView={{ opacity: 1, scale: 1 }}
                          transition={{ delay: i * 0.1, duration: 0.3 }}
                          viewport={{ once: true }}
                        >
                          <Star className="h-5 w-5 fill-current" />
                        </motion.div>
                      ))}
                    </div>
                    <TrendingUp className="h-5 w-5 text-green-500" />
                  </div>
                  <CardDescription className="text-base leading-relaxed text-gray-700">
                    "As an HVAC professional, Multitach has transformed my
                    business. I get steady, quality leads without having to
                    chase down work. The platform just works."
                  </CardDescription>
                  <div className="mt-6 flex items-center space-x-3">
                    <div className="w-12 h-12 bg-gradient-to-br from-purple-400 to-blue-400 rounded-full flex items-center justify-center text-white font-bold">
                      MR
                    </div>
                    <div>
                      <div className="font-semibold text-gray-900">
                        Mike Rodriguez
                      </div>
                      <div className="text-sm text-gray-500">
                        HVAC Technician, Denver
                      </div>
                    </div>
                  </div>
                </CardHeader>
              </Card>
            </motion.div>

            <motion.div variants={fadeInUp}>
              <Card className="border-0 shadow-xl bg-white/90 backdrop-blur-sm hover:shadow-2xl transition-all duration-500 hover:-translate-y-2">
                <CardHeader className="pb-6">
                  <div className="flex items-center justify-between mb-4">
                    <div className="flex text-yellow-400">
                      {[...Array(5)].map((_, i) => (
                        <motion.div
                          key={i}
                          initial={{ opacity: 0, scale: 0 }}
                          whileInView={{ opacity: 1, scale: 1 }}
                          transition={{ delay: i * 0.1, duration: 0.3 }}
                          viewport={{ once: true }}
                        >
                          <Star className="h-5 w-5 fill-current" />
                        </motion.div>
                      ))}
                    </div>
                    <TrendingUp className="h-5 w-5 text-green-500" />
                  </div>
                  <CardDescription className="text-base leading-relaxed text-gray-700">
                    "The quality of professionals on Multitach is outstanding.
                    Every carpenter I've hired has been skilled, professional,
                    and reliable. Highly recommend!"
                  </CardDescription>
                  <div className="mt-6 flex items-center space-x-3">
                    <div className="w-12 h-12 bg-gradient-to-br from-blue-400 to-brand-400 rounded-full flex items-center justify-center text-white font-bold">
                      DC
                    </div>
                    <div>
                      <div className="font-semibold text-gray-900">
                        David Chen
                      </div>
                      <div className="text-sm text-gray-500">
                        Business Owner, Austin
                      </div>
                    </div>
                  </div>
                </CardHeader>
              </Card>
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
              Ready to Get Started with Multitach?
            </h2>
            <p className="text-xl text-purple-100 mb-8 leading-relaxed">
              Join thousands of satisfied customers and professionals. Get
              matched with the perfect maintenance worker today.
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
                  Find a Professional
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
                  Become a Professional
                </Button>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gradient-to-br from-slate-900 to-slate-800 text-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            variants={staggerContainer}
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
            className="grid md:grid-cols-4 gap-8"
          >
            <motion.div variants={fadeInUp}>
              <div className="flex items-center mb-6">
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
              </div>
              <p className="text-slate-400 leading-relaxed">
                Connecting clients with expert maintenance professionals through
                AI-powered matching for a better tomorrow.
              </p>
            </motion.div>

            <motion.div variants={fadeInUp}>
              <h3 className="font-semibold mb-6 text-lg">For Customers</h3>
              <ul className="space-y-3 text-slate-400">
                <li>
                  <motion.a
                    whileHover={{ x: 4, color: "#fff" }}
                    href="#"
                    className="hover:text-white transition-all duration-200"
                  >
                    Find Professionals
                  </motion.a>
                </li>
                <li>
                  <motion.a
                    whileHover={{ x: 4, color: "#fff" }}
                    href="#"
                    className="hover:text-white transition-all duration-200"
                  >
                    How It Works
                  </motion.a>
                </li>
                <li>
                  <motion.a
                    whileHover={{ x: 4, color: "#fff" }}
                    href="#"
                    className="hover:text-white transition-all duration-200"
                  >
                    Pricing
                  </motion.a>
                </li>
                <li>
                  <motion.a
                    whileHover={{ x: 4, color: "#fff" }}
                    href="#"
                    className="hover:text-white transition-all duration-200"
                  >
                    Safety
                  </motion.a>
                </li>
              </ul>
            </motion.div>

            <motion.div variants={fadeInUp}>
              <h3 className="font-semibold mb-6 text-lg">For Professionals</h3>
              <ul className="space-y-3 text-slate-400">
                <li>
                  <motion.a
                    whileHover={{ x: 4, color: "#fff" }}
                    href="#"
                    className="hover:text-white transition-all duration-200"
                  >
                    Join Multitach
                  </motion.a>
                </li>
                <li>
                  <motion.a
                    whileHover={{ x: 4, color: "#fff" }}
                    href="#"
                    className="hover:text-white transition-all duration-200"
                  >
                    Professional App
                  </motion.a>
                </li>
                <li>
                  <motion.a
                    whileHover={{ x: 4, color: "#fff" }}
                    href="#"
                    className="hover:text-white transition-all duration-200"
                  >
                    Resources
                  </motion.a>
                </li>
                <li>
                  <motion.a
                    whileHover={{ x: 4, color: "#fff" }}
                    href="#"
                    className="hover:text-white transition-all duration-200"
                  >
                    Success Stories
                  </motion.a>
                </li>
              </ul>
            </motion.div>

            <motion.div variants={fadeInUp}>
              <h3 className="font-semibold mb-6 text-lg">Company</h3>
              <ul className="space-y-3 text-slate-400">
                <li>
                  <motion.a
                    whileHover={{ x: 4, color: "#fff" }}
                    href="#"
                    className="hover:text-white transition-all duration-200"
                  >
                    About Us
                  </motion.a>
                </li>
                <li>
                  <motion.a
                    whileHover={{ x: 4, color: "#fff" }}
                    href="#"
                    className="hover:text-white transition-all duration-200"
                  >
                    Contact
                  </motion.a>
                </li>
                <li>
                  <motion.a
                    whileHover={{ x: 4, color: "#fff" }}
                    href="/careers"
                    className="hover:text-white transition-all duration-200"
                  >
                    Careers
                  </motion.a>
                </li>
                <li>
                  <motion.a
                    whileHover={{ x: 4, color: "#fff" }}
                    href="#"
                    className="hover:text-white transition-all duration-200"
                  >
                    Press
                  </motion.a>
                </li>
              </ul>
            </motion.div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            viewport={{ once: true }}
            className="border-t border-slate-700 mt-12 pt-8"
          >
            <div className="flex flex-col md:flex-row justify-between items-center">
              <p className="text-slate-400">
                © 2024 Multitach. All rights reserved.
              </p>
              <div className="flex space-x-6 mt-4 md:mt-0">
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
                  Terms of Service
                </motion.a>
                <motion.a
                  whileHover={{ y: -2, color: "#fff" }}
                  href="#"
                  className="text-slate-400 hover:text-white transition-all duration-200"
                >
                  Cookie Policy
                </motion.a>
              </div>
            </div>
          </motion.div>
        </div>
      </footer>
    </div>
  );
}
