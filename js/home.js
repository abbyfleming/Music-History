console.log("home.js linked");

/* ----- DOM ELEMENTS ----- */
var homeLink = document.getElementById("link-home");
var homeView = document.getElementById("home-view");


/* ----- XHR REQUEST TO READ JSON FILE ----- */

function addSongs(){
var songLoader = new XMLHttpRequest();
songLoader.open("GET", "data/songs.json");
songLoader.send();

 songLoader.addEventListener("load", function () {
  songs = JSON.parse(this.responseText).songs;
  populatePage(songs);
});
}

function addMoreSongs(){
var moreSongs = new XMLHttpRequest();
moreSongs.open("GET", "data/more-songs.json");
moreSongs.send();

moreSongs.addEventListener("load", function() {
  songs = JSON.parse(this.responseText).songs;
  populatePage(songs);
});
}

 /* ----- POPULATE PAGE ----- */

 function populatePage(songs) {
  var output = document.getElementById("songListDom");
  
  for (var i = 0; i < songs.length; i++) {
  	var getSongs = songs[i];

  	output.innerHTML += 
  	`<div>
  		${getSongs.title} by ${getSongs.artist} on the album ${getSongs.album}
  		<button class="deletebtn">X</button>
  	</div>`;
  }

  addListener();

}


function addMoreBtn(){
  var output = document.getElementById("songListDom");
  output.innerHTML += `<button id="moreBtn">More > </button>`;
  console.log("addMoreBtn");
}


function addListener(){

  var deletebtn = document.getElementsByClassName("deletebtn");
  var moreBtn = document.getElementById("moreBtn");
	
  for (var i = 0; i < deletebtn.length; i++) {      
        deletebtn[i].addEventListener("click", deleteSong);
        }

  moreBtn.addEventListener("click", addMoreSongs);

}


function deleteSong(event){
	var targetSong = event.target.parentElement;
	targetSong.parentNode.removeChild(targetSong);
}


/* ----- EVENT LISTENERS ----- */
homeLink.addEventListener("click", function() {
  homeView.classList.add("hidden");
  addView.classList.add("hidden");

  homeView.classList.add("visible");
  homeView.classList.remove("hidden");
});


addSongs();
addMoreBtn();
