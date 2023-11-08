import type { Meta, StoryObj } from "@storybook/react";
import { FunctionsFormModal } from "./FunctionsFormModal";

const meta: Meta<typeof FunctionsFormModal> = {
  component: FunctionsFormModal,
  title: "FunctionsFormModal",
};
export default meta;
type Story = StoryObj<typeof FunctionsFormModal>;

export const Primary: Story = {
  args: { open: true },
};
