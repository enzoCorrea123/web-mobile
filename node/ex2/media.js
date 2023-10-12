function mediaArray(x) {
  let media = 0;
  for (let i = 0; i < x.length; i++) {
    media += x[i];
  }
  return media / x.length;
}
module.exports.mediaArray = mediaArray;
