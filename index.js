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

let Users = [
  {
    id: 1,
    Name: "Moka Smith",
    FavoriteMovies: ["Madagascar"],
    Username:"Moka",
    DateOfBirth:"01/01/2020",
    Email:"123@google.com",
    Password:"Myflix123",
  },
  {
    id: 2,
    Name: "Macaroni Smith",
    FavoriteMovies: ["Shrek"],
    Username:"Macaron",
    DateOfBirth:"02/02/2020",
    Email:"1234@google.com",
    Password:"Myflix1234",
  }];

let Movies = [
  {
    Title: 'Madagascar',
    Description: 'A group of animals who have spent all their life in a New York zoo end up in the jungles of Madagascar, and must adjust to living in the wild.',
    Genre:'Family/Comedy',
    Directors: 'Tom McGrath, Eric Darnell'
  },
  {
    Title: 'Lord of the Rings',
    Description: 'The Lord of the Rings is the saga of a group of sometimes reluctant heroes who set forth to save their world from consummate evil. Its many worlds and creatures were drawn from Tolkiens extensive knowledge of philology and folklore.',
    Genre:'Action, Fantasy, Adventure',
    Directors: 'Peter Jackson'
  },
  {
    Title: 'Madagascar: Escape 2 Africa',
    Description: 'The Madagascar animals fly back to New York City, but crash-land on an African nature reserve, where they meet others of their own kind, and Alex especially discovers his royal heritage as prince of a lion pride.',
    Genre:'Family/Comedy',
    Directors: 'Tom McGrath, Eric Darnell'
  },
  {
    Title: 'Shrek',
    Description: 'The film parodies other fairy tale adaptations, primarily aimed at animated Disney films. The story follows the titular Shrek (Myers), an ogre who finds his swamp overrun by fairy tale creatures who have been banished by the corrupt Lord Farquaad (Lithgow) aspiring to be king.',
    Genre:'Comedy/Fantasy',
    Directors: 'Vicky Jenson, Andrew Adamson'
  },
  {
    Title: 'Shrek 2',
    Description: 'Shrek 2 takes place following the events of the first film, with Shrek and Donkey meeting Fiona"s parents as her zealous Fairy Godmother, who wants Fiona to marry her son Prince Charming, plots to destroy Shrek and Fiona"s marriage.',
    Genre:'Comedy/Fantasy',
    Directors: 'Conrad Vernon, Andrew Adamson, Kelly Asbury'
  },
  {
    Title: 'Kung Fu Panda',
    Description: 'Po the panda (Jack Black) works in his family"s noodle shop and dreams of becoming a kung-fu master. His dream becomes a reality when, unexpectedly, he must fulfill an ancient prophecy and study the skills with his idols, the Furious Five.',
    Genre:'Family/Comedy',
    Directors: 'Mark Osborne, John Stevenson'
  },
  {
    Title: 'Kung Fu Panda 2',
    Description: 'Po and his friends fight to stop a peacock villain from conquering China with a deadly new weapon, but first the Dragon Warrior must come to terms with his past.',
    Genre:'Family/Comedy',
    Directors: 'Jennifer Yuh Nelson'
  },
  {
    Title: 'The Lion King',
    Description: 'The Lion King tells the story of Simba (Swahili for lion), a young lion who is to succeed his father, Mufasa, as King of the Pride Lands; however, after Simba"s paternal uncle Scar murders Mufasa to seize the throne, Simba is manipulated into thinking he was responsible and flees into exile.',
    Genre:'Musical/Family',
    Directors: 'Rob Minkoff, Roger Allers'
  },
  {
    Title: 'Pirates of the Caribbean: The Curse of the Black Pearl',
    Description: 'The story follows pirate Jack Sparrow (Johnny Depp) and blacksmith Will Turner (Orlando Bloom) as they rescue the kidnapped Elizabeth Swann (Keira Knightley) from the cursed crew of the Black Pearl, captained by Hector Barbossa (Geoffrey Rush), who become undead skeletons in moonlight.',
    Genre:'Adventure, Action',
    Directors: 'Gore Verbinski'
  },
  {
    Title: 'Home Alone',
    Description: 'HOME ALONE is the story of 8-year-old Kevin (Macaulay Culkin), a mischievous middle child who feels largely ignored by his large extended family. While preparing for a Christmas vacation in Paris, Kevin gets in trouble, is banished to the attic overnight, and wishes his family would just disappear.',
    Genre:'Family/Comedy',
    Directors: 'Chris Columbus'
  }
];

let Directors = [
  {
    Name:'Tom McGrath',
    Bio:'Thomas McGrath is an American voice actor, animator, screenwriter, and film director.',
    BirthYear:'August 7, 1964',
    DeathYear:'/'
  },
  {
    Name:'Eric Darnell',
    Bio:'Eric Darnell is an American animator, director, writer, songwriter and occasional voice actor best known for co-directing Antz with Tim Johnson, as well as co-directing and co-writing Madagascar. ',
    BirthYear:'1961',
    DeathYear:'/'
  },
  {
    Name:'Peter Jackson',
    Bio:'Sir Peter Robert Jackson ONZ KNZM is a New Zealand film director, screenwriter, and film producer.',
    BirthYear:'October 31, 1961',
    DeathYear:'/'
  },
  {
    Name:'Vicky Jenson',
    Bio:'Victoria "Vicky" Jenson is an American film director of both live-action and animated films, and has been said to be "one of Hollywoods most inspiring female Directors".',
    BirthYear:'March 4, 1960',
    DeathYear:'/'
  },
  {
    Name:'Andrew Adamson',
    Bio:'Andrew Ralph Adamson MNZM is a New Zealand film director, producer, and screenwriter based in Los Angeles, where he directed the Academy Award-winning animated films Shrek and Shrek 2.',
    BirthYear:'December 1, 1966',
    DeathYear:'/'
  },
  {
    Name:'Conrad Vernon',
    Bio:'Conrad Vernon is an American voice actor, director, writer, and storyboard artist best known for his work on the DreamWorks animated film series Shrek as well as manyn other films',
    BirthYear:'July 11, 1968',
    DeathYear:'/'
  },
  {
    Name:'Kelly Asbury',
    Bio:'Kelly Adam Asbury was an American animated film director, writer, voice actor, and illustrator. He was best known for directing animated films, including Shrek 2, Spirit: Stallion of the Cimarron, Gnomeo & Juliet, Smurfs: The Lost Village, and UglyDolls.',
    BirthYear:'January 15, 1960',
    DeathYear:'June 26, 2020'
  },
  {
    Name:'Mark Osborne',
    Bio:'Mark Randolph Osborne is an American film director, writer, producer and animator.',
    BirthYear:'September 17, 1970',
    DeathYear:'/'
  },
  {
    Name:'John Stevenson',
    Bio:'John Stevenson is a British filmmaker and puppeteer. Stevenson has over 40 years of experience with animation.',
    BirthYear:'1958 ',
    DeathYear:'/'
  },
  {
    Name:'Jennifer Yuh Nelson',
    Bio:'Jennifer Yuh Nelson, also known as Jennifer Yuh, is a Korean-born American story artist, character designer, television director, illustrator, and film director. ',
    BirthYear:'May 7, 1972',
    DeathYear:'/'
  },
  {
    Name:'Rob Minkoff',
    Bio:'Robert Ralph Minkoff is an American filmmaker. He is known for co-directing the Academy Award-winning Disney animated feature The Lion King.',
    BirthYear:'August 11, 1962',
    DeathYear:'/'
  },
  {
    Name:'Roger Allers',
    Bio:'Roger Charles Allers is an American film director, screenwriter, storyboard artist, animator, and playwright.',
    BirthYear:'June 29, 1949 ',
    DeathYear:'/'
  },
  {
    Name:'Gore Verbinski',
    Bio:'Gregor Justin "Gore" Verbinski is an American film director, screenwriter, producer, and musician.',
    BirthYear:'March 16, 1964 ',
    DeathYear:'/'
  },
  {
    Name:'Mark Osborne',
    Bio:'Chris Joseph Columbus is an American filmmaker.',
    BirthYear:'September 10, 1958',
    DeathYear:'/'
  }
];

// GET requests
app.get('/', (req, res) => {
  res.send('Welcome to MyFlix!');
});

// express.static
app.use(express.static('public'));

// Gets the list of data about ALL Movies
app.get('/Movies', (req, res) => {
  res.json(Movies);
});

// Gets the data about a single Movie, by title
app.get('/Movies/:Title', (req, res) => {
  res.json(Movies.find((Title) =>
    { return Movies.Title === req.params.Title }))
});

// Gets the data about a Movie, by genre
app.get('/Movies/[genre]', (req, res) => {
    res.json(Movies.find((Genre) =>
      { return Movies.Genre === req.params.Genre }));
});

// Gets the data about a Director
app.get('/Directors', (req, res) => {
    res.json(Directors);
});

// Allow new users to register
app.post('/Users', (req, res) => {
    let newUser = req.body;

    if (!newUser.name) {
      const message = 'Missing name in request body';
      res.status(400).send(message);
    } else {
      newUser.id = uuid.v4();
      Users.push(newUser);
      res.status(201).send(newUser);
    }
});

// Deletes a User from our list by Email
app.delete('/Users/[Deregister]', (req, res) => {
    let User = Users.find((Users) => { return Users.Email === req.params.Email });

    if (User) {
      User = Users.filter((obj) => { return obj.Email !== req.params.Email });
    res.status(201).send('Users ' + req.params.Email + ' was deleted.');
    }
});

// Allow a User to update their information
app.put('/users/:id', (req, res) => {
    const { id } = req.params;
    const updatedUser = req.body;

    let user = users.find((user) => user.id == id);

    if (user) {
      user.name = updatedUser.name;
      res.status(200).json(user);
      } else {
        res.status(400).send("User does not exist!");
      }
});

//Allow users to add a movie to their list of favorites
app.put('/users/:name/:favoriteMovies/:newfavoriteMovies', (req, res) => {
  let user = users.find((user) => {
    return user.name === req.params.name;
  });

  if (user) {
    user.favoriteMovies.push(req.params.newfavoriteMovies);
    res.send(req.params.newfavoriteMovies + " was added to your list of favourites");
  } else {
    res.status(404).send("Unable to add Movie to Favorites");
  }
});

  //Allow users to remove a movie from their list of favorites
app.delete('/users/:name/:favoriteMovies', (req, res) => {
  let user = users.find((user) => {
    return user.name === req.params.name;
  });

  if (user) {
    let favoriteMovies = user.favoriteMovies;
    let index = favoriteMovies.indexOf(req.params.favoriteMovies);
    if (index > -1) {
    favoriteMovies.splice(index, 1);
    }
  res.send(req.params.favoriteMovies + "has been removed from the list");
  } else {
    res.status(404).send("Unable to remove at the moment");
  }
});

// listen for requests
app.listen(8080, () => {
  console.log('Your app is listening on port 8080.');
});
