import './App.css'
import Navbar from './components/Navbar';
import Data from './Data';
import Card from './components/Card';
import Footer from './components/Footer';


function App() {
  const dataItems = Data.map((item) => {
    return <Card
      key={item.id}
      title={item.title}
      desc={item.description}
      location={item.location}
      startD={item.startDate}
      endD={item.endDate}
      googleMap={item.googleMapsUrl}
      img={item.imageUrl} />
  })

  return (
    <div className="App flex flex-col">
      <Navbar />
      <div className="container m-auto py-5">
        {dataItems}
      </div>
      <Footer />

    </div>
  )
}

export default App
