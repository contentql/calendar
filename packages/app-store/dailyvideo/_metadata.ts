import type { AppMeta } from "@calcom/types/App";

import _package from "./package.json";

export const metadata = {
  name: "Cal Video",
  description: _package.description,
  installed: !!process.env.DAILY_API_KEY,
  type: "daily_video",
  imageSrc: "/api/app-store/dailyvideo/icon.svg",
  variant: "conferencing",
  url: "https://daily.co",
  categories: ["video"],
  logo: "/api/app-store/dailyvideo/icon.svg",
  publisher: "Cal.com",
  category: "video",
  slug: "daily-video",
  title: "Cal Video",
  isGlobal: true,
  email: "help@cal.com",
  appData: {
    location: {
      linkType: "dynamic",
      type: "integrations:daily",
      label: "Cal Video",
    },
  },
  key: { apikey: process.env.DAILY_API_KEY },
  dirName: "dailyvideo",
} as AppMeta;

export default metadata;
