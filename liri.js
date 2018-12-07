require("dotenv").config();

var axios = require("axios");
var Spotify = require("node-spotify-api");
var moment = require("moment");

// var spotify = new Spotify(keys.spotify);

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

