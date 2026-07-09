export type NavigationItem = {
  label: string;
  href: string;
};

export const navigationItems: NavigationItem[] = [
  { label: "Home", href: "/" },
  { label: "About us", href: "/about" },
  { label: "Ministries", href: "/ministries" },
  { label: "Sermons", href: "/sermons" },
  { label: "Give", href: "/give" },
  { label: "Contact us", href: "/contact" },
];
