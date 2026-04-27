"use client";

import { ArrowRight, Menu, X, ChevronDown } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/navigation";
import React from "react";

import {
  NavigationMenu,
  NavigationMenuList,
  NavigationMenuItem,
  NavigationMenuTrigger,
  NavigationMenuContent,
} from "@/components/ui/navigation-menu";
import { Button } from "../ui/button";
import { ROUTES } from "@/constants/routes";
import { navItems } from "@/constants/header";
import { SPECIALITIES } from "@/constants/specialities";
import { LOCATIONS } from "@/constants/locations";

function getFallbackDescription(sectionLabel, itemLabel) {
  const section = sectionLabel?.toLowerCase() || "";
  if (section.includes("solution")) return "Built to simplify operations and improve financial outcomes.";
  if (section.includes("company")) return "Discover the people, mission, and values behind Quantus Health.";
  if (section.includes("resource")) return "Actionable insights, guides, and stories for modern care teams.";
  if (section.includes("special")) return "Care-focused workflows tailored for this speciality.";
  if (section.includes("location")) return "Localized support designed for practices in this region.";
  return `Learn more about ${itemLabel}.`;
}

function MegaMenuPanel({ title, items, onNavigate }) {
  if (!items?.length) return null;

  return (
    <div className="w-[960px] rounded-2xl border border-[#EAECEF] bg-white px-4 py-6  shadow-[0_20px_60px_rgba(16,24,40,0.14)]">
      <h3 className="text-2xl font-semibold leading-tight text-[#111827]">{title}</h3>
      <div className="mt-4 grid grid-cols-3 gap-3">
        {items.map((item) => (
          <button
            key={item.id || item.label}
            onClick={() => onNavigate(item.link || "#")}
            className="rounded-xl border border-[#ccd0d4] bg-white p-4 text-left"
          >
            <p className="text-base font-semibold leading-6 hover:underline text-primary cursor-pointer">
              {item.label}
            </p>
            <p className="mt-2 text-[14px] leading-5 text-gray-800">
              {item.shortDescription || item.description || getFallbackDescription(title, item.label)}
            </p>
          </button>
        ))}
      </div>
    </div>
  );
}

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
      ) : null}
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
                <span className="inline-flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-white sm:h-6 sm:w-6">
                  <ArrowRight className="h-2.5 w-2.5 sm:h-3 sm:w-3 text-[#0D94E4]" />
                </span>
              </button>
            ) : null}
          </div>
        )}
      </div>
    );
  }

  const menuItems = ctaItem ? [...regularItems, ctaItem] : regularItems;
  return <MegaMenuPanel title="Specialities" items={menuItems} onNavigate={onNavigate} />;
}

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
                <span className="inline-flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-white sm:h-6 sm:w-6">
                  <ArrowRight className="h-2.5 w-2.5 sm:h-3 sm:w-3 text-[#0D94E4]" />
                </span>
              </button>
            ) : null}
          </div>
        )}
      </div>
    );
  }

  const menuItems = ctaItem ? [...regularItems, ctaItem] : regularItems;
  return <MegaMenuPanel title="Locations" items={menuItems} onNavigate={onNavigate} />;
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
    <header className="fixed top-0 left-0 right-0 z-40 ">
      <div className="mx-auto  ">
        <div className="flex h-16 items-center justify-between  bg-white px-2 sm:px-4 shadow">
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
            <span className="text-foreground text-lg sm:text-xl font-bold font-syne ">
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
                        <NavigationMenuContent className="p-0 md:p-0 md:left-1/2 md:-translate-x-1/2">
                          <MegaMenuPanel title={item.label} items={item.submenu} onNavigate={handleNavigate} />
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
            <Button
              className="hidden lg:inline-flex h-10 rounded-3xl bg-primary px-4 sm:px-5 text-white hover:bg-primary/90 font-medium text-[13px] sm:text-[15px] font-dm-sans"
              onClick={handleRequestDemo}
            >
              Request A Demo
            </Button>

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
              <button
                className="block w-full rounded-xl bg-primary px-3 sm:px-4 py-2.5 sm:py-3 text-xs sm:text-sm font-medium text-white hover:bg-primary/90 transition"
                onClick={() => handleNavigate(ROUTES.REQUEST_DEMO)}
              >
                Request A Demo
              </button>
            </div>
          </div>
        </div>
      )}
    </header>
  );
}
