// Replace your-framework with the name of your framework
import { StoryFn, Meta, StoryObj } from '@storybook/react'; // Import StoryFn, Meta, and StoryObj types from your framework
import { userEvent, within } from '@storybook/test'; // Import userEvent and within utilities from storybook/test
import MyButton from './MyButton'; // Import your component
import { waitFor } from '@testing-library/react';

const meta: Meta<typeof MyButton> = {
  title: 'ReactComponentLibrary/Testing',
  component: MyButton,
  argTypes: {
    label: {
      control: 'text', // Control for modifying the button label
    },
    disabledBackgroundColor: {
      control: 'color', // Control for changing background color when disabled
    },
  },
};

export default meta;

type Args = { disabled: boolean }; // Define Args type for story arguments

export const MyButtonTest: StoryObj<typeof MyButton, Args> = {
  args: {
    disabled: false,
  },
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);
    // await userEvent.click(canvas.(canvas.getByRole('button'));
    // Additional interactions can be added here
    const button = await waitFor(() =>canvas.getByRole('button'));
    await userEvent.click(button);
    await userEvent.hover(button);
  },
};
