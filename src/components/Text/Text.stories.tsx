import { StoryFn, Meta } from '@storybook/react';
import Text from './Text';

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

const Template: StoryFn = (args) => <Text {...args} />;

// Default state story
export const MyTextPrimaryTest = Template.bind({});
MyTextPrimaryTest.args = {
  content: 'Default Text',
  disabled: false,
};