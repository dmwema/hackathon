'use strict'

module.exports = () => {
  for (const item of Object.keys(require.cache)) {
    if (!item.includes('deasync')) {
      delete require.cache[item]
    }
  }
}
