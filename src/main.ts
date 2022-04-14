import { app, BrowserWindow } from "electron";
import * as path from "path";

const isProduction = process.env.NODE_ENV === "production";

function createWindow() {
  const win = new BrowserWindow({
    width: 960,
    height: 540,
    center: true,
    icon: path.resolve(path.dirname(__dirname), "res", "logo.ico"),
  });

  if (isProduction) {
    win.loadFile(path.resolve(__dirname, "index.prod.html"));
  } else {
    win.loadURL("http://localhost:3000/index.dev.html");
  }
}

app.whenReady().then(() => {
  createWindow();

  app.on("activate", () => {
    if (BrowserWindow.getAllWindows().length === 0) {
      createWindow();
    }
  });
});

app.on("window-all-closed", () => {
  if (process.platform !== "darwin") {
    app.quit();
  }
});
