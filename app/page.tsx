import Layout from './layout';
import Header from './components/Header';
import Banner from './components/Banner';
import Features from './components/Features';
import Trending from './components/Trending';
import Footer from './components/Footer';

const HomePage = () => {
  return (
    <Layout>
      <Header />
      <Banner />
      <Features />
      <Trending />
      <Footer />
    </Layout>
  );
};

export default HomePage;