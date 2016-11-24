console.log("home.js linked");

/* ----- DOM ELEMENTS ----- */
var homeLink = document.getElementById("link-home");
var homeView = document.getElementById("home-view");
var output = document.getElementById("songListDom");


/* ----- XHR REQUEST TO READ JSON FILE ----- */

var songLoader = new XMLHttpRequest();
songLoader.open("GET", "data/songs.json");
songLoader.send();

 songLoader.addEventListener("load", function () {
  songs = JSON.parse(this.responseText).songs;
  populatePage(songs);
});



 /* ----- POPULATE PAGE ----- */

 function populatePage(songs) {
  
  for (var i = 0; i < songs.length; i++) {

  	var getSongs = songs[i];

  	output.innerHTML += 
  	`<div id="song${i}">
  		${getSongs.title} by ${getSongs.artist} on the album ${getSongs.album}
  		<button id="delete${i}">X</button>
  	</div>`;
  }

  addListener(songs)
  //console.log(songs);

}

function addListener(songs){
	for (var i = 0; i < songs.length; i++) {

		var deletebtn = document.getElementById(`delete${i}`);
		deletebtn.addEventListener("click", deleteSong);
		//console.log(deletebtn);
	}
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

