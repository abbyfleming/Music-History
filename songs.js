
var output = document.getElementById("songListDom");
var songs = [];


songs[songs.length] = "Legs > by Z*ZTop on the album Eliminator";
songs[songs.length] = "The Logical Song > by Supertr@amp on the album Breakfast in America";
songs[songs.length] = "Another Brick in the Wall > by Pink Floyd on the album The Wall";
songs[songs.length] = "Welco(me to the Jungle > by Guns & Roses on the album Appetite for Destruction";
songs[songs.length] = "Ironi!c > by Alanis Moris*ette on the album Jagged Little Pill";


//add item to beginning of array
songs.unshift("Light > by John Bryant on the album Twenty Something");

//add item to end of array
songs.push("Make It Holy > by The Staves on the album If I Was");

//Replace > with -
//add to the DOM

for (i = 0; i < songs.length; i++) {
	var replacedSongs = songs[i].replace(/>/g, "-").replace(/[@(!*]/g, "");
	output.innerHTML += "<div>" + replacedSongs + "</div>";
}



