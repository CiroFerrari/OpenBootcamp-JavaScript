const winston = require("winston");

const logger = winston.createLogger({
  level: "error",
  format: winston.format.json(),
  defaultMeta: { service: "user-service" },
  transports: [
    new winston.transports.File({ filename: "error.log", level: "error" }),
  ],
});

function mostrarError() {
  throw new Error("showError function");
}

try {
  mostrarError();
} catch (error) {
  logger.log("error", error.toString());
}