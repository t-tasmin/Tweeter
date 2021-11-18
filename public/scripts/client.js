$(document).ready(function() {
  
  const escape = function (str) {
    let div = document.createElement("div");
    div.appendChild(document.createTextNode(str));
    return div.innerHTML;
  };


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
                  <label for="tweets">${escape(content)}</label>
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

  
  const renderTweets = function(tweets) {
    
    for (let i=tweets.length-1; i>=0; i--) {
        const $tweet = createTweetElement(tweets[i]);
        $('.tweets-main-container').append($tweet);
    }
  };

  
  const loadtweets = function () {
      $.get("/tweets/", function(data){
         renderTweets(data);
       });
  
  }
  
  loadtweets();
  
  //Sending the form Data to /tweets/ and append that data with other tweets
  $("form").submit(function(event){
    // Stop form from submitting normally
    event.preventDefault();
    
    /* Serialize the submitted form control values to be sent to the web server with the request */
    var formValues = $(this).serialize();
      
    if ($(".new-tweet-textarea").val() === "") {
        $(".alert-container").slideDown();
        $(".alert-container-p").html("<b>❌❌❌Error: There is No Tweet!❌❌❌</b>");
    } else if (Number($(".counter").val()) < 0) {
        $(".alert-container").slideDown();
        $(".alert-container-p").html("<b>❌❌❌Error: Too Long. Please limit it to 140 chars!❌❌❌</b>");
        $(".new-tweet-textarea").val('');
        $(".counter").text('140');
    } else {
        $(".alert-container").slideUp();
        $(".new-tweet-textarea").val('');
        $(".counter").text('140');
        // Send the form data using post
        $.post("/tweets/", formValues, function(data){
          alert('Success');
          
          $.get("/tweets/", function(data){
            const $t1 = createTweetElement(data[data.length-1]);
            $('.tweets-main-container').prepend($t1);
          });
        });
    }

    
  });
});


