import { Home as HomeIcon, Compass, User, PlusCircle } from "lucide-react";
import Home from "./pages/Home.jsx";
import Subreddits from "./pages/Subreddits.jsx";
import Profile from "./pages/Profile.jsx";
import CreatePost from "./pages/CreatePost.jsx";

export const navItems = [
  {
    title: "Home",
    to: "/",
    icon: <HomeIcon className="h-4 w-4" />,
    page: <Home />,
  },
  {
    title: "Subreddits",
    to: "/subreddits",
    icon: <Compass className="h-4 w-4" />,
    page: <Subreddits />,
  },
  {
    title: "Profile",
    to: "/profile",
    icon: <User className="h-4 w-4" />,
    page: <Profile />,
  },
  {
    title: "Create Post",
    to: "/create",
    icon: <PlusCircle className="h-4 w-4" />,
    page: <CreatePost />,
  },
];
