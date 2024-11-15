type TextProps = {
  children: React.ReactNode;
};

export default function Text({ children }: TextProps) {
  return (
    <section className="py-96 flex justify-end">
      <div className="w-2/3">{children}</div>
    </section>
  );
}
