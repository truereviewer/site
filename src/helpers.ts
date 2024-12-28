const imgUrl = (name: string, path: string = '', type: 'img' | 'svg' | 'icons' = 'img'): string => {
  let tPath = `assets/${type}`

  if (path) {
    tPath = tPath + '/' + path
  }

  tPath = tPath + '/' + name

  return new URL(tPath, import.meta.url).href
}

export { imgUrl }
