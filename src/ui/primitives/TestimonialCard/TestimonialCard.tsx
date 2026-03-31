import clsx from "clsx";
import { Avatar } from "primitives";
import React from "react";
import "./testimonial-card.css";

export type TestimonialCardProps = React.ComponentPropsWithoutRef<"div"> & {
  quote: string;
  avatarSrc?: string;
  avatarAlt?: string;
  name: string;
  title: string;
};

export const TestimonialCard = React.forwardRef(function TestimonialCard(
  {
    className,
    quote,
    avatarSrc,
    avatarAlt,
    name,
    title,
    ...props
  }: TestimonialCardProps,
  ref: React.ForwardedRef<HTMLDivElement>,
) {
  const classNames = clsx(className, "testimonial-card");

  return (
    <div className={classNames} ref={ref} {...props}>
      <p className="testimonial-card-quote">{`"${quote}"`}</p>
      <div className="testimonial-card-footer">
        <Avatar
          src={avatarSrc}
          alt={avatarAlt || name}
          size="large"
          className="testimonial-card-avatar"
        />
        <div className="testimonial-card-info">
          <div className="testimonial-card-name">{name}</div>
          <div className="testimonial-card-title">{title}</div>
        </div>
      </div>
    </div>
  );
});
