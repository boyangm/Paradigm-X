$(document).ready(function () {



    $("#submit").click(function (event) {

        event.preventDefault();
        var search = $("#query").val();
        var seasonArray = ["2018","2017"];
        timeSeriesData(seasonArray, search);

    })


});


/**
 * Gets id of player in free-nba calls get stats
 *
 * @param {string} playerName
 */
function getPlayer(season, playerName) {
    // console.log(playerName);
    fetch('https://free-nba.p.rapidapi.com/players?page=0&per_page=1&search=' + playerName, {
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
        catch (err) {
            console.log("cannot find player: " + playerName);
        }
        getStats(season, playerId);
    })

}


/**
 * Gets stats for players with single query
 *
 * @param {integer} playerId
 * @param {string} date 'YYYY-MM-DD'
 */
function getStats(season, playerId) {
    // console.log(playerId);
    fetch(`https://free-nba.p.rapidapi.com/stats?page=1&per_page=100&seasons[]=${season}&player_ids[]=${playerId}`, {
        headers: {
            'X-RapidAPI-Host': 'free-nba.p.rapidapi.com',
            'X-RapidAPI-Key': 'a7f3949689mshde5da85f9f4bd97p11156bjsne0ab871087ee'
        }
    }).then(function (response) {
        return response.json()
    }).then(function (myJSON) {

        // for (var i = 0; i< myJSON.data.length; i++) {
        //     makeTable(myJSON.data[i]);
        // }

        makeTable(myJSON, season);

    })

}


/**
 * Gets stats for each time period requested
 *
 * @param {string array} dateArray ["2019-01-01". "2018-01-01", "2017-01-01"]
 * @param {string} playerName
 */
function timeSeriesData(dateArray, playerName) {

    var table = $("tbody");

    table.empty();

    for (var i = 0; i < dateArray.length; i++) {

        // console.log(dateArray[i]);

        getPlayer(dateArray[i], playerName);

    }

}


/**
 * Makes additional row on table containing fieldgoal percentage, player name and date
 *
 * @param {object} statsJSON response.data[i]
 */
function makeTable(statsJSON, season) {

    var table = $("tbody");

    var row = $("<tr>");

    row.append(`<th>${statsJSON.data[0].player.first_name} ${statsJSON.data[0].player.last_name}</th>`);
    row.append(`<th>${season}</th>`);
    row.append(`<th>${average(statsJSON, "fg_pct")}%</th>`);

    table.append(row);

}


function average(statsJSON, statId) {

    var sum = 0;

    console.log(statsJSON.data);

    for (var i=0; i<statsJSON.data.length; i++) {

        var fg_pct = statsJSON.data[i][statId];

        if (fg_pct < 1) {
            fg_pct = fg_pct*100;
        }

        console.log(fg_pct);

        sum += fg_pct;

    }

    return (sum/statsJSON.data.length).toFixed(2);

}