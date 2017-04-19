process.stderr.write("stderr output test")
process.stderr.write("COZY_DOMAIN=" + process.env.COZY_DOMAIN)
process.stderr.write("COZY_FIELDS=" + process.env.COZY_FIELDS)
process.stderr.write("COZY_CREDENTIALS=" + process.env.COZY_CREDENTIALS)

setTimeout(function() {
  console.log(JSON.stringify({foo:"bar"}))
}, 5 * 1000)
