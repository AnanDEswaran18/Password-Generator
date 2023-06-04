const express = require('express');
const cors = require('cors');

const app = express();
app.use(express.json());
app.use(cors());

const generatePassword = ({ letters, symbols, numbers }) => {
  const randomChar = (chars) => chars[Math.floor(Math.random() * chars.length)];
  let password = '';

  for (let i = 0; i < letters; i++) {
    password += randomChar('abcdefghijklmnopqrstuvwxyz');
  }

  for (let i = 0; i < symbols; i++) {
    password += randomChar('!@#$%^&*()_+-=[]{}|;:\'",./<>?');
  }

  for (let i = 0; i < numbers; i++) {
    password += randomChar('0123456789');
  }
  const shuffledPassword = password.split('').sort(() => 0.5 - Math.random()).join('');
  return shuffledPassword;
};

app.post('/generate-password', (req, res) => {
  const { letters, symbols, numbers } = req.body;
  const generatedPassword = generatePassword({ letters, symbols, numbers });
  res.json({ password: generatedPassword });

});

// Starting the server
app.listen(5000, () => {
  console.log('Server started on port 5000');
});
