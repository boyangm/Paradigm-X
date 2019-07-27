$(document).ready(function () {

    

    $("#submit").click(function(event) {

        event.preventDefault();
        var search = $("#query").val();
        var dateArray = ["2019-01-01", "2018-01-01", "2017-01-01"];
        timeSeriesData(dateArray, search);
        
    })
    

});


/**
 * Gets id of player in free-nba calls get stats
 *
 * @param {string} playerName
 */
function getPlayer(date, playerName) {
    // console.log(playerName);
    fetch('https://free-nba.p.rapidapi.com/players?page=0&per_page=25&search=' + playerName, {
        headers: {
            'X-RapidAPI-Host': 'free-nba.p.rapidapi.com',
            'X-RapidAPI-Key': 'a7f3949689mshde5da85f9f4bd97p11156bjsne0ab871087ee'
        }
    }).then(function (response) {
        return response.json()
    }).then(function (myJSON) {
        try {
            var playerId = myJSON.data[0].id;
        }
        catch(err) {
            console.log("cannot find player: " + playerName);
        }
        getStats(date, playerId);
    })

}


/**
 * Gets stats for players with single query
 *
 * @param {integer} playerId
 * @param {string} date 'YYYY-MM-DD'
 */
function getStats(date, playerId) {
    // console.log(playerId);
    fetch(`https://free-nba.p.rapidapi.com/stats?page=0&per_page=25&dates=${date}&player_ids=${playerId}`, {
        headers: {
            'X-RapidAPI-Host': 'free-nba.p.rapidapi.com',
            'X-RapidAPI-Key': 'a7f3949689mshde5da85f9f4bd97p11156bjsne0ab871087ee'
        }
    }).then(function (response) {
        return response.json()
    }).then(function (myJSON) {
        console.log(myJSON.data[0]);
        makeTable(myJSON.data[0]);
    })

}


/**
 * Gets stats for each time period requested
 *
 * @param {string array} dateArray ["2019-01-01". "2018-01-01", "2017-01-01"]
 * @param {string} playerName
 */
function timeSeriesData(dateArray, playerName) {

    for (var i=0; i<dateArray.length; i++) {

        // console.log(dateArray[i]);

        getPlayer(dateArray[i], playerName);

    }

}


function makeTable(statsJSON) {

    var table = $("tbody");
    var row = $("<tr>");

    row.append(`<th>${statsJSON.player.first_name} ${statsJSON.player.last_name}</th>`);
    row.append(`<th>${statsJSON.game.date}</th>`);
    row.append(`<th>${statsJSON.fg_pct}</th>`);

    table.append(row);

}