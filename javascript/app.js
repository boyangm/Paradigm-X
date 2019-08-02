const teamLogo = [
    {team: "Chicago Bulls", source: 'https://teamwork-online-production.s3.amazonaws.com/uploads/e76d6979-d3ca-4c74-9a20-ee56afeffb4b.png',  color: "#CE1141"},{team: "Atlanta Hawks", source: 'https://teamwork-online-production.s3.amazonaws.com/uploads/5bf18a88-84fb-49a2-843d-098dd7ff5425.png', color: "#E03A3E"},
    {team: "Boston Celtics", source: 'https://secure.img1-fg.wfcdn.com/im/63371552/resize-h600%5Ecompr-r85/2901/29013525/NBA+Boston+Celtics+Roundel+27+in.+x+27+in.+Non-Slip+Indoor+Only+Mat.jpg', color: "#007A33"},{team: "Brooklyn Nets", source: 'https://i.ebayimg.com/images/g/E9gAAOSwDm1dDAgS/s-l1600.jpg', color: "#000000"},
    {team: "Charlotte Hornets", source: 'https://i.ebayimg.com/images/g/u48AAOSwNCtdDAgy/s-l1600.jpg', color: "#1D1160"},{team: "Cleveland Cavaliers", source: 'https://i.ebayimg.com/images/g/504AAOSwVCldDAhE/s-l1600.jpg',color: "#6F263D"},
    {team: "Dallas Mavericks", source: 'https://i.ebayimg.com/images/g/DkYAAOSwv7BdDAhI/s-l1600.jpg', color:"#00538C"},{team: "Denver Nuggets", source: 'https://secure.img2-fg.wfcdn.com/im/14311203/resize-h600%5Ecompr-r85/2901/29013566/NBA+Denver+Nuggets+Roundel+27+in.+x+27+in.+Non-Slip+Mat.jpg', color: "#0E2240"},
    {team: "Detroit Pistons", source: 'https://i.ebayimg.com/images/g/LPQAAOSw5kBbNSMk/s-l1600.jpg', color: "#C8102E"},{team: "Golden State Warriors", source: 'https://i.ebayimg.com/images/g/IvUAAOSwbopZVBCQ/s-l1600.jpg',color :"#1D428A"},
    {team: "Indiana Pacers", source: 'https://i.ebayimg.com/images/g/icsAAOSw6WVdDAhv/s-l1600.jpg',color: "#002D62"},{team: "LA Clippers", source: 'https://i.ebayimg.com/images/g/bP4AAOSw7ytdDAiD/s-l1600.jpg', color: "#C8102E"},
    {team: "Los Angeles Lakers", source: 'https://i.ebayimg.com/images/g/VQ4AAOSwE5BdDAiG/s-l1600.jpg', color: "#552583"},{team: "Memphis Grizzlies", source: 'https://i.ebayimg.com/images/g/8ZcAAOSw~c1dDAiL/s-l1600.jpg', color: "#5D76A9"},
    {team: "Miami Heat", source: 'https://i.ebayimg.com/images/g/4LwAAOSwPp5dDAiK/s-l1600.jpg', color: "#98002E"},{team: "Milwaukee Bucks", source: 'https://i.ebayimg.com/images/g/0cMAAOSwYBRbM~yy/s-l1600.jpg', color: "#00471B"},
    {team: "Minnesota Timberwolves", source: 'https://i.ebayimg.com/images/g/0cMAAOSwYBRbM~yy/s-l1600.jpg', color: "#0C2340"},
    {team: "Houston Rockets", source: 'https://i.ebayimg.com/images/g/dn8AAOSwPdddDAm-/s-l1600.jpg', color: "#CE1141"},{team: "New Orleans Pelicans", source: 'https://i.ebayimg.com/images/g/JvsAAOSwFsBdDAiH/s-l1600.jpg', color: "#0C2340"},
    {team: "New York Knicks", source: 'https://i.ebayimg.com/images/g/FD8AAOSwxKBdDAiP/s-l1600.jpg', color: "#006BB6"},{team: "Oklahoma City Thunder", source: 'https://i.ebayimg.com/images/g/8kUAAOSwXYpdDAiY/s-l1600.jpg', color: "#007AC1"},
    {team: "Orlando Magic", source: 'https://i.ebayimg.com/images/g/WcUAAOSw495dDAie/s-l1600.jpg',color: "#0077C0"},{team: "Philadelphia 76ers", source: 'https://i.ebayimg.com/images/g/34cAAOSwXVpdDAih/s-l1600.jpg', color: "#006BB6"},
    {team: "Phoenix Suns", source: 'https://i.ebayimg.com/images/g/XgcAAOSw-RpdDAih/s-l1600.jpg', color: "#1D1160"},{team: "Portland Trail Blazers", source: 'https://i.ebayimg.com/images/g/Xo4AAOSw8EhdDAig/s-l1600.jpg', color: "#E03A3E"},
    {team: "Sacramento Kings", source: 'https://i.ebayimg.com/images/g/oMsAAOSwC61dDAik/s-l1600.jpg', color: "#5A2D81"},{team: "San Antonio Spurs", source: 'https://i.ebayimg.com/images/g/n7AAAOSwbERdDAij/s-l1600.jpg', color: "#C4CED4"},
    {team: "Toronto Raptors", source: 'https://i.ebayimg.com/images/g/-wUAAOSwjW5dDAip/s-l1600.jpg',color: "#CE1141"},{team: "Utah Jazz", source: 'https://i.ebayimg.com/images/g/5IAAAOSwQWhdDAio/s-l1600.jpg', color :"#002B5C"},
    {team: "Washington Wizards", source: 'https://i.ebayimg.com/images/g/AS4AAOSwQjxdDAiq/s-l1600.jpg',color: "#002B5C"}
]
function smoothScroll(place) {
    $('html, body').animate({
        scrollTop: $(".jumbotron").offset().top
    }, 1000); 
    $('html, body').delay(250).animate({
        scrollTop: $(`${place}`).offset().top
    }, 1000); 
}
function getGif(search){
    $.ajax({
        method: 'GET',
        url: `https://api.giphy.com/v1/gifs/search?q=${search}&api_key=mquIIUiIFE2aPJyIIgWtpvnTxzj6ZKMv&limit=1&rating=PG`
        })
    .then( response =>{
        let data = response.data;
        console.log(data);
        giphy(data);
        
    })
    }
    function giphy(data){
        const gifArea = $('.gifArea');
        gifArea.empty();
        data.map(item => {
        let source= item.images.original.url;
    
        console.log(source);
        const newdiv = $('<div>');
        newdiv.addClass('gifDiv');
        const img = $('<img>'); 
        img.attr("src", source);
        newdiv.append(img);
        gifArea.prepend(newdiv);
        })
    
    }
    
function logo(team){
    
   teamLogo.map( name => {
       if (name.team === team){
          var logoArea = $('#logoArea');
          logoArea.css({
                'background' :`url(${name.source}) center no-repeat,radial-gradient( circle,  white 66%, ${name.color} 89%)`,
                'background-size' : 'contain',
                'height' : '90vh'
            });
   
          $('#jumbotron').text(name.team);
          $('.navbar').css('background-color',name.color);
          $('.input-group-text').css('background-color',name.color);
          $('.input-group-text').css('color',"white");
        //   $('.profileArea').css("transform", "translate(0,22%)");
          $('#results').css("background", `linear-gradient(0deg,  white 45%, ${name.color} 100%)`);
          getGif(name.team);
          
          
       }
   });

        
}

window.onload = function (){
    const teamsList = $('#teamsList');
    const playerList = $('#playerList');
    $('.jumbotron').addClass('inActivity');

    function getTeamProfile() {
        fetch(`https://free-nba.p.rapidapi.com/teams?page=0`, {
            headers: {
                'X-RapidAPI-Host': 'free-nba.p.rapidapi.com',
                'X-RapidAPI-Key': 'c6b4ed3e73msh1122d2e76cde6c7p164783jsn9dcad33173e1'
            }

        })
            .then(res => {
                return res.json();
            }).then(teams => {
                teams.data.map(team => {
                    const slot = $('<option>');
                    slot.attr('value', team.id).text(team.full_name);
                    teamsList.append(slot);
                    // console.log(team);
                })

                // console.log(data.api.players);   
            })
    }






    /**
     * 
     *gets the players from the team ID
     * @param {string} teamId
     */
    function getTeamPlayers(teamId) {
        fetch(`https://api-nba-v1.p.rapidapi.com/players/teamId/${teamId}`, {
            headers: {
                'X-RapidAPI-Host': 'api-nba-v1.p.rapidapi.com',
                'X-RapidAPI-Key': 'c6b4ed3e73msh1122d2e76cde6c7p164783jsn9dcad33173e1'
            }

        })
            .then(res => {
                return res.json();
            }).then(data => {
                try {


                    console.log(data.api.players);
                    let players = data.api.players;
                    players.map(player => {
                        const slot = $('<option>');
                        slot.attr('idNum', player.playerID).attr('teamId', player.teamId).text(`${player.firstName} ${player.lastName}`);
                        playerList.append(slot);
                        console.log(player);
                    })
                } catch (error) {
                    console.error(Error.message);
                }
                console.log(data.api.players);
            })
    }

    getTeamProfile();

    function teamUpdate(team){
        playerList.empty();
        $('.carousel').addClass('inActivity');
        $('.jumbotron').removeClass('inActivity');
        let teamValue = $("#teamsList option:selected").text();
        console.log(team);
        logo(teamValue);
    }

    teamsList.on('change', () => {
        let dropDownItem = $(teamsList).val();
        teamUpdate(dropDownItem);
      
        smoothScroll('.gifArea');
        getTeamPlayers(dropDownItem);
    })
    playerList.on('change', () => {
        $('.carousel').css("display","none");
        let dropDownItem = $(playerList).val()
        let playerName = $('#playerList option:selected').text();
        $('.container h3').text(playerName);
        let seasonArray = ["2014", "2015", "2016", "2017", "2018"];
        timeSeriesData(seasonArray, dropDownItem);
        smoothScroll('#results');
    })
    $(document).on('scroll', function () {

        var yOffset = window.pageYOffset;
        const navbar = $('.navbar');
        // console.log(yOffset);
        if (yOffset > 80) {
            navbar.addClass('activity');
        }
        else {
            navbar.removeClass('activity');

        }
    })
    var slideIndex = 0;
    carousel();

    function carousel() {
      var i;
      var x = document.getElementsByClassName("carousel-item");
      for (i = 0; i < x.length; i++) {
        x[i].style.display = "none";
      }
      slideIndex++;
      if (slideIndex > x.length) { slideIndex = 1 }
      x[slideIndex - 1].style.display = "block";
      setTimeout(carousel, 5000); // Change image every 5 seconds
    }
}