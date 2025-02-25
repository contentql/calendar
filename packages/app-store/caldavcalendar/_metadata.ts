import type { AppMeta } from "@calcom/types/App";

import _package from "./package.json";

export const metadata = {
  name: "CalDav (Beta)",
  description: _package.description,
  installed: true,
  type: "caldav_calendar",
  title: "CalDav (Beta)",
  imageSrc: "/api/app-store/caldavcalendar/icon.svg",
  variant: "calendar",
  category: "calendar",
  categories: ["calendar"],
  logo: "/api/app-store/caldavcalendar/icon.svg",
  publisher: "Cal.com",
  slug: "caldav-calendar",
  url: "https://cal.com/",
  email: "ali@cal.com",
} as AppMeta;

export default metadata;
