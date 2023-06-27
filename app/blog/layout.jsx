import "./blog.css";

export default function BlogLayout({ children }) {
  return (
    <>
      <section className="animated-section">{children}</section>
    </>
  );
}
