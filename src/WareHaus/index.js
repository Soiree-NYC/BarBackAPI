const express = require('express');
const app = express();
const port = 3000;
app.use(express.json());

// Tardis routes
const venueRoutes = require('./Tardis/routes/venue');

// Conflux routes
const consumerUserRoutes = require('./Conflux/routes/consumeruser');
const clientUserRoutes = require('./Conflux/routes/clientuser');

// GalaVault routes
const pastReservationsRoutes = require('./GalaVault/routes/pastreservations');

// NextUp routes
const reservationRoutes = require('./NextUp/routes/reservations');

app.use('/barback/venue', venueRoutes);
app.use('/barback/consumeruser', consumerUserRoutes);
app.use('/barback/clientuser', clientUserRoutes);
app.use('/barback/pastReservations', pastReservationsRoutes);
app.use('/barback/reservations', reservationRoutes);

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
