var playlist = {
  "Rafet Elroman": "Bana Sen Lazimsin",
  "Ahmet Kaya":"Kum Gibi"
};

var updatePlaylist = {playlist, artistName, songTitle: "songTitle"
};

function removeFromPlaylist (playlist, artistName){
delete playlist[artistName];
}