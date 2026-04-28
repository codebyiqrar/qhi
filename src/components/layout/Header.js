"use client";

import { ArrowRight, Menu, X, ChevronDown } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/navigation";
import React from "react";
import { motion } from "framer-motion";

import {
  NavigationMenu,
  NavigationMenuList,
  NavigationMenuItem,
  NavigationMenuTrigger,
  NavigationMenuContent,
  NavigationMenuLink,
} from "@/components/ui/navigation-menu";
import { Button } from "../ui/button";
import { ROUTES } from "@/constants/routes";
import { navItems } from "@/constants/header";
import { SPECIALITIES } from "@/constants/specialities";
import { LOCATIONS } from "@/constants/locations";

function SubmenuLinks({ items, onNavigate, mobile = false }) {
  return items.map((sub) => (
    <li key={sub.label}>
      {mobile ? (
        <button
          className="block cursor-pointer w-full text-left py-1.5 sm:py-2 px-2 sm:px-3 text-xs sm:text-sm font-medium text-[#10172A] hover:text-[#202124] hover:bg-[#f3f4f6] rounded-lg transition"
          onClick={() => onNavigate(sub.link)}
        >
          {sub.label}
        </button>
      ) : (
        <NavigationMenuLink asChild>
          <button
            onClick={() => onNavigate(sub.link)}
            className="block w-full rounded-md px-3 py-2.5 text-left text-sm font-medium text-[#10172A] hover:text-[#202124] hover:bg-[#f3f4f6] transition cursor-pointer"
          >
            {sub.label}
          </button>
        </NavigationMenuLink>
      )}
    </li>
  ));
}

function SpecialitiesMenu({ onNavigate, mobile = false, isExpanded = false, onToggle = null }) {
  const regularItems = SPECIALITIES.filter((item) => !item.isCta).slice(0, 8);
  const ctaItem = SPECIALITIES.find((item) => item.isCta);

  if (mobile) {
    return (
      <div>
        <button
          onClick={onToggle}
          className="flex w-full items-center justify-between px-2 sm:px-3 py-2 sm:py-2.5 text-sm sm:text-base font-medium text-[#202124] hover:bg-[#f3f4f6] rounded-lg transition"
        >
          <span>Specialities</span>
          <ChevronDown className={`h-4 w-4 transition-transform duration-200 ${isExpanded ? 'rotate-180' : ''}`} />
        </button>
        {isExpanded && (
          <div className="pl-2 sm:pl-4 space-y-2 pt-1 pb-2">
            {regularItems.map((item) => (
              <button
                key={item.id}
                onClick={() => onNavigate(item.link || "#")}
                className="flex w-full items-center px-2 cursor-pointer sm:px-3 py-1.5 sm:py-2 text-xs sm:text-sm font-medium text-[#10172A] hover:text-[#0D94E4] transition rounded-lg"
              >
                {item.label}
              </button>
            ))}
            {ctaItem ? (
              <button
                onClick={() => onNavigate(ctaItem.link || "#")}
                className="flex w-full items-center justify-between gap-2 rounded-full bg-[#0D94E4] px-3 py-1.5 sm:py-2 text-[11px] sm:text-[14px] font-medium text-white transition hover:bg-[#0b87cf] mt-2"
              >
                <span>{ctaItem.label}</span>
                <span className="inline-flex h-5 w-5 sm:h-6 sm:w-6 items-center justify-center rounded-full bg-white flex-shrink-0">
                  <ArrowRight className="h-2.5 w-2.5 sm:h-3 sm:w-3 text-[#0D94E4]" />
                </span>
              </button>
            ) : null}
          </div>
        )}
      </div>
    );
  }

  return (
    <div className="w-[655px] rounded-lg bg-white p-[25px_21px]">
      <div className="grid grid-cols-3 gap-x-3 gap-y-3">
        {regularItems.map((item) => (
          <button
            key={item.id}
            onClick={() => onNavigate(item.link || "#")}
            className="h-10 rounded-full border border-[#EEEEEE] cursor-pointer bg-white px-6 text-[16px] font-medium text-[#10172A] transition hover:bg-[#f8fafc]"
          >
            {item.label}
          </button>
        ))}
        {ctaItem ? (
          <button
            onClick={() => onNavigate(ctaItem.link || "#")}
            className="inline-flex h-10 items-center justify-center gap-3 rounded-full bg-[#0D94E4] px-3 text-[18px] font-medium text-white transition hover:bg-[#0b87cf]"
          >
            {ctaItem.label}
            <span className="inline-flex h-7 w-7 items-center justify-center rounded-full bg-white">
              <ArrowRight className="h-3.5 w-3.5 text-black" />
            </span>
          </button>
        ) : null}
      </div>
    </div>
  );
}

const LOCATIONS_MENU_BG = "/location/location-main.png";

function LocationsMenu({ onNavigate, mobile = false, isExpanded = false, onToggle = null }) {
  const regularItems = LOCATIONS.filter((item) => !item.isCta);
  const ctaItem = LOCATIONS.find((item) => item.isCta);

  if (mobile) {
    return (
      <div>
        <button
          onClick={onToggle}
          className="flex w-full items-center justify-between px-2 sm:px-3 py-2 sm:py-2.5 text-sm sm:text-base font-medium text-[#202124] hover:bg-[#f3f4f6] rounded-lg transition"
        >
          <span>Locations</span>
          <ChevronDown className={`h-4 w-4 transition-transform duration-200 ${isExpanded ? 'rotate-180' : ''}`} />
        </button>
        {isExpanded && (
          <div className="pl-2 sm:pl-4 space-y-2 pt-1 pb-2">
            {regularItems.map((item) => (
              <button
                key={item.id}
                onClick={() => onNavigate(item.link || "#")}
                className="flex w-full items-center px-2 sm:px-3 py-1.5 sm:py-2 text-xs sm:text-sm font-medium text-[#10172A] hover:text-[#0D94E4] transition rounded-lg"
              >
                {item.label}
              </button>
            ))}
            {ctaItem ? (
              <button
                onClick={() => onNavigate(ctaItem.link || "#")}
                className="flex w-full items-center justify-between gap-2 rounded-full bg-[#0D94E4] px-3 py-1.5 sm:py-2 text-[11px] sm:text-[14px] font-medium text-white transition hover:bg-[#0b87cf] mt-2"
              >
                <span>{ctaItem.label}</span>
                <span className="inline-flex h-5 w-5 sm:h-6 sm:w-6 items-center justify-center rounded-full bg-white flex-shrink-0">
                  <ArrowRight className="h-2.5 w-2.5 sm:h-3 sm:w-3 text-[#0D94E4]" />
                </span>
              </button>
            ) : null}
          </div>
        )}
      </div>
    );
  }

  return (
    <div className="relative w-[352px] overflow-auto rounded-xl bg-white p-[25px]">
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 bg-cover bg-center bg-no-repeat opacity-[0.14]"
        style={{ backgroundImage: `url('${LOCATIONS_MENU_BG}')` }}
      />
      <div className="relative z-10 grid grid-cols-2 gap-x-2.5 gap-y-2.5">
        {regularItems.map((item) => (
          <button
            key={item.id}
            onClick={() => onNavigate(item.link || "#")}
            className="h-10 rounded-full border border-[#BABABA] cursor-pointer bg-white px-4 text-center text-[16px] font-normal leading-6 text-[#10172A] transition hover:bg-[#f8fafc] whitespace-nowrap"
          >
            {item.label}
          </button>
        ))}
        {ctaItem ? (
          <button
            onClick={() => onNavigate(ctaItem.link || "#")}
            className="inline-flex h-10 items-center justify-center gap-2 rounded-full bg-[#0D94E4] px-3 text-[18px] font-normal leading-6 text-white transition hover:bg-[#0b87cf] whitespace-nowrap"
          >
            {ctaItem.label}
            <span className="inline-flex h-7 w-7 items-center justify-center rounded-full bg-white">
              <ArrowRight className="h-3.5 w-3.5 text-black" />
            </span>
          </button>
        ) : null}
      </div>
    </div>
  );
}

export default function Header() {
  const router = useRouter();
  const [open, setOpen] = React.useState(false);
  const [expandedMenus, setExpandedMenus] = React.useState({});
  /** Closes desktop Radix NavigationMenu dropdowns after programmatic navigation (buttons don't close it by default). */
  const [navMenuValue, setNavMenuValue] = React.useState("");
  const handleRequestDemo = () => {
    setNavMenuValue("");
    router.push(ROUTES.REQUEST_DEMO);
  };

  const handleNavigate = (link) => {
    setNavMenuValue("");
    setOpen(false);
    setExpandedMenus({});
    router.push(link);
  };

  const toggleMobileSubmenu = (menuLabel) => {
    setExpandedMenus((prev) => ({
      ...prev,
      [menuLabel]: !prev[menuLabel],
    }));
  };

  return (
    <header className="fixed top-0 left-0 right-0 z-40 pt-4">
      <div className="mx-auto max-w-7xl px-2 sm:px-4">
        <div className="flex h-14 items-center justify-between rounded-xl bg-white px-2 sm:px-4 shadow-2xl">
          <Link
            href={ROUTES.HOME}
            className="flex shrink-0 items-center gap-1.5 sm:gap-2.5"
          >
            <Image
              src="/logo.svg"
              alt="Quantus Health"
              width={32}
              height={32}
              className="shrink-0"
            />
            <span className="text-foreground text-lg sm:text-xl font-bold font-dm-sans ">
              <span>Quantus</span>
              <span> Health</span>
            </span>
          </Link>

          <NavigationMenu
            viewport={false}
            className="hidden lg:flex flex-1 justify-center"
            value={navMenuValue}
            onValueChange={setNavMenuValue}
          >
            <NavigationMenuList className="gap-1">
              {navItems.map((item) => (
                <NavigationMenuItem key={item.label} value={item.label}>
                  {item.submenu ? (
                    <>
                      <NavigationMenuTrigger className="h-9 bg-transparent px-4 text-[#202124] text-[15px] font-medium hover:bg-transparent hover:text-[#202124] data-[state=open]:bg-transparent">
                        {item.label}
                      </NavigationMenuTrigger>
                      {item.label.toLowerCase().includes("special") ? (
                        <NavigationMenuContent className="p-0 md:p-0 md:left-1/2 md:-translate-x-1/2">
                          <SpecialitiesMenu onNavigate={handleNavigate} />
                        </NavigationMenuContent>
                      ) : item.label.toLowerCase().includes("location") ? (
                        <NavigationMenuContent className="p-0 md:p-0 md:left-1/2 md:-translate-x-1/2">
                          <LocationsMenu onNavigate={handleNavigate} />
                        </NavigationMenuContent>
                      ) : (
                        <NavigationMenuContent className="md:left-1/2 md:-translate-x-1/2">
                          <ul className="grid w-max min-w-60 gap-0.5">
                            <SubmenuLinks items={item.submenu} onNavigate={handleNavigate} />
                          </ul>
                        </NavigationMenuContent>
                      )}
                    </>
                  ) : (
                    <button
                      onClick={() => handleNavigate(item.link)}
                      className="inline-flex h-9 items-center justify-center rounded-md px-4 text-[#202124] text-[15px] font-medium hover:bg-transparent hover:text-[#202124]"
                    >
                      {item.label}
                    </button>
                  )}
                </NavigationMenuItem>
              ))}
            </NavigationMenuList>
          </NavigationMenu>

          <div className="flex shrink-0 items-center gap-1.5 sm:gap-2">
            <motion.div
              className="hidden lg:inline-flex"
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
            >
              <Button
                className="relative h-10 overflow-hidden rounded-full border-0 border-transparent ring-0 ring-transparent outline-none focus-visible:ring-0 focus-visible:outline-none focus-visible:border-transparent bg-primary px-5 sm:px-6 text-white hover:bg-primary/90 font-medium text-[13px] sm:text-[15px] font-dm-sans shadow-none hover:shadow-none transition-all duration-300"
                onClick={handleRequestDemo}
              >
                <motion.span
                  aria-hidden
                  className="pointer-events-none absolute inset-y-0 -left-1/3 w-1/3 bg-linear-to-r from-transparent via-white/30 to-transparent"
                  animate={{ x: ["-120%", "260%"] }}
                  transition={{ duration: 0.8, ease: "easeInOut", repeat: Infinity, repeatDelay: 1.2 }}
                />
                <span className="relative z-10">Request A Demo</span>
              </Button>
            </motion.div>

            <button
              className="lg:hidden inline-flex items-center justify-center rounded-full p-2 sm:p-2.5 text-[#202124] hover:bg-[#f3f4f6]"
              onClick={() => setOpen((s) => !s)}
              aria-label="Toggle menu"
              aria-expanded={open}
            >
              {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
            </button>
          </div>
        </div>
      </div>

      {open && (
        <div className="lg:hidden fixed top-20 left-2 right-2 sm:left-4 sm:right-4 rounded-2xl border border-[#e2e8f0] bg-white shadow-lg max-h-[calc(100vh-5.5rem)] overflow-y-auto">
          <div className="px-3 sm:px-4 py-3 sm:py-4 space-y-0">
            {navItems.map((item) => (
              <div key={item.label}>
                {item.submenu ? (
                  <>
                    {item.label.toLowerCase().includes("special") ? (
                      <SpecialitiesMenu
                        onNavigate={handleNavigate}
                        mobile
                        isExpanded={expandedMenus[item.label]}
                        onToggle={() => toggleMobileSubmenu(item.label)}
                      />
                    ) : item.label.toLowerCase().includes("location") ? (
                      <LocationsMenu
                        onNavigate={handleNavigate}
                        mobile
                        isExpanded={expandedMenus[item.label]}
                        onToggle={() => toggleMobileSubmenu(item.label)}
                      />
                    ) : (
                      <div>
                        <button
                          onClick={() => toggleMobileSubmenu(item.label)}
                          className="flex w-full items-center justify-between px-2 sm:px-3 py-2 sm:py-2.5 text-sm sm:text-base font-medium text-[#202124] hover:bg-[#f3f4f6] rounded-lg transition"
                        >
                          <span >{item.label}</span>
                          <ChevronDown className={`h-4 w-4 transition-transform duration-200 ${expandedMenus[item.label] ? 'rotate-180' : ''}`} />
                        </button>
                        {expandedMenus[item.label] && (
                          <div className="pl-2 sm:pl-4 space-y-0.5 py-2 border-b border-[#e2e8f0]">
                            <SubmenuLinks
                              items={item.submenu}
                              onNavigate={handleNavigate}
                              mobile
                            />
                          </div>
                        )}
                      </div>
                    )}
                  </>
                ) : (
                  <button
                    className="flex w-full items-center px-2 sm:px-3 py-2 sm:py-2.5 text-sm sm:text-base font-medium text-[#202124] hover:bg-[#f3f4f6] rounded-lg transition"
                    onClick={() => handleNavigate(item.link)}
                  >
                    {item.label}
                  </button>
                )}
              </div>
            ))}
            <div className="pt-2 sm:pt-3 mt-2 sm:mt-3 border-t border-[#e2e8f0]">
              <motion.div
                className="w-full"
                whileHover={{ scale: 1.01 }}
                whileTap={{ scale: 0.98 }}
              >
                <button
                  className="relative block w-full overflow-hidden rounded-full border-0 border-transparent ring-0 ring-transparent outline-none focus-visible:ring-0 focus-visible:outline-none focus-visible:border-transparent bg-primary px-3 sm:px-4 py-2.5 sm:py-3 text-xs sm:text-sm font-medium text-white hover:bg-primary/90 shadow-none hover:shadow-none transition-all duration-300"
                  onClick={() => handleNavigate(ROUTES.REQUEST_DEMO)}
                >
                  <motion.span
                    aria-hidden
                    className="pointer-events-none absolute inset-y-0 -left-1/3 w-1/3 bg-linear-to-r from-transparent via-white/30 to-transparent"
                    animate={{ x: ["-120%", "260%"] }}
                    transition={{ duration: 0.8, ease: "easeInOut", repeat: Infinity, repeatDelay: 1.2 }}
                  />
                  <span className="relative z-10">Request A Demo</span>
                </button>
              </motion.div>
            </div>
          </div>
        </div>
      )}
    </header>
  );
}
