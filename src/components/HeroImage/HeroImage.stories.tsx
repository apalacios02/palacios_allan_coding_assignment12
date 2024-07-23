import { StoryFn, Meta } from '@storybook/react';
import HeroImage from './HeroImage';
import { userEvent, within } from '@storybook/test'; 
import { waitFor } from '@testing-library/react';

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

// const Template: StoryFn = (args) => <HeroImage {...args} />;

// // Default state story
// export const MyHeroImagePrimaryTest = Template.bind({});
// MyHeroImagePrimaryTest.args = {
//   src: 'src/components/HeroImage/Nicol Bolas.jpg',
//   alt: 'Nicol Bolas',
//   disabled: false,
// };

//Function that is executed after the story has rendered 

export const MyHeroImageTest: StoryObj<typeof HeroImage, Args> = {
  args: {
    src: 'src/components/HeroImage/Nicol Bolas.jpg',
    alt: 'Nicol Bolas',
    disabled: false,
  },
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);
    // await userEvent.click(canvas.(canvas.getBy TestId('myHeroImage'));
    // Additional interactions can be added here
    const heroImage = await waitFor(() =>canvas.getByAltText('Nicol Bolas'));
    await userEvent.hover(heroImage);
    await userEvent.click(heroImage);
  },
};
