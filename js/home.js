console.log("home.js linked");

/* ----- DOM ELEMENTS ----- */
var homeLink = document.getElementById("link-home");
var homeView = document.getElementById("home-view");
var output = document.getElementById("songListDom");
var moreBtn = document.getElementById("moreBtn");


/* ----- XHR REQUEST TO READ JSON FILE ----- */

var songLoader = new XMLHttpRequest();
songLoader.open("GET", "data/songs.json");
songLoader.send();

 songLoader.addEventListener("load", function () {
  songs = JSON.parse(this.responseText).songs;
  populatePage(songs);
});


var moreSongs = new XMLHttpRequest();
moreSongs.open("GET", "data/more-songs.json");
moreSongs.send();

moreSongs.addEventListener("load", function() {
  songs = JSON.parse(this.responseText).songs;
  populatePage(songs);
})


 /* ----- POPULATE PAGE ----- */

 function populatePage(songs) {
  
  for (var i = 0; i < songs.length; i++) {

  	var getSongs = songs[i];

  	output.innerHTML += 
  	`<div>
  		${getSongs.title} by ${getSongs.artist} on the album ${getSongs.album}
  		<button class="deletebtn">X</button>
  	</div>`;
  }

  //addMoreBtn();
  addListener();
  //console.log(songs);
}

function addMoreBtn(){
  output.innerHTML += `<button id="moreBtn">More > </button>`;
}


function addListener(){

  //var deletebtn = document.getElementById(`delete${i}`);
  var deletebtn = document.getElementsByClassName("deletebtn");
	
  for (var i = 0; i < deletebtn.length; i++) {      
        deletebtn[i].addEventListener("click", deleteSong);
        }

  //   moreBtn.addEventListener("click", function(){
  //   console.log("moreBtn");
  // })

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



