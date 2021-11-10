const { app, BrowserWindow, Menu, net } = require("electron");
const menu = require("./menu");
function createWindow() {
  const win = new BrowserWindow({
    width: 800,
    height: 600,
    webPreferences: {
      nodeIntegration: true,
    },
    resizable: false,
  });
  win.loadFile("index.html");
}
function abcd() {
  const request = net.request(
    ""
  );
  request.on("response", (response) => {
    response.on("data", (chunk) => {
      console.log(`BODY: ${chunk}`);
    });
    response.on("end", () => {
      console.log("No more data in response.");
    });
  });
  request.end()
  console.log("hello there");
}
app.on("ready", createWindow);
app.on("ready", abcd);
