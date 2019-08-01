$(document).ready(function () {

    $("#submit").click(function (event) {

        event.preventDefault();
        var search = $("#query").val();
        // var seasonArray = ["2018", "2017", "2016", "2015", "2014"];
        var seasonArray = ["2014", "2015", "2016", "2017", "2018"];
        timeSeriesData(seasonArray, search);
        $('html, body').animate({
            scrollTop: $("#results").offset().top
        }, 1000);


    });

});
// function logo(team){
//     const teamLogo = [{team: "Chicago Bulls", source: 'https://teamwork-online-production.s3.amazonaws.com/uploads/e76d6979-d3ca-4c74-9a20-ee56afeffb4b.png',  color: "#CE1141"},{team: "Atlanta Hawks", source: 'https://teamwork-online-production.s3.amazonaws.com/uploads/5bf18a88-84fb-49a2-843d-098dd7ff5425.png', color: "#E03A3E"},
//     {team: "Boston Celtics", source: 'https://secure.img1-fg.wfcdn.com/im/63371552/resize-h600%5Ecompr-r85/2901/29013525/NBA+Boston+Celtics+Roundel+27+in.+x+27+in.+Non-Slip+Indoor+Only+Mat.jpg', color: "#007A33"},{team: "Brooklyn Nets", source: 'https://i.ebayimg.com/images/g/E9gAAOSwDm1dDAgS/s-l1600.jpg', color: "#000000"},
//     {team: "Charlotte Hornets", source: 'https://i.ebayimg.com/images/g/u48AAOSwNCtdDAgy/s-l1600.jpg', color: "#1D1160"},{team: "Cleveland Cavaliers", source: 'https://cdn.shopify.com/s/files/1/0993/8094/products/Cleveland_Cavaliers_3D_Fan_Foam_Logo_Sign_HD_Pro_Image_Sports_1024x1024.jpg?v=1504892006',color: "#6F263D"},
//     {team: "Dallas Mavericks", source: 'https://i.ebayimg.com/images/g/DkYAAOSwv7BdDAhI/s-l1600.jpg', color:"#00538C"},{team: "Denver Nuggets", source: 'https://secure.img2-fg.wfcdn.com/im/14311203/resize-h600%5Ecompr-r85/2901/29013566/NBA+Denver+Nuggets+Roundel+27+in.+x+27+in.+Non-Slip+Mat.jpg', color: "#0E2240"},
//     {team: "Detroit Pistons", source: 'https://i.ebayimg.com/images/g/LPQAAOSw5kBbNSMk/s-l1600.jpg', color: "#C8102E"},{team: "Golden State Warriors", source: 'https://i.ebayimg.com/images/g/IvUAAOSwbopZVBCQ/s-l1600.jpg',color :"#1D428A"},
//     {team: "Indiana Pacers", source: 'https://i.ebayimg.com/images/g/icsAAOSw6WVdDAhv/s-l1600.jpg',color: "#002D62"},{team: "LA Clippers", source: 'https://i.ebayimg.com/images/g/bP4AAOSw7ytdDAiD/s-l1600.jpg', color: "#C8102E"},
//     {team: "Los Angeles Lakers", source: 'https://i.ebayimg.com/images/g/VQ4AAOSwE5BdDAiG/s-l1600.jpg', color: "#552583"},{team: "Memphis Grizzlies", source: 'https://i.ebayimg.com/images/g/8ZcAAOSw~c1dDAiL/s-l1600.jpg', color: "#5D76A9"},
//     {team: "Miami Heat", source: 'https://i.ebayimg.com/images/g/4LwAAOSwPp5dDAiK/s-l1600.jpg', color: "#98002E"},{team: "Milwaukee Bucks", source: 'https://i.ebayimg.com/images/g/0cMAAOSwYBRbM~yy/s-l1600.jpg', color: "#00471B"},
//     {team: "Minnesota Timberwolves", source: 'https://i.ebayimg.com/images/g/0cMAAOSwYBRbM~yy/s-l1600.jpg', color: "#0C2340"},
//     {team: "Houston Rockets", source: 'https://i.ebayimg.com/images/g/dn8AAOSwPdddDAm-/s-l1600.jpg', color: "#CE1141"},{team: "New Orleans Pelicans", source: 'https://i.ebayimg.com/images/g/JvsAAOSwFsBdDAiH/s-l1600.jpg', color: "#0C2340"},
//     {team: "New York Knicks", source: 'https://i.ebayimg.com/images/g/FD8AAOSwxKBdDAiP/s-l1600.jpg', color: "#006BB6"},{team: "Oklahoma City Thunder", source: 'https://i.ebayimg.com/images/g/8kUAAOSwXYpdDAiY/s-l1600.jpg', color: "#007AC1"},
//     {team: "Orlando Magic", source: 'https://i.ebayimg.com/images/g/WcUAAOSw495dDAie/s-l1600.jpg',color: "#0077C0"},{team: "Philadelphia 76ers", source: 'https://i.ebayimg.com/images/g/34cAAOSwXVpdDAih/s-l1600.jpg', color: "#006BB6"},
//     {team: "Phoenix Suns", source: 'https://i.ebayimg.com/images/g/XgcAAOSw-RpdDAih/s-l1600.jpg', color: "#1D1160"},{team: "Portland Trail Blazers", source: 'https://i.ebayimg.com/images/g/Xo4AAOSw8EhdDAig/s-l1600.jpg', color: "#E03A3E"},
//     {team: "Sacramento Kings", source: 'https://i.ebayimg.com/images/g/oMsAAOSwC61dDAik/s-l1600.jpg', color: "#5A2D81"},{team: "San Antonio Spurs", source: 'https://i.ebayimg.com/images/g/n7AAAOSwbERdDAij/s-l1600.jpg', color: "#C4CED4"},
//     {team: "Toronto Raptors", source: 'https://i.ebayimg.com/images/g/-wUAAOSwjW5dDAip/s-l1600.jpg',color: "#CE1141"},{team: "Utah Jazz", source: 'https://i.ebayimg.com/images/g/5IAAAOSwQWhdDAio/s-l1600.jpg', color :"#002B5C"},
//     {team: "Washington Wizards", source: 'https://i.ebayimg.com/images/g/AS4AAOSwQjxdDAiq/s-l1600.jpg',color: "#002B5C"}
// ]
//    teamLogo.map( name => {
//        if (name.team === team){
//           $('#logoArea').css('background',`url(${name.source}) center no-repeat,radial-gradient( circle,  white 45%, ${name.color} 100%)`);
//           $('#logoArea').css('background-size','contain');
//           $('#logoArea').css('height','60vh');      
//           $('#jumbotron').text(name.team);
//           $('.navbar').css('background-color',name.color);
//           $('.input-group-text').css('background-color',name.color);
//           $('.input-group-text').css('color',"white");
//           $('.profileArea').css("transform", "translate(0,22%)");
//           $('.profileArea').css("background", `linear-gradient(0deg,  white 45%, ${name.color} 100%)`);
          
          
//        }
//    });

        
// }


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
            console.log(myJSON.data[0]);

        }
        catch (err) {
            console.log("cannot find player: " + playerName);
        }
        var name = myJSON.data[0].first_name + "_" + myJSON.data[0].last_name;
        var teamName = myJSON.data[0].team.id 
        bridge(teamName);
        getImg(name);
        populateProfile(myJSON);
        var stats = {};
        let count = { count: 0 };
        for (var i = 0; i < seasons.length; i++) {
            // count.push("complete");
            getStats(seasons[i], playerId, stats, seasons, count);
        }
        $('.container h3').text(playerName);
    });

}
function bridge(teamName){
    $("#teamsList > [value=" + teamName  + "]").attr("selected", "true");
    let teamQuery = $('#teamsList option:selected').text();
    return logo(teamQuery);
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
        // console.log(myJSON);


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

        count.count++;

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
var slideIndex = 0;
carousel();

function carousel() {
    var i;
    var x = document.getElementsByClassName("mySlides");
    for (i = 0; i < x.length; i++) {
        x[i].style.display = "none";
    }
    slideIndex++;
    if (slideIndex > x.length) { slideIndex = 1 }
    x[slideIndex - 1].style.display = "block";
    setTimeout(carousel, 3000); // Change image every 5 seconds
}


