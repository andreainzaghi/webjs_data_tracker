class ClickTracker {
  constructor() {
    this.clickEvents = [];
    this.handleClick = this.handleClick.bind(this);
  }

  init() {
    document.addEventListener("click", this.handleClick);
  }

  destroy() {
    document.removeEventListener("click", this.handleClick);
  }

  handleClick(event) {
    const { target, clientX, clientY, timeStamp } = event;

    const eventData = {
      elementType: target.tagName,
      elementId: target.id,
      elementClass: target.className,
      x: clientX,
      y: clientY,
      timeStamp,
    };

    this.clickEvents.push(eventData);
  }

  getClickData() {
    return this.clickEvents;
  }
}

export default ClickTracker;
