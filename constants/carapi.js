import getConfig from "next/config";

const { publicRuntimeConfig } = getConfig();

const CARAPI = {
  API_V1_URL: publicRuntimeConfig.DASHBOARD_API_V1_URL
};

export default CARAPI;
