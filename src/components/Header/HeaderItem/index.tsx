type HeaderItemProps = {
  href: string;
  text: string;
};

export default function HeaderItem({ href, text }: HeaderItemProps) {
  return (
    <a
      href={href}
      className="text-white hidden 2xl:block cursor-pointer border-b-4 border-transparent hover:border-white transition-all"
    >
      {text}
    </a>
  );
}
