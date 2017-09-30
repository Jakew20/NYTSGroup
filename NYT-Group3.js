// Set variables 

var search = "";
var resultAmount = 0;
var beginDate = 0;
var endDate = 0;

// API key and starting URL

var key = '21e09e6245794973a5389b7c7dd105b3';
var queryURL = "https://api.nytimes.com/svc/search/v2/articlesearch.json?api-key=" +
  key + "&q=";


function run (resultNum, finalURL) {

$.ajax ({
	url: finalURL,
	method: "GET"
}).done(function(data){
	console.log(data);

	// Loop to add amount of articles the user wants to view

	for (var i = 0; i < resultNum; i++) {

		// Increase article count each iteration

		articleCount++;

		// Create new div for each article

		var newDiv = $("<div>");

		// Append Article Name/Headline, Author, Section

		author = data.response.docs[i].byline.original

		artical name = data.response.docs[i].headline.main

		section = data.response.docs[i].section_name


	}
});

}
// Click event for search button

$(".search-btn").on("click", function(event) {

  event.preventDefault();

  // Initialize articleCount

  articleCount = 0;

  // Empty articles section

  $(".articles").empty();


  // Variable for the user's search term and add it to the url 

  search = $("#search-term").val().trim();
  var searchURL = queryURL + search;


  // Variable for total number of articles the user wants returned

  resultAmount = $(".number-results").val();

  // Variable for beginning and ending years

  beginDate = $(".start-date").val().trim();

  endDate = $(".end-date").val().trim();


  // If begin/end year is entered then add to url and add mmdd placeholder

  if (parseInt(beginDate)) {
    searchURL = searchURL + "&begin_date=" + beginDate + "0101";
  }


  if (parseInt(endDate)) {
    searchURL = searchURL + "&end_date=" + endDate + "0101";
  }

  // Call run function and pass variables to use

  run(resultAmount, searchURL);

});

// Clear the articles on button click

$("#clear-btn").on("click", function() {
  articleCount = 0;
  $(".articles").empty();
});
