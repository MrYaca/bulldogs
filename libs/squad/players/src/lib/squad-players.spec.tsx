import { render } from '@testing-library/react';

import SquadPlayers from './squad-players';

describe('SquadPlayers', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<SquadPlayers />);
    expect(baseElement).toBeTruthy();
  });
});
