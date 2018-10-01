var rapid = new RapidAPI("fuckthisshit_5b92e419e4b09cbc25b02756", "96b31d0c-9e9a-47e0-9823-03579240a65a");
var apiKey = 'RGAPI-49446c33-5688-43df-bb97-c93a9f552846';

function getBySummonerName()
{
    var summonerData;

    rapid.call('LeagueOfLegends', 'getBySummonerName', { 
        'summonerName': 'nosupport',
        'apiKey': apiKey,
        'region': 'eun1'
    
    }).on('success', function (payload) {
       /*YOUR CODE GOES HERE*/ 
       
       /*var summonerData = {
        id: payload[0]['id'],
        accountId: payload[0]['accountId'],
        name: payload[0]['name'],
        profileIconId: payload[0]['profileIconId'],
        revisionDate: payload[0]['revisionDate'],
        summonerLevel: payload[0]['summonerLevel']
        };*/
       
       summonerData = payload;
    
    }).on('error', function (payload) {
       /*YOUR CODE GOES HERE*/ 
       console.log('ERROR');
    });

    return summonerData;
}