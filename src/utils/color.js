export function rgbToHex(r, g, b) {
  let hex = [r.toString(16), g.toString(16), b.toString(16)];
  for (let i = 0; i < 3; i++) {
    if (hex[i].length === 1) {
      hex[i] = `0${hex[i]}`;
    }
  }
  return `#${hex.join}`;
}
export function hexToRgb(str, toStr = true) {
  let hexs = null;
  str = str.replace("#", "");
  hexs = str.match(/../g);
  for (let i = 0; i < hexs.length; i++) {
    hexs[i] = parseInt(hexs[i], 16);
  }
  if (toStr) {
    return `rgb(${hexs[0]}, ${hexs[1]}, ${hexs[2]})`;
  } else {
    return hexs;
  }
}

export function getLightColor(color, level) {
  let rgb = hexToRgb(color, false);
  for (let i = 0; i < 3; i++) {
    rgb[i] = Math.floor((255 - rgb[i]) * level + rgb[i]);
  }
  return rgbToHex(rgb[0], rgb[1], rgb[2]);
}
