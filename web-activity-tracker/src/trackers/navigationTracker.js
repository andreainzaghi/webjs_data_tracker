class NavigationTracker {
  constructor() {
    this.pageVisits = [];
    this.init();
  }

  init() {
    window.addEventListener("load", () => {
      this.trackPageVisit();
    });

    window.addEventListener("popstate", () => {
      this.trackPageVisit();
    });

    window.addEventListener("pushState", () => {
      this.trackPageVisit();
    });

    window.addEventListener("replaceState", () => {
      this.trackPageVisit();
    });
  }

  trackPageVisit() {
    const url = window.location.href;
    const timestamp = new Date();
    this.pageVisits.push({ url, timestamp });
  }

  getPageVisits() {
    return this.pageVisits;
  }
}

export default NavigationTracker;
