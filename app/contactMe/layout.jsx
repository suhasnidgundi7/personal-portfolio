import Script from "next/script";

export default function ContactMeLayout({
  children, // will be a page or nested layout
}) {
  return (
    <>
      <section>{children}</section>
      <Script src="https://www.google.com/recaptcha/api.js" />
    </>
  );
}
