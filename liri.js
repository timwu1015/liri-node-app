require("dotenv").config();

var axios = require("axios");
var Spotify = require("node-spotify-api");
var moment = require("moment");
var keys = require("./keys");
var fs = require("fs");

function spotify(song) {
    var spotify = new Spotify(keys.spotify);
    
    spotify.search({type: "track", query: song}, function(err, data) {
        if(err) {
            return console.log("Error occured: " + err);
        }
    var parse = data.tracks.items;
    console.log("\nArtist(s): " + (parse[0].artists)[0].name);
    console.log("Song's Name: " + parse[0].name);
    console.log("Preview: " + parse[0].preview_url);
    console.log("Album: " + parse[0].album.name + "\n")
    });
}

function imdb(movie) {
    var queryUrl = "http://www.omdbapi.com/?t=" + movie + "&y=&plot=short&apikey=trilogy";
    // console.log(queryUrl);

    axios.get(queryUrl).then(
        function(response) {
          var data = response.data;
          console.log("\nTitle of the movie: " + data.Title);
          console.log("Year released: " + data.Year);
          console.log("IMDB rating: " + data.imdbRating);
          console.log("Rotton Tomatoes rating: " + data.Ratings[2].Value);
          console.log("Country produced: " + data.Country);
          console.log("Languages: " + data.Language);
          console.log("Plot: " + data.Plot);
          console.log("Actors: " + data.Actors + "\n");
        }
      );
}

if (process.argv[2] === "concert-this") {
    var artist = process.argv[3];
    artist = artist.replace(/\s/g, "%20");
    var url = "https://rest.bandsintown.com/artists/" + artist + "/events?app_id=codingbootcamp";

    console.log(url);
    axios.get(url).then(
        function(response) {
            console.log(" There are " + response.data.length + " evnets found!\n");
            for (var i = 0; i < response.data.length; i++) {
                console.log("Name of the venue: " + response.data[i].venue.name);
                console.log("Venue location: " + response.data[i].venue.city);
                var time = response.data[i].datetime;
                time = moment(time).format("MM/DD/YYYY");
                console.log("Date of the event: " + time + "\n");
            }
        }
    );
}
else if (process.argv[2] === "spotify-this-song") {
    if (!process.argv[3]) {
        var artist = "The Sign";
        spotify(artist);
    }
    else {
        var artist = process.argv[3];
        spotify(artist);
    }
}
else if(process.argv[2] === "movie-this") {
    if (!process.argv[3]) {
        var movie = "Mr.Nobody";
        imdb(movie);
    }
    else {
        var movie = process.argv[3];
        movie = movie.replace(/\s/g, "+");
        imdb(movie);
    }
}
else if(process.argv[2] === "do-what-it-says") {
    fs.readFile("random.txt", "utf8", function(error, data) {
        if (error) {
          return console.log(error);
        }
        // console.log(data);

        var dataArr = data.split(",");
        // console.log(dataArr);
        var artist = dataArr[1];
        spotify(artist);
      });
}


