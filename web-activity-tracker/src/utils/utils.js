/**
 * Normalizza una stringa rimuovendo tutti gli spazi e convertendola in lowercase.
 * @param {string} str La stringa da normalizzare.
 * @returns {string} La stringa normalizzata.
 */
function normalizeString(str) {
  return str.replace(/\s/g, "").toLowerCase();
}

/**
 * Verifica se un valore è un numero intero.
 * @param {*} value Il valore da verificare.
 * @returns {boolean} True se il valore è un numero intero, false altrimenti.
 */
function isInteger(value) {
  return (
    typeof value === "number" && isFinite(value) && Math.floor(value) === value
  );
}

/**
 * Converte un valore in una stringa di JSON.
 * @param {*} value Il valore da convertire.
 * @returns {string} La stringa di JSON risultante.
 */
function toJSONString(value) {
  try {
    return JSON.stringify(value);
  } catch (error) {
    return "";
  }
}

export { normalizeString, isInteger, toJSONString };
