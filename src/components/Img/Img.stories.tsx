import { StoryFn, Meta } from '@storybook/react';
import Img from './Img';
import { userEvent, within } from '@storybook/test'; 
import { waitFor } from '@testing-library/react';

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

// const Template: StoryFn = (args) => <Img {...args} />;

// // Default state story
// export const MyImgPrimaryTest = Template.bind({});
// MyImgPrimaryTest.args = {
//   src: 'src/components/Img/Sith Lord.jpg',
//   alt: 'Sith Lord',
//   disabled: false,
// };

export const MyImagePrimaryTest: StoryObj<typeof Img, Args> = {
  args: {
    src: 'src/components/Img/Sith Lord.jpg',
    alt: 'Sith Lord',
    disabled: false,
  },
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);
    // await userEvent.click(canvas.(canvas.getBy TestId('myHeroImage'));
    // Additional interactions can be added here
    const Img = await waitFor(() =>canvas.getByAltText('Sith Lord'));
    await userEvent.hover(Img);
    await userEvent.click(Img);
  },
};