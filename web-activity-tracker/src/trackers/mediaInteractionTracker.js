class MediaInteractionTracker {
  constructor(eventEmitter) {
    this.eventEmitter = eventEmitter;
    this.mediaElements = [];
    this.trackMediaInteractions = this.trackMediaInteractions.bind(this);
  }

  track() {
    this.addMediaElementsToList();

    // Add event listeners to all media elements
    this.mediaElements.forEach((media) => {
      media.addEventListener("play", this.trackMediaInteractions);
      media.addEventListener("pause", this.trackMediaInteractions);
      media.addEventListener("volumechange", this.trackMediaInteractions);
      media.addEventListener("mute", this.trackMediaInteractions);
    });
  }

  addMediaElementsToList() {
    // Get all media elements on the page
    const mediaElements = document.querySelectorAll("video, audio");

    // Add new media elements to the list
    mediaElements.forEach((media) => {
      if (!this.mediaElements.includes(media)) {
        this.mediaElements.push(media);
      }
    });
  }

  trackMediaInteractions(event) {
    const { type, target: media } = event;
    const interactionData = {
      mediaType: media.tagName,
      mediaSrc: media.src,
      interactionType: type,
      timestamp: new Date(),
    };

    this.eventEmitter.emit("mediaInteraction", interactionData);
  }

  stop() {
    // Remove event listeners from all media elements
    this.mediaElements.forEach((media) => {
      media.removeEventListener("play", this.trackMediaInteractions);
      media.removeEventListener("pause", this.trackMediaInteractions);
      media.removeEventListener("volumechange", this.trackMediaInteractions);
      media.removeEventListener("mute", this.trackMediaInteractions);
    });

    // Clear media elements list
    this.mediaElements = [];
  }
}

export default MediaInteractionTracker;
