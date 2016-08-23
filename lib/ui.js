/**
 * Created by zsoltmakai on 5/18/2016.
 */

export function hexToRgba(hex, opacity) {
  hex = hex.replace('#', '');
  let r = parseInt(hex.substring(0, 2), 16);
  let g = parseInt(hex.substring(2, 4), 16);
  let b = parseInt(hex.substring(4, 6), 16);
  var result = 'rgba(' + r + ',' + g + ',' + b + ',' + opacity + ')';
  return result;
}

export function lighten(color, percent) {
  if (typeof color !== 'string') throw new Error("Invalid color for ui.lighten() [" + percent + ']');
  if (color.charAt(0) !== '#') color = '#' + color;
  var num = parseInt(color.slice(1), 16), amt = Math.round(2.55 * percent), R = (num >> 16) + amt, G = (num >> 8 & 0x00FF) + amt, B = (num & 0x0000FF) + amt;
  return "#" + (0x1000000 + (R < 255 ? R < 1 ? 0 : R : 255) * 0x10000 + (G < 255 ? G < 1 ? 0 : G : 255) * 0x100 + (B < 255 ? B < 1 ? 0 : B : 255)).toString(16).slice(1);
}

export function darken(color, percent) {
  try {
    return lighten(color, 0 - percent);
  } catch (e) {
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
  var g = (rgb >> 8) & 0xff;  // extract green
  var b = (rgb >> 0) & 0xff;  // extract blue

  var luma = 0.2126 * r + 0.7152 * g + 0.0722 * b; // per ITU-R BT.709

  if (luma < 40) {
    return whiteColor;
  }
  return blackColor;
}

/*
* color gradient from http://stackoverflow.com/questions/3080421/javascript-color-gradient
*
*
* */


function hex (c) {
  var s = "0123456789abcdef";
  var i = parseInt (c);
  if (i == 0 || isNaN (c))
    return "00";
  i = Math.round (Math.min (Math.max (0, i), 255));
  return s.charAt ((i - i % 16) / 16) + s.charAt (i % 16);
}

/* Convert an RGB triplet to a hex string */
function convertToHex (rgb) {
  return hex(rgb[0]) + hex(rgb[1]) + hex(rgb[2]);
}

/* Remove '#' in color hex string */
function trim (s) { return (s.charAt(0) == '#') ? s.substring(1, 7) : s }

/* Convert a hex string to an RGB triplet */
function convertToRGB (hex) {
  var color = [];
  color[0] = parseInt ((trim(hex)).substring (0, 2), 16);
  color[1] = parseInt ((trim(hex)).substring (2, 4), 16);
  color[2] = parseInt ((trim(hex)).substring (4, 6), 16);
  return color;
}

export function generateColor(colorStart,colorEnd,colorCount){

  // The beginning of your gradient
  var start = convertToRGB (colorStart);

  // The end of your gradient
  var end   = convertToRGB (colorEnd);

  // The number of colors to compute
  var len = colorCount;

  //Alpha blending amount
  var alpha = 0.0;

  var saida = [];

  for (i = 0; i < len; i++) {
    var c = [];
    alpha += (1.0/len);

    c[0] = start[0] * alpha + (1 - alpha) * end[0];
    c[1] = start[1] * alpha + (1 - alpha) * end[1];
    c[2] = start[2] * alpha + (1 - alpha) * end[2];

    saida.push(convertToHex (c));

  }

  return saida;

}
/*
*  example: var tmp = generateColor('#000000','#ff0ff0',10);
*   const tmpList = [];
 for (let i = 0; i < tmp.length; i++) {
 let item = '#' + tmp[i].toString();
 const viewStyle = {
 width: width,
 height: 1,
 backgroundColor: item

 };
 let tmpView = <View key={i + item} style={viewStyle}/>;
 if (!tmpView) return;
 tmpList.push(tmpView);
 render () { return ({tmplist}) }
 }
* */