const express = require('express'),
  morgan = require('morgan');

const app = express();
const bodyParser = require('body-parser'),
  methodOverride = require('method-override');

app.use(morgan('common'));
app.use(bodyParser.urlencoded({
  extended: true
}));

app.use(bodyParser.json());
app.use(methodOverride());

app.use((err, req, res, next) => {
  console.error(err.stack);
  res.status(500).send('Something broke!');
});

let topMovies = [
  {
    title: 'Madagascar',
    Directors: 'Tom McGrath, Eric Darnell'
  },
  {
    title: 'Lord of the Rings',
    Directors: 'Peter Jackson'
  },
  {
    title: 'Madagascar: Escape 2 Africa',
    Directors: 'Tom McGrath, Eric Darnell'
  },
  {
    title: 'Shrek',
    Directors: 'Vicky Jenson, Andrew Adamson'
  },
  {
    title: 'Shrek 2',
    Directors: ' Conrad Vernon, Andrew Adamson, Kelly Asbury'
  },
  {
    title: 'Kung Fu Panda',
    Directors: 'Mark Osborne, John Stevenson'
  },
  {
    title: 'Kung Fu Panda 2',
    Directors: 'Jennifer Yuh Nelson'
  },
  {
    title: 'The Lion King',
    Directors: 'Rob Minkoff, Roger Allers'
  },
  {
    title: 'Pirates of the Caribbean: The Curse of the Black Pearl',
    Directors: 'Gore Verbinski'
  },
  {
    title: 'Home Alone',
    Directors: 'Chris Columbus'
  }

];

// GET requests
app.get('/', (req, res) => {
  res.send('Welcome to my Top Movies list!');
});

app.get('/Movies', (req, res) => {
  res.json(topMovies);
});

// express.static
app.use(express.static('public'));

// listen for requests
app.listen(8080, () => {
  console.log('Your app is listening on port 8080.');
});
