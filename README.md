# Web Activity Tracker
Web Activity Tracker è una libreria JavaScript che traccia tutte le azioni degli utenti sul tuo sito web. Questa libreria può aiutare i proprietari di siti web a capire come gli utenti interagiscono con il loro sito web e a migliorare l'esperienza dell'utente.

# Installazione
<strong>Per installare la libreria Web Activity Tracker, segui questi passaggi:</strong>

<ol>
  <li>Apri il terminale del tuo computer.</li>
  <li>Naviga nella cartella del tuo progetto.</li>
  <li>Esegui il comando <code>npm install web-activity-tracker --save</code>.</li>
</ol>

Per utilizzare la libreria Web Activity Tracker nel tuo progetto, segui questi passaggi:

<ol>
  <li>Importa la libreria nel tuo file JavaScript: <code>import WebActivityTracker from 'web-activity-tracker'</code>.</li>
  <li>Crea una nuova istanza della libreria: <code>const tracker = new WebActivityTracker()</code>.</li>
  <li>Inizializza la libreria: <code>tracker.init()</code>.</li>
  <li>Ora la libreria traccerà tutte le azioni degli utenti sul tuo sito web.</li>
</ol>

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

# Scopo dei dati

I dati generati dalla tua libreria possono essere utilizzati per vari scopi di analisi dei dati. Ad esempio:

- Analisi del comportamento degli utenti: I dati raccolti possono essere utilizzati per capire come gli utenti interagiscono con il tuo sito web. Ad esempio, puoi analizzare i dati per vedere quali pagine vengono visitate più frequentemente, quali elementi vengono cliccati di più e così via.

- Ottimizzazione dell'esperienza dell'utente: I dati possono aiutarti a capire come gli utenti si muovono attraverso il tuo sito web e dove si verificano eventuali problemi. Ad esempio, se scopri che molti utenti lasciano il tuo sito web da una determinata pagina, puoi indagare per capire perché e apportare le modifiche necessarie per migliorare l'esperienza dell'utente.

- Test di usabilità: Puoi utilizzare i dati per testare l'usabilità del tuo sito web. Ad esempio, puoi monitorare gli utenti mentre navigano nel tuo sito web per capire dove incontrano difficoltà.

- Analisi delle performance del sito web: I dati possono aiutarti a capire come il tuo sito web si comporta in termini di prestazioni. Ad esempio, puoi monitorare il tempo di caricamento delle pagine e altri indicatori di prestazione per identificare eventuali problemi e apportare le modifiche necessarie per migliorare le prestazioni del tuo sito web.

- Analisi delle tendenze: I dati possono essere utilizzati per identificare le tendenze emergenti nel comportamento degli utenti. Ad esempio, puoi analizzare i dati per vedere se c'è un aumento dell'utilizzo del tuo sito web da parte degli utenti mobile rispetto agli utenti desktop.

# Contributi
Se vuoi contribuire al progetto Web Activity Tracker, puoi fare quanto segue:

<ol>
  <li>Fai una fork del repository.</li>
  <li>Crea un nuovo branch con la tua modifica: <code>git checkout -b my-feature</code>.</li>
  <li>Fai il commit delle tue modifiche: <code>git commit -am 'Add new feature'</code>.</li>
  <li>Pusha il tuo branch: <code>git push origin my-feature</code>.</li>
  <li>Invia una pull request.</li>
</ol>

# Licenza
Web Activity Tracker è rilasciata sotto la licenza ISC. Per ulteriori informazioni sulla licenza, consulta il file LICENSE.md.

# Crediti
Web Activity Tracker è stato sviluppato da Andrea Inzaghi.
