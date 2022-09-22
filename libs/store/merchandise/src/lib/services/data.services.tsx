import { Album } from '../albums/albums.interfaces';

export class AlbumsService {
  private _url: string;
  private _albums: Album[];

  private static instance: AlbumsService;

  private constructor() {
    this._url = 'https://jsonplaceholder.typicode.com/albums';
    this._albums = [];
  }

  static getInstance(): AlbumsService {
    if (!AlbumsService.instance) {
      AlbumsService.instance = new AlbumsService();
    }
    return AlbumsService.instance;
  }

  set albums(albums: Album[]) {
    this._albums = albums;
  }

  get albums(): Album[] {
    return this._albums;
  }

  getAll(): Promise<Album[]> {
    return this.dataHandler<Album[]>(this._url, undefined, true);
  }

  get(id: string): Promise<Album> {
    return this.dataHandler<Album>(`${this._url}/${id}`);
  }

  add(album: Album): Promise<Album> {
    return this.dataHandler<Album>(this._url, album);
  }

  private dataHandler<T>(endpoint: string, data?: T, keep = false): Promise<T> {
    const config = {
      method: data ? 'POST' : 'GET',
      body: data ? JSON.stringify(data) : undefined,
      headers: {
        'Content-Type': 'application/json',
      },
    };

    return window.fetch(`${endpoint}`, config).then(async (response) => {
      const responseData = await response.json();
      if (response.ok) {
        if (keep) {
          this._albums = responseData;
        }
        return responseData;
      } else {
        return Promise.reject(responseData);
      }
    });
  }
}
