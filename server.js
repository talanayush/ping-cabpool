const axios = require("axios");

const SERVER_URL = "https://cabpool-backend.onrender.com/tickets/all"; // change this to your actual URL
const INTERVAL = 14* 60 * 1000; // 14 minutes in milliseconds

const pingServer = async () => {
  try {
    const res = await axios.get(SERVER_URL);
    console.log(`[${new Date().toLocaleTimeString()}] Ping successful: ${res.status}`);
  } catch (err) {
    console.error(`[${new Date().toLocaleTimeString()}] Ping failed:`, err.message);
  }
};

console.log("Starting ping bot...");
pingServer(); // Initial ping
setInterval(pingServer, INTERVAL);
