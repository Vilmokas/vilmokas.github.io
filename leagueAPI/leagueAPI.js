/*add this to your html -> <script src="https://storage.googleapis.com/code-snippets/rapidapi.min.js"></script> */
var rapid = new RapidAPI("fuckthisshit_5b92e419e4b09cbc25b02756", "96b31d0c-9e9a-47e0-9823-03579240a65a");
var apiKey = 'RGAPI-a0d18dec-541a-473c-9240-10b24f16c760';
var version = '8.17.1'; //API version
var region = 'eun1';

// Get newsest API version
var request = new XMLHttpRequest();
request.open('GET', 'https://ddragon.leagueoflegends.com/api/versions.json', true);
request.onload = function () {
    var data = JSON.parse(this.response);
    console.log('API version: ' + data[0]);
    version = data[0];
    }
request.send();
//--------------------------

function searchSummoner()
{
    startLoader();
    event.preventDefault()
    console.clear();
    var sumName = document.getElementById('summonersNameInput').value;

    rapid.call('LeagueOfLegends', 'getBySummonerName', { 
        'summonerName': sumName,
        'apiKey': apiKey,
        'region': region
    
    }).on('success', function (payload) {

       /*YOUR CODE GOES HERE*/ 
       document.getElementById('summonerName').innerHTML = payload[0]['name'];
       document.getElementById('summonerLevel').innerHTML = payload[0]['summonerLevel'];
       document.getElementById('summonerIcon').src = imagePathURL(version, payload[0]['profileIconId'])
       console.log(payload);
    
       //summoner info
        rapid.call('LeagueOfLegends', 'getAllLeaguePositionsForSummoner', { 
            'apiKey': apiKey,
            'summonerId': payload[0]['id'],
            'region': region
    
        }).on('success', function (payload2) {
            /*YOUR CODE GOES HERE*/ 
            document.getElementById('summonerLP').innerHTML = payload2[0][0]['tier'] + ' ' + payload2[0][0]['rank'] + ' ' + payload2[0][0]['leaguePoints'] + ' LP';
            document.getElementById("summonerBorder").style.backgroundImage = "url('" + borderImg(payload2[0][0]['tier']) + "')";
            document.getElementById("summonerWins").innerHTML = payload2[0][0]['wins'] + 'W | ' + payload2[0][0]['losses'] + 'L (' + winRate(payload2[0][0]['wins'], payload2[0][0]['losses']) + '%)';
            //console.log(payload2);
            
        }).on('error', function (payload2) {
            /*YOUR CODE GOES HERE*/ 
        });
        //----------------
        //match history
        rapid.call('LeagueOfLegends', 'getMatchlist', { 
            'apiKey': apiKey,
            'accountId': payload[0]['accountId'],
            'region': region
        
        }).on('success', function (payload3) {
             /*YOUR CODE GOES HERE*/ 
             //console.log(payload3);

             //clear match history
             var myNode = document.getElementById("matchHistory");
             while (myNode.firstChild) {
                 myNode.removeChild(myNode.firstChild);
             }

             //fill match history
             var toAdd = document.createDocumentFragment();
             for(var i=0; i < 10; i++){
                var newDiv = document.createElement('div');
                newDiv.id = 'match'+i;
                newDiv.className = 'matchPlayed text';
                //newDiv.innerHTML = i + ': ' + payload3[0]['matches'][i]['champion'] + '  ' + payload3[0]['matches'][i]['lane'] + ' ' + payload3[0]['matches'][i]['gameId'] + ' played: ' + whenPlayed(payload3[0]['matches'][i]['timestamp']);
                getChampName(newDiv, i, payload3[0]['matches'][i]['champion'], payload3[0]['matches'][i]['lane'], payload3[0]['matches'][i]['gameId'], payload3[0]['matches'][i]['timestamp'], payload3[0]['matches'][i]['queue']);
                //console.log('test' + i);
                //get info about match like (kills, win or not, items, etc.)
                rapid.call('LeagueOfLegends', 'getMatch', { 
                    'region': region,
                    'matchId': payload3[0]['matches'][i]['gameId'],
                    'apiKey': apiKey
                
                }).on('success', function (payload4) {
                    //console.log(payload4);
                    for (var j = 0; j < 10; j++){
                        //console.log(payload4[0].participantIdentities[i].participantId + ' ' + payload4[0].participantIdentities[i].player.accountId);
                        if (payload4[0].participantIdentities[j].player.accountId == payload[0]['accountId']){
                            //console.log('parId: ' + payload4[0].participantIdentities[i].participantId);
                            //console.log(payload4[0].participants[payload4[0].participantIdentities[j].participantId - 1].stats);
                            document.getElementById(payload4[0].gameId).innerHTML += "<img src='http://ddragon.leagueoflegends.com/cdn/5.5.1/img/ui/score.png'><div class='kda'>" + payload4[0].participants[payload4[0].participantIdentities[j].participantId - 1].stats.kills + '/' + payload4[0].participants[payload4[0].participantIdentities[j].participantId - 1].stats.deaths + '/' + payload4[0].participants[payload4[0].participantIdentities[j].participantId - 1].stats.assists + "<br><span class='win'>" + didWin(payload4[0].participants[payload4[0].participantIdentities[j].participantId - 1].stats.win) + "</span></div>";
                            document.getElementById(payload4[0].gameId + 'champLevel').innerHTML = payload4[0].participants[payload4[0].participantIdentities[j].participantId - 1].stats.champLevel;
                            document.getElementById(payload4[0].gameId + 'M').innerHTML = "<img src='http://ddragon.leagueoflegends.com/cdn/5.5.1/img/ui/minion.png'><div class='scoresT'>" + payload4[0].participants[payload4[0].participantIdentities[j].participantId - 1].stats.totalMinionsKilled + "</div>";
                            document.getElementById(payload4[0].gameId + 'T').innerHTML = "<img src='http://ddragon.leagueoflegends.com/cdn/5.5.1/img/ui/minion.png'><div class='scoresT'>" + payload4[0].participants[payload4[0].participantIdentities[j].participantId - 1].stats.turretKills + "</div>";
                            document.getElementById(payload4[0].gameId + 'V').innerHTML = "<img src='http://ddragon.leagueoflegends.com/cdn/5.5.1/img/ui/minion.png'><div class='scoresT'>" + payload4[0].participants[payload4[0].participantIdentities[j].participantId - 1].stats.visionScore + "</div>";
                            
                            // ---REIKIA PADARYT LOOP, bet nzn kaip
                            if (payload4[0].participants[payload4[0].participantIdentities[j].participantId - 1].stats.item0 != 0) document.getElementById(payload4[0].gameId + 'Items').innerHTML += "<img src='http://ddragon.leagueoflegends.com/cdn/" + version + "/img/item/" + payload4[0].participants[payload4[0].participantIdentities[j].participantId - 1].stats.item0 + ".png'>"; else document.getElementById(payload4[0].gameId + 'Items').innerHTML += "<div class='noItem'></div>";
                            if (payload4[0].participants[payload4[0].participantIdentities[j].participantId - 1].stats.item1 != 0) document.getElementById(payload4[0].gameId + 'Items').innerHTML += "<img src='http://ddragon.leagueoflegends.com/cdn/" + version + "/img/item/" + payload4[0].participants[payload4[0].participantIdentities[j].participantId - 1].stats.item1 + ".png'>"; else document.getElementById(payload4[0].gameId + 'Items').innerHTML += "<div class='noItem'></div>";
                            if (payload4[0].participants[payload4[0].participantIdentities[j].participantId - 1].stats.item2 != 0) document.getElementById(payload4[0].gameId + 'Items').innerHTML += "<img src='http://ddragon.leagueoflegends.com/cdn/" + version + "/img/item/" + payload4[0].participants[payload4[0].participantIdentities[j].participantId - 1].stats.item2 + ".png'>"; else document.getElementById(payload4[0].gameId + 'Items').innerHTML += "<div class='noItem'></div>";
                            if (payload4[0].participants[payload4[0].participantIdentities[j].participantId - 1].stats.item3 != 0) document.getElementById(payload4[0].gameId + 'Items').innerHTML += "<img src='http://ddragon.leagueoflegends.com/cdn/" + version + "/img/item/" + payload4[0].participants[payload4[0].participantIdentities[j].participantId - 1].stats.item3 + ".png'>"; else document.getElementById(payload4[0].gameId + 'Items').innerHTML += "<div class='noItem'></div>";
                            if (payload4[0].participants[payload4[0].participantIdentities[j].participantId - 1].stats.item4 != 0) document.getElementById(payload4[0].gameId + 'Items').innerHTML += "<img src='http://ddragon.leagueoflegends.com/cdn/" + version + "/img/item/" + payload4[0].participants[payload4[0].participantIdentities[j].participantId - 1].stats.item4 + ".png'>"; else document.getElementById(payload4[0].gameId + 'Items').innerHTML += "<div class='noItem'></div>";
                            if (payload4[0].participants[payload4[0].participantIdentities[j].participantId - 1].stats.item5 != 0) document.getElementById(payload4[0].gameId + 'Items').innerHTML += "<img src='http://ddragon.leagueoflegends.com/cdn/" + version + "/img/item/" + payload4[0].participants[payload4[0].participantIdentities[j].participantId - 1].stats.item5 + ".png'>"; else document.getElementById(payload4[0].gameId + 'Items').innerHTML += "<div class='noItem'></div>";
                            if (payload4[0].participants[payload4[0].participantIdentities[j].participantId - 1].stats.item6 != 0) document.getElementById(payload4[0].gameId + 'Items').innerHTML += "<img src='http://ddragon.leagueoflegends.com/cdn/" + version + "/img/item/" + payload4[0].participants[payload4[0].participantIdentities[j].participantId - 1].stats.item6 + ".png'>"; else document.getElementById(payload4[0].gameId + 'Items').innerHTML += "<div class='noItem'></div>";
                            //--------------------------------------
                        }
                    }
                    //console.log(payload4[0].participantIdentities);
                    showPage();        //remove loading - show page
                }).on('error', function (payload4) {
                    /*YOUR CODE GOES HERE*/ 
                });
                //-----------------------------------------------------------
                toAdd.appendChild(newDiv);
             }
             document.getElementById('matchHistory').appendChild(toAdd);
        }).on('error', function (payload3) {
             /*YOUR CODE GOES HERE*/ 
        });
        //----------------

    }).on('error', function (payload) {
       /*YOUR CODE GOES HERE*/ 
       console.log('ERROR');
    });
}

function imagePathURL(version, iconID)
{
    return 'http://ddragon.leagueoflegends.com/cdn/' + version + '/img/profileicon/' + iconID + '.png';
}

function borderImg(rank)
{
    return 'http://opgg-static.akamaized.net/images/borders2/' + rank.toLowerCase() + '.png';
}

function winRate(wins, losses){
    return (wins / (wins + losses) * 100).toFixed(2);
}

function startLoader()
{
    document.getElementById("loader").style.display = "block";
    //document.getElementById("page").style.display = "none";
    document.getElementById("page").style.opacity = '0.3';
}

function showPage() {
    document.getElementById("loader").style.display = "none";
    //document.getElementById("page").style.display = "block";
    document.getElementById("page").style.opacity = '1';
  }

function whenPlayed(timestamp)
{
    var dateNow = new Date();
    var t = (dateNow - timestamp) / 1000;

    if (t < 60) return t.toFixed() + ' s ago';
    else if (t < 3600) return (t/60).toFixed() + ' min ago';
    else if (t < 86400) return (t/3600).toFixed(0) + ' h ago';
    else return (t/86400).toFixed(0) + ' days ago';
}

//creates div, nes nx uzpiso rasyt, taip tinka, sueis
function getChampName(div, i, championId, lane, gameId, timestamp, queueId)
{
    var request = new XMLHttpRequest();
    request.open('GET', 'http://ddragon.leagueoflegends.com/cdn/' + version + '/data/en_US/champion.json', true);
    request.onload = function () {
        var data = JSON.parse(this.response);
        for (var champ in data.data){
            if (data.data[champ]['key'] == championId){
                //console.log(champ);
                div.innerHTML = "<img src='http://ddragon.leagueoflegends.com/cdn/" + version + "/img/champion/" + champ + ".png'><div class='championLevel' id='" + gameId + "champLevel'>-</div>"; //+ '  ' + lane + ' ' + gameId + ' played: ' + whenPlayed(timestamp);
            
                var newDiv = document.createElement('div');
                newDiv.className = 'gameInfo';
                newDiv.innerHTML = "<b>" + gameMode(queueId) + "</b><br>" + whenPlayed(timestamp);
                div.appendChild(newDiv);

                var newDiv = document.createElement('div');
                newDiv.className = 'gameInfo';
                newDiv.id = gameId;
                div.appendChild(newDiv);

                var newDiv = document.createElement('div');
                newDiv.className = 'scores';
                newDiv.id = gameId + 'M';
                div.appendChild(newDiv);

                var newDiv = document.createElement('div');
                newDiv.className = 'scores';
                newDiv.id = gameId + 'T';
                div.appendChild(newDiv);

                var newDiv = document.createElement('div');
                newDiv.className = 'scores';
                newDiv.id = gameId + 'V';
                div.appendChild(newDiv);

                var newDiv = document.createElement('div');
                newDiv.className = 'items';
                newDiv.id = gameId + 'Items';
                div.appendChild(newDiv);
            }
        }
    }
    request.send();
}
//-----------------------------------------------------

function gameMode(queueId)
{
    if (queueId == 420) return '5v5 Ranked Solo';
    else if (queueId == 430) return '5v5 Blind Pick';
    else if (queueId == 440) return '5v5 Ranked Flex';
    else if (queueId == 1200) return 'Nexus Blitz';
    else return 'Other mode';
}

function didWin(win)
{
    if (win) return '<font color="green">WIN</font>';
    else return '<font color="red">LOSS</font>';
}