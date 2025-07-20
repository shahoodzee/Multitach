import { Button } from "@/components/ui/button";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import {
  Bell,
  User,
  Settings,
  LogOut,
  ChevronDown,
  Users,
  DollarSign,
} from "lucide-react";
import { motion } from "framer-motion";

export default function Navbar() {
  const handleLogout = () => {
    alert("Logged out successfully!");
    window.location.href = "/";
  };

  return (
    <motion.nav
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      className="bg-white border-b border-gray-200 shadow-sm"
    >
      <div className="px-6 py-4">
        <div className="flex items-center justify-between">
          {/* Right Side - Navigation Items & Profile */}
          <div className="flex items-center space-x-6">
            {/* Workers Link */}
            <a
              href="/dashboard/workers"
              className="flex items-center text-gray-600 hover:text-brand-600 transition-colors"
            >
              <Users className="h-5 w-5 mr-2" />
              <span className="font-medium">Workers</span>
            </a>

            {/* Task Pricing Link */}
            <a
              href="/dashboard/pricing"
              className="flex items-center text-gray-600 hover:text-brand-600 transition-colors"
            >
              <DollarSign className="h-5 w-5 mr-2" />
              <span className="font-medium">Pricing</span>
            </a>

            {/* Notifications */}
            <Button
              variant="ghost"
              size="icon"
              className="relative hover:bg-gray-100"
            >
              <Bell className="h-5 w-5 text-gray-600" />
              <div className="absolute -top-1 -right-1 w-2 h-2 bg-red-500 rounded-full" />
            </Button>

            {/* User Profile Dropdown */}
            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <Button
                  variant="ghost"
                  className="flex items-center space-x-3 hover:bg-brand-50 px-3 py-2"
                >
                  <Avatar className="h-8 w-8">
                    <AvatarImage src="" alt="Profile" />
                    <AvatarFallback className="bg-brand-100 text-brand-700 font-semibold">
                      JD
                    </AvatarFallback>
                  </Avatar>
                  <div className="text-left hidden md:block">
                    <div className="text-sm font-semibold text-gray-900">
                      John Doe
                    </div>
                    <div className="text-xs text-gray-500">
                      john@example.com
                    </div>
                  </div>
                  <ChevronDown className="h-4 w-4 text-gray-400" />
                </Button>
              </DropdownMenuTrigger>
              <DropdownMenuContent align="end" className="w-56">
                <DropdownMenuItem>
                  <User className="mr-2 h-4 w-4" />
                  View Profile
                </DropdownMenuItem>
                <DropdownMenuItem>
                  <User className="mr-2 h-4 w-4" />
                  Account Settings
                </DropdownMenuItem>
                <DropdownMenuItem>
                  <Bell className="mr-2 h-4 w-4" />
                  Notifications
                </DropdownMenuItem>
                <DropdownMenuSeparator />
                <DropdownMenuItem onClick={handleLogout}>
                  <LogOut className="mr-2 h-4 w-4" />
                  Sign Out
                </DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>
          </div>
        </div>
      </div>
    </motion.nav>
  );
}
