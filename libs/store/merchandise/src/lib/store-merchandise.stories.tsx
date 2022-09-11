import { ComponentStory, ComponentMeta } from '@storybook/react';
import { StoreMerchandise } from './store-merchandise';

import { setConsoleOptions } from '@storybook/addon-console';
import { addDecorator } from '@storybook/react';
import { withConsole } from '@storybook/addon-console';

addDecorator((storyFn, context) => withConsole()(storyFn)(context));

setConsoleOptions({
  panelExclude: [],
});

export default {
  component: StoreMerchandise,
  title: 'Store/Merchandise',
} as ComponentMeta<typeof StoreMerchandise>;

const Template: ComponentStory<typeof StoreMerchandise> = (args) => (
  <StoreMerchandise {...args} />
);

export const Inactive = Template.bind({});
Inactive.args = {
  title: 'Hola Mundo',
  avatar: 'https://mui.com/static/images/avatar/1.jpg',
  name: 'Sergio',
  active: true,
};

Inactive.argTypes = {
  active: {
    control: { type: 'boolean' },
    description: 'Se habilita con datos',
  },
};

export const Active = Template.bind({});
Active.args = {
  title: 'Hola a todos',
  avatar: 'https://mui.com/static/images/avatar/2.jpg',
  name: 'Helen',
};
