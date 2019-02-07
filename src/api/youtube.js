import axios from 'axios';

const KEY ='AIzaSyA7LRr01e-JH6tulIdqGc06usssWPy34TM';

export default axios.create({
  baseURL: 'https://www.googleapis.com/youtube/v3',
  params: {
    part: 'snippet',
    maxResults: 20,
    key: KEY
  }
});