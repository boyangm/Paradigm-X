window.onload = function (){
    const teamsList = $('#teamsList');
    const playerList = $('#playerList');
    function goToResults(){
        $('html, body').animate({
            scrollTop: $("#results").offset().top
        }, 1000);
    }
    function logo(team){
        const teamLogo = [{team: "Chicago Bulls", source: 'https://teamwork-online-production.s3.amazonaws.com/uploads/e76d6979-d3ca-4c74-9a20-ee56afeffb4b.png', color: "#CE1141"},{team: "Atlanta Hawks", source: 'https://teamwork-online-production.s3.amazonaws.com/uploads/5bf18a88-84fb-49a2-843d-098dd7ff5425.png', color: "#E03A3E"},
        {team: "Boston Celtics", source: 'https://secure.img1-fg.wfcdn.com/im/63371552/resize-h600%5Ecompr-r85/2901/29013525/NBA+Boston+Celtics+Roundel+27+in.+x+27+in.+Non-Slip+Indoor+Only+Mat.jpg', color: "#007A33"},{team: "Brooklyn Nets", source: 'https://i.ebayimg.com/images/g/E9gAAOSwDm1dDAgS/s-l1600.jpg', color: "#000000"},
        {team: "Charlotte Hornets", source: 'https://i.ebayimg.com/images/g/u48AAOSwNCtdDAgy/s-l1600.jpg', color: "#1D1160"},{team: "Cleveland Cavaliers", source: 'https://cdn.shopify.com/s/files/1/0993/8094/products/Cleveland_Cavaliers_3D_Fan_Foam_Logo_Sign_HD_Pro_Image_Sports_1024x1024.jpg?v=1504892006',color: "#6F263D"},
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
       teamLogo.map( name => {
           if (name.team === team){
              $('#logoArea').css('background',`url(${name.source}) center no-repeat`);
              $('#logoArea').css('background-size','contain');
              $('#logoArea').css('height','60vh');      
              $('#jumbotron').text(name.team);
              $('.navbar').css('background-color',name.color);
              $('.input-group-text').css('background-color',name.color);
              $('.input-group-text').css('color',"white");
              $('.profileArea').css("transform", "translate(0,22%)");
           }
       });

            
    }

    function getTeamProfile(){
        fetch(`https://free-nba.p.rapidapi.com/teams?page=0`,{
            headers: {
                'X-RapidAPI-Host':'free-nba.p.rapidapi.com',
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
        })

        // console.log(data.api.players);   
    })
    }

    


        

    /**
     * 
     *gets the players from the team ID
     * @param {string} teamId
     */
    function getTeamPlayers(teamId){
        fetch(`https://api-nba-v1.p.rapidapi.com/players/teamId/${teamId}`,{
            headers: {
                'X-RapidAPI-Host':'api-nba-v1.p.rapidapi.com',
                'X-RapidAPI-Key': 'c6b4ed3e73msh1122d2e76cde6c7p164783jsn9dcad33173e1'
            }
        
        })
        .then(res => {
            return res.json();
        }).then(data=> {
            try{
                
         
            console.log(data.api.players);
            let players = data.api.players;
            players.map(player =>{
                const slot = $('<option>');
                slot.attr('idNum', player.playerID ).attr('teamId', player.teamId).text(`${player.firstName} ${player.lastName}`);
                playerList.append(slot);
                console.log(player);
            })
            }catch (error){
                console.error(Error.message);
            }
            console.log(data.api.players);   
        })
        }
        
    getTeamProfile();
    teamsList.on('change', () => {
        playerList.empty();
        let dropDownItem = $(teamsList).val()
        let team = $("#teamsList option:selected").text();
        console.log(team);
        logo(team);
        getTeamPlayers(dropDownItem);
    })
    playerList.on('change', () => {
        
        let dropDownItem = $(playerList).val()
        let playerName = $('#playerList option:selected').text();
        $('.container h3').text(playerName);
        let seasonArray = ["2014", "2015", "2016", "2017", "2018"];
        timeSeriesData(seasonArray, dropDownItem);
        goToResults();
    })
    $(document).on('scroll',function(){

        var yOffset = window.pageYOffset;
        // console.log(yOffset);
        if (yOffset >80){
            $('.navbar').addClass('activity');
        }
        else{
            $('.navbar').removeClass('activity');
        
        }
    })

}
