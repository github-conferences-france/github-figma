import { TestimonialCard } from "primitives";
import "./testimonials.css";

const testimonials = [
  {
    id: 1,
    name: "Sarah Chen",
    title: "Product Manager at TechStart",
    quote:
      "This design system has transformed how our team collaborates. The consistency across our products is remarkable, and development cycles are 40% faster.",
    avatarSrc: "https://thispersondoesnotexist.com/",
  },
  {
    id: 2,
    name: "Marcus Johnson",
    title: "Lead Designer at CreativeHub",
    quote:
      "The design tokens and component library are incredibly well-documented. Onboarding new designers to our projects now takes days instead of weeks.",
    avatarSrc: "https://thispersondoesnotexist.com/",
  },
  {
    id: 3,
    name: "Elena Rodriguez",
    title: "Frontend Engineer at InnovateCo",
    quote:
      "The accessibility features baked into every component means we ship inclusive products by default. This is exactly what the industry needs.",
    avatarSrc: "https://thispersondoesnotexist.com/",
  },
  {
    id: 4,
    name: "David Park",
    title: "Engineering Manager at DataFlow",
    quote:
      "Migrating our codebase to this design system was seamless. The migration guide and Code Connect integration made it painless.",
    avatarSrc: "https://thispersondoesnotexist.com/",
  },
  {
    id: 5,
    name: "Lisa Anderson",
    title: "UX Lead at UserFirst",
    quote:
      "The responsive design patterns are exceptional. We're able to create beautiful experiences across all device sizes without custom workarounds.",
    avatarSrc: "https://thispersondoesnotexist.com/",
  },
  {
    id: 6,
    name: "James Mitchell",
    title: "CTO at ScaleUp Labs",
    quote:
      "The Figma integration with Code Connect is a game-changer. Our designers and developers are now truly in sync, speaking the same language.",
    avatarSrc: "https://thispersondoesnotexist.com/",
  },
];

export function Testimonials() {
  return (
    <section className="testimonials">
      <div className="testimonials-container">
        <div className="testimonials-header">
          <h2 className="testimonials-heading">What our customers say</h2>
          <p className="testimonials-subheading">
            Trusted by leading teams and organizations
          </p>
        </div>

        <div className="testimonials-grid">
          {testimonials.map((testimonial) => (
            <TestimonialCard
              key={testimonial.id}
              quote={testimonial.quote}
              name={testimonial.name}
              title={testimonial.title}
              avatarSrc={testimonial.avatarSrc}
              avatarAlt={testimonial.name}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
