import { BrowserWindow, app } from "electron";

if (process.platform === "darwin") {
  app.quit();
}
if (!app.requestSingleInstanceLock()) {
  app.quit();
}

app.whenReady().then(() => {
  const mainWindow = new BrowserWindow({
    height: 600,
    width: 800,
    icon: `${import.meta.dirname}/favicon.ico`,
  });
  mainWindow.setMenuBarVisibility(false);
  mainWindow.loadURL("http://localhost:5173/");
});
