import { FaArrowLeft, FaArrowRight } from "react-icons/fa";
import Button from "../components/Button";
import { Meta, Story } from "@storybook/react";
import '../App.css'

export default {
  title: "Button",
  component: Button,
} as Meta;

const Template: Story<any> = (args) => <Button {...args} />;

export const Default = Template.bind({});
Default.args = {
  title: "Click Me",
  icon:'none',
  generateJsonCode: (jsonCode: any) => {},
 
};

export const ConvertToJson = Template.bind({});
ConvertToJson.args = {
  title: "Convert to JSON",
  icon:  'right' ,
  onClickConvert: () => console.log("Convert button clicked"),

};

const icon = {
  marginLeft: "10px",
  marginTop: "5px",
};
export const ConvertToReact = Template.bind({});
ConvertToReact.args = {
  title: "Convert to React",
  icon:  'left' ,
  onClickConvert: () => console.log("Convert button clicked"),
};
