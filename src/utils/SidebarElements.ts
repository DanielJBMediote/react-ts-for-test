
import { IconType } from "react-icons";
import { FaChalkboardTeacher, FaChartBar, FaHome, FaTachometerAlt, FaTasks, FaUserAlt } from "react-icons/fa";

interface IElementClosed {
  label: string;
  pathname?: string;
  icon: IconType;
  subElements?: IElementClosed[];
  notification?: number
}

const sidebarElements: IElementClosed[] = [
  {
    label: "Home",
    pathname: "/",
    icon: FaHome,
  },
  {
    label: "Dashboard",
    pathname: "/dashboard",
    icon: FaTachometerAlt,
  },
  {
    label: "Process",
    notification: 11,
    icon: FaChalkboardTeacher,
    subElements: [
      { pathname: '/charts', icon: FaChartBar, label: "Charts" },
      { pathname: '/manager', icon: FaTasks, label: "Manager" },
      { pathname: '/jobs', icon: FaTachometerAlt, label: "Jobs" },
      { pathname: '/functions', icon: FaTachometerAlt, label: "Functions" }
    ]
  },
  {
    label: "Profile",
    pathname: "/profile",
    icon: FaUserAlt,
  },
]


export default sidebarElements;