"use client";

import {
  ArrowRight,
  Menu,
  X,
  ChevronDown,
  FolderOpen,
  Building2,
  Briefcase,
  BookOpen,
  Newspaper,
  PhoneCall,
  ActivitySquare,
  FileText,
} from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/navigation";
import React from "react";
import { AnimatePresence, motion } from "framer-motion";

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

const SUBMENU_META = {
  "QRCM (Revenue Cycle Management)": {
    description: "Optimize claims processing and reimbursement workflows.",
    icon: ActivitySquare,
  },
  "QChargeAI (Charge Capture)": {
    description: "Automate charge capture with faster coding accuracy.",
    icon: FileText,
  },
  "QRPM (Remote Patient Monitoring)": {
    description: "Monitor patients remotely with continuous engagement.",
    icon: FolderOpen,
  },
  "QEHR (Electronic Health Record)": {
    description: "Unified records, charting, and care coordination tools.",
    icon: BookOpen,
  },
  "About Us": {
    description: "Learn about our mission, team, and company story.",
    icon: Building2,
  },
  Careers: {
    description: "Join our team and build the future of healthcare tech.",
    icon: Briefcase,
  },
  "Contact Us": {
    description: "Reach out for partnerships, support, or consultations.",
    icon: PhoneCall,
  },
  Blogs: {
    description: "Latest product insights, trends, and expert articles.",
    icon: Newspaper,
  },
  "Case Studies": {
    description: "See how providers achieve measurable outcomes with us.",
    icon: BookOpen,
  },
};

function SubmenuLinks({ items, onNavigate, mobile = false, sectionLabel = "Menu" }) {
  return items.map((sub, index) => (
    <li
      key={sub.label}
      className={`list-none ${mobile || index === items.length - 1 ? "" : "border-b border-[#eaf1f9]"}`}
    >
      {mobile ? (
        <button
          className="flex w-full items-center justify-between rounded-xl border border-transparent px-3 py-2.5 text-left text-sm font-medium text-[#10172A] transition hover:border-[#dbe7f6] hover:bg-[#f7fbff] hover:text-[#0D94E4]"
          onClick={() => onNavigate(sub.link)}
        >
          <span className="flex min-w-0 items-center gap-2.5">
            <span className="inline-flex h-7 w-7 shrink-0 items-center justify-center rounded-md border border-[#dce8f7] bg-[#f8fbff] text-[#5f7290]">
              {React.createElement(SUBMENU_META[sub.label]?.icon || FolderOpen, { className: "h-3.5 w-3.5" })}
            </span>
            <span className="truncate">{sub.label}</span>
          </span>
          <ArrowRight className="h-3.5 w-3.5 shrink-0 text-[#9aa8bc]" />
        </button>
      ) : (
        <NavigationMenuLink asChild>
          <button
            onClick={() => onNavigate(sub.link)}
            className="group grid w-full grid-cols-[40px_1fr_30px] items-center gap-3 rounded-lg px-3 py-3 text-left transition cursor-pointer hover:bg-[#f7fbff]"
          >
            <span className="inline-flex h-10 w-10 shrink-0 items-center justify-center rounded-lg border border-[#dce8f7] bg-[#f8fbff] text-[#5f7290] transition group-hover:border-[#c4dcf8] group-hover:bg-white group-hover:text-[#0D94E4]">
              {React.createElement(SUBMENU_META[sub.label]?.icon || FolderOpen, { className: "h-4.5 w-4.5" })}
            </span>
            <span className="min-w-0">
              <span className="block truncate text-[16px] font-semibold leading-6 text-[#0f172a] group-hover:text-[#0788d8]">{sub.label}</span>
              <span className="mt-0.5 block text-[14px] leading-5 text-[#64748b]">
                {SUBMENU_META[sub.label]?.description || `Explore ${sub.label} in ${sectionLabel}.`}
              </span>
            </span>
            <span className="inline-flex h-7 w-7 items-center justify-center rounded-full bg-white text-[#8b99ae] ring-1 ring-[#dbe7f7] transition group-hover:translate-x-0.5 group-hover:text-[#0D94E4]">
              <ArrowRight className="h-3.5 w-3.5" />
            </span>
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
          className="flex w-full items-center justify-between rounded-xl border border-[#e3ecf7] bg-[#f8fbff] px-3 py-2.5 text-sm font-semibold text-[#1f2b3d] transition hover:bg-[#f2f8ff]"
        >
          <span>Specialities</span>
          <ChevronDown className={`h-4 w-4 text-[#5d7393] transition-transform duration-200 ${isExpanded ? 'rotate-180' : ''}`} />
        </button>
        <AnimatePresence initial={false}>
          {isExpanded && (
            <motion.div
              initial={{ opacity: 0, height: 0, y: -6 }}
              animate={{ opacity: 1, height: "auto", y: 0 }}
              exit={{ opacity: 0, height: 0, y: -6 }}
              transition={{ duration: 0.22, ease: "easeInOut" }}
              className="mt-2 overflow-hidden"
            >
              <div className="space-y-1.5 rounded-xl border border-[#e8eef7] bg-white p-2">
            {regularItems.map((item) => (
              <button
                key={item.id}
                onClick={() => onNavigate(item.link || "#")}
                className="flex w-full items-center rounded-lg px-3 py-2 text-sm font-medium text-[#10172A] transition hover:bg-[#f6faff] hover:text-[#0D94E4]"
              >
                {item.label}
              </button>
            ))}
            {ctaItem ? (
              <button
                onClick={() => onNavigate(ctaItem.link || "#")}
                className="mt-1 flex w-full items-center justify-between gap-2 rounded-full bg-[#0D94E4] px-3 py-2 text-[13px] font-medium text-white transition hover:bg-[#0b87cf]"
              >
                <span>{ctaItem.label}</span>
                <span className="inline-flex h-5 w-5 sm:h-6 sm:w-6 items-center justify-center rounded-full bg-white shrink-0">
                  <ArrowRight className="h-2.5 w-2.5 sm:h-3 sm:w-3 text-[#0D94E4]" />
                </span>
              </button>
            ) : null}
              </div>
            </motion.div>
          )}
        </AnimatePresence>
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
          className="flex w-full items-center justify-between rounded-xl border border-[#e3ecf7] bg-[#f8fbff] px-3 py-2.5 text-sm font-semibold text-[#1f2b3d] transition hover:bg-[#f2f8ff]"
        >
          <span>Locations</span>
          <ChevronDown className={`h-4 w-4 text-[#5d7393] transition-transform duration-200 ${isExpanded ? 'rotate-180' : ''}`} />
        </button>
        <AnimatePresence initial={false}>
          {isExpanded && (
            <motion.div
              initial={{ opacity: 0, height: 0, y: -6 }}
              animate={{ opacity: 1, height: "auto", y: 0 }}
              exit={{ opacity: 0, height: 0, y: -6 }}
              transition={{ duration: 0.22, ease: "easeInOut" }}
              className="mt-2 overflow-hidden"
            >
              <div className="space-y-1.5 rounded-xl border border-[#e8eef7] bg-white p-2">
            {regularItems.map((item) => (
              <button
                key={item.id}
                onClick={() => onNavigate(item.link || "#")}
                className="flex w-full items-center rounded-lg px-3 py-2 text-sm font-medium text-[#10172A] transition hover:bg-[#f6faff] hover:text-[#0D94E4]"
              >
                {item.label}
              </button>
            ))}
            {ctaItem ? (
              <button
                onClick={() => onNavigate(ctaItem.link || "#")}
                className="mt-1 flex w-full items-center justify-between gap-2 rounded-full bg-[#0D94E4] px-3 py-2 text-[13px] font-medium text-white transition hover:bg-[#0b87cf]"
              >
                <span>{ctaItem.label}</span>
                <span className="inline-flex h-5 w-5 sm:h-6 sm:w-6 items-center justify-center rounded-full bg-white shrink-0">
                  <ArrowRight className="h-2.5 w-2.5 sm:h-3 sm:w-3 text-[#0D94E4]" />
                </span>
              </button>
            ) : null}
              </div>
            </motion.div>
          )}
        </AnimatePresence>
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
    setExpandedMenus((prev) => (
      prev[menuLabel] ? {} : { [menuLabel]: true }
    ));
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
                        <NavigationMenuContent className="border-0! bg-transparent! shadow-none! p-0 md:left-1/2 md:-translate-x-1/2">
                          <div className="w-[560px] rounded-2xl border border-[#dfebf8] bg-linear-to-b from-white to-[#f8fbff] p-3 shadow-[0_20px_55px_rgba(15,23,42,0.14)]">
                            <div className="px-2 pb-2 pt-1 text-[11px] font-semibold uppercase tracking-[0.12em] text-[#7486a3]">
                              {item.label}
                            </div>
                            <ul className="grid gap-1">
                              <SubmenuLinks items={item.submenu} onNavigate={handleNavigate} sectionLabel={item.label} />
                            </ul>
                          </div>
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

      <AnimatePresence>
        {open && (
          <>
            <motion.div
              className="lg:hidden fixed inset-0 top-[72px] bg-[#0f172a]/30 backdrop-blur-[2px]"
              onClick={() => setOpen(false)}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.2, ease: "easeInOut" }}
            />
            <motion.div
              className="lg:hidden fixed top-20 left-2 right-2 sm:left-4 sm:right-4 rounded-2xl border border-[#dfe9f6] bg-linear-to-b from-white to-[#f8fbff] shadow-[0_20px_45px_rgba(15,23,42,0.2)] max-h-[calc(100vh-5.5rem)] overflow-y-auto"
              initial={{ opacity: 0, y: -14, scale: 0.98 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              exit={{ opacity: 0, y: -12, scale: 0.985 }}
              transition={{ duration: 0.24, ease: "easeOut" }}
            >
            <div className="sticky top-0 z-10 flex items-center justify-between border-b border-[#e8eef7] bg-white/90 px-4 py-3 backdrop-blur">
              <span className="text-[11px] font-semibold uppercase tracking-[0.12em] text-[#6b7f9d]">Menu</span>
              <button
                className="inline-flex h-8 w-8 items-center justify-center rounded-full border border-[#e0e8f4] text-[#516684]"
                onClick={() => setOpen(false)}
                aria-label="Close menu"
              >
                <X className="h-4 w-4" />
              </button>
            </div>
            <div className="px-3 sm:px-4 py-3 sm:py-4 space-y-2">
            {navItems.map((item) => (
              <div key={item.label} className="rounded-xl border border-[#e6edf7] bg-white p-1.5">
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
                          className="flex w-full items-center justify-between rounded-lg px-2.5 py-2.5 text-sm font-semibold text-[#1f2b3d] transition hover:bg-[#f4f8ff]"
                        >
                          <span>{item.label}</span>
                          <ChevronDown className={`h-4 w-4 text-[#5d7393] transition-transform duration-200 ${expandedMenus[item.label] ? 'rotate-180' : ''}`} />
                        </button>
                        <AnimatePresence initial={false}>
                          {expandedMenus[item.label] && (
                            <motion.div
                              initial={{ opacity: 0, height: 0, y: -4 }}
                              animate={{ opacity: 1, height: "auto", y: 0 }}
                              exit={{ opacity: 0, height: 0, y: -4 }}
                              transition={{ duration: 0.2, ease: "easeInOut" }}
                              className="mt-1 overflow-hidden"
                            >
                              <div className="space-y-1 rounded-lg border border-[#e9eff8] bg-[#fcfdff] p-1.5">
                                <SubmenuLinks
                                  items={item.submenu}
                                  onNavigate={handleNavigate}
                                  mobile
                                />
                              </div>
                            </motion.div>
                          )}
                        </AnimatePresence>
                      </div>
                    )}
                  </>
                ) : (
                  <button
                    className="flex w-full items-center rounded-lg px-2.5 py-2.5 text-sm font-semibold text-[#1f2b3d] transition hover:bg-[#f4f8ff]"
                    onClick={() => handleNavigate(item.link)}
                  >
                    {item.label}
                  </button>
                )}
              </div>
            ))}
            <div className="mt-1 border-t border-[#e2e8f0] pt-3">
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
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </header>
  );
}
