import type { NextConfig } from "next";
const { i18n } = require("./next-i18next.config");

const nextConfig: NextConfig = {
  i18n,
  /* 其他配置选项 */
};

export default nextConfig;
