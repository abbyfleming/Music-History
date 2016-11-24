/* ----- NAVIGATION ----- */

var addLink = document.getElementById("link-add");
var addView = document.getElementById("add-view");

addLink.addEventListener("click", function() {
  homeView.classList.add("hidden");
  homeView.classList.add("hidden");

  addView.classList.add("visible");
  addView.classList.remove("hidden");

});



/* ----- USER INPUT TO DOM ----- */

var submitBtn = document.getElementById("submitBtn");

function addSong(){
	var songName = document.getElementById("songName").value;
	var artistName = document.getElementById("artistName").value;
	var albumName = document.getElementById("albumName").value;
	
	//add to the array
	songs.push(`${songName} by ${artistName} on the album ${albumName}`);

	//add new songs to output
	output.innerHTML += `<div> ${songName} - by ${artistName} on the album ${albumName} </div>`;

	//console.log(songs);
}

submitBtn.addEventListener("click", addSong);


