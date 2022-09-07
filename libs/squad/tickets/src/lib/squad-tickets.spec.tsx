import { render } from '@testing-library/react';

import SquadTickets from './squad-tickets';

describe('SquadTickets', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<SquadTickets />);
    expect(baseElement).toBeTruthy();
  });
});
