import { BrowserWindow, app } from "electron";

if (process.platform === "darwin") {
  app.quit();
}
if (!app.requestSingleInstanceLock()) {
  app.quit();
}

app.whenReady().then(() => {
  const icon = `${import.meta.dirname}/@assets/favicon.ico`;
  const mainWindow = new BrowserWindow({
    autoHideMenuBar: true,
    height: 600,
    icon,
    useContentSize: true,
    width: 800,
  });
  mainWindow.webContents.setWindowOpenHandler(_ => {
    return {
      action: "allow",
      createWindow: options => {
        return new BrowserWindow({
          ...options,
          autoHideMenuBar: true,
          icon,
          useContentSize: true,
        }).webContents;
      },
    };
  });
  mainWindow.loadURL("http://localhost:5173/");
});
