
const express = require('express');
const bcrypt = require('bcrypt');
const router = express.Router();
const users = [];

router.post('/register', async (req, res) => {
  const { username, password } = req.body;
  const hashedPassword = await bcrypt.hash(password, 10);
  users.push({ username, password: hashedPassword });
  res.status(201).send('User registered');
});

router.post('/login', async (req, res) => {
  const { username, password } = req.body;
  const user = users.find(user => user.username === username);
  if (user && await bcrypt.compare(password, user.password)) {
    req.session.user = user;
    res.send('Logged in');
  } else {
    res.status(401).send('Invalid credentials');
  }
});

router.get('/logout', (req, res) => {
  req.session.destroy();
  res.send('Logged out');
});

module.exports = router;
