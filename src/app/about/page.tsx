import About from '@/components/About';
import PageTopSection from '@/components/PageTopSection';

export default function AboutPage() {
  return (
    <>
      <PageTopSection
        slug="about"
        title="Jasmin"
        description="A bit about me and background in web development and web-based software engineering."
      />
      <div className='py-5 px-10'>
        <About />
      </div>
    </>
  );
}