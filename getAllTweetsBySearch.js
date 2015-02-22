

var twitter 			= require('twitter')
	, config            = require('./config.js');

// Twitter Setup
var client = new twitter(config().twitter);

var params = {
		from:  'lanacioncom',
		count: 100,
		result_type: 'recent',
		include_rts:false };

var allHistory = [];

getAllTweets = function(max){

	if (max){
		params.max_id = max;

	}
	client.get('search/tweets', params, function(error, datasource, response){
	  
	  if (!error) {
	  	allHistory = allHistory.concat(datasource.statuses);
	  	console.log("Recieved:" + datasource.statuses.length);
	  	var maxIndex = datasource.statuses.length -1;
	  	var max_id = datasource.statuses[maxIndex].id_str;
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