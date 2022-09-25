import { BehaviorSubject } from 'rxjs';
import { Album } from '../albums/albums.interfaces';
import { AlbumsService } from '../services/data.services';

export class FacadeService {
  selected$: BehaviorSubject<string> = new BehaviorSubject('-');
  private _service = AlbumsService.getInstance();

  getAlbums(): Album[] {
    return this._service.albums;
  }
}
