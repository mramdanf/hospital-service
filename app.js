const express = require('express');
const { userRoutes, patientRoutes, doctorRoutes } = require('./routes');

const port = 3000;
const app = express();

app.use(express.json());

app.use('/users', userRoutes);
app.use('/patients', patientRoutes);
app.use('/doctors', doctorRoutes);

app.listen(port, () => {
  console.log(`app listening on http://localhost:${port}`);
});
