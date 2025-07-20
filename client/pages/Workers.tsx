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
  DollarSign,
} from "lucide-react";
import { motion } from "framer-motion";
import Sidebar from "@/components/Sidebar";

const mockWorkers = [
  {
    id: 1,
    name: "Ahmed Khan",
    specialization: "Plumbing",
    rating: 4.8,
    reviews: 156,
    location: "Downtown Area",
    price: "$50-80/hr",
    availability: "Available",
    experience: "5+ years",
  },
  {
    id: 2,
    name: "Sarah Ahmed",
    specialization: "HVAC",
    rating: 4.9,
    reviews: 203,
    location: "North City",
    price: "$60-90/hr",
    availability: "Busy",
    experience: "7+ years",
  },
  {
    id: 3,
    name: "Muhammad Ali",
    specialization: "Electrician",
    rating: 4.7,
    reviews: 89,
    location: "East District",
    price: "$45-75/hr",
    availability: "Available",
    experience: "4+ years",
  },
];

const fadeInUp = {
  initial: { opacity: 0, y: 20 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.6, ease: "easeOut" },
};

export default function Workers() {
  return (
    <Sidebar>
      <div className="min-h-screen bg-gradient-to-br from-gray-50 to-slate-100">
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
              {mockWorkers.map((worker, index) => (
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
                          ({worker.reviews} reviews)
                        </span>
                      </div>
                    </CardHeader>
                    <CardContent className="space-y-3">
                      <div className="flex items-center text-sm text-gray-600">
                        <MapPin className="h-4 w-4 mr-2" />
                        {worker.location}
                      </div>
                      <div className="flex items-center text-sm text-gray-600">
                        <DollarSign className="h-4 w-4 mr-2" />
                        {worker.price}
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
