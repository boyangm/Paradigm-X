window.onload = function (){
const teamsList = $('#teamsList');
/**
 *gets the player stats
 *
 * @param {string} id
 */
// function getStats(id){
//     fetch(`https://free-nba.p.rapidapi.com/stats?page=0&per_page=25&player_ids${id} `,{
//         headers: {
//             'X-RapidAPI-Host':' free-nba.p.rapidapi.com',
//             'X-RapidAPI-Key': 'c6b4ed3e73msh1122d2e76cde6c7p164783jsn9dcad33173e1'
//         }
    
//     })
//     .then(res => {
//         return res.json();
//     }).then(playerStats => {
//         console.log(playerStats);
//     })
//     }
/**
 * gets the player id and team info.
 *
 * @param {string} playerName
 */
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
        console.log(data.api.players);
        // ;
        // })
    
       
    })
    }

    
getTeamProfile();
teamsList.on('change', () => {
    var dropDownItem = $(".dropDown").val()
    getTeamPlayers(dropDownItem);
   


})


// getPlayer("Lebron James");
}
// /w/api.php?action=query&format=json&prop=images&titles=Albert%20Einstein