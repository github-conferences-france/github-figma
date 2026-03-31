import type { Meta, StoryObj } from "@storybook/react";
import { TestimonialCard } from "compositions";
import { placeholder } from "images";
import { Flex, Section } from "layout";
import { TextContentHeading } from "primitives";

const meta: Meta = {
  title: "SDS Examples/Testimonials",
  parameters: { layout: "fullscreen" },
};
export default meta;

const testimonials = [
  {
    heading:
      "\u201CSimple Design System transformed how our team builds interfaces. The components are intuitive and well-documented.\u201D",
    name: "Alice Martin",
    username: "alicemartin",
    src: placeholder,
  },
  {
    heading:
      "\u201CThe Figma integration is seamless. We went from design to production in half the time.\u201D",
    name: "Bob Chen",
    username: "bobchen",
    src: placeholder,
  },
  {
    heading:
      "\u201CAccessibility out of the box\u2014our team no longer worries about missing ARIA attributes or keyboard navigation.\u201D",
    name: "Clara Johnson",
    username: "claraj",
    src: placeholder,
  },
];

export const Default: StoryObj = {
  name: "Testimonials Section",
  render: () => (
    <Section padding="1600">
      <Flex container direction="column" alignSecondary="stretch" gap="1200">
        <TextContentHeading
          align="center"
          heading="What Our Users Say"
          subheading="Hear from teams who build with Simple Design System every day"
        />
        <Flex wrap type="third" gap="1200">
          {testimonials.map((testimonial) => (
            <TestimonialCard
              key={testimonial.username}
              heading={testimonial.heading}
              name={testimonial.name}
              username={testimonial.username}
              src={testimonial.src}
            />
          ))}
        </Flex>
      </Flex>
    </Section>
  ),
};
