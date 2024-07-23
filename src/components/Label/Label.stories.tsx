import { StoryFn, Meta } from '@storybook/react';
import Label from './Label';
import { userEvent, within } from '@storybook/test'; 
import { waitFor } from '@testing-library/react';

export default {
  title: 'ReactComponentLibrary/Testing',
  component: Label,
  argTypes: {
    content: {
      control: 'text', // Control for modifying the label content
    },
    disabled: {
      control: 'boolean', // Control for toggling label visibility
    },
  },
} as Meta;

// const Template: StoryFn = (args) => <Label {...args} />;

// // Default state story
// export const MyLabelPrimaryTest = Template.bind({});
// MyLabelPrimaryTest.args = {
//   content: 'Default Label',
//   disabled: false,
// };

export const MyLabelPrimaryTest: StoryObj<typeof Label, Args> = {
  args: {
    content: 'Default Label',
    disabled: false,
  },
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);
    // await userEvent.click(canvas.(canvas.getBy TestId('myHeroImage'));
    // Additional interactions can be added here
    const Label = await waitFor(() =>canvas.getByText('Default Label'));
    await userEvent.hover(Label);
    await userEvent.click(Label);
  },
};