type SectionHeadingProps = {
  number: string;
  label: string;
  title?: string;
  lead?: string;
  id?: string;
  align?: "left" | "center";
};

export function SectionHeading({ number, label, title, lead, id, align = "left" }: SectionHeadingProps) {
  const isCentered = align === "center";
  const labelContent = `[${number} // ${label}]`;

  return (
    <div className="mb-10 md:mb-12">
      {title ? (
        <p className="mono-label mb-5">{labelContent}</p>
      ) : id ? (
        <h2 id={id} className="mono-label mb-5">
          {labelContent}
        </h2>
      ) : (
        <p className="mono-label mb-5">{labelContent}</p>
      )}
      {title ? (
        <h2
          id={id}
          className={`max-w-4xl text-3xl font-bold text-foreground md:text-5xl ${isCentered ? "mx-auto" : ""}`}
        >
          {title}
        </h2>
      ) : null}
      {lead ? (
        <p className={`mt-5 max-w-2xl text-base leading-8 text-subtle md:text-lg ${isCentered ? "mx-auto" : ""}`}>
          {lead}
        </p>
      ) : null}
    </div>
  );
}
