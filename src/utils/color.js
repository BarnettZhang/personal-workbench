export function hexToRgb(str) {
  let hexs = null;
  str = str.replace("#", "");
  hexs = str.match(/../g);
  for (let i = 0; i < hexs.length; i++) {
    hexs[i] = parseInt(hexs[i], 16);
  }
  return `rgb(${hexs[0]}, ${hexs[1]}, ${hexs[2]})`;
}
