const express = require('express')
const userRoutes = require('./routes/userRoutes')
const port = 3000
const app = express()

app.use('/users', userRoutes)

app.listen(port, () => {
  console.log(`app listening on http://localhost:${port}`)
})
