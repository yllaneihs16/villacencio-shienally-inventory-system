// server.js
import express from 'express';

const app = express();


app.get('/', (req, res) => {
  res.send('This server is running on PORT 5000');
});


const PORT = 5000;

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
