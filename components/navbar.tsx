import Link from "next/link";
import Image from "next/image";
import {
  NavigationMenu,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
} from "@/components/ui/navigation-menu";
import {
  Sheet,
  SheetContent,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import { Menu } from "lucide-react";
import { ThemeToggle } from "@/components/theme-toggle";
import { navLinks } from "../data/layout-data";

export default function Navbar() {
  return (
    <header className="absolute w-full top-0 z-50 bg-transparent text-white transition-colors duration-300">
      <div className="container mx-auto px-4 py-4 flex items-center justify-between">
        {/* Logo */}
        <Link href="/" className="flex items-center group">
          <div className="relative h-12 w-12 mr-3">
            <Image
              src="/images/logo.svg"
              alt="Onyxbulls Logo"
              width={72}
              height={72}
              className="object-contain"
            />
          </div>
          <div>
            <span className="font-bold text-xl text-white uppercase">
              Onyxbulls
            </span>
          </div>
        </Link>

        {/* Desktop Navigation */}
        <div className="hidden lg:flex items-center mr-4">
          <NavigationMenu className="z-50">
            <NavigationMenuList className="space-x-1">
              {navLinks.map((item) => (
                <NavigationMenuItem key={item.title}>
                  <Link href={item.href} legacyBehavior passHref>
                    <NavigationMenuLink className="text-white  font-medium text-sm rounded-md px-4 py-2  hover:bg-neon-400 hover:bg-opacity-15">
                      {item.title}
                    </NavigationMenuLink>
                  </Link>
                </NavigationMenuItem>
              ))}
            </NavigationMenuList>
          </NavigationMenu>

          <ThemeToggle />
        </div>

        {/* Mobile Navigation */}
        <div className="lg:hidden flex items-center">
          <ThemeToggle />
          <Sheet>
            <SheetTrigger asChild>
              <button className="p-2 text-white ml-2">
                <Menu className="h-6 w-6" />
              </button>
            </SheetTrigger>
            <SheetContent
              side="right"
              className="bg-black/95 dark:bg-black text-white border-l border-neon-500/30 z-50"
            >
              <SheetTitle className="pt-6 pb-4 px-4 border-b border-neon-500/30">
                <p className="text-xl font-semibold text-neon-400">Menu</p>
              </SheetTitle>
              <div className="flex flex-col gap-6 py-6">
                {navLinks.map((item) => (
                  <Link
                    key={item.title}
                    href={item.href}
                    className="text-lg font-medium hover:text-neon-400 transition-colors"
                  >
                    {item.title}
                  </Link>
                ))}

                <div className="pt-4 border-t border-neon-500/30 flex justify-end"></div>
              </div>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </header>
  );
}
