class ScrollTracker {
  constructor() {
    this.scrollData = [];
    this.lastScrollPosition = 0;
    this.scrollThreshold = 50; // Personalizza la soglia per rilevare gli scroll significativi
  }

  startTracking() {
    window.addEventListener("scroll", this.handleScroll.bind(this));
  }

  stopTracking() {
    window.removeEventListener("scroll", this.handleScroll.bind(this));
  }

  handleScroll() {
    const currentScrollPosition =
      window.pageYOffset || document.documentElement.scrollTop;
    const scrollDirection = this.getScrollDirection(currentScrollPosition);

    if (
      Math.abs(currentScrollPosition - this.lastScrollPosition) >=
      this.scrollThreshold
    ) {
      const timestamp = new Date();
      const eventData = {
        position: currentScrollPosition,
        direction: scrollDirection,
        timestamp,
      };

      this.scrollData.push(eventData);
      this.lastScrollPosition = currentScrollPosition;
    }
  }

  getScrollDirection(currentScrollPosition) {
    const direction =
      currentScrollPosition >= this.lastScrollPosition ? "down" : "up";
    return direction;
  }

  getScrollData() {
    return this.scrollData;
  }
}

export default ScrollTracker;
