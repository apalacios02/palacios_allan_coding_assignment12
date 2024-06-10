import { StoryFn, Meta } from '@storybook/react';
import HeroImage from './HeroImage';

export default {
  title: 'ReactComponentLibrary/Testing',
  component: HeroImage,
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

const Template: StoryFn = (args) => <HeroImage {...args} />;

// Default state story
export const MyHeroImagePrimaryTest = Template.bind({});
MyHeroImagePrimaryTest.args = {
  src: 'src/components/HeroImage/Nicol Bolas.jpg',
  alt: 'Nicol Bolas',
  disabled: false,
};