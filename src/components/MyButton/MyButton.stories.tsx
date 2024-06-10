import { StoryFn, Meta } from "@storybook/react";
import MyButton from "./MyButton";

export default {
    title: "ReactComponentLibrary/Testing",
    component: MyButton,
    argTypes: {
      label: {
        control: "text", // Control for modifying the button label
      },
      disabledBackgroundColor: {
        control: "color", // Control for changing background color when disabled
      },
    },
  } as Meta;

const Template: StoryFn<typeof MyButton> = (args) => <MyButton {...args} />;

// Default state story
export const MyButtonPrimaryTest  = Template.bind({});
MyButtonPrimaryTest.args = {
  label: "Default Button",
  disabled: false,
};

