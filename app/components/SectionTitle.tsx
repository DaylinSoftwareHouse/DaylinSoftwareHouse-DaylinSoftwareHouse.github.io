interface SectionTitleProps {
  title: string;
}

export function SectionTitle({ title }: SectionTitleProps) {
  return (
    <div className="text-3xl font-bold text-gray-200 max-w-100 text-center">
        {title}
    </div>
  );
}