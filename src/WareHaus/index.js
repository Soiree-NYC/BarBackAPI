const express = require('express');
const app = express();
const port = 3000;

app.use(express.json());

const venueRoutes = require('./Tardis/routes/venue');
const consumerUserRoutes = require('./Conflux/routes/consumeruser');
const clientUserRoutes = require('./Conflux/routes/clientuser');

app.use('/backback/venue', venueRoutes);
app.use('/backback/consumeruser', consumerUserRoutes);
app.use('/backback/clientuser', clientUserRoutes);

app.listen(port, () => {
  console.log(`Server running at http://localhost:${port}`);
});
