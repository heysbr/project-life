export default function Heading({ children, className }) {
  return (
    <h2 className={`font-semibold mb-2 text-3xl text-[#FC5285] ${className}`}>{children}</h2>
  );
}
