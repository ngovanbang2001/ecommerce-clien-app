import React from "react";
import { MdDashboard } from "react-icons/md";
import { FaProductHunt } from "react-icons/fa";
import { BiSolidCategory } from "react-icons/bi";
import { FaUser } from "react-icons/fa";
import { NavbarAdmin } from "../types/common";

export const NAVBAR_ADMIN: NavbarAdmin[] = [
  {
    title: "Dashboard",
    icon: <MdDashboard />,
    path: "/",
  },
  {
    title: "Products",
    icon: <FaProductHunt />,
    path: "/products",
  },
  {
    title: "Users",
    icon: <FaUser />,
    path: "/users",
  },
  {
    title: "Categories",
    icon: <BiSolidCategory />,
    path: "/categories",
  },
];

export const ACCESS_TOKEN = "access_token";

export const REFRESH_TOKEN = "refresh_token";

export const protectedRoutes = ["/profile", "/cart"];

export const ROUTER_PATH = {
  home: {
    title: "home",
    path: "/",
  },
  products: {
    title: "products",
    path: "/products",
  },
  users: {
    title: "users",
    path: "/users",
  },
  categories: {
    title: "categories",
    path: "/categories",
  },
  cart: {
    title: "cart",
    path: "/cart",
  },
};
