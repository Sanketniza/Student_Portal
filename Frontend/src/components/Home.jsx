import Navbar from './shared/Navbar'
import HeroSection from './HeroSection'
import CategoryCarousel from './CategoryCarousel';
import LatestJobs from './LatestJobs';
import Footer from './shared/Footer';
import useGetAllJobs from '@/hooks/useGetAllJobs';


//&------------------------------------------------------------------------------------------

function Home() {
  useGetAllJobs();

  return (
    <>
      <Navbar />
      <HeroSection />
      <CategoryCarousel/>
      <LatestJobs/>
      <Footer/>
    </>
  )
};

export default Home;