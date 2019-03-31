export function prepareText(text) {
  const regex = "\nNoteworthy:";
  return text.split(regex);
}
export function prepareTwitter(text) {
  return text === undefined ? "" : "(" + text + ")";
}

export function chunk(array, n) {
  return Array.from(Array(Math.ceil(array.length / n)), (_, i) =>
    array.slice(i * n, i * n + n)
  );
}
