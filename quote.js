$(document).ready(function(){
  getQuote(); //onLoad
  $("#random-message").click(function(){
    getQuote();
  }); //onClick button new quote
  
  function getQuote() {
    $.getJSON( "https://api.chucknorris.io/jokes/random", function( json ) {
      $("h2").html(json.value);
      $("#tweetBtn").attr("href","https://twitter.com/intent/tweet?text=" + json.value );
   });
  };
});
