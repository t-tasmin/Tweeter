$(document).ready(function() {

const createTweetElement = function (tweetData)
{

 let name   = tweetData["user"].name;
 let avatar = tweetData["user"].avatars;
 let handle = tweetData["user"].handle;
 let content= tweetData["content"].text;
 let days   = tweetData["content"].created_at;

 let Tweet=  `<article class="tweet-container">
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
                    <span>${days} Days Ago</span>
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


// Test / driver code (temporary). Eventually will get this from the server.
const tweetData = {
  "user": {
    "name": "Newton",
    "avatars": "https://i.imgur.com/73hZDYK.png",
      "handle": "@SirIsaac"
    },
  "content": {
      "text": "If I have seen further it is by standing on the shoulders of giants"
    },
  "created_at": 1461116232227
}


const $tweet = createTweetElement(tweetData);

// Test / driver code (temporary)
console.log($tweet); // to see what it looks like
$('.main-container').append($tweet); // to add it to the page so we can make sure it's got all the right elements, classes, etc.

});