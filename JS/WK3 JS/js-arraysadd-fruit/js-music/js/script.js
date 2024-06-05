let music = ["April Wine", "Trooper", "Kim Mitchell", "Tom Cochrane"];
 
function loadMusic() {
    document.getElementById("music").innerHTML = music;
};


function myFunction() {
 let favBand = prompt("Who is another great Canadian band?");
 music[music.length] = favBand;
 document.getElementById("music").innerHTML= music;
};