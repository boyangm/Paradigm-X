var firebaseConfig = {
    apiKey: "AIzaSyAK0dz6IVapH23et4pyuzHMfxp0JC4Sj0Y",
    authDomain: "paradigm2-86f13.firebaseapp.com",
    databaseURL: "https://paradigm2-86f13.firebaseio.com",
    projectId: "paradigm2-86f13",
    storageBucket: "",
    messagingSenderId: "287677360265",
    appId: "1:287677360265:web:37d23685f079bf01"
};

// Initialize Firebase
firebase.initializeApp(firebaseConfig);
var database = firebase.database();

function saveFavorite(playerName, team){
    database.ref().push({
        playerName1: playerName,
    });
}

$(document).on("click", ".save-player", function(){
    var playerName = $(this).attr("data-Playername");
    saveFavorite(playerName);
});