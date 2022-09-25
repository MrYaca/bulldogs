import { ComponentStory, ComponentMeta } from '@storybook/react';
import Product from './product';

export default {
  component: Product,
  title: 'Store/Product',
} as ComponentMeta<typeof Product>;

const Template: ComponentStory<typeof Product> = (args) => (
  <Product {...args} />
);

export const Primary = Template.bind({});
Primary.args = {};
