window.onload = function (){
const teamsList = $('#teamsList');
let team = false;

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
        const newSelect = $('<select>');
        newSelect.addClass('playerList');
        let players = data.api.players;
        players.map(player =>{
            const slot = $('<option>');
            slot.attr('idNum', player.playerID ).attr('teamId', player.teamId).text(`${player.lastName}, ${player.firstName}`);
            newSelect.append(slot);
        })
        $('#teamsList').append(newSelect)
        // console.log(data.api.players);   
    })
    }

    
getTeamProfile();
teamsList.on('change', () => {
    var dropDownItem = $(".dropDown").val()
    team= true;
   
    // getImg(dropDownItem, team);
    getTeamPlayers(dropDownItem);
    
   


})


// getPlayer("Lebron James");
}
// /w/api.php?action=query&format=json&prop=images&titles=Albert%20Einstein