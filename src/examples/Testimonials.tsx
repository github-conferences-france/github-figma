import { useMediaQuery } from "hooks";
import { Flex, Section } from "layout";
import { TestimonialCard, TextContentHeading } from "primitives";

const testimonials = [
  {
    id: 1,
    name: "Sarah Chen",
    title: "Product Manager at TechStart",
    initials: "SC",
    quote:
      "This design system has transformed how our team collaborates. The consistency across our products is remarkable, and development cycles are 40% faster.",
  },
  {
    id: 2,
    name: "Marcus Johnson",
    title: "Lead Designer at CreativeHub",
    initials: "MJ",
    quote:
      "The design tokens and component library are incredibly well-documented. Onboarding new designers to our projects now takes days instead of weeks.",
  },
  {
    id: 3,
    name: "Elena Rodriguez",
    title: "Frontend Engineer at InnovateCo",
    initials: "ER",
    quote:
      "The accessibility features baked into every component means we ship inclusive products by default. This is exactly what the industry needs.",
  },
  {
    id: 4,
    name: "David Park",
    title: "Engineering Manager at DataFlow",
    initials: "DP",
    quote:
      "Migrating our codebase to this design system was seamless. The migration guide and Code Connect integration made it painless.",
  },
  {
    id: 5,
    name: "Lisa Anderson",
    title: "UX Lead at UserFirst",
    initials: "LA",
    quote:
      "The responsive design patterns are exceptional. We're able to create beautiful experiences across all device sizes without custom workarounds.",
  },
  {
    id: 6,
    name: "James Mitchell",
    title: "CTO at ScaleUp Labs",
    initials: "JM",
    quote:
      "The Figma integration with Code Connect is a game-changer. Our designers and developers are now truly in sync, speaking the same language.",
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
          heading="What our customers say"
          subheading="Trusted by leading teams and organizations"
        />
        <Flex wrap type="third" gap={isMobile ? "600" : "800"}>
          {testimonials.map((testimonial) => (
            <TestimonialCard
              key={testimonial.id}
              quote={testimonial.quote}
              name={testimonial.name}
              title={testimonial.title}
              initials={testimonial.initials}
            />
          ))}
        </Flex>
      </Flex>
    </Section>
  );
}
