import { render, screen } from '@testing-library/react';

import StoreMerchandise from './store-merchandise';

describe('StoreMerchandise', () => {
  it('should render successfully', () => {
    const { baseElement } = render(
      <StoreMerchandise title={''} avatar={''} name={''} active={false} />
    );
    expect(baseElement).toBeTruthy();
  });

  it('should get the input', () => {
    render(
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

    const input = screen.getByDisplayValue('@yacaFx') as HTMLInputElement;

    expect(input.id).toBe('user-name');
    expect(input.value).toBe('@yacaFx');
  });
});
