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

app.use((err, req, res, next) => {
  console.error(err.stack);
  res.status(err.status || 500).json({
    message: err.message || 'Internal Server Errror',
    ...(process.env.NODE_ENV === 'development' && { error: err }),
  });
});

app.listen(port, () => {
  console.log(`Server running at http://localhost:${port}`);
});
