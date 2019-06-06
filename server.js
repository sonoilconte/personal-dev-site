let express = require('express');
let app = express();

app.use(express.static(__dirname + '/public'));

app.get('/', (req, res) => {
  res.sendFile('index.html', {
    root: __dirname
  });
});

const port = process.env.PORT || 3000;
app.listen(port, () => {
  console.log('Express server running on port', port);
});
