import Services from '@/components/Services';
import PageTopSection from '@/components/PageTopSection';

export default function ServicesPage() {
  return (
    <>
      <PageTopSection
        slug="Services"
        title="What we build"
        description="A mix of simple landing pages, structured builds, and fully customized builds."
      />
      <div className='px-10'>
        <Services />
      </div>
    </>
  )
}