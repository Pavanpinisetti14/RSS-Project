import Navbar from './components/Navbar';
import Banner from './components/Banner';
import GetData from './components/GetData';
import Footer from './components/Footer';
function App() {

  return(
    <div className='bg-zinc-100'>
      <Navbar/>
      <Banner/>
      <GetData/>
      <Footer/>
    </div>
  );
}

export default App;
