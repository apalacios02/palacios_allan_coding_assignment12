import { StoryFn, Meta } from '@storybook/react';
import Img from './Img';

export default {
  title: 'ReactComponentLibrary/Testing',
  component: Img,
  argTypes: {
    src: {
      control: 'text', // Control for modifying the image source
    },
    alt: {
      control: 'text', // Control for modifying the alternative text
    },
    disabled: {
      control: 'boolean', // Control for toggling image visibility
    },
  },
} as Meta;

const Template: StoryFn = (args) => <Img {...args} />;

// Default state story
export const MyImgPrimaryTest = Template.bind({});
MyImgPrimaryTest.args = {
  src: 'src/components/Img/Sith Lord.jpg',
  alt: 'Sith Lord',
  disabled: false,
};