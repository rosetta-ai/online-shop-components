export const container = (header, elemItems) => {
  return require('./templates/container').template(header, elemItems)
}

export const item = (property) => {
  return require('./templates/item').template(property)
}
