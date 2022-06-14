const express = require('express')
const app = express()
const port = 3000
const cors = require('cors')
app.use(cors())

app.use(express.json())
app.use(express.urlencoded({extended: true}))

app.use(express.static('./'))

app.get('/', (req, res) => {
  res.sendFile('/Users/dasha_sch/Desktop/website1/index.html')
})

app.get('/test', (req, res) => {
  console.log(req.body)
  res.send(`Жди спасм на ${req.body.email}`)

  res.send(JSON.stringify(req.body.mark))
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})
