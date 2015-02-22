

var twitter 			= require('twitter')
	, config            = require('./config.js');

// Twitter Setup
var client = new twitter(config().twitter);

var params = {
		screen_name: 'lanacioncom',
		count: 200,
		include_rts:false };

var allHistory = [];

getAllTweets = function(max){

	if (max){
		params.max_id = max;

	}
	client.get('statuses/user_timeline', params, function(error, tweets, response){
	  if (!error) {
	  	allHistory = allHistory.concat(tweets);
	  	console.log("Recieved:" + tweets.length);
	  	var maxIndex = tweets.length -1;
	  	var max_id = tweets[maxIndex].id_str;
	  	console.log("Looking for older than: " + max_id);
	  	console.log(" Acum : " + allHistory.length);
	  	//code before the pause
		setTimeout(function(){
			getAllTweets(max_id);
		}, 5000);
	  	
	  	
	  }
	  else {
	  	console.log(error);
	  }
	});
}

getAllTweets();