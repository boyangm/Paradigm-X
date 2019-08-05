var firebaseConfig = {
        apiKey: "AIzaSyBrzK7dJ0bZgystmNqv2xaOj7IwJF05sGQ",
        authDomain: "hooperpedia.firebaseapp.com",
        databaseURL: "https://hooperpedia.firebaseio.com",
        projectId: "hooperpedia",
        storageBucket: "",
        messagingSenderId: "797528490036",
        appId: "1:797528490036:web:231863142248d6f5"
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

var playersRef = firebase.database().ref();

database.ref().on("child_added", function (data) {
  const favName = data.val().playerName1;
  // $("#favArea").text(data.val().playerName1);
  fromHome=false;
   getPlayer(seasonArray, favName);

   
   console.log(data.val().playerName1)
   
}, function (errorObject) {
    console.error(errorObject)
});

var table = $("#stats-body");
table.addClass('inActiv');

table.empty();