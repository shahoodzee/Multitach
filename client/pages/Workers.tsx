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
import {
  Users,
  Star,
  MapPin,
  Phone,
  Search,
  Filter,
  ChevronLeft,
  ChevronRight,
} from "lucide-react";
import { motion } from "framer-motion";
import { useState } from "react";
import Sidebar from "@/components/Sidebar";
import DashboardNavbar from "@/components/Navbar";

const mockWorkers = [
  {
    id: 1,
    name: "Ahmed Khan",
    specialization: "Plumbing",
    rating: 4.8,
    score: 92,
    location: "Downtown Area",
    availability: "Available",
    experience: "5+ years",
  },
  {
    id: 2,
    name: "Sarah Ahmed",
    specialization: "HVAC",
    rating: 4.9,
    score: 96,
    location: "North City",
    availability: "Busy",
    experience: "7+ years",
  },
  {
    id: 3,
    name: "Muhammad Ali",
    specialization: "Electrician",
    rating: 4.7,
    score: 89,
    location: "East District",
    availability: "Available",
    experience: "4+ years",
  },
  {
    id: 4,
    name: "Fatima Sheikh",
    specialization: "Carpenter",
    rating: 4.6,
    score: 87,
    location: "South Zone",
    availability: "Available",
    experience: "6+ years",
  },
  {
    id: 5,
    name: "Omar Hassan",
    specialization: "Painter",
    rating: 4.9,
    score: 94,
    location: "Central District",
    availability: "Available",
    experience: "8+ years",
  },
  {
    id: 6,
    name: "Aisha Khan",
    specialization: "Cleaner",
    rating: 4.8,
    score: 91,
    location: "West Side",
    availability: "Busy",
    experience: "3+ years",
  },
  {
    id: 7,
    name: "Hassan Ali",
    specialization: "Gardener",
    rating: 4.5,
    score: 85,
    location: "Suburban Area",
    availability: "Available",
    experience: "4+ years",
  },
  {
    id: 8,
    name: "Zara Ahmed",
    specialization: "Appliance Repair",
    rating: 4.7,
    score: 88,
    location: "Downtown Area",
    availability: "Available",
    experience: "5+ years",
  },
];

const fadeInUp = {
  initial: { opacity: 0, y: 20 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.6, ease: "easeOut" },
};

export default function Workers() {
  const WORKERS_PER_PAGE = 6;
  const [currentPage, setCurrentPage] = useState(1);

  const totalPages = Math.ceil(mockWorkers.length / WORKERS_PER_PAGE);
  const startIndex = (currentPage - 1) * WORKERS_PER_PAGE;
  const endIndex = startIndex + WORKERS_PER_PAGE;
  const currentWorkers = mockWorkers.slice(startIndex, endIndex);

  const goToPage = (page: number) => {
    setCurrentPage(page);
  };

  const goToPrevPage = () => {
    setCurrentPage(prev => Math.max(prev - 1, 1));
  };

  const goToNextPage = () => {
    setCurrentPage(prev => Math.min(prev + 1, totalPages));
  };
  return (
    <Sidebar>
      <div className="min-h-screen bg-gradient-to-br from-gray-50 to-slate-100">
        {/* Dashboard Navbar */}
        <DashboardNavbar />

        {/* Header */}
        <div className="bg-white border-b border-gray-200">
          <div className="px-6 py-6">
            <div className="flex items-center justify-between">
              <div>
                <h1 className="text-2xl font-bold text-gray-900">
                  Available Workers
                </h1>
                <p className="text-gray-600 mt-1">
                  Browse and connect with verified maintenance professionals
                </p>
              </div>
              <Badge variant="secondary" className="px-3 py-1">
                {mockWorkers.length} professionals available
              </Badge>
            </div>
          </div>
        </div>

        <div className="p-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            {/* Filters */}
            <div className="flex flex-wrap gap-4 mb-8">
              <Button variant="outline" className="flex items-center">
                <Search className="h-4 w-4 mr-2" />
                Search
              </Button>
              <Button variant="outline" className="flex items-center">
                <Filter className="h-4 w-4 mr-2" />
                Filters
              </Button>
              <Badge variant="secondary" className="px-3 py-1">
                {mockWorkers.length} workers found
              </Badge>
            </div>

            {/* Workers Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {currentWorkers.map((worker, index) => (
                <motion.div
                  key={worker.id}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.1 }}
                >
                  <Card className="border-0 shadow-lg bg-white/90 backdrop-blur-sm hover:shadow-xl transition-all duration-300">
                    <CardHeader className="text-center">
                      <Avatar className="h-16 w-16 mx-auto mb-4">
                        <AvatarImage src="" alt={worker.name} />
                        <AvatarFallback className="bg-brand-100 text-brand-700 text-lg">
                          {worker.name
                            .split(" ")
                            .map((n) => n[0])
                            .join("")}
                        </AvatarFallback>
                      </Avatar>
                      <CardTitle className="text-lg">{worker.name}</CardTitle>
                      <CardDescription>{worker.specialization}</CardDescription>
                      <div className="flex items-center justify-center mt-2">
                        <Star className="h-4 w-4 text-yellow-400 fill-current" />
                        <span className="text-sm font-medium ml-1">
                          {worker.rating}
                        </span>
                        <span className="text-sm text-gray-500 ml-1">
                          (Score: {worker.score}/100)
                        </span>
                      </div>
                    </CardHeader>
                    <CardContent className="space-y-3">
                      <div className="flex items-center text-sm text-gray-600">
                        <MapPin className="h-4 w-4 mr-2" />
                        {worker.location}
                      </div>
                      <div className="flex items-center justify-between">
                        <Badge
                          variant={
                            worker.availability === "Available"
                              ? "default"
                              : "secondary"
                          }
                          className={
                            worker.availability === "Available"
                              ? "bg-green-100 text-green-700"
                              : "bg-orange-100 text-orange-700"
                          }
                        >
                          {worker.availability}
                        </Badge>
                        <span className="text-xs text-gray-500">
                          {worker.experience}
                        </span>
                      </div>
                      <div className="pt-4 space-y-2">
                        <Button className="w-full bg-brand-500 hover:bg-brand-600">
                          <Phone className="h-4 w-4 mr-2" />
                          Contact Worker
                        </Button>
                        <Button variant="outline" className="w-full">
                          View Profile
                        </Button>
                      </div>
                    </CardContent>
                  </Card>
                </motion.div>
              ))}
            </div>

            {/* Pagination */}
            {totalPages > 1 && (
              <div className="flex items-center justify-center mt-8 space-x-2">
                <Button
                  variant="outline"
                  onClick={goToPrevPage}
                  disabled={currentPage === 1}
                  className="flex items-center"
                >
                  <ChevronLeft className="h-4 w-4 mr-1" />
                  Previous
                </Button>

                <div className="flex items-center space-x-1">
                  {Array.from({ length: totalPages }, (_, i) => i + 1).map((page) => (
                    <Button
                      key={page}
                      variant={currentPage === page ? "default" : "outline"}
                      onClick={() => goToPage(page)}
                      className={`w-10 h-10 ${
                        currentPage === page
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
                  onClick={goToNextPage}
                  disabled={currentPage === totalPages}
                  className="flex items-center"
                >
                  Next
                  <ChevronRight className="h-4 w-4 ml-1" />
                </Button>
              </div>
            )}

            {/* Coming Soon Message */}
            <motion.div
              variants={fadeInUp}
              className="text-center mt-12 p-8 bg-white/50 rounded-lg border-2 border-dashed border-gray-300"
            >
              <Users className="h-12 w-12 mx-auto mb-4 text-gray-400" />
              <h3 className="text-lg font-medium text-gray-900 mb-2">
                More Features Coming Soon
              </h3>
              <p className="text-gray-600">
                Advanced search, detailed profiles, and booking functionality
                will be available soon.
              </p>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </Sidebar>
  );
}
