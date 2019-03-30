export function prepareText(text) {
  const regex = "\nNoteworthy:";
  return text.split(regex);
}
export function prepareTwitter(text) {
  return text === undefined ? "" : "(" + text + ")";
}
