import { Menu } from "@/types/menu";

const menuData: Menu[] = [
  {
    id: 1,
    title: "Home",
    newTab: false,
    path: "/",
  },
  {
    id: 2,
    title: "About Us",
    newTab: false,
    path: "/#about",
  },
  {
    id: 3,
    title: "Features",
    newTab: false,
    submenu: [
      {
        id: 31,
        title: "Family Tree",
        newTab: false,
        path: "/",
      },
      {
        id: 34,
        title: "DNA testing kit",
        newTab: false,
        path: "/",
      },
    ],
  },
  {
    id: 2.1,
    title: "Prices",
    newTab: false,
    path: "/blog",
  },
  {
    id: 2.3,
    title: "Contact",
    newTab: false,
    path: "/#contact",
  },
];

export default menuData;
