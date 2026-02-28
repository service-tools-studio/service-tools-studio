import IntakeForm from '@/components/IntakeForm';
import PageTopSection from '@/components/PageTopSection';

export default function IntakePage() {
  return (
    <>
      <PageTopSection
        slug="Intake"
        title="Ready to get started?"
        description="Please fill out the form below to help us understand your project needs and get started on building your website."
      />
      <div className='p-10'>
        <IntakeForm />
      </div>
    </>
  );
};