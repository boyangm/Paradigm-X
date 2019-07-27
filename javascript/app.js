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
        slot.attr('value', team.full_name).text(team.full_name);
        teamsList.append(slot);
        // console.log(team.full_name);
    })

   
})
}
// function getTeamPlayers(city){
//     fetch(`https://free-nba.p.rapidapi.com/teams?page=0`,{
//         headers: {
//             'X-RapidAPI-Host':'free-nba.p.rapidapi.com',
//             'X-RapidAPI-Key': 'c6b4ed3e73msh1122d2e76cde6c7p164783jsn9dcad33173e1'
//         }
    
//     })
//     .then(res => {
//         return res.json();
//     }).then(teams => {
//         console.log(teams.data[0]);
//         // ;
//         // })
    
       
//     })
//     }
// const submitBtn = $('#submitBtn');
// const player1 = $('#player1');

// submitBtn.on('click', () =>{
//     // event.preventDefault();
//     // let playerId = player1.val().trim();
//     // getPlayer(playerId);
//     // getPhoto(playerId)

// })
// function getPhoto(playerId){
//     // $.getJSON({
//     //     // https://commons.wikimedia.org/w/api.php?action=query&list=allimages&ailimit=3&format=json&origin=*
//     // url: `https://mediawiki.org/w/api.php?action=query&format=json&prop=images&titles=cher&callback=?`,
//     // method: 'GET'
//     // })
//     // .then(res => {console.log(res)});
    
// }
getTeamProfile();


// getPlayer("Lebron James");
}
// /w/api.php?action=query&format=json&prop=images&titles=Albert%20Einstein