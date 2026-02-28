import PageTopSection from '@/components/PageTopSection';
import Process from '@/components/Process';
export default function ProcessPage() {
  return (
    <>
      <PageTopSection
        slug="Process"
        title="How It Works"
        description="A mix of fully custom builds and structured builds. Click into any project to see the details, then open the live site."
      />
      <div className="pb-10 px-6 md:px-10">
        <Process />
      </div>
    </>
  );
}