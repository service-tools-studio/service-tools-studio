import PageTopSection from '@/components/PageTopSection';
import Process from '@/components/Process';
export default function ProcessPage() {
  return (
    <>
      <PageTopSection
        slug="Process"
        title="How it works"
        description="A simple, straightforward process for building your website."
      />
      <div className="pb-10 px-6 md:px-10">
        <Process />
      </div>
    </>
  );
}