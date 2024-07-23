import { StoryFn, Meta } from '@storybook/react';
import Text from './Text';
import { userEvent, within } from '@storybook/test'; 
import { waitFor } from '@testing-library/react';

export default {
  title: 'ReactComponentLibrary/Testing',
  component: Text,
  argTypes: {
    content: {
      control: 'text', // Control for modifying the text content
    },
    disabled: {
      control: 'boolean', // Control for toggling text visibility
    },
  },
} as Meta;

// const Template: StoryFn = (args) => <Text {...args} />;

// // Default state story
// export const MyTextPrimaryTest = Template.bind({});
// MyTextPrimaryTest.args = {
//   content: 'Default Text',
//   disabled: false,
// };

export const MyTextPrimaryTest: StoryObj<typeof Text, Args> = {
  args: {
    content: 'Default Text',
    disabled: false,
  },
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);
    // await userEvent.click(canvas.(canvas.getBy TestId('myHeroImage'));
    // Additional interactions can be added here
    const Text = await waitFor(() =>canvas.getByText('Default Text'));
    await userEvent.hover(Text);
    await userEvent.click(Text);
  },
};