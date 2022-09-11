import { ComponentStory, ComponentMeta } from '@storybook/react';
import { StoreMerchandise } from './store-merchandise';

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
};

export const Active = Template.bind({});
Active.args = {
  title: 'Hola a todos',
};
