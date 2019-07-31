window.onload = function (){
    const teamsList = $('#teamsList');
    const playerList = $('#playerList');
    function logo(team){
        const teamLogo = [{team: "Chicago Bulls", source: 'https://teamwork-online-production.s3.amazonaws.com/uploads/e76d6979-d3ca-4c74-9a20-ee56afeffb4b.png'},{team: "Atlanta Hawks", source: 'https://teamwork-online-production.s3.amazonaws.com/uploads/5bf18a88-84fb-49a2-843d-098dd7ff5425.png'},
        {team: "Boston Celtics", source: 'https://secure.img1-fg.wfcdn.com/im/63371552/resize-h600%5Ecompr-r85/2901/29013525/NBA+Boston+Celtics+Roundel+27+in.+x+27+in.+Non-Slip+Indoor+Only+Mat.jpg'},{team: "Brooklyn Nets", source: 'https://fanatics.frgimages.com/FFImage/thumb.aspx?i=/productimages/_3336000/altimages/ff_3336044-3af6a38d747356b103c7alt1_full.jpg&w=900'},
        {team: "Charlotte Hornets", source: 'https://store.nba.com/charlotte-hornets/charlotte-hornets-fathead-logo-giant-removable-decal/t-36817344+p-1447701665617+z-9-3782767136'},{team: "Cleveland Cavaliers", source: 'https://cdn.shopify.com/s/files/1/0993/8094/products/Cleveland_Cavaliers_3D_Fan_Foam_Logo_Sign_HD_Pro_Image_Sports_1024x1024.jpg?v=1504892006'},
        {team: "Dallas Mavericks", source: 'https://www.fanatics.com/nba/dallas-mavericks/dallas-mavericks-wincraft-5-x-25-auto-emblem-decal/o-4625+t-14253992+p-79500489661+z-9-570695618'},{team: "Denver Nuggets", source: 'https://secure.img2-fg.wfcdn.com/im/14311203/resize-h600%5Ecompr-r85/2901/29013566/NBA+Denver+Nuggets+Roundel+27+in.+x+27+in.+Non-Slip+Mat.jpg'},
        {team: "Detroit Pistons", source: 'https://i.ebayimg.com/images/g/LPQAAOSw5kBbNSMk/s-l1600.jpg'},{team: "Golden State Warriors", source: 'https://i.ebayimg.com/images/g/IvUAAOSwbopZVBCQ/s-l1600.jpg'},
        {team: "Indiana Pacers", source: 'https://www.fanatics.com/nba/indiana-pacers/indiana-pacers-fathead-giant-removable-decal/o-8014+t-69690632+p-2581144122+z-8-3414136899'},{team: "LA Clippers", source: 'https://www.fanatics.com/nba/la-clippers/la-clippers-fathead-logo-giant-removable-decal/o-3592+t-14362978+p-25033650249+z-9-302178741'},
        {team: "Los Angeles Lakers", source: 'https://fanatics.frgimages.com/FFImage/thumb.aspx?i=/productimages/_3336000/altimages/ff_3336006-b56ca31f5ca82bc1204calt1_full.jpg&w=325'},{team: "Memphis Grizzlies", source: 'https://www.fanatics.com/nba/memphis-grizzlies/memphis-grizzlies-fathead-giant-removable-decal/o-3570+t-69142970+p-03697083252+z-9-2277334481'},
    
    
    ]
       teamLogo.map( name => {
           if (name.team === team){
              $('#logoArea').css('background',`url(${name.source}) center no-repeat`);
              $('#logoArea').css('background-size','contain');
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
        
        var dropDownItem = $(playerList).val()
        var seasonArray = ["2014", "2015", "2016", "2017", "2018"];
        timeSeriesData(seasonArray, dropDownItem);
    })


}