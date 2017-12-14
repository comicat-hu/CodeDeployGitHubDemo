const express = require('express')
const app = express()

app.get('/', (req, res) => res.send('Hello World! From AWS CodeDeploy!'))

var server = app.listen(process.env.PORT || 3000, () => console.log(`Example app listening on port ${server.address().port}`))