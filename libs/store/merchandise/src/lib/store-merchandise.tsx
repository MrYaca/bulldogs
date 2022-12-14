import { Avatar, Button, Chip, Divider } from '@mui/material';
import { ChangeEvent, useEffect, useState } from 'react';
import { Album } from './albums/albums.interfaces';
import { AlbumsService } from './services/data.services';
import { getProductName } from './product/product';
import styles from './store-merchandise.module.scss';
import Product from './product/product';
import { interval, Subscription } from 'rxjs';

/* eslint-disable-next-line */
export interface StoreMerchandiseProps {
  title: string;
  avatar: string;
  name: string;
  active: boolean;
}

function notify() {
  console.log('Hola');
}

function handleChangeName(name: ChangeEvent<HTMLInputElement>) {
  console.log(name.target);
}

export function getProductPrice(): string {
  return `El precio de ${getProductName()} es $123 usd`;
}

export function openLink(url: string) {
  window.open(url, '_blank');
}

function printAlbums(albums: Album[]) {
  console.log(albums);
  const result =
    albums && albums.length > 0 ? (
      <ul data-testid="albums">
        {albums.map((album) => {
          return (
            <li key={album.id}>
              <Product name={album.title} />
            </li>
          );
        })}
      </ul>
    ) : (
      <div data-testid="no-data">No hay registros disponibles</div>
    );
  return result;
}

function logout() {
  subscription.unsubscribe();
}

const observable$ = interval(2000);
let subscription: Subscription;

export function StoreMerchandise(props: StoreMerchandiseProps) {
  const [albums, setAlbums] = useState<Album[]>([]);
  const [session, setSession] = useState<number>();
  const [selected, setSelected] = useState<string>();

  const albumsService = AlbumsService.getInstance();

  useEffect(() => {
    subscription = observable$.subscribe((activeTime) =>
      setSession(activeTime)
    );

    albumsService.selected$.subscribe((value) => {
      setSelected(value);
    });

    const getAlbums = async () => {
      const albums = await albumsService.getAll();
      const album = {
        title: 'Torneo verano 22',
        userId: 123,
        id: 1,
      };
      console.log('**', await albumsService.add(album));
      setAlbums(albums);
    };

    getAlbums();
    return () => {
      // this now gets called when the component unmounts
    };
  }, []);

  return (
    <div className={styles['container']}>
      <h1>Welcome to StoreMerchandise!</h1>
      <Chip
        avatar={<Avatar alt={props.name} src={props.avatar} />}
        label={props.name}
      />
      <div id="user-form">
        <label htmlFor="user-name">Nombre de Usuario</label>
        <input
          id="user-name"
          type="text"
          value={props.name}
          onChange={handleChangeName}
        />
      </div>
      <Divider textAlign="left">ACTIONS</Divider>
      <Button variant="contained" disabled={!props.active} onClick={notify}>
        Save
      </Button>
      <Divider textAlign="left">TICKETS</Divider>
      <p>Tiempo activo: {session}</p>
      <Button variant="contained" onClick={logout}>
        Salir
      </Button>
      <p>
        Producto seleccionados: <strong>{selected}</strong>
      </p>
      {getProductPrice()}
      <Divider textAlign="left">PHOTOS</Divider>
      {printAlbums(albumsService.albums)}
    </div>
  );
}

export default StoreMerchandise;
