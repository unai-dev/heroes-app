import { Link, useLocation } from "react-router";
import {
  NavigationMenu,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
} from "../ui/navigation-menu";
import { cn } from "@/lib/utils";

export const CustomMenu = () => {
  const { pathname } = useLocation();

  const isActive = (path: string) => {
    return pathname === path;
  };

  return (
    <NavigationMenu className="py-5">
      <NavigationMenuList>
        {/* HOME */}
        <NavigationMenuItem className="bg-indigo-500 rounded-md text-white m-2 ">
          <NavigationMenuLink
            asChild
            className={(cn(isActive("/") && "bg-slate-300"), "p-2   ")}
          >
            <Link to="/">Inicio</Link>
          </NavigationMenuLink>
        </NavigationMenuItem>

        {/* SEARCH */}
        <NavigationMenuItem className="bg-indigo-500 rounded-md text-white m-2">
          <NavigationMenuLink
            asChild
            className={cn(isActive("/search") && "bg-slate-300 ", "p-2  ")}
          >
            <Link to={"/search"}>Buscar</Link>
          </NavigationMenuLink>
        </NavigationMenuItem>
      </NavigationMenuList>
    </NavigationMenu>
  );
};
