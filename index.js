const express = require('express'),
  morgan = require('morgan');

const app = express();
const bodyParser = require('body-parser'),
  methodOverride = require('method-override'),
  uuid = require("uuid");

app.use(morgan('common'));
app.use(bodyParser.urlencoded({
  extended: true
}));

// Error handling
app.use(bodyParser.json());
app.use(methodOverride());

app.use((err, req, res, next) => {
  console.error(err.stack);
  res.status(500).send('Something broke!');
});


let topMovies = [
  {
    title: 'Madagascar',
    Description: 'A group of animals who have spent all their life in a New York zoo end up in the jungles of Madagascar, and must adjust to living in the wild.',
    Genre:'Family/Comedy',
    Directors: 'Tom McGrath, Eric Darnell'
  },
  {
    title: 'Lord of the Rings',
    Description: 'The Lord of the Rings is the saga of a group of sometimes reluctant heroes who set forth to save their world from consummate evil. Its many worlds and creatures were drawn from Tolkiens extensive knowledge of philology and folklore.',
    Genre:'Action, Fantasy, Adventure',
    Directors: 'Peter Jackson'
  },
  {
    title: 'Madagascar: Escape 2 Africa',
    Description: 'The Madagascar animals fly back to New York City, but crash-land on an African nature reserve, where they meet others of their own kind, and Alex especially discovers his royal heritage as prince of a lion pride.',
    Genre:'Family/Comedy',
    Directors: 'Tom McGrath, Eric Darnell'
  },
  {
    title: 'Shrek',
    Description: 'The film parodies other fairy tale adaptations, primarily aimed at animated Disney films. The story follows the titular Shrek (Myers), an ogre who finds his swamp overrun by fairy tale creatures who have been banished by the corrupt Lord Farquaad (Lithgow) aspiring to be king.',
    Genre:'Comedy/Fantasy',
    Directors: 'Vicky Jenson, Andrew Adamson'
  },
  {
    title: 'Shrek 2',
    Description: 'Shrek 2 takes place following the events of the first film, with Shrek and Donkey meeting Fiona"s parents as her zealous Fairy Godmother, who wants Fiona to marry her son Prince Charming, plots to destroy Shrek and Fiona"s marriage.',
    Genre:'Comedy/Fantasy',
    Directors: ' Conrad Vernon, Andrew Adamson, Kelly Asbury'
  },
  {
    title: 'Kung Fu Panda',
    Description: 'Po the panda (Jack Black) works in his family"s noodle shop and dreams of becoming a kung-fu master. His dream becomes a reality when, unexpectedly, he must fulfill an ancient prophecy and study the skills with his idols, the Furious Five.',
    Genre:'Family/Comedy',
    Directors: 'Mark Osborne, John Stevenson'
  },
  {
    title: 'Kung Fu Panda 2',
    Description: 'Po and his friends fight to stop a peacock villain from conquering China with a deadly new weapon, but first the Dragon Warrior must come to terms with his past.',
    Genre:'Family/Comedy',
    Directors: 'Jennifer Yuh Nelson'
  },
  {
    title: 'The Lion King',
    Description: 'The Lion King tells the story of Simba (Swahili for lion), a young lion who is to succeed his father, Mufasa, as King of the Pride Lands; however, after Simba"s paternal uncle Scar murders Mufasa to seize the throne, Simba is manipulated into thinking he was responsible and flees into exile.',
    Genre:'Musical/Family',
    Directors: 'Rob Minkoff, Roger Allers'
  },
  {
    title: 'Pirates of the Caribbean: The Curse of the Black Pearl',
    Description: 'The story follows pirate Jack Sparrow (Johnny Depp) and blacksmith Will Turner (Orlando Bloom) as they rescue the kidnapped Elizabeth Swann (Keira Knightley) from the cursed crew of the Black Pearl, captained by Hector Barbossa (Geoffrey Rush), who become undead skeletons in moonlight.',
    Genre:'Adventure, Action',
    Directors: 'Gore Verbinski'
  },
  {
    title: 'Home Alone',
    Description: 'HOME ALONE is the story of 8-year-old Kevin (Macaulay Culkin), a mischievous middle child who feels largely ignored by his large extended family. While preparing for a Christmas vacation in Paris, Kevin gets in trouble, is banished to the attic overnight, and wishes his family would just disappear.',
    Genre:'Family/Comedy',
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
