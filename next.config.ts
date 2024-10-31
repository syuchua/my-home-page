import type { NextConfig } from "next";
const { i18n } = require("./next-i18next.config");
require('dotenv').config();

const nextConfig: NextConfig = {
  env: {
    NEXT_PUBLIC_GITHUB_TOKEN: process.env.NEXT_PUBLIC_GITHUB_TOKEN,
  },
  /* 其他配置选项 */
};

export default nextConfig;