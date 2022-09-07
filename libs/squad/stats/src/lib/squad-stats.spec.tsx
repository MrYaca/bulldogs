import { render } from '@testing-library/react';

import SquadStats from './squad-stats';

describe('SquadStats', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<SquadStats />);
    expect(baseElement).toBeTruthy();
  });
});
