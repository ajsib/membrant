// config.js
import configDev from "./utils/config.dev";
import configProd from "./utils/config.prod";
var isDevelopment = process.env.NODE_ENV === "development";
var config = isDevelopment ? configDev : configProd;
export default config;
