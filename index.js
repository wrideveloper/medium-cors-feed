const express = require('express')
const app = express()
const cors = require('cors')
const feed = require('medium-json-feed')

app.use(cors())
app.get('/feed', (req, res) => {
  feed('wripolinema').then(data => res.json(data))
})

app.listen(process.env.PORT || 3001, () => console.log('server started'))
