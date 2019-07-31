window.onload = function (){
const teamsList = $('#teamsList');
const playerList = $('#playerList');
let team = false;
// function getImg(team) {

//     var query = `https://en.wikipedia.org/w/api.php?action=query&titles=${team}&format=json&prop=svg&callback=?`;

//     $.ajax({
//         type: "GET",
//         url: query,
//         contentType: "application/json; charset=utf-8",
//         dataType: "json",
//         success: function (response) {

//             var page = response.query.pages;
//             console.log(page);
//             var pkey = Object.keys(page);
//             console.log(pkey);
//             // var src = page[pkey[0]].thumbnail.source;
//             // $("#player-img").attr("src", src);

//         },
//         error: function (errorMessage) {
//         }
//     });

// }

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
        var dropDownItem = $(teamsList).val()
        getTeamPlayers(dropDownItem);
    })
    playerList.on('change', () => {
        var dropDownItem = $(playerList).val()
        var seasonArray = ["2014", "2015", "2016", "2017", "2018"];
        timeSeriesData(seasonArray, dropDownItem);
    })


}