const express = require('express')
const dev = express()
dev.use(express.static('./client'))

// app.listen(8000, () => console.log('ready'))

module.exports = dev
