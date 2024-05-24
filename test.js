import axios from 'axios';


axios.get('http://localhost:5001/news/?team=Barça', {
  headers: {
    'Content-Type': 'application/json',
  }
})
  .then(response => {
    console.log('Response:', response);
  })
  .catch(error => {
    console.error('Error getting data:', error);
  });
