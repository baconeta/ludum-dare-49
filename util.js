var getAlphaChannel = (colorString) => {
    var rawAlpha = colorString.split(',')[3];
    var alpha = Number(rawAlpha.substring(0, rawAlpha.length - 1)).toFixed(2);
    return alpha;
}

