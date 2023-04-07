import ClickTracker from "./trackers/clickTracker";
import ScrollTracker from "./trackers/scrollTracker";
import VisitDurationTracker from "./trackers/visitDurationTracker";
import NavigationTracker from "./trackers/navigationTracker";
import FormInputTracker from "./trackers/formInputTracker";
import DeviceInfoTracker from "./trackers/deviceInfoTracker";
import GeolocationTracker from "./trackers/geolocationTracker";
import MediaInteractionTracker from "./trackers/mediaInteractionTracker";
import ErrorTracker from "./trackers/errorTracker";

class WebActivityTracker {
  constructor(options = {}) {
    this.options = options;
    this.trackers = [
      new ClickTracker(),
      new ScrollTracker(),
      new VisitDurationTracker(),
      new NavigationTracker(),
      new FormInputTracker(),
      new DeviceInfoTracker(),
      new GeolocationTracker(),
      new MediaInteractionTracker(),
      new ErrorTracker(),
    ];
    this.init();
  }

  init() {
    this.trackers.forEach((tracker) => {
      if (typeof tracker.init === "function") {
        tracker.init(this.options);
      }
    });
  }

  sendToServer(endpoint) {
    const eventData = this.trackers.reduce((acc, tracker) => {
      if (typeof tracker.getData === "function") {
        const trackerData = tracker.getData();
        acc = { ...acc, ...trackerData };
      }
      return acc;
    }, {});

    fetch(endpoint, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(eventData),
    })
      .then((response) => response.json())
      .then((data) => console.log("Data sent to server:", data))
      .catch((error) => console.error("Error sending data to server:", error));
  }
}

export default WebActivityTracker;
