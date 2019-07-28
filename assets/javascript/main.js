$(document).ready(function () {

    $("#submit").click(function (event) {

        event.preventDefault();
        var search = $("#query").val();
        var seasonArray = ["2018", "2017", "2016"];
        timeSeriesData(seasonArray, search);

    });

});


/**
 * Gets id of player in free-nba calls get stats
 *
 * @param {string} seasons
 * @param {string} playerName
 */
function getPlayer(seasons, playerName) {
    // console.log(playerName);
    fetch('https://free-nba.p.rapidapi.com/players?page=1&per_page=1&search=' + playerName, {
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

        populateProfile(myJSON);
        var stats = {};
        for (var i = 0; i < seasons.length; i++) {
            getStats(seasons[i], playerId, stats);
        }

    });

}


/**
 * Gets stats for players with single query
 *
 * @param {integer} playerId
 * @param {string} date 'YYYY-MM-DD'
 */
function getStats(season, playerId, stats) {
    // console.log(playerId);
    fetch(`https://free-nba.p.rapidapi.com/stats?page=1&per_page=100&seasons[]=${season}&player_ids[]=${playerId}`, {
        headers: {
            'X-RapidAPI-Host': 'free-nba.p.rapidapi.com',
            'X-RapidAPI-Key': 'a7f3949689mshde5da85f9f4bd97p11156bjsne0ab871087ee'
        }
    }).then(function (response) {
        return response.json()
    }).then(function (myJSON) {

        makeTable(myJSON, season);

        stats[season] = {

            aveFgPct: averagePct(myJSON, "fg_pct"),
            aveFg3Pct: averagePct(myJSON, "fg3_pct"),
            aveAst: averageInt(myJSON, "ast"),
            aveReb: averageInt(myJSON, "dreb"),
            aveBlk: averageInt(myJSON, "blk")
            
        }

        if (Object.keys(stats).length===3) {
            getTrends(stats);
        }

    });

}


/**
 * Gets stats for each time period requested
 *
 * @param {string array} dateArray ["2018". "2017", "2016"]
 * @param {string} playerName
 */
function timeSeriesData(seasons, playerName) {

    var table = $("#stats-body");

    table.empty();

    getPlayer(seasons, playerName);

}


/**
 * Makes additional row on table containing fieldgoal percentage, player name and date
 *
 * @param {object} statsJSON api response
 * @param {string} season "YYYY" year format
 */
function makeTable(statsJSON, season) {

    var table = $("#stats-body");

    var row = $("<tr>");

    row.attr("class", "stat-row");

    row.append(`<td>${season}</td>`);
    row.append(`<td>${averagePct(statsJSON, "fg_pct")}%</td>`);
    row.append(`<td>${averagePct(statsJSON, "fg3_pct")}%</td>`);
    row.append(`<td>${averageInt(statsJSON, "blk")}</td>`);
    row.append(`<td>${averageInt(statsJSON, "ast")}</td>`);
    row.append(`<td>${averageInt(statsJSON, "dreb")}</td>`);

    table.append(row);

}


/**
 * Calculates the average of a percentages
 *
 * @param {object} statsJSON api response
 * @param {string} statId object key name
 * @returns float rounded to 2 decimals
 */
function averagePct(statsJSON, statId) {

    var sum = 0;

    for (var i = 0; i < statsJSON.data.length; i++) {

        var pct = statsJSON.data[i][statId];

        if (pct < 1) {
            pct = pct * 100;
        }

        sum += pct;

    }

    return (sum / statsJSON.data.length).toFixed(2);

}


/**
 * Calculates the average of integers
 *
 * @param {object} statsJSON api response
 * @param {string} statId object key name
 * @returns float rounded to 2 decimals
 */
function averageInt(statsJSON, statId) {

    var sum = 0;

    for (var i = 0; i < statsJSON.data.length; i++) {

        var stat = statsJSON.data[i][statId];

        sum += stat;

    }

    return (sum / statsJSON.data.length).toFixed(2);

}


/**
 * populates the profile information with what's provided by the api
 *
 * @param {object} playerJSON player api response
 */
function populateProfile(playerJSON) {

    $("#prof-name").empty();
    $("#prof-position").empty();
    $("#prof-team").empty();
    $("#prof-conference").empty();
    $("#prof-division").empty();

    var profile = playerJSON.data[0];

    var name = profile.first_name + " " + profile.last_name;

    $("#prof-name").text(name);
    $("#prof-position").text(profile.position);
    $("#prof-team").text(profile.team.name);
    $("#prof-conference").text(profile.team.conference);
    $("#prof-division").text(profile.team.division);

}





function getTrends(seasonStats) {

    var seasons = Object.keys(seasonStats);

    var n = seasons.length;

    var stats = Object.keys(seasonStats[seasons[0]]);

    $("#trend-body").empty();

    for (var i=0; i<stats.length; i ++) {

        // mean
        var sumY = 0;

        var sumX = 0;
    
        for (var j=0; j<n; j++) {

            sumY += parseFloat(seasonStats[seasons[j]][stats[i]]);
    
        }

        var sumYR = 0;

        var productSum = 0;

        var count = 0;
    
        for (var j=1; j<n; j++) {

            tempM = parseFloat(seasonStats[seasons[j]][stats[i]])-parseFloat(seasonStats[seasons[j-1]][stats[i]]);

            // console.log(tempM);

            sumYR += (parseFloat(seasonStats[seasons[j]][stats[i]])-parseFloat(seasonStats[seasons[j-1]][stats[i]]));
    
            count ++;

        }

        var m = (sumYR/(n-1)).toFixed(2);
        // console.log("----");
        // console.log(m);
        // console.log("------------");

        $("#trend-body").append(`<td>${m}</td>`);
        
    }

    $("#trend-body").prepend(`<td></td>`);

}