import clsx from "clsx";
import { Avatar, TextHeading, TextSmall, TextStrong } from "primitives";
import React from "react";
import "./testimonial-card.css";

export type TestimonialCardProps = React.ComponentPropsWithoutRef<"div"> & {
  quote: string;
  avatarSrc?: string;
  avatarAlt?: string;
  initials?: string;
  name: string;
  title: string;
};

export const TestimonialCard = React.forwardRef(function TestimonialCard(
  {
    className,
    quote,
    avatarSrc,
    avatarAlt,
    initials,
    name,
    title,
    ...props
  }: TestimonialCardProps,
  ref: React.ForwardedRef<HTMLDivElement>,
) {
  const classNames = clsx(className, "testimonial-card");

  return (
    <div className={classNames} ref={ref} {...props}>
      <blockquote className="testimonial-card-quote">
        <TextHeading elementType="p">{`"${quote}"`}</TextHeading>
      </blockquote>
      <div className="testimonial-card-footer">
        <Avatar
          src={avatarSrc}
          initials={initials}
          alt={avatarAlt || name}
          size="large"
          className="testimonial-card-avatar"
        />
        <div className="testimonial-card-info">
          <TextStrong>{name}</TextStrong>
          <TextSmall elementType="span">{title}</TextSmall>
        </div>
      </div>
    </div>
  );
});
