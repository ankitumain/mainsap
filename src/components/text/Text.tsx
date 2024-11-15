type TextProps = {
  children: React.ReactNode;
  className?: string;
};

export default function Text({ children, className }: TextProps) {
  return (
    <section className={`py-96 px-14 flex justify-end body-40 ${className}`}>
      <div className="w-2/3">{children}</div>
    </section>
  );
}
