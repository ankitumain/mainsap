import { FadeIn } from "../animations/FadeIn";

type TextProps = {
  children: React.ReactNode;
  className?: string;
};

export default function FadeInText({ children, className }: TextProps) {
  return (
    <section
      className={`py-96 px-14 flex justify-end font-khteka-40 ${className}`}
    >
      <div className="w-2/3">
        <FadeIn stagger={0.09}>{children}</FadeIn>
      </div>
    </section>
  );
}
