
const personalMovieDB = {
    count: 0,
    movies: {},
    actors: {},
    genres: [],
    private: false,
    start: function (){
        personalMovieDB.count = +prompt ('How many movies have you already watched?', '');
    
        while (personalMovieDB.count == '' || personalMovieDB.count == null || isNaN (personalMovieDB.count)){
            personalMovieDB.count = +prompt ('How many movies have you already watched?', '');
        }
    },
    rememberMyFilms: function (){
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
    
    },
    detectPersonalLevel: function(){
        if (personalMovieDB.count <= 10){
            alert('Too little amount of movies has been watched!');
        } else if (personalMovieDB.count > 10 && personalMovieDB.count <= 30) {
            alert ('Typical movie watcher!');
        } else if (personalMovieDB.count > 30){
            alert ('Movie fan!');
        } else {
            alert ('Error!');
        }
    
    },
    ShowMyDB: function (hidden){
        if (!hidden){
            console.log(personalMovieDB); 
        }
    },
    toggleVisibleMyDB: function(){
        if(personalMovieDB.private){
            personalMovieDB.private = false;
        } else {
            personalMovieDB.private = true;
        }
        return console.log(personalMovieDB.private);
    },
    writeYourGenres: function (){
        for(let i = 1; i <= 3; i++){
            let genre = prompt(`Your favourite genre number ${ i }`);
            if (genre == '' || genre == null){
                console.log('You have entered incorrect data!');
                i--;
            } else {
                personalMovieDB.genres [i-1] = genre;
            }            
        }
        personalMovieDB.genres.forEach((item, i) => {
            console.log(`Your favourite genre #${i+1} - it is ${item}.`);
        });
    }
    
    

};

      


