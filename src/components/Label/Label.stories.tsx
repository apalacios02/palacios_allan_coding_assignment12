import { StoryFn, Meta } from '@storybook/react';
import Label from './Label';

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

const Template: StoryFn = (args) => <Label {...args} />;

// Default state story
export const MyLabelPrimaryTest = Template.bind({});
MyLabelPrimaryTest.args = {
  content: 'Default Label',
  disabled: false,
};