class FormInputTracker {
  constructor(webActivityTracker) {
    this.webActivityTracker = webActivityTracker;
    this.init();
  }

  init() {
    // Ascolta gli eventi di focus, blur e change sugli elementi del form
    document.addEventListener("focus", this.handleFocus.bind(this), true);
    document.addEventListener("blur", this.handleBlur.bind(this), true);
    document.addEventListener("change", this.handleChange.bind(this), true);
  }

  handleFocus(event) {
    const { target } = event;
    if (this.isFormElement(target)) {
      const eventData = this.extractEventData(target, "focus");
      this.webActivityTracker.track("form_input_focus", eventData);
    }
  }

  handleBlur(event) {
    const { target } = event;
    if (this.isFormElement(target)) {
      const eventData = this.extractEventData(target, "blur");
      this.webActivityTracker.track("form_input_blur", eventData);
    }
  }

  handleChange(event) {
    const { target } = event;
    if (this.isFormElement(target)) {
      const eventData = this.extractEventData(target, "change");
      this.webActivityTracker.track("form_input_change", eventData);
    }
  }

  isFormElement(element) {
    return (
      element.tagName === "INPUT" ||
      element.tagName === "TEXTAREA" ||
      element.tagName === "SELECT"
    );
  }

  extractEventData(element, interactionType) {
    return {
      elementType: element.tagName,
      inputType: element.type || null,
      interactionType: interactionType,
      value: element.value || null,
      name: element.name || null,
      id: element.id || null,
      className: element.className || null,
      timestamp: new Date(),
    };
  }
}

export default FormInputTracker;
