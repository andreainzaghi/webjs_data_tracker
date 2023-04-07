class GeolocationTracker {
  constructor(options = {}) {
    this.options = {
      enableHighAccuracy: true,
      timeout: 5000,
      maximumAge: 0,
      ...options,
    };
  }

  track() {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(
        this.onPositionSuccess.bind(this),
        this.onPositionError.bind(this),
        this.options
      );
    }
  }

  onPositionSuccess(position) {
    const { latitude, longitude, accuracy } = position.coords;
    const { timestamp } = position;

    const eventData = { latitude, longitude, accuracy };
    const eventType = "geolocation";
    this.emit(eventType, eventData, timestamp);
  }

  onPositionError(error) {
    console.error(`Geolocation error: ${error.message}`);
  }
}

export default GeolocationTracker;
