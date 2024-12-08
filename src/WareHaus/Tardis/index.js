const express = require('express');
const app = express();
const port = 3000;  // or any other port you'd like

app.listen(port, () => {
  console.log(`Server running at http://localhost:${port}`);
});
