import type { Meta, StoryObj } from "@storybook/react";
import { FunctionArgs } from "./FunctionArgs";

const meta: Meta<typeof FunctionArgs> = {
  component: FunctionArgs,
  title: "FunctionsArgs",
};
export default meta;
type Story = StoryObj<typeof FunctionArgs>;

export const NoParameters: Story = {
  args: {
    functionArgs: [],
  },
};

export const SingleParameter: Story = {
  args: {
    functionArgs: [
      {
        type: "string",
        description: "The name of the person to greet",
      },
    ],
  },
};
