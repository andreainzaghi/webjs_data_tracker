class VisitDurationTracker {
  constructor() {
    this.startTime = null;
    this.endTime = null;
  }

  startTracking() {
    this.startTime = new Date();
  }

  stopTracking() {
    this.endTime = new Date();
  }

  getVisitDuration() {
    if (!this.startTime || !this.endTime) {
      throw new Error("Visit duration tracking not started or not stopped");
    }

    const duration = this.endTime - this.startTime;
    return duration;
  }

  resetTracking() {
    this.startTime = null;
    this.endTime = null;
  }
}

export default VisitDurationTracker;
