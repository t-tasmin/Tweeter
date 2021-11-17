$(document).ready(function() {

  const createTweetElement = function(tweetData) {

    let name   = tweetData["user"].name;
    let avatar = tweetData["user"].avatars;
    let handle = tweetData["user"].handle;
    let content = tweetData["content"].text;
    let days   = timeago.format(tweetData.created_at);

    let Tweet =  `<article class="tweet-container">
                <header>
                  <div class="div1">
                    <div class="div2">
                        <img src=${avatar}>
                        <span>${name}</span>
                    </div>
                    <span>${handle}</span>
                  </div>
                </header>
                <div class="tweet-text">
                  <label for="tweets">${content}</label>
                </div>
                <footer>
                  <div class="div3">
                    <span>${days}</span>
                    <div class="div4">
                      <i class="fas fa-flag"></i>
                      <i class="fas fa-retweet"></i>
                      <i class="fas fa-heart"></i>
                    </div>
                  </div>
                </footer>
              </article>`;

    const $tweet = $(Tweet);

    return $tweet;
  };


  // Fake data taken from initial-tweets.json
  const data = [
    {
      "user": {
        "name": "Newton",
        "avatars": "https://i.imgur.com/73hZDYK.png"
        ,
        "handle": "@SirIsaac"
      },
      "content": {
        "text": "If I have seen further it is by standing on the shoulders of giants"
      },
      "created_at": 1461116232227
    },
    {
      "user": {
        "name": "Descartes",
        "avatars": "https://i.imgur.com/nlhLi3I.png",
        "handle": "@rd" },
      "content": {
        "text": "Je pense , donc je suis"
      },
      "created_at": 1461113959088
    }
  ];



  const renderTweets = function(tweets) {
    for (let value of tweets) {
      const $tweet = createTweetElement(value);
      $('.main-container').append($tweet);
    }

  };

  
  const loadtweets = function () {
      $.get("/tweets/", function(data){
         renderTweets(data);
       });
  
  }
  
  loadtweets();
  
});


