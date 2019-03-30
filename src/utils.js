export function prepareText(text) {
  const regex = "\n";
  return text.split(regex);
}
export function prepareTwitter(text) {
  return text === undefined ? "" : "(" + text + ")";
}
