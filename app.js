const express = require('express')
const { userRoutes, patientRoutes } = require('./routes')
const port = 3000
const app = express()

app.use('/users', userRoutes)
app.use('/patients', patientRoutes)

app.listen(port, () => {
  console.log(`app listening on http://localhost:${port}`)
})
