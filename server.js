const express = require('express')
const app = express()

app.get('/', (req, res) => res.send('Hello World! From AWS CodeDeploy! V3'))

var server = app.listen(process.env.PORT || 3000, () => console.log(`Example app listening on port ${server.address().port}`))