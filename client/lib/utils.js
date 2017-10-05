export function scalePreserveRatio (imgW, imgH, maxW, maxH) {
  return (Math.max((maxW / imgW), (maxH / imgH)))
}

export function toNormalizedRGB (data, bufferSize) {
  const dstChannels = 3
  const srcChannels = 4
  const newData = new Float32Array(bufferSize * dstChannels)

  for (let i = 0; i < data.length; i += srcChannels) {
    const idx = i - Math.floor(i / srcChannels)
    for (let j = 0; j < 3; j++) {
      newData[idx + j] = data[i + j] / 255
    }
  }

  return newData
}
