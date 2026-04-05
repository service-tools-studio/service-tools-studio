import About from '@/components/About';
import PageTopSection from '@/components/PageTopSection';

export default function AboutPage() {
  return (
    <>
      <PageTopSection
        slug="about"
        title="Service Tools Studio"
        description="A bit about Jasmin, the founder of Service Tools Studio, and her background in web development and web-based software engineering."
      />
      <div className="mx-auto max-w-5xl px-4 py-5">
        <About />
      </div>
    </>
  );
}