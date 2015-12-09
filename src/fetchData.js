/**
 * This is for demo purposes only, and rate limited.
 * In case you want to use the Rotten Tomatoes' API on a real app you should
 * create an account at http://developer.rottentomatoes.com/
 */
var API_URL = 'http://api.rottentomatoes.com/api/public/v1.0/';
var API_KEYS = '7waqfqbprs7pajbz28mqf6vz'; // 'y4vwv8m33hed9ety83jmv52f', Fallback api_key

function urlForQueryAndPage(pageNumber) {

  // With no query, load latest movies
  return (
    API_URL + 'lists/movies/in_theaters.json?apikey=' + API_KEYS +
    '&page_limit=20&page=' + pageNumber
  );
}

module.exports = function(){

  return fetch(urlForQueryAndPage(1)).then(function (res) {
    return res.json()
  })
}
