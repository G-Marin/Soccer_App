import axios from 'axios';

try {
    const response = await axios.get('https://v3.football.api-sports.io/standings', {
        params: {
            season: "2023",
            league: "140",
        },
        headers: {
            'x-rapidapi-host': 'v3.football.api-sports.io',
            'x-rapidapi-key': "6d1c1eae83a98e627d2fd7b059c9ef03"
        }
    });
    
    let standings = response.data.response;

    console.log(standings)

    console.log(standings[0].league.standings)




} catch (err) {
    console.log(err);
}