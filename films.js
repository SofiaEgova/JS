const films = [
  {
    title: 'The Green Mile',
    creationYear: 1999,
    country: ['USA'],
    budget: '$60 000 000',
    actors: [
      {
        name: 'Tom Hanks',
        age: 63,
        role: 'Paul Edgecomb',
      },
      {
        name: 'David Morse',
        age: 65,
        role: 'Brutus Howell',
      },
      {
        name: 'Michael Clarke Duncan',
        age: 54,
        role: 'John Coffey',
      },
    ],
    director: {
      name: 'Frank Darabont',
      age: 60,
      oscarsCount: 0,
    }
  },
  {
    title: 'Inception',
    creationYear: 2010,
    country: ['USA'],
    budget: '$160 000 000',
    actors: [
      {
        name: 'Leonardo DiCaprio',
        age: 44,
        role: 'Cobb',
      },
      {
        name: 'Joseph Gordon-Levitt',
        age: 38,
        role: 'Arthur',
      },
      {
        name: 'Ellen Page',
        age: 32,
        role: 'Ariadne',
      },
      {
        name: 'Tom Hardy',
        age: 41,
        role: 'Eames',
      },
    ],
    director: {
      name: 'Christopher Nolan',
      age: 48,
      oscarsCount: 0,
    }
  },
  {
    title: 'Forrest Gump',
    creationYear: 1994,
    country: ['USA'],
    budget: '$55 000 000',
    actors: [
      {
        name: 'Tom Hanks',
        age: 63,
        role: 'Forrest Gump',
      },
      {
        name: 'Robin Wright',
        age: 53,
        role: 'Jenny Curran',
      },
      {
        name: 'Sally Field',
        age: 72,
        role: 'Mrs. Gump',
      },
    ],
    director: {
      name: 'Robert Zemeckis',
      age: 68,
      oscarsCount: 1,
    }
  },
  {
    title: 'Interstellar',
    creationYear: 2014,
    budget: '$165 000 000',
    country: ['USA','Great Britain', 'Canada'],
    actors: [
      {
        name: 'Matthew McConaughey',
        age: 49,
        role: 'Cooper',
      },
      {
        name: 'Anne Hathaway',
        age: 36,
        role: 'Brand',
      },
      {
        name: 'Jessica Chastain',
        age: 42,
        role: 'Murph',
      },
      {
        name: 'Michael Caine',
        age: 86,
        role: 'Professor Brand',
      },
      {
        name: 'Matt Damon',
        age: 48,
        role: 'Mann',
      },
    ],
    director: {
      name: 'Christopher Nolan',
      age: 48,
      oscarsCount: 0,
    }
  },
  {
    title: 'Catch Me If You Can',
    creationYear: 2002,
    budget: '$52 000 000',
    country: ['USA', 'Canada'],
    actors: [
      {
        name: 'Tom Hanks',
        age: 63,
        role: 'Carl Hanratty',
      },
      {
        name: 'Leonardo DiCaprio',
        age: 36,
        role: 'Frank Abagnale Jr.',
      },
      {
        name: 'Christopher Walken',
        age: 76,
        role: 'Frank Abagnale',
      },
      {
        name: 'Amy Adams',
        age: 44,
        role: 'Brenda Strong',
      },
    ],
    director: {
      name: 'Steven Spielberg',
      age: 72,
      oscarsCount: 4,
    }
  },
];

function averageAgeActors(films){
  const nonOscarFilms = films.filter((film) => film.director.oscarsCount == 0);

  let actorsAges = [];
  nonOscarFilms.forEach(function(film) {
    film.actors.forEach(function(actor) {
      actorsAges.push(actor.age);
    });
  });

  let averageAge = actorsAges.reduce((sum, actorAge) => sum + actorAge) / actorsAges.length;
  console.log(averageAge);
}

function playedWithTomHanks(films){
  const filteredFilms = films.filter((film) => film.creationYear > 1995 && film.actors.some((actor) => actor.name == 'Tom Hanks'));

  let playedWithTomHanksActors = [];
  filteredFilms.forEach(function(film) {
    film.actors.forEach(function(actor){
      if(actor.name != 'Tom Hanks'){
        playedWithTomHanksActors.push(actor);
      }
    });
  });

  console.log(playedWithTomHanksActors);
}

function filmBudget(films){
  const filteredFilms = films.filter((film) => film.director.age < 70 && !film.actors.some((actor) => actor.name == 'Tom Hanks'));

  let totalBudget = filteredFilms.reduce((sum, film) => +sum.budget.replace(/[^0-9]/g, '') + +film.budget.replace(/[^0-9]/g, ''));
  console.log(totalBudget);
}

averageAgeActors(films);
playedWithTomHanks(films);
filmBudget(films);
