$(document).ready(function () {

    $("#submit").click(function (event) {

        event.preventDefault();
        var search = $("#query").val();
        // var seasonArray = ["2018", "2017", "2016", "2015", "2014"];
        var seasonArray = ["2014", "2015", "2016", "2017", "2018"];
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
        var name = myJSON.data[0].first_name + "_" + myJSON.data[0].last_name;
        getImg(name);
        populateProfile(myJSON);
        var stats = {};
        let count = {count: 0};
        for (var i = 0; i < seasons.length; i++) {
            // count.push("complete");
            getStats(seasons[i], playerId, stats, seasons, count);
        }

    });

}


/**
 * Gets stats for players with single query
 *
 * @param {integer} playerId
 * @param {string} date 'YYYY-MM-DD'
 */
function getStats(season, playerId, stats, seasons, count) {

    // console.log(playerId);
    fetch(`https://free-nba.p.rapidapi.com/stats?page=1&per_page=100&seasons[]=${season}&player_ids[]=${playerId}`, {
        headers: {
            'X-RapidAPI-Host': 'free-nba.p.rapidapi.com',
            'X-RapidAPI-Key': 'a7f3949689mshde5da85f9f4bd97p11156bjsne0ab871087ee'
        }
    }).then(function (response) {
        return response.json()
    }).then(function (myJSON) {

        // makeTable(myJSON, season);

        if (myJSON.data.length > 0) {

            stats[season] = {

                aveFgPct: averagePct(myJSON, "fg_pct"),
                aveFg3Pct: averagePct(myJSON, "fg3_pct"),
                aveAst: averageInt(myJSON, "ast"),
                aveReb: averageInt(myJSON, "dreb"),
                aveBlk: averageInt(myJSON, "blk"),

            }

        }

        var keys = Object.keys(stats);

        count.count ++;

        if (count.count === seasons.length) {

            makeTable(stats);
            var trends = getTrends(stats);
            chart(stats, trends);

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
function makeTable(seasonStats) {

    var table = $("#stats-body");

    var seasons = Object.keys(seasonStats);

    var stats = Object.keys(seasonStats[seasons[0]]);

    for (var i = 0; i < seasons.length; i++) {

        var row = $("<tr>");
        row.attr("class", "stat-row");

        row.append(`<td>${seasons[i]}</td>`);

        for (var j = 0; j < stats.length; j++) {

            row.append(`<td>${seasonStats[seasons[i]][stats[j]]}</td>`);

        }

        table.append(row);

    }

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



/**
 * Returns the average slope (m where y = mx + b) of the player's stats
 *
 * @param {object} seasonStats
 * @returns {object} contaiing trends keys same as season stats
 */
function getTrends(seasonStats) {

    var trends = {};

    var seasons = Object.keys(seasonStats);

    var n = seasons.length;

    var stats = Object.keys(seasonStats[seasons[0]]);

    $("#trend-body").empty();

    $("#trend-body").append("<tr id='trend-stats'></tr>");

    for (var i = 0; i < stats.length; i++) {

        var sumYR = 0;

        for (var j = 1; j < n; j++) {

            sumYR += (parseFloat(seasonStats[seasons[j]][stats[i]]) - parseFloat(seasonStats[seasons[j - 1]][stats[i]]));

        }

        var m = (sumYR / (n - 1)).toFixed(2);
        // console.log("----");
        // console.log(m);
        // console.log("------------");

        $("#trend-stats").append(`<td>${m}</td>`);

        trends[stats[i]] = m;

    }

    $("#trend-stats").prepend(`<td></td>`);

    $("#trend-body").append(`<tr id='chart-row'></tr>`);

    $("#chart-row").append("<td>");

    return trends

}


function chart(seasonStats, trends) {

    var seasons = Object.keys(seasonStats);

    var stats = Object.keys(seasonStats[seasons[0]]);

    // console.log(seasons);

    for (var i = 0; i < stats.length; i++) {

        var statArr = [];

        for (var j = 0; j < seasons.length; j++) {

            statArr.push(seasonStats[seasons[j]][stats[i]]);

        }

        // console.log(statArr);

        var trace1 = {
            type: "scatter",
            mode: "lines",
            name: 'Player Stats',
            x: seasons,
            y: statArr,
            line: { color: '#17BECF' }
        }

        var trace2 = {
            type: "scatter",
            mode: "lines",
            name: 'Trend',
            x: seasons,
            y: trendLine(seasonStats, trends[stats[i]], stats[i]),
            line: { color: 'red' }
        }

        var data = [trace1, trace2];

        var layout = {
            title: false,
            autosize: false,
            height: 100,
            width: 150,
            margin: {
                t: 5,
                r: 20,
                l: 20,
                b: 25,
                pad: 0
            },
            xaxis: {
                showticklabels: false
            },
            yaxis: {
                showticklabels: false
            },
            showlegend: false,
        };

        var config = {

            showSendToCloud: false,
            displayModeBar: false

        }

        $("#chart-row").append(`<td id='${stats[i]}-chart'></td>`);

        Plotly.newPlot(`${stats[i]}-chart`, data, layout, config);

    }

}


function trendLine(seasonStats, m, statId) {

    var seasons = Object.keys(seasonStats);

    var line = [];

    var b = calcB(m, seasonStats, statId)

    // console.log(b)

    for (var i = 0; i < seasons.length; i++) {

        var prediction = b + m * (i + 1);

        line.push(prediction);

    }

    // console.log(line)

    return line

}


function calcB(m, seasonStats, statId) {

    // y = mx + b
    // b = y - mx

    // calc ave of stat

    var seasons = Object.keys(seasonStats);

    var sumx = 0;

    for (var i = 0; i < seasons.length; i++) {

        sumx += parseFloat(seasonStats[seasons[i]][statId]);

    }

    var y = (sumx / seasons.length).toFixed(2);

    // calc ave of seasons

    var sumy = 0;

    for (var i = 0; i < seasons.length; i++) {

        sumy += i + 1;

    }

    var x = (sumy / seasons.length).toFixed(2);

    var b = y - (m * x);

    return b

}


function getImg(playerName) {

    var query = `https://en.wikipedia.org/w/api.php?action=query&titles=${playerName}&format=json&prop=pageimages&pithumbsize=200&callback=?`;

    $.ajax({
        type: "GET",
        url: query,
        contentType: "application/json; charset=utf-8",
        dataType: "json",
        success: function (response) {

            var page = response.query.pages;
            console.log(page);
            var pkey = Object.keys(page);
            var src = page[pkey[0]].thumbnail.source;
            $("#player-img").attr("src", src);

        },
        error: function (errorMessage) {
        }
    });

}


