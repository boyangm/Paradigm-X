window.onload = function (){
    const teamsList = $('#teamsList');
    const playerList = $('#playerList');
    function logo(team){
        const teamLogo = [{team: "Chicago Bulls", source: 'https://teamwork-online-production.s3.amazonaws.com/uploads/e76d6979-d3ca-4c74-9a20-ee56afeffb4b.png'},{team: "Atlanta Hawks", source: 'https://teamwork-online-production.s3.amazonaws.com/uploads/5bf18a88-84fb-49a2-843d-098dd7ff5425.png'},
        {team: "Boston Celtics", source: 'https://secure.img1-fg.wfcdn.com/im/63371552/resize-h600%5Ecompr-r85/2901/29013525/NBA+Boston+Celtics+Roundel+27+in.+x+27+in.+Non-Slip+Indoor+Only+Mat.jpg'},{team: "Brooklyn Nets", source: 'https://fanatics.frgimages.com/FFImage/thumb.aspx?i=/productimages/_3336000/altimages/ff_3336044-3af6a38d747356b103c7alt1_full.jpg&w=900'},
        {team: "Charlotte Hornets", source: 'https://i.ebayimg.com/images/g/u48AAOSwNCtdDAgy/s-l1600.jpg'},{team: "Cleveland Cavaliers", source: 'https://cdn.shopify.com/s/files/1/0993/8094/products/Cleveland_Cavaliers_3D_Fan_Foam_Logo_Sign_HD_Pro_Image_Sports_1024x1024.jpg?v=1504892006'},
        {team: "Dallas Mavericks", source: 'https://i.ebayimg.com/images/g/DkYAAOSwv7BdDAhI/s-l1600.jpg'},{team: "Denver Nuggets", source: 'https://secure.img2-fg.wfcdn.com/im/14311203/resize-h600%5Ecompr-r85/2901/29013566/NBA+Denver+Nuggets+Roundel+27+in.+x+27+in.+Non-Slip+Mat.jpg'},
        {team: "Detroit Pistons", source: 'https://i.ebayimg.com/images/g/LPQAAOSw5kBbNSMk/s-l1600.jpg'},{team: "Golden State Warriors", source: 'https://i.ebayimg.com/images/g/IvUAAOSwbopZVBCQ/s-l1600.jpg'},
        {team: "Indiana Pacers", source: 'https://i.ebayimg.com/images/g/icsAAOSw6WVdDAhv/s-l1600.jpg'},{team: "LA Clippers", source: 'https://i.ebayimg.com/images/g/bP4AAOSw7ytdDAiD/s-l1600.jpg'},
        {team: "Los Angeles Lakers", source: 'https://fanatics.frgimages.com/FFImage/thumb.aspx?i=/productimages/_3336000/altimages/ff_3336006-b56ca31f5ca82bc1204calt1_full.jpg&w=325'},{team: "Memphis Grizzlies", source: 'https://i.ebayimg.com/images/g/8ZcAAOSw~c1dDAiL/s-l1600.jpg'},
        {team: "Miami Heat", source: 'https://secure.img1-fg.wfcdn.com/im/40513284/resize-h600%5Ecompr-r85/2901/29013532/NBA+Miami+Heat+Roundel+27+in.+x+27+in.+Non-Slip+Indoor+Only+Mat.jpg'},{team: "Milwaukee Bucks", source: 'https://i.ebayimg.com/images/g/0cMAAOSwYBRbM~yy/s-l1600.jpg'},
        {team: "Minnesota Timberwolves", source: 'https://i.ebayimg.com/images/g/0cMAAOSwYBRbM~yy/s-l1600.jpg'},{team: "New Orleans Pelicans", source: 'https://www.fanatics.com/nba/new-orleans-pelicans/new-orleans-pelicans-fathead-giant-removable-decal/o-4625+t-58691829+p-81368139499+z-9-2049909163'},
        {team: "Houston Rockets", source: 'https://i.ebayimg.com/images/g/dn8AAOSwPdddDAm-/s-l1600.jpg'},{team: "New Orleans Pelicans", source: 'https://i.ebayimg.com/images/g/JvsAAOSwFsBdDAiH/s-l1600.jpg'},
        {team: "New York Knicks", source: 'https://i.ebayimg.com/images/g/FD8AAOSwxKBdDAiP/s-l1600.jpg'},{team: "Oklahoma City Thunder", source: 'https://i.ebayimg.com/images/g/8kUAAOSwXYpdDAiY/s-l1600.jpg'},
        {team: "Orlando Magic", source: 'https://i.ebayimg.com/images/g/WcUAAOSw495dDAie/s-l1600.jpg'},{team: "Philadelphia 76ers", source: 'https://i.ebayimg.com/images/g/34cAAOSwXVpdDAih/s-l1600.jpg'},
        {team: "Phoenix Suns", source: 'https://i.ebayimg.com/images/g/XgcAAOSw-RpdDAih/s-l1600.jpg'},{team: "Portland Trail Blazers", source: 'https://i.ebayimg.com/images/g/Xo4AAOSw8EhdDAig/s-l1600.jpg'},
        {team: "Sacramento Kings", source: 'https://i.ebayimg.com/images/g/oMsAAOSwC61dDAik/s-l1600.jpg'},{team: "San Antonio Spurs", source: 'https://i.ebayimg.com/images/g/n7AAAOSwbERdDAij/s-l1600.jpg'},
        {team: "Toronto Raptors", source: 'https://i.ebayimg.com/images/g/-wUAAOSwjW5dDAip/s-l1600.jpg'},{team: "Utah Jazz", source: 'https://i.ebayimg.com/images/g/5IAAAOSwQWhdDAio/s-l1600.jpg'},
        {team: "Washington Wizards", source: 'https://i.ebayimg.com/images/g/AS4AAOSwQjxdDAiq/s-l1600.jpg'}
    ]
       teamLogo.map( name => {
           if (name.team === team){
              $('#logoArea').css('background',`url(${name.source}) center no-repeat`);
              $('#logoArea').css('background-size','contain');
              $('#jumbotron').text(name.team);
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
            console.log(team);
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
        $('.container').append(`<h3>${playerName}</h3>`);
        let seasonArray = ["2014", "2015", "2016", "2017", "2018"];
        timeSeriesData(seasonArray, dropDownItem);
    })
    $(document).on('scroll',function(){

        var yOffset = window.pageYOffset;
        console.log(yOffset);
        if (yOffset >80){
            $('.navbar').addClass('activity');
        }
        else{
            $('.navbar').removeClass('activity');
        
        }
    })

}