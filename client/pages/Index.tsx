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
} from "lucide-react";

export default function Index() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-white to-slate-50">
      {/* Navigation */}
      <nav className="border-b bg-white/95 backdrop-blur supports-[backdrop-filter]:bg-white/60 sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <div className="flex items-center">
              <div className="flex-shrink-0 flex items-center">
                <div className="h-8 w-8 bg-brand-500 rounded-lg flex items-center justify-center">
                  <Wrench className="h-5 w-5 text-white" />
                </div>
                <span className="ml-2 text-xl font-bold text-gray-900">
                  Multitach
                </span>
              </div>
            </div>
            <div className="hidden md:block">
              <div className="ml-10 flex items-baseline space-x-8">
                <a
                  href="#how-it-works"
                  className="text-gray-600 hover:text-gray-900 px-3 py-2 text-sm font-medium"
                >
                  How it Works
                </a>
                <a
                  href="#services"
                  className="text-gray-600 hover:text-gray-900 px-3 py-2 text-sm font-medium"
                >
                  Services
                </a>
                <a
                  href="#for-professionals"
                  className="text-gray-600 hover:text-gray-900 px-3 py-2 text-sm font-medium"
                >
                  For Professionals
                </a>
                <Button variant="outline" size="sm">
                  Sign In
                </Button>
                <Button size="sm">Get Started</Button>
              </div>
            </div>
            <div className="md:hidden">
              <Button variant="ghost" size="icon">
                <Menu className="h-6 w-6" />
              </Button>
            </div>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="pt-20 pb-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center">
            <Badge
              variant="secondary"
              className="mb-4 bg-brand-50 text-brand-700 border-brand-200"
            >
              AI-Powered Service Matching
            </Badge>
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-gray-900 leading-tight">
              Connect with Expert
              <br />
              <span className="text-brand-600">Maintenance Professionals</span>
            </h1>
            <p className="mt-6 text-xl text-gray-600 max-w-3xl mx-auto">
              Get matched with the perfect maintenance worker for your needs.
              From plumbing to HVAC, our AI finds the best professionals in your
              area instantly.
            </p>
            <div className="mt-10 flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" className="text-lg px-8 py-4">
                Find a Professional
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
              <Button variant="outline" size="lg" className="text-lg px-8 py-4">
                Join as Professional
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            <div>
              <div className="text-3xl font-bold text-brand-600">10K+</div>
              <div className="text-gray-600 mt-2">Verified Professionals</div>
            </div>
            <div>
              <div className="text-3xl font-bold text-brand-600">50K+</div>
              <div className="text-gray-600 mt-2">Jobs Completed</div>
            </div>
            <div>
              <div className="text-3xl font-bold text-brand-600">4.9</div>
              <div className="text-gray-600 mt-2">Average Rating</div>
            </div>
            <div>
              <div className="text-3xl font-bold text-brand-600">24/7</div>
              <div className="text-gray-600 mt-2">Support Available</div>
            </div>
          </div>
        </div>
      </section>

      {/* How It Works Section */}
      <section id="how-it-works" className="py-20 bg-slate-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold text-gray-900">
              How Multitach Works
            </h2>
            <p className="mt-4 text-xl text-gray-600">
              Get matched with the perfect professional in minutes
            </p>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            <Card className="text-center border-0 shadow-lg">
              <CardHeader>
                <div className="w-16 h-16 bg-brand-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Users className="h-8 w-8 text-brand-600" />
                </div>
                <CardTitle>1. Tell Us What You Need</CardTitle>
                <CardDescription>
                  Describe your maintenance job and requirements. Our smart form
                  captures all the details.
                </CardDescription>
              </CardHeader>
            </Card>
            <Card className="text-center border-0 shadow-lg">
              <CardHeader>
                <div className="w-16 h-16 bg-brand-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Zap className="h-8 w-8 text-brand-600" />
                </div>
                <CardTitle>2. AI Finds Perfect Matches</CardTitle>
                <CardDescription>
                  Our AI analyzes thousands of professionals to find the best
                  matches based on skills, location, and availability.
                </CardDescription>
              </CardHeader>
            </Card>
            <Card className="text-center border-0 shadow-lg">
              <CardHeader>
                <div className="w-16 h-16 bg-brand-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <CheckCircle className="h-8 w-8 text-brand-600" />
                </div>
                <CardTitle>3. Get Connected & Done</CardTitle>
                <CardDescription>
                  Connect with your matched professional, schedule the work, and
                  get it done right the first time.
                </CardDescription>
              </CardHeader>
            </Card>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section id="services" className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold text-gray-900">
              Our Services
            </h2>
            <p className="mt-4 text-xl text-gray-600">
              Professional maintenance services for every need
            </p>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            <Card className="hover:shadow-lg transition-shadow">
              <CardHeader className="text-center">
                <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mx-auto mb-4">
                  <Droplets className="h-6 w-6 text-blue-600" />
                </div>
                <CardTitle className="text-lg">Plumbing</CardTitle>
                <CardDescription>
                  Leaks, installations, repairs, and emergency plumbing services
                </CardDescription>
              </CardHeader>
            </Card>
            <Card className="hover:shadow-lg transition-shadow">
              <CardHeader className="text-center">
                <div className="w-12 h-12 bg-orange-100 rounded-lg flex items-center justify-center mx-auto mb-4">
                  <Thermometer className="h-6 w-6 text-orange-600" />
                </div>
                <CardTitle className="text-lg">HVAC</CardTitle>
                <CardDescription>
                  Heating, cooling, ventilation, and air quality solutions
                </CardDescription>
              </CardHeader>
            </Card>
            <Card className="hover:shadow-lg transition-shadow">
              <CardHeader className="text-center">
                <div className="w-12 h-12 bg-amber-100 rounded-lg flex items-center justify-center mx-auto mb-4">
                  <Hammer className="h-6 w-6 text-amber-600" />
                </div>
                <CardTitle className="text-lg">Carpentry</CardTitle>
                <CardDescription>
                  Custom builds, repairs, installations, and woodworking
                </CardDescription>
              </CardHeader>
            </Card>
            <Card className="hover:shadow-lg transition-shadow">
              <CardHeader className="text-center">
                <div className="w-12 h-12 bg-green-100 rounded-lg flex items-center justify-center mx-auto mb-4">
                  <Paintbrush className="h-6 w-6 text-green-600" />
                </div>
                <CardTitle className="text-lg">General Repairs</CardTitle>
                <CardDescription>
                  Handyman services, maintenance, and home improvements
                </CardDescription>
              </CardHeader>
            </Card>
          </div>
        </div>
      </section>

      {/* For Professionals Section */}
      <section id="for-professionals" className="py-20 bg-slate-900 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl sm:text-4xl font-bold mb-6">
                Join Multitach as a Professional
              </h2>
              <p className="text-xl text-slate-300 mb-8">
                Grow your business with a steady stream of qualified leads. Our
                AI matches you with clients who need exactly what you offer.
              </p>
              <div className="space-y-4 mb-8">
                <div className="flex items-center">
                  <CheckCircle className="h-5 w-5 text-brand-400 mr-3" />
                  <span>Get matched with qualified clients automatically</span>
                </div>
                <div className="flex items-center">
                  <CheckCircle className="h-5 w-5 text-brand-400 mr-3" />
                  <span>Set your own rates and schedule</span>
                </div>
                <div className="flex items-center">
                  <CheckCircle className="h-5 w-5 text-brand-400 mr-3" />
                  <span>Fast, secure payments</span>
                </div>
                <div className="flex items-center">
                  <CheckCircle className="h-5 w-5 text-brand-400 mr-3" />
                  <span>Build your reputation with reviews</span>
                </div>
              </div>
              <Button size="lg" className="bg-brand-600 hover:bg-brand-700">
                Apply to Join
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
            </div>
            <div className="grid grid-cols-2 gap-6">
              <Card className="bg-slate-800 border-slate-700">
                <CardHeader className="text-center">
                  <div className="text-2xl font-bold text-brand-400">$75K+</div>
                  <CardDescription className="text-slate-400">
                    Average Annual Earnings
                  </CardDescription>
                </CardHeader>
              </Card>
              <Card className="bg-slate-800 border-slate-700">
                <CardHeader className="text-center">
                  <div className="text-2xl font-bold text-brand-400">4.8★</div>
                  <CardDescription className="text-slate-400">
                    Average Professional Rating
                  </CardDescription>
                </CardHeader>
              </Card>
              <Card className="bg-slate-800 border-slate-700">
                <CardHeader className="text-center">
                  <div className="text-2xl font-bold text-brand-400">
                    2,500+
                  </div>
                  <CardDescription className="text-slate-400">
                    Active Professionals
                  </CardDescription>
                </CardHeader>
              </Card>
              <Card className="bg-slate-800 border-slate-700">
                <CardHeader className="text-center">
                  <div className="text-2xl font-bold text-brand-400">24hr</div>
                  <CardDescription className="text-slate-400">
                    Average Response Time
                  </CardDescription>
                </CardHeader>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold text-gray-900">
              What Our Customers Say
            </h2>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            <Card className="border-0 shadow-lg">
              <CardHeader>
                <div className="flex items-center mb-4">
                  <div className="flex text-yellow-400">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} className="h-4 w-4 fill-current" />
                    ))}
                  </div>
                </div>
                <CardDescription className="text-base">
                  "Found an amazing plumber through Multitach in just 10
                  minutes. The AI matching really works - he was perfect for my
                  specific problem and very affordable."
                </CardDescription>
                <div className="mt-4">
                  <div className="font-semibold">Sarah Johnson</div>
                  <div className="text-sm text-gray-500">
                    Homeowner, Seattle
                  </div>
                </div>
              </CardHeader>
            </Card>
            <Card className="border-0 shadow-lg">
              <CardHeader>
                <div className="flex items-center mb-4">
                  <div className="flex text-yellow-400">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} className="h-4 w-4 fill-current" />
                    ))}
                  </div>
                </div>
                <CardDescription className="text-base">
                  "As an HVAC professional, Multitach has transformed my
                  business. I get steady, quality leads without having to chase
                  down work. The platform just works."
                </CardDescription>
                <div className="mt-4">
                  <div className="font-semibold">Mike Rodriguez</div>
                  <div className="text-sm text-gray-500">
                    HVAC Technician, Denver
                  </div>
                </div>
              </CardHeader>
            </Card>
            <Card className="border-0 shadow-lg">
              <CardHeader>
                <div className="flex items-center mb-4">
                  <div className="flex text-yellow-400">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} className="h-4 w-4 fill-current" />
                    ))}
                  </div>
                </div>
                <CardDescription className="text-base">
                  "The quality of professionals on Multitach is outstanding.
                  Every carpenter I've hired has been skilled, professional, and
                  reliable. Highly recommend!"
                </CardDescription>
                <div className="mt-4">
                  <div className="font-semibold">David Chen</div>
                  <div className="text-sm text-gray-500">
                    Business Owner, Austin
                  </div>
                </div>
              </CardHeader>
            </Card>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-brand-600">
        <div className="max-w-4xl mx-auto text-center px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl sm:text-4xl font-bold text-white mb-6">
            Ready to Get Started with Multitach?
          </h2>
          <p className="text-xl text-brand-100 mb-8">
            Join thousands of satisfied customers and professionals. Get matched
            with the perfect maintenance worker today.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" variant="secondary" className="text-lg px-8 py-4">
              Find a Professional
              <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="text-lg px-8 py-4 border-white text-white hover:bg-white hover:text-brand-600"
            >
              Become a Professional
            </Button>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-slate-900 text-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-4 gap-8">
            <div>
              <div className="flex items-center mb-4">
                <div className="h-8 w-8 bg-brand-500 rounded-lg flex items-center justify-center">
                  <Wrench className="h-5 w-5 text-white" />
                </div>
                <span className="ml-2 text-xl font-bold">Multitach</span>
              </div>
              <p className="text-slate-400">
                Connecting clients with expert maintenance professionals through
                AI-powered matching.
              </p>
            </div>
            <div>
              <h3 className="font-semibold mb-4">For Customers</h3>
              <ul className="space-y-2 text-slate-400">
                <li>
                  <a href="#" className="hover:text-white">
                    Find Professionals
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-white">
                    How It Works
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-white">
                    Pricing
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-white">
                    Safety
                  </a>
                </li>
              </ul>
            </div>
            <div>
              <h3 className="font-semibold mb-4">For Professionals</h3>
              <ul className="space-y-2 text-slate-400">
                <li>
                  <a href="#" className="hover:text-white">
                    Join Multitach
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-white">
                    Professional App
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-white">
                    Resources
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-white">
                    Success Stories
                  </a>
                </li>
              </ul>
            </div>
            <div>
              <h3 className="font-semibold mb-4">Company</h3>
              <ul className="space-y-2 text-slate-400">
                <li>
                  <a href="#" className="hover:text-white">
                    About Us
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-white">
                    Contact
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-white">
                    Careers
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-white">
                    Press
                  </a>
                </li>
              </ul>
            </div>
          </div>
          <div className="border-t border-slate-800 mt-12 pt-8">
            <div className="flex flex-col md:flex-row justify-between items-center">
              <p className="text-slate-400">
                © 2024 Multitach. All rights reserved.
              </p>
              <div className="flex space-x-6 mt-4 md:mt-0">
                <a href="#" className="text-slate-400 hover:text-white">
                  Privacy Policy
                </a>
                <a href="#" className="text-slate-400 hover:text-white">
                  Terms of Service
                </a>
                <a href="#" className="text-slate-400 hover:text-white">
                  Cookie Policy
                </a>
              </div>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
