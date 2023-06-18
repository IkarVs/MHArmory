import axios from 'axios';
async function getSummonersBaseInformation(){
  let uri =
    'https://euw1.api.riotgames.com/lol/summoner/v4/summoners/by-name/Livid%20wolf?api_key=RGAPI-fa708495-a268-4b7e-bc40-ba94bf7da88e';

  const res = await axios.get(uri);
  return await res.json();
}
