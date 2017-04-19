console.error("stderr output test")
console.error("COZY_DOMAIN=" + process.env.COZY_DOMAIN)
console.error("COZY_FIELDS=" + process.env.COZY_FIELDS)
console.error("COZY_CREDENTIALS=" + process.env.COZY_CREDENTIALS)

setTimeout(function() {
  console.log(JSON.stringify({foo:"bar"}))
}, 5 * 1000)
