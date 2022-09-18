import '@testing-library/jest-dom';
import { act, render, screen } from '@testing-library/react';
import StoreMerchandise, {
  getProductPrice,
  openLink,
} from './store-merchandise';
import * as product from './product/product';
import * as data from './albums/data.services';
import { albumsMocks } from './albums/albums.mocks';

import spyOn = jest.spyOn;

describe('StoreMerchandise', () => {
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

    // const input = screen.getByLabelText(
    //   'Nombre de Usuario'
    // ) as HTMLInputElement;

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
    const spy = spyOn(data, 'loadAlbums').mockResolvedValueOnce(albumsMocks);
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

    const albums = screen.getByTestId('albums');
    screen.debug(albums);
    expect(spy).toHaveBeenCalled();
  });

  it('should display no records message', async () => {
    // const spy = spyOn(data, 'loadAlbums').mockResolvedValueOnce([]);
    const spy = spyOn(data, 'loadAlbums').mockResolvedValueOnce(undefined);
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
