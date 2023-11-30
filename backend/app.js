import fs from 'node:fs/promises';

import bodyParser from 'body-parser';
import express from 'express';

const app = express();

app.use(express.static('images'));
app.use(bodyParser.json());

app.use((req, res, next) => {
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Methods', 'GET, PUT');
  res.setHeader('Access-Control-Allow-Headers', 'Content-Type');

  next();
});

app.get('/rooms', async (req, res) => {
  const fileContent = await fs.readFile('./data/rooms.json');

  const roomsData = JSON.parse(fileContent);

  res.status(200).json({ rooms: roomsData });
});

app.get('/rooms/:roomId', async (req, res) => {
  const roomId = req.params.roomId;
  const fileContent = await fs.readFile('./data/rooms.json');

  const roomsData = JSON.parse(fileContent);
  const rooms = roomsData[roomId];

  res.status(200).json({ rooms });
});

app.get('/treatments', async (req, res) => {
  const fileContent = await fs.readFile('./data/treatments.json');

  const treatmentsData = JSON.parse(fileContent);

  res.status(200).json({ treatments: treatmentsData });
});

//404
app.use((req, res, next) => {
  if (req.method === 'OPTIONS') {
    return next();
  }
  res.status(404).json({ message: '404 - Not Found' });
});

app.listen(3001);
