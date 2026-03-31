import { TestimonialCard } from "compositions";
import { useMediaQuery } from "hooks";
import { placeholder } from "images";
import { Flex, Section } from "layout";
import { TextContentHeading } from "primitives";

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
  {
    heading:
      "\u201CDesign tokens keep our brand consistent across every product surface. Couldn\u2019t imagine going back.\u201D",
    name: "David Park",
    username: "dpark",
    src: placeholder,
  },
  {
    heading:
      "\u201CStorybook stories for every component made onboarding new engineers a breeze.\u201D",
    name: "Eva Schmidt",
    username: "evaschmidt",
    src: placeholder,
  },
  {
    heading:
      "\u201CThe responsive layout primitives saved us weeks of custom CSS work.\u201D",
    name: "Frank Diaz",
    username: "frankd",
    src: placeholder,
  },
];

export function Testimonials() {
  const { isMobile } = useMediaQuery();
  const sectionPadding = isMobile ? "600" : "1600";
  const flexGap = isMobile ? "600" : "1200";

  return (
    <Section padding={sectionPadding}>
      <Flex container direction="column" alignSecondary="stretch" gap={flexGap}>
        <TextContentHeading
          align="center"
          heading="What Our Users Say"
          subheading="Hear from teams who build with Simple Design System every day"
        />
        <Flex wrap type="third" gap={flexGap}>
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
  );
}
