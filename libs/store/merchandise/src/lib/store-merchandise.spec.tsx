import { render } from '@testing-library/react';

import StoreMerchandise from './store-merchandise';

describe('StoreMerchandise', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<StoreMerchandise />);
    expect(baseElement).toBeTruthy();
  });
});
