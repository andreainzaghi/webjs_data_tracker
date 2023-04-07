# Web Activity Tracker
Web Activity Tracker è una libreria JavaScript che traccia tutte le azioni degli utenti sul tuo sito web. Questa libreria può aiutare i proprietari di siti web a capire come gli utenti interagiscono con il loro sito web e a migliorare l'esperienza dell'utente.

# Installazione
Per installare la libreria Web Activity Tracker, segui questi passaggi:

Apri il terminale del tuo computer.
Naviga nella cartella del tuo progetto.
Esegui il comando npm install web-activity-tracker --save.
Utilizzo
Per utilizzare la libreria Web Activity Tracker nel tuo progetto, segui questi passaggi:

Importa la libreria nel tuo file JavaScript: import WebActivityTracker from 'web-activity-tracker'.
Crea una nuova istanza della libreria: const tracker = new WebActivityTracker().
Inizializza la libreria: tracker.init().
Ora la libreria traccerà tutte le azioni degli utenti sul tuo sito web.

# Caratteristiche
La libreria Web Activity Tracker offre le seguenti funzionalità:
<ul>
  <li><b>Tracciamento dei clic</b> sugli elementi della pagina, con informazioni su elemento cliccato, coordinate, timestamp e altro ancora.</li>
  <li><b>Tracciamento dello scrolling della pagina</b>, con informazioni sulla posizione, la direzione, la durata e altro ancora.</li>
  <li><b>Tracciamento del tempo trascorso sulla pagina</b>, con informazioni sul timestamp di ingresso e uscita dalla pagina.</li>
  <li><b>Tracciamento della navigazione tra le pagine del sito</b>, con informazioni sulle pagine visitate, l'ordine di visita e altro ancora.</li>
  <li><b>Tracciamento delle interazioni con i form e gli input della pagina</b>, con informazioni sull'elemento interagito, il tipo di interazione, il valore dell'input e altro ancora.</li>
  <li>Informazioni sul dispositivo dell'utente, inclusi il tipo di dispositivo, il sistema operativo, il browser e la risoluzione dello schermo.</li>
  <li><b>Informazioni sulla geolocalizzazione dell'utente</b>, se consentito dall'utente.</li>
  <li><b>Tracciamento delle interazioni con elementi multimediali</b> come video e audio, con informazioni sul tipo di interazione, il timestamp e altro ancora.</li>
  <li><b>Tracciamento degli errori JavaScript</b>, con informazioni sul tipo di errore, il messaggio di errore, lo stack trace e altro ancora.</li>
</ul>
  
  
# Esempio dei dati in formato Json

```json
{
  "user": {
    "id": "1234567890",
    "name": "Mario Rossi",
    "email": "mario.rossi@example.com",
    "phone": "+39 123 4567890",
    "country": "Italy",
    "region": "Lombardy",
    "city": "Milan",
    "timezone": "Europe/Rome"
  },
  "page": {
    "url": "https://www.example.com/",
    "title": "Example",
    "description": "A website for examples",
    "keywords": ["example", "website", "demo"],
    "language": "en-US"
  },
  "events": [
    {
      "type": "click",
      "target": "button#submit",
      "x": 123,
      "y": 456,
      "timestamp": 1649416800000
    },
    {
      "type": "scroll",
      "position": 789,
      "direction": "down",
      "timestamp": 1649417000000
    },
    {
      "type": "visitDuration",
      "duration": 3600,
      "enteredAt": 1649416600000,
      "leftAt": 1649420200000
    },
    {
      "type": "navigation",
      "url": "https://www.example.com/about",
      "order": 2,
      "timestamp": 1649420800000
    },
    {
      "type": "formInput",
      "target": "input#username",
      "value": "mario",
      "interactionType": "focus",
      "timestamp": 1649422000000
    },
    {
      "type": "deviceInfo",
      "deviceType": "desktop",
      "operatingSystem": "Windows 10",
      "browser": "Chrome",
      "screenResolution": "1920x1080"
    },
    {
      "type": "geolocation",
      "country": "Italy",
      "region": "Lombardy",
      "city": "Milan",
      "timezone": "Europe/Rome"
    },
    {
      "type": "mediaInteraction",
      "target": "video#player",
      "interactionType": "play",
      "timestamp": 1649424400000
    },
    {
      "type": "error",
      "errorMessage": "Uncaught TypeError: Cannot read property 'x' of undefined",
      "errorType": "TypeError",
      "stackTrace": "at Object.myFunction (https://www.example.com/js/main.js:10:15)\nat ..."
    }
  ]
}
```

# Contributi
Se vuoi contribuire al progetto Web Activity Tracker, puoi fare quanto segue:

Fai una fork del repository.
Crea un nuovo branch con la tua modifica: git checkout -b my-feature.
Fai il commit delle tue modifiche: git commit -am 'Add new feature'.
Pusha il tuo branch: git push origin my-feature.
Invia una pull request.

# Licenza
Web Activity Tracker è rilasciata sotto la licenza ISC. Per ulteriori informazioni sulla licenza, consulta il file LICENSE.md.

# Crediti
Web Activity Tracker è stato sviluppato da Andrea Inzaghi.
