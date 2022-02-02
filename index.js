const mongoose = require('mongoose');
const Models = require('./models.js');

const express = require('express'),
  morgan = require('morgan');

const app = express();
const bodyParser = require('body-parser');
const Movies = Models.Movie;
const Users = Models.User;
const methodOverride = require('method-override'),
  uuid = require("uuid");
  app.use(bodyParser.json());
  app.use(bodyParser.urlencoded({ extended: true }));



mongoose.connect('mongodb://localhost:27017/myFlixDB', { useNewUrlParser: true, useUnifiedTopology: true });

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

let users = [
  {
    id: 1,
    Username: "Moka",
    Password:"Myflix123",
    Email:"123@google.com",
    DateOfBirth:"01/01/2020",
    FavoriteMovies: ["Madagascar"],
  },
  {
    id: 2,
    Username: "Macaron",
    Password:"Myflix1234",
    Email:"1234@google.com",
    DateOfBirth:"02/02/2020",
    FavoriteMovies: ["Shrek"],
  }];

let movies = [
  {
    Title: 'Madagascar',
    Description: 'A group of animals who have spent all their life in a New York zoo end up in the jungles of Madagascar, and must adjust to living in the wild.',
    Director: {
      Name:'Tom McGrath',
      Bio:'Thomas McGrath is an American voice actor, animator, screenwriter, and film director.',
      BirthYear:'August 7, 1964',
      DeathYear:'/'
    },
    Genre: {
      Name:'Family',
      Description:'Family film is a genre that is contains appropriate content for younger viewers. Family film aims to appeal not only to children, but to a wide range of ages. While the storyline may appeal to a younger audience, there are components of the film that are geared towards adults- such as witty jokes and humor.',
    }
  },
  {
    Title: 'Lord of the Rings',
    Description: 'The Lord of the Rings is the saga of a group of sometimes reluctant heroes who set forth to save their world from consummate evil. Its many worlds and creatures were drawn from Tolkiens extensive knowledge of philology and folklore.',
    Director: {
      Name:'Peter Jackson',
      Bio:'Sir Peter Robert Jackson ONZ KNZM is a New Zealand film director, screenwriter, and film producer.',
      BirthYear:'October 31, 1961',
      DeathYear:'/'
    },
    Genre: {
      Name: 'Adventure',
      Description:'Adventure Films are exciting stories, with new experiences or exotic locales. Adventure films are very similar to the action film genre, in that they are designed to provide an action-filled, energetic experience for the film viewer.',
    }
  },
  {
    Title: 'Madagascar: Escape 2 Africa',
    Description: 'The Madagascar animals fly back to New York City, but crash-land on an African nature reserve, where they meet others of their own kind, and Alex especially discovers his royal heritage as prince of a lion pride.',
    Director: {
      Name:'Tom McGrath',
      Bio:'Thomas McGrath is an American voice actor, animator, screenwriter, and film director.',
      BirthYear:'August 7, 1964',
      DeathYear:'/'
    },
    Genre: {
      Name:'Family',
      Description:'Family film is a genre that is contains appropriate content for younger viewers. Family film aims to appeal not only to children, but to a wide range of ages. While the storyline may appeal to a younger audience, there are components of the film that are geared towards adults- such as witty jokes and humor.',
    }
  },
  {
    Title: 'Shrek',
    Description: 'The film parodies other fairy tale adaptations, primarily aimed at animated Disney films. The story follows the titular Shrek (Myers), an ogre who finds his swamp overrun by fairy tale creatures who have been banished by the corrupt Lord Farquaad (Lithgow) aspiring to be king.',
    Director: {
      Name:'Andrew Adamson',
      Bio:'Andrew Ralph Adamson MNZM is a New Zealand film director, producer, and screenwriter based in Los Angeles, where he directed the Academy Award-winning animated films Shrek and Shrek 2.',
      BirthYear:'December 1, 1966',
      DeathYear:'/'
    },
    Genre: {
      Name:'Fantasy',
      Desription:'Fantasy films are films that belong to the fantasy genre with fantastic themes, usually magic, supernatural events, mythology, folklore, or exotic fantasy worlds. The genre is considered a form of speculative fiction alongside science fiction films and horror films, although the genres do overlap.',
    }
  },
  {
    Title: 'Shrek 2',
    Description: 'Shrek 2 takes place following the events of the first film, with Shrek and Donkey meeting Fiona"s parents as her zealous Fairy Godmother, who wants Fiona to marry her son Prince Charming, plots to destroy Shrek and Fiona"s marriage.',
    Director: {
      Name:'Andrew Adamson',
      Bio:'Andrew Ralph Adamson MNZM is a New Zealand film director, producer, and screenwriter based in Los Angeles, where he directed the Academy Award-winning animated films Shrek and Shrek 2.',
      BirthYear:'December 1, 1966',
      DeathYear:'/'
    },
    Genre: {
      Name:'Fantasy',
      Desription:'Fantasy films are films that belong to the fantasy genre with fantastic themes, usually magic, supernatural events, mythology, folklore, or exotic fantasy worlds. The genre is considered a form of speculative fiction alongside science fiction films and horror films, although the genres do overlap.',
    }
  },
  {
    Title: 'Kung Fu Panda',
    Description: 'Po the panda (Jack Black) works in his family"s noodle shop and dreams of becoming a kung-fu master. His dream becomes a reality when, unexpectedly, he must fulfill an ancient prophecy and study the skills with his idols, the Furious Five.',
    Director: {
      Name:'Mark Osborne',
      Bio:'Mark Randolph Osborne is an American film director, writer, producer and animator.',
      BirthYear:'September 17, 1970',
      DeathYear:'/'
    },
    Genre: {
      Name:'Family',
      Description:'Family film is a genre that is contains appropriate content for younger viewers. Family film aims to appeal not only to children, but to a wide range of ages. While the storyline may appeal to a younger audience, there are components of the film that are geared towards adults- such as witty jokes and humor.',
    }
  },
  {
    Title: 'Kung Fu Panda 2',
    Description: 'Po and his friends fight to stop a peacock villain from conquering China with a deadly new weapon, but first the Dragon Warrior must come to terms with his past.',
    Director: {
      Name:'Jennifer Yuh Nelson',
      Bio:'Jennifer Yuh Nelson, also known as Jennifer Yuh, is a Korean-born American story artist, character designer, television director, illustrator, and film director. ',
      BirthYear:'May 7, 1972',
      DeathYear:'/'
    },
    Genre: {
      Name:'Family',
      Description:'Family film is a genre that is contains appropriate content for younger viewers. Family film aims to appeal not only to children, but to a wide range of ages. While the storyline may appeal to a younger audience, there are components of the film that are geared towards adults- such as witty jokes and humor.',
    }
  },
  {
    Title: 'The Lion King',
    Description: 'The Lion King tells the story of Simba (Swahili for lion), a young lion who is to succeed his father, Mufasa, as King of the Pride Lands; however, after Simba"s paternal uncle Scar murders Mufasa to seize the throne, Simba is manipulated into thinking he was responsible and flees into exile.',
    Director: {
      Name:'Rob Minkoff',
      Bio:'Robert Ralph Minkoff is an American filmmaker. He is known for co-directing the Academy Award-winning Disney animated feature The Lion King.',
      BirthYear:'August 11, 1962',
      DeathYear:'/'
    },
    Genre: {
      Name:'Family',
      Description:'Family film is a genre that is contains appropriate content for younger viewers. Family film aims to appeal not only to children, but to a wide range of ages. While the storyline may appeal to a younger audience, there are components of the film that are geared towards adults- such as witty jokes and humor.',
    }
  },
  {
    Title: 'Pirates of the Caribbean: The Curse of the Black Pearl',
    Description: 'The story follows pirate Jack Sparrow (Johnny Depp) and blacksmith Will Turner (Orlando Bloom) as they rescue the kidnapped Elizabeth Swann (Keira Knightley) from the cursed crew of the Black Pearl, captained by Hector Barbossa (Geoffrey Rush), who become undead skeletons in moonlight.',
    Director: {
      Name:'Gore Verbinski',
      Bio:'Gregor Justin "Gore" Verbinski is an American film director, screenwriter, producer, and musician.',
      BirthYear:'March 16, 1964 ',
      DeathYear:'/'
    },
    Genre: {
      Name: 'Adventure',
      Description:'Adventure Films are exciting stories, with new experiences or exotic locales. Adventure films are very similar to the action film genre, in that they are designed to provide an action-filled, energetic experience for the film viewer.',
    }
  },
  {
    Title: 'Home Alone',
    Description: 'HOME ALONE is the story of 8-year-old Kevin (Macaulay Culkin), a mischievous middle child who feels largely ignored by his large extended family. While preparing for a Christmas vacation in Paris, Kevin gets in trouble, is banished to the attic overnight, and wishes his family would just disappear.',
    Director: {
      Name:'Chris Columbus',
      Bio:'Chris Joseph Columbus is an American filmmaker.',
      BirthYear:'September 10, 1958',
      DeathYear:'/'
    },
    Genre: {
      Name:'Family',
      Description:'Family film is a genre that is contains appropriate content for younger viewers. Family film aims to appeal not only to children, but to a wide range of ages. While the storyline may appeal to a younger audience, there are components of the film that are geared towards adults- such as witty jokes and humor.',
    }
  },
];

// GET requests
app.get('/', (req, res) => {
  res.send('Welcome to MyFlix!');
});

// express.static
app.use(express.static('public'));

// Gets the list of data about ALL Movies
app.get('/movies', (req, res) => {
  Movies.find().then(movies => res.json(movies));
});

// Gets the data about a single Movie, by title
app.get('/movies/:title', (req, res) => {
  Movies.findOne({ title: req.params.title })
    .then((movie) => {
      res.json(movie);
    })
    .catch((err) => {
      console.error(err);
      res.status(500).send('Error: Movie does not exist ' + err);
    });
});

// Gets the data about a Movie, by genre
app.get('/movies/genre/:genreName', (req, res) => {
  Movies.findOne({ genre: req.params.genre.name})
    .then((movie) => {
      res.json(movie);
    })
    .catch((err) => {
      console.error(err);
      res.status(500).send('Error: genre does not exist ' + err);
    });
});


// Gets the data about a Director
app.get('/movies/directors/:directorName', (req, res) => {
  Movies.findOne({ director: req.params.director.name})
    .then((movie) => {
      res.json(movie);
    })
    .catch((err) => {
      console.error(err);
      res.status(500).send('Error: Director does not exist ' + err);
    });
});


// Allow new users to register
/* We’ll expect JSON in this format
{
  ID: Integer,
  Username: String,
  Password: String,
  Email: String,
  Birthday: Date
}*/
app.post('/users', (req, res) => {
  Users.findOne({ Username: req.body.Username })
    .then((user) => {
      if (user) {
        return res.status(400).send(req.body.Username + 'already exists');
      } else {
        Users
          .create({
            Username: req.body.Username,
            Password: req.body.Password,
            Email: req.body.Email,
            DateOfBirth: req.body.DateOfBirth
          })
          .then((user) =>{res.status(201).json(user) })
        .catch((error) => {
          console.error(error);
          res.status(500).send('Error: ' + error);
        })
      }
    })
    .catch((error) => {
      console.error(error);
      res.status(500).send('Error: ' + error);
    });
});


// Delete a user by username
app.delete('/users/:Username', (req, res) => {
  Users.findOneAndRemove({ Username: req.params.Username })
    .then((user) => {
      if (!user) {
        res.status(400).send(req.params.Username + ' was not found');
      } else {
        res.status(200).send(req.params.Username + ' was deleted.');
      }
    })
    .catch((err) => {
      console.error(err);
      res.status(500).send('Error: ' + err);
    });
});

// Allow a User to update their information
// Update a user's info, by username
/* We’ll expect JSON in this format
{
  Username: String,
  (required)
  Password: String,
  (required)
  Email: String,
  (required)
  Birthday: Date
}*/
app.put('/users/:Username', (req, res) => {
  Users.findOneAndUpdate({ Username: req.params.Username }, { $set:
    {
      Username: req.body.Username,
      Password: req.body.Password,
      Email: req.body.Email,
      Birthday: req.body.Birthday
    }
  },
  { new: true }, // This line makes sure that the updated document is returned
  (err, updatedUser) => {
    if(err) {
      console.error(err);
      res.status(500).send('Error: ' + err);
    } else {
      res.json(updatedUser);
    }
  });
});

//Allow users to add a movie to their list of favorites
app.post('/users/:Username/movies/:MovieID', (req, res) => {
  Users.findOneAndUpdate({ Username: req.params.Username }, {
     $push: { FavoriteMovies: req.params.MovieID }
   },
   { new: true }, // This line makes sure that the updated document is returned
  (err, updatedUser) => {
    if (err) {
      console.error(err);
      res.status(500).send('Error: ' + err);
    } else {
      res.json(updatedUser);
    }
  });
});

//Allow users to remove a movie from their list of favorites
app.delete('/users/:username/:movies/:MovieID', (req, res) => {
 Users.findOneAndRemove({ Username: req.params.Username }, {
    $delete: { FavoriteMovies: req.params.MovieID }
  },
  { new: true }, // This line makes sure that the updated document is returned
 (err, movieremoved) => {
   if (err) {
     console.error(err);
     res.status(500).send('Error: ' + err);
   } else {
     res.json(movieremoved);
   }
 });
});

// listen for requests
app.listen(8080, () => {
  console.log('Your app is listening on port 8080.');
});
