import Header from '../components/Header';
import MainSection from '../components/MainSection';
import Footer from '../components/Footer';
import CourseInfo from '@/components/CourseInfo';
import LastSection from '@/components/LastSection';

const Home = () => {
  return (
    <div>
      <Header />
      <MainSection />
      <CourseInfo/>
      <LastSection/>
      <Footer />
    </div>
  );
};

export default Home;
