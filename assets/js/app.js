const listTweets = document.getElementById('lista-tweets');

const formButton = document
  .getElementById('formulario')
  .addEventListener('submit', addTweet);

document.addEventListener('DOMContentLoaded', readFromStore);

listTweets.addEventListener('click', deleteTweet);

/**
 * add tweet to view
 */
function addTweet(e) {
  e.preventDefault();

  const tweet = document.getElementById('tweet');

  const list = document.createElement('li');
  const deletedTweet = document.createElement('a');

  //add tag a with styles
  deletedTweet.textContent = 'X';
  deletedTweet.classList = 'borrar-tweet';

  list.textContent = tweet.value;
  list.appendChild(deletedTweet);
  listTweets.appendChild(list);

  //delete tweet from view event

  //sent tweet to save in localStorage
  setTweetLocal(tweet.value);
  tweet.value = '';
}

/**
 * Delete tweet from view
 */
function deleteTweet(e) {
  e.preventDefault();
  if (e.target.className === 'borrar-tweet') {
    e.target.parentNode.remove();
  }
}

function setTweetLocal(tweet) {
  let tweets;

  tweets = loadTweetLocal();
  tweets.push(tweet);

  localStorage.setItem('tweets', JSON.stringify(tweets));
}

function loadTweetLocal() {
  let tweets;

  if (localStorage.getItem('tweets') === null) {
    tweets = [];
  } else {
    tweets = JSON.parse(localStorage.getItem('tweets'));
  }

  return tweets;
}

function readFromStore() {
  let twees = loadTweetLocal();

  for (const tweet of twees) {
    const list = document.createElement('li');
    const deletedTweet = document.createElement('a');

    //add tag a with styles
    deletedTweet.textContent = 'X';
    deletedTweet.classList = 'borrar-tweet';

    list.textContent = tweet;
    list.appendChild(deletedTweet);
    listTweets.appendChild(list);
  }
}
