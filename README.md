# liri-node-app


### Overview

The LIRI app is command line node app, taking in parameters and giving you back data. It works like iPhone's SIRI, but functions as a language interpretation and recognition interface.


### User Guide

The app takes one of the following commands:

1. `concert-this '<artist/band name here>'`

2. `spotify-this-song '<song name here>'`

3. `movie-this '<movie name here>'`

4. `do-what-it-says`

As the syntax suggests, each commend will trigger specific API request and return the following information:

1. Bands in Town Artist Events API : 

    * Name of the venue
    * Venue location
    * Date of the Event (use moment to format this as "MM/DD/YYYY")

2. Spotify API:

    * Artist(s)
    * The song's name
    * A preview link of the song from Spotify
    * The album that the song is from
    * If no song is provided then your program will default to "The Sign" by Ace of Base.

3.  IMDB API:

    * Title of the movie.
    * Year the movie came out.
    * IMDB Rating of the movie.
    * Rotten Tomatoes Rating of the movie.
    * Country where the movie was produced.
    * Language of the movie.
    * Plot of the movie.
    * Actors in the movie.
    
4. LIRI will take the text inside of `random.txt` and then run `spotify-this-song` for "I Want it That Way".


### DEMO 

1. Sample command:  `node liri.js concert-this 'ariana grande'`
        
        Result on terminal: (images/1.png)

2. Sample command:  `node liri.js spotify-this-song 'In my feelings'`

        Result on terminal: (images/2.png)

3. Sample command:  `node liri.js movie-this 'the fast and the furious'`

        Result on terminal: (images/3.png)
        
4. Sample command:  `node liri.js do-what-it-says`
        
        Result on terminal: (images/4.png)


