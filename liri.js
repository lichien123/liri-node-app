// require("dotenv").config();

// var spotify = require('node-spotify-api')
// var twitter = require('twitter')

// var jquery = require('./jquery-3.3.1.min'); 
// var myModule = require('./keys');



// var spotify = new Spotify(keys.spotify);
// var client = new Twitter(keys.twitter);


//////////TWITTER////////////
function twitterFeed() {

$.ajax({
      url: 'https://api.twitter.com/1.1/statuses/user_timeline.json?screen_name=CNN&count=2'
      		+ 'apiKey=9ebpMefBL7Nooz1NDSXiguVYW',
      method: "GET"
    }).done(function(response) {
    	console.log(response)
    });

}

twitterFeed();

//////////SPOTIFY////////////







//////////OMDB///////////////









//////////DO WHAT IT SAYS////////////