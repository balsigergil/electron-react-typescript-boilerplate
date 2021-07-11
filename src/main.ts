import { app, BrowserWindow } from "electron";
import * as path from "path";

const isDevelopment = process.env.NODE_ENV === "development";

function createWindow() {
  const win = new BrowserWindow({
    width: 960,
    height: 540,
    center: true,
    icon: path.resolve(path.dirname(__dirname), "res", "icon.ico"),
  });

  if (isDevelopment) {
    win.webContents.openDevTools();
    win.loadFile("index.dev.html");
  } else {
    win.loadFile("index.prod.html");
  }
}

app.whenReady().then(createWindow);

app.on("activate", () => {
  if (BrowserWindow.getAllWindows().length === 0) {
    createWindow();
  }
});

app.on("window-all-closed", () => {
  if (process.platform !== "darwin") {
    app.quit();
  }
});
