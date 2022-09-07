import { render } from '@testing-library/react';

import StoreTickets from './store-tickets';

describe('StoreTickets', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<StoreTickets />);
    expect(baseElement).toBeTruthy();
  });
});
