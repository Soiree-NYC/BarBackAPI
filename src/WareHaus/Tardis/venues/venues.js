const express = require('express');
const router = express.Router();

// Create a venue
router.post('/venues', async (req, res) => {
  const {
    venueName,
    vibeCheck,
    venueDescription,
    address,
    catering,
    venueDetails,
    spaces,
    music,
    accessibility,
    pricing,
    additionalFees,
    openingHours,
    cancelPolicy,
  } = req.body;

  try {
    const venue = await db.venues.create({
      name: venueName,
      vibe_check: JSON.stringify(vibeCheck),
      description: venueDescription,
      ...address,
      catering_options: JSON.stringify(catering),
      venue_details: JSON.stringify(venueDetails),
      music_options: JSON.stringify(music),
      accessibility_options: JSON.stringify(accessibility),
      pricing_options: JSON.stringify(pricing),
      additional_fees: JSON.stringify(additionalFees),
      opening_hours: JSON.stringify(openingHours),
      cancel_policy: JSON.stringify(cancelPolicy),
    });

    // Handle spaces separately if needed
    for (const space of spaces) {
      await db.spaces.create({
        venue_id: venue.id,
        ...space,
      });
    }

    res.status(201).json({ message: 'Venue created successfully', venue });
  } catch (error) {
    res.status(500).json({ error: 'Failed to create venue', details: error });
  }
});

module.exports = router;
