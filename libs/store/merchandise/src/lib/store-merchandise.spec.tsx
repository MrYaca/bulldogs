import '@testing-library/jest-dom';
import { render, screen } from '@testing-library/react';
import StoreMerchandise, { getProductPrice } from './store-merchandise';
import * as product from './product/product';

import spyOn = jest.spyOn;

describe('StoreMerchandise', () => {
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

  afterEach(() => {
    jest.clearAllMocks(); // reset all but no implementation
    jest.resetAllMocks(); // reset all and the implementation
  });
});
