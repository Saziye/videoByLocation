import axios from 'axios';
import {GOOGLE_API_KEY} from '../utils';

export const fetchVideosService = payload => {
  var config = {
    method: 'get',
    url: `https://youtube.googleapis.com/youtube/v3/search?location=${
      payload.payload.coords.latitude + ',' + payload.payload.coords.longitude
    }&locationRadius=10km&maxResults=50${
      payload.payload.nextPageToken
        ? '&nextPageToken=' + payload.payload.nextPageToken
        : ''
    }&type=video&key=${GOOGLE_API_KEY}&part=snippet`,
    headers: {
      Accept: 'application/json',
      Authorization: `client:auth2 ${GOOGLE_API_KEY}`,
    },
  };

  return new Promise((resolve, reject) => {
    axios(config)
      .then(response => {
        resolve(response.data);
      })
      .catch(error => {
        reject(error);
        console.log({error});
      });
  });
};
