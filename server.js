const express = require('express')
const app = express()
const port = 3000

app.use(express.static('./public'))

app.get('/', (req, res) => {
  res.sendFile('C:/Users/student/Desktop/project/dasha/index.html')
  const user_id = req.query.user_id
  const token = req.query.token
  const geo = req.qeury.geo

  res.send({
    user_id: user_id,
    token: token,
    geo: geo,
  })
})

app.get('/test', (req, res) => {
  console.log(req.query)
  res.send(`Жди спасм на ${req.query.email}`)
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})
