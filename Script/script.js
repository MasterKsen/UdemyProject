let numberOfFilms;
function start (){
    numberOfFilms = +prompt ('How many movies have you already watched?', '');

    while (numberOfFilms == '' || numberOfFilms == null || isNaN (numberOfFilms)){
        numberOfFilms = +prompt ('How many movies have you already watched?', '');
    }
}
start();

const personalMovieDB = {
    count: numberOfFilms,
    movies: {},
    actors: {},
    genres: [],
    private: false

};

function rememberMyFilms (){
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

}
//rememberMyFilms();

function detectPersonalLevel(){
    if (personalMovieDB.count <= 10){
        alert('Too little amount of movies has been watched!');
    } else if (personalMovieDB.count > 10 && personalMovieDB.count <= 30) {
        alert ('Typical movie watcher!');
    } else if (personalMovieDB.count > 30){
        alert ('Movie fan!');
    } else {
        alert ('Error!');
    }

}
//detectPersonalLevel();

function ShowMyDB (hidden){
    if (!hidden){
        console.log(personalMovieDB); 
    }
}

function writeYourGenres (){
    for(let i = 1; i <= 3; i++){
        personalMovieDB.genres [i-1] = prompt(`Your favourite genre number ${ i }`);
    }
}
writeYourGenres();
ShowMyDB (personalMovieDB.private);
      


