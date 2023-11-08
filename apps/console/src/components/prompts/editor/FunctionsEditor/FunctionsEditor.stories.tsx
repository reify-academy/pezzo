import type { Meta, StoryObj } from "@storybook/react";
import { FunctionsEditor } from "./FunctionsEditor";
import { Form } from "antd";

const meta: Meta<typeof FunctionsEditor> = {
  component: FunctionsEditor,
  title: "FunctionsEditor",
};
export default meta;
type Story = StoryObj<typeof FunctionsEditor>;

export const NoFunctions: Story = {
  args: {
    schema: {
      functions: [],
    },
  },
  decorators: [
    (Story) => (
      <Form
        initialValues={{
          functions: [],
        }}
      >
        <Story />
      </Form>
    ),
  ],
};

export const SingleFunctionNoParams: Story = {
  args: {
    schema: {
      functions: [],
    },
  },
};
