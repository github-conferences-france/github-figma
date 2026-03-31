import { Meta, StoryObj } from "@storybook/react";
import { TestimonialCard } from "primitives";
import { Testimonials } from "../examples/Testimonials";

const meta: Meta<typeof TestimonialCard> = {
  title: "Components/TestimonialCard",
  component: TestimonialCard,
  parameters: {
    layout: "padded",
  },
  tags: ["autodocs"],
};

export default meta;
type Story = StoryObj<typeof TestimonialCard>;

export const Default: Story = {
  args: {
    quote:
      "This design system has transformed how our team collaborates. The consistency across our products is remarkable, and development cycles are 40% faster.",
    name: "Sarah Chen",
    title: "Product Manager at TechStart",
    avatarSrc: "https://thispersondoesnotexist.com/",
  },
};

export const WithoutAvatar: Story = {
  args: {
    quote:
      "The design tokens and component library are incredibly well-documented. Onboarding new designers to our projects now takes days instead of weeks.",
    name: "Marcus Johnson",
    title: "Lead Designer at CreativeHub",
  },
};

export const FullSection: StoryObj<typeof Testimonials> = {
  render: () => <Testimonials />,
  parameters: {
    layout: "fullscreen",
  },
};
