let orderStatus: "pending" | "shipped" | "delivered";

orderStatus = "pending";
console.log("Order Status:", orderStatus);

enum LogLevel {
  Info = "Info",
  Warning = "Warning",
  Error = "Error",
}

function logMessage(level: LogLevel, message: string): void {
  console.log(`[${level}] ${message}`);
}

logMessage(LogLevel.Info, "El sistema se ha iniciado correctamente");
logMessage(LogLevel.Warning, "El stock está bajo");
logMessage(LogLevel.Error, "No se pudo conectar a la base de datos");
