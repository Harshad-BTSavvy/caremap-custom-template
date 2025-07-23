import Tab1 from "@/app/home/tab1";

export const ROUTE_PREFIX = {
  LAUNCH: "/launch",

  HOME: "/home",
} as const;

export const ROUTES = {
  LAUNCH:`${ROUTE_PREFIX.LAUNCH}` as const,
  HOME: `${ROUTE_PREFIX.HOME}` as const,
  TAB1: `${ROUTE_PREFIX.HOME}/tab1` as const,
  TAB2: `${ROUTE_PREFIX.HOME}/tab2` as const,

} as const;

export type AppRoutes = keyof typeof ROUTES;
