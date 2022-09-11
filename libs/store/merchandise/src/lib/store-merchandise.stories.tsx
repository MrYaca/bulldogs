import { ComponentStory, ComponentMeta } from '@storybook/react';
import { StoreMerchandise } from './store-merchandise';

export default {
  component: StoreMerchandise,
  title: 'StoreMerchandise',
} as ComponentMeta<typeof StoreMerchandise>;

const Template: ComponentStory<typeof StoreMerchandise> = (args) => (
  <StoreMerchandise {...args} />
);

export const Primary = Template.bind({});
Primary.args = {
  title: 'Hola Mundo',
};
