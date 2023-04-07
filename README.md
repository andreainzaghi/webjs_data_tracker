<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <title>Web Activity Tracker</title>
    <style>
        body {
            font-family: Arial, sans-serif;
            line-height: 1.5;
        }

        h1 {
            font-size: 3em;
            text-align: center;
            margin-top: 50px;
        }

        h2 {
            font-size: 2em;
            margin-top: 40px;
        }

        p {
            font-size: 1.2em;
        }

        ul {
            list-style-type: disc;
            margin-top: 20px;
            margin-bottom: 20px;
        }

        li {
            font-size: 1.2em;
            margin-top: 10px;
        }

        strong {
            font-weight: bold;
        }
    </style>
</head>
<body>
    <h1>Web Activity Tracker</h1>
    <p>Libreria adatta al tracking delle azioni da parte dell'utente sul tuto sito web.</p>

    <h2>Caratteristiche</h2>
    <ul>
        <li><strong>Tracciamento dei clic</strong> sugli elementi della pagina, con informazioni su elemento cliccato, coordinate, timestamp e altro ancora.</li>
        <li><strong>Tracciamento dello scrolling della pagina</strong>, con informazioni sulla posizione, la direzione, la durata e altro ancora.</li>
        <li><strong>Tracciamento del tempo trascorso sulla pagina</strong>, con informazioni sul timestamp di ingresso e uscita dalla pagina.</li>
        <li><strong>Tracciamento della navigazione tra le pagine del sito</strong>, con informazioni sulle pagine visitate, l'ordine di visita e altro ancora.</li>
        <li><strong>Tracciamento delle interazioni con i form e gli input della pagina</strong>, con informazioni sull'elemento interagito, il tipo di interazione, il valore dell'input e altro ancora.</li>
        <li>Informazioni sul dispositivo dell'utente, inclusi il tipo di dispositivo, il sistema operativo, il browser e la risoluzione dello schermo.</li>
        <li><strong>Informazioni sulla geolocalizzazione dell'utente</strong>, se consentito dall'utente.</li>
        <li><strong>Tracciamento delle interazioni con elementi multimediali</strong> come video e audio, con informazioni sul tipo di interazione, il timestamp e altro ancora.</li>
        <li><strong>Tracciamento degli errori JavaScript</strong>, con informazioni sul tipo di errore, il messaggio di errore, lo stack trace e altro ancora.</li>
    </ul>

    <h2>Installazione</h2>
    <p>Per installare la libreria, eseguire il seguente comando:</p>
    <pre><code>npm install web-activity-tracker</code></pre>

    <h2>Utilizzo</h2>
    <p>Per utilizzare la libreria, aggiungere il seguente codice alla propria applicazione:</p>
    <pre><code>// Importazione della libreria
const { WebActivityTracker } = require('web-activity-tracker');

// Configurazione del tracker
const tracker = new WebActivityTracker
({
url: 'https://example.com/tracker',
enableGeoLocation: true,
enableErrorTracking: true
});

// Avvio del tracker
tracker.startTracking();</code></pre>
<h2>Contributi</h2>
<p>Se desideri contribuire al progetto, ti invitiamo a fare il fork del repository su GitHub, apportare le modifiche necessarie e inviare una pull request. Ti ringraziamo in anticipo per il tuo contributo!</p>

<h2>Licenza</h2>
<p>La libreria è distribuita sotto la licenza ISC.</p>

<h2>Crediti</h2>
<p>La libreria è stata sviluppata da Andrea Inzaghi.</p>
<body>
<html>
