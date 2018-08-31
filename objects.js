var playlist = {
  "My Bloody Valentine": "Bana Sen Lazimsin",
  "Ahmet Kaya":"Kum Gibi"
};

var updatePlaylist = {playlist, artistName, songTitle: "songTitle"
};

function removeFromPlaylist(playlist, artistName){
  var playlist = { 'My Bloody Valentine': 'Sometimes', 'Phil Ochs': "Here's to the State of Mississippi"};
  return playlist
}

function removeFromPlaylist (playlist, artistName){
delete playlist[artistName];
}