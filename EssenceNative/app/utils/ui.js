/**
 * Created by zsoltmakai on 5/18/2016.
 */

export function hexToRgba(hex, opacity) {
  hex = hex.replace('#','');
  let r = parseInt(hex.substring(0,2), 16);
  let g = parseInt(hex.substring(2,4), 16);
  let b = parseInt(hex.substring(4,6), 16);
  var result = 'rgba(' + r + ',' + g + ',' + b + ',' + opacity +')';
  return result;
}

export function lighten(color, percent) {
  if(typeof color !== 'string') throw new Error("Invalid color for ui.lighten() [" + percent + ']');
  if(color.charAt(0) !== '#') color = '#' + color;
  var num = parseInt(color.slice(1),16), amt = Math.round(2.55 * percent), R = (num >> 16) + amt, G = (num >> 8 & 0x00FF) + amt, B = (num & 0x0000FF) + amt;
  return "#" + (0x1000000 + (R<255?R<1?0:R:255)*0x10000 + (G<255?G<1?0:G:255)*0x100 + (B<255?B<1?0:B:255)).toString(16).slice(1);
}

export function darken(color, percent) {
  try {
    return lighten(color, 0 - percent);
  } catch(e) {
    throw new Error("Invalid color for ui.darken() [" + percent + ']');
  }
}

/*
* Returns white or black, based on the given hex color.
* */
export function getTextColor(c, _WHITE, _BLACK) {
  let whiteColor = (typeof _WHITE === 'string' ? _WHITE : '#FFFFFF'),
    blackColor = (typeof _BLACK === 'string' ? _BLACK : '#000000');
  var c = c.substring(1);      // strip #
  var rgb = parseInt(c, 16);   // convert rrggbb to decimal
  var r = (rgb >> 16) & 0xff;  // extract red
  var g = (rgb >>  8) & 0xff;  // extract green
  var b = (rgb >>  0) & 0xff;  // extract blue

  var luma = 0.2126 * r + 0.7152 * g + 0.0722 * b; // per ITU-R BT.709

  if (luma < 40) {
    return whiteColor;
  }
  return blackColor;
}