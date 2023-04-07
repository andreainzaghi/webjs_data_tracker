class DeviceInfoTracker {
  constructor() {
    this.deviceInfo = {
      deviceType: null,
      os: null,
      browser: null,
      screenResolution: null,
    };
  }

  trackDeviceInfo() {
    this.deviceInfo.deviceType = this.getDeviceType();
    this.deviceInfo.os = this.getOS();
    this.deviceInfo.browser = this.getBrowser();
    this.deviceInfo.screenResolution = this.getScreenResolution();
  }

  getDeviceType() {
    const isMobile = /Mobile|iP(hone|od|ad)|Android|BlackBerry|IEMobile/.test(
      navigator.userAgent
    );
    const isTablet = /Tablet|iPad/i.test(navigator.userAgent);
    return isMobile ? "mobile" : isTablet ? "tablet" : "desktop";
  }

  getOS() {
    const userAgent = navigator.userAgent;
    const platform = navigator.platform;
    const macosPlatforms = ["Macintosh", "MacIntel", "MacPPC", "Mac68K"];
    const windowsPlatforms = ["Win32", "Win64", "Windows", "WinCE"];
    const iosPlatforms = ["iPhone", "iPad", "iPod"];
    let os = null;

    if (macosPlatforms.indexOf(platform) !== -1) {
      os = "Mac OS";
    } else if (iosPlatforms.indexOf(platform) !== -1) {
      os = "iOS";
    } else if (windowsPlatforms.indexOf(platform) !== -1) {
      os = "Windows";
    } else if (/Android/.test(userAgent)) {
      os = "Android";
    } else if (!os && /Linux/.test(platform)) {
      os = "Linux";
    }

    return os;
  }

  getBrowser() {
    const userAgent = navigator.userAgent;
    let browser = null;

    if (userAgent.indexOf("Firefox") > -1) {
      browser = "Firefox";
    } else if (
      userAgent.indexOf("Opera") > -1 ||
      userAgent.indexOf("OPR/") > -1
    ) {
      browser = "Opera";
    } else if (userAgent.indexOf("Trident") > -1) {
      browser = "Internet Explorer";
    } else if (userAgent.indexOf("Edge") > -1) {
      browser = "Edge";
    } else if (userAgent.indexOf("Chrome") > -1) {
      browser = "Chrome";
    } else if (userAgent.indexOf("Safari") > -1) {
      browser = "Safari";
    } else {
      browser = "Unknown";
    }

    return browser;
  }

  getScreenResolution() {
    return `${window.screen.width}x${window.screen.height}`;
  }

  getDeviceInfo() {
    return this.deviceInfo;
  }
}

export default DeviceInfoTracker;
