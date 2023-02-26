import { FaDiscourse } from "react-icons/fa";
import { AiFillSetting, AiOutlineFileAdd } from "react-icons/ai";

export const NavLink = [
  {
    title: "Home",
    path: "/",
  },

  {
    title: "Register",
    path: "/Signup",
  },

];

export const sidebarRoute = [
  {
    title: "Course",
    path: "/dashboard/course",
    icon: <FaDiscourse />,
  },
  {
    title: "AddCourse",
    path: "/dashboard/addcourse",
    icon: <AiOutlineFileAdd />,
  },
  {
    title: "Setting",
    path: "/dashboard/setting",
    icon: <AiFillSetting />,
  },
];
