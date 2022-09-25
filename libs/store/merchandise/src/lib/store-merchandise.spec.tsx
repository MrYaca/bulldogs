import '@testing-library/jest-dom';
import { act, render, screen, waitFor } from '@testing-library/react';
import StoreMerchandise, {
  getProductPrice,
  openLink,
} from './store-merchandise';
import * as product from './product/product';
import { AlbumsService } from './services/data.services';
import { albumsMocks } from './albums/albums.mocks';

import { rest } from 'msw';
import { setupServer } from 'msw/node';
import 'whatwg-fetch';

import spyOn = jest.spyOn;

const server = setupServer(
  rest.get(`https://jsonplaceholder.typicode.com/albums`, (req, res, ctx) => {
    // return res(ctx.json(albumsMocks));
    return res(
      ctx.json([
        {
          userId: 123,
          id: 321,
          title: 'Álbum campeones 2022',
        },
      ])
    );
  })
);

describe('StoreMerchandise', () => {
  beforeAll(() => server.listen({ onUnhandledRequest: 'error' }));
  afterEach(() => {
    jest.clearAllMocks(); // reset all but no implementation
    jest.resetAllMocks(); // reset all and the implementation
  });

  it('should render successfully', () => {
    const { baseElement } = render(
      <StoreMerchandise title={''} avatar={''} name={''} active={false} />
    );
    expect(baseElement).toBeTruthy();
  });

  it('should get the input', () => {
    const { debug } = render(
      <StoreMerchandise
        title={''}
        avatar={''}
        name={'@yacaFx'}
        active={false}
      />,
      {}
    );

    // const input = screen.getByLabelText('Nombre de Usuario') as HTMLInputElement;

    // debug();
    const input = screen.getByDisplayValue('@yacaFx') as HTMLInputElement;
    // debug(input);
    screen.debug(input);

    expect(input.id).toBe('user-name');
    expect(input.value).toBe('@yacaFx');
  });

  it('should get the button content', () => {
    // Arrange -> Organizar
    render(
      <StoreMerchandise
        title={''}
        avatar={''}
        name={'@yacaFx'}
        active={false}
      />
    );

    // Act → Actuar o ejecutar
    const button = screen.getByText('Save') as HTMLElement;
    screen.debug(button);

    // Assert → Validar
    expect(button).toBeInTheDocument();
    expect(button).toHaveAttribute('disabled', '');
    // expect(button).toBeEnabled();
    expect(button).toBeDisabled();
    expect(button).toHaveTextContent('Save');
  });

  it('should get product price label', () => {
    const spy = spyOn(product, 'getProductName').mockReturnValue('promoción');
    const result = getProductPrice();
    console.log(result);
    expect(result).toBe('El precio de promoción es $123 usd');
    spy.mockRestore();
  });

  it('should redirect to a new url', () => {
    const spy = spyOn(window, 'open').mockImplementation(() => window);
    const url = 'http://yacafx.com';

    openLink(url);

    expect(spy).toHaveBeenCalled();
    expect(spy).toHaveBeenCalledWith(url, '_blank');
  });

  it('should load and display albums list', async () => {
    // const spy = spyOn(data, 'loadAlbums').mockResolvedValueOnce(albumsMocks);
    await act(async () => {
      render(
        <StoreMerchandise
          title={''}
          avatar={''}
          name={'@yacaFx'}
          active={false}
        />
      );
    });

    await waitFor(() => {
      const albums = screen.getByTestId('albums');
      screen.debug(albums);
      expect(albums).toBeInTheDocument();
      // expect(spy).toHaveBeenCalled();
      expect(albums).toHaveTextContent('Álbum campeones 2022');
    });
  });

  it('should display no records message', async () => {
    // const spy = spyOn(data, 'loadAlbums').mockResolvedValueOnce([]);
    const service = AlbumsService.getInstance();
    const spy = spyOn(service, 'getAll').mockResolvedValueOnce(undefined);
    await act(async () => {
      render(
        <StoreMerchandise
          title={''}
          avatar={''}
          name={'@yacaFx'}
          active={false}
        />
      );
    });

    const albums = screen.getByTestId('no-data');
    screen.debug(albums);
    //  expect(spy).toHaveBeenCalled();
    expect(albums).toHaveTextContent('No hay registros disponibles');
  });
});
