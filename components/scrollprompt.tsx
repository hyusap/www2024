import { FaChevronDown } from "react-icons/fa";

export default function ScrollPrompt({ href }: { href?: string }) {
  return (
    <div className="absolute bottom-5 left-0 right-0 flex justify-center">
      <a
        className="z-40 flex animate-bounce cursor-pointer items-center justify-center rounded-full bg-dark p-3 text-light"
        href={href}
        onClick={href ? undefined : (e) => window.scrollBy(0, 200)}
      >
        <FaChevronDown className="text-3xl" />
      </a>
    </div>
  );
}
