const express = require('express');
const router = express.Router();
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const User = require('../models/User');

// Register a new user
router.post('/register', async (req, res) => {
  const { firstname,lastname, email, password,profileimg } = req.body;
  console.log("firstname",firstname)
  console.log("lastname",lastname)

  console.log("email",email)
  console.log("password",password)
  console.log("profileimg",profileimg)


  try {
    let user = await User.findOne({ email });
    if (user) return res.status(400).json({ msg: 'User already exists' });

    user = new User({ firstname,lastname, email, password ,profileimg});
    await user.save();

    const token = jwt.sign({ userId: user.id }, process.env.JWT_SECRET, { expiresIn: '1y' });
    res.status(201).json({ token, user:user  });

  } catch (err) {
    res.status(500).send('Server error');
  }
});

// Login user
router.post('/login', async (req, res) => {
  const { email, password } = req.body;

  try {
    const user = await User.findOne({ email });
    if (!user) return res.status(400).json({ msg: 'Invalid credentials' });

    const isMatch = await bcrypt.compare(password, user.password);
    if (!isMatch) return res.status(400).json({ msg: 'Invalid credentials' });

    const token = jwt.sign({ userId: user.id }, process.env.JWT_SECRET, { expiresIn: '1y' });
    res.json({ token,user:user });
  } catch (err) {
    res.status(500).send('Server error');
  }
});

router.post('/logout', (req, res) => {
  res.json({ msg: 'Logout successful. Please remove token on client-side.' });
});


module.exports = router;
