const express = require('express')
const app = express()
const port = 3000

app.use(express.json()); // ADDED EXPRESS MIDDLEWARE WHICH IS EXPRESS.JSON

app.post('/echo', (req, res) => {
  res.json({echoed: req.body });  // REQ.BODY IS NOW AVAILABLE
});
app.get('/', (req, res) => {
  res.send('Hi I am present, my name is fiyinfoluwa!')
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})