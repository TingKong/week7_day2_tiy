var sentence = "Schlitz four dollar toast godard truffaut bespoke neutra artisan pop-up. Chia keytar single-origin coffee sustainable disrupt.";

var breakingup = sentence.split(" ");
for(var i = 0; i < breakingup.length; i++){ 
    if(breakingup[i].length === 6){
        console.log(breakingup[i]);
    }
}
//console.log(breakingup);
var movies = [];
movies.push({
  title: "Forest Gump",
  budget: 55,
  stars: ["Tom Hanks"]
});
movies.push({
  title: "Star Wars",
  budget: 11,
  stars: ["Mark Hamill", "Harrison Ford"]
});
movies.push({
  title: "Batman Begins",
  budget: 150,
  stars: ["Christian Bale", "Liam Neeson", "Michael Caine"]
});
movies.push({
  title: "Titanic",
  budget: 200,
  stars: ["Kate Winslet", "Leonardo DiCaprio"]
});
movies.push({
  title: "Inception",
  budget: 160,
  stars: ["Leonardo DiCaprio", "JGL"]
});

//printing out < 100
for(var i = 0; i < movies.length; i++){
    if(movies[i].budget < 100){
    console.log(movies[i].title);
    } 
}

//printing out movies with leo
for(var i = 0; i < movies.length; i++){
    if(movies[i].stars.includes("Leonardo DiCaprio")){
        console.log(movies[i].title)
    }
}
