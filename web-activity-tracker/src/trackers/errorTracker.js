class ErrorTracker {
  constructor() {
    // Inizializza un array vuoto per gli errori
    this.errors = [];
    // Aggiungi un event listener per catturare gli errori non gestiti
    window.addEventListener("error", this.onError.bind(this));
  }

  onError(errorEvent) {
    // Estrai i dati dell'errore dall'oggetto errorEvent
    const { message, filename, lineno, colno, error } = errorEvent;
    // Estrai lo stack trace dell'errore
    const stackTrace = error?.stack || "N/D";
    // Costruisci un oggetto per rappresentare l'errore
    const errorData = {
      type: error?.name || "N/D",
      message,
      stackTrace,
      filename,
      lineno,
      colno,
      timestamp: new Date(),
    };
    // Aggiungi l'errore all'array degli errori
    this.errors.push(errorData);
  }

  sendToServer(endpoint) {
    // Invia gli errori al server
    fetch(endpoint, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(this.errors),
    })
      .then((response) => response.json())
      .then((data) => console.log(data))
      .catch((error) => console.error(error));
  }
}

export default ErrorTracker;
