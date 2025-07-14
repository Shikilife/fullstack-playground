const express = require('express');
const cors = require('cors');
const app = express();

app.use(cors()); // 加這行解決跨域
app.use(express.static('public'));

app.get('/api/hello', (req, res) => {
  const name = req.query.name || 'Node.js API';
  res.json({ message: `Hello, ${name}!` });
});

app.listen(3000, () => {
  console.log('Server is running on http://localhost:3000');
});

