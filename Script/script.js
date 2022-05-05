let numberOfFilms = +prompt ('How many movies have you already watched?');

const personalMovieDB = {
    count: numberOfFilms,
    movies: {},
    actors: {},
    genres: [],
    private: false

};


      for (let i = 0; i < 2; i++){
        
        const a = prompt('One of the last movies you watched?', '');
        const b = prompt ('How would you value it?', '');


        if (a === '' || b === '' || a === null || b === null || 50 < a.length) {
            alert ('Answer the questions!');
            i--;
        }  else {
            personalMovieDB.movies [a] = b;
        }

        }  

        /*  if (a != '' && b != '' && a != null && b != null && 50 > a.length) {
            
            personalMovieDB.movies [a] = b;

        }  else {
            alert ('Answer the questions!');
            i--;            
        }

        }  

        do {
            personalMovieDB.movies [a] = b;
        }
        while (a != '' && b != '' && a != null && b != null && 50 > a.length);

        do {
            alert ('Answer the questions!');
            i--;
            break;
        }
        while (a === '' || b === '' || a === null || b === null || 50 < a.length);

    } */  




        if (personalMovieDB.count <= 10){
            alert('Too little amount of movies has been watched!');
        } else if (personalMovieDB.count > 10 && personalMovieDB.count <= 30) {
            alert ('Typical movie watcher!');
        } else if (personalMovieDB.count > 30){
            alert ('Movie fan!');
        } else {
            alert ('Error!')
        }


console.log(personalMovieDB);
