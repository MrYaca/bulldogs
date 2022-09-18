import { Album } from './albums.interfaces';

export function loadAlbums(): Promise<Album[]> {
  return window
    .fetch(`https://jsonplaceholder.typicode.com/albums`)
    .then(async (response) => {
      const responseData = await response.json();
      if (response.ok) {
        return responseData;
      } else {
        return Promise.reject(responseData);
      }
    });
}
