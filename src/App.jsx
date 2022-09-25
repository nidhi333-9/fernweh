import './App.css'
import Navbar from './components/Navbar';
import Data from './Data';
import Card from './components/Card';

function App() {
  const dataItems = Data.map((item) => {
    return <Card title={item.title} desc={item.description} location={item.location} startD={item.startDate} endD={item.endDate} googleMap={item.googleMapsUrl} img={item.imageUrl} />
  })

  return (
    <div className="App">
      <Navbar />
      <div className="container md:m-10 md:w-fit">
        {dataItems}
      </div>

    </div>
  )
}

export default App
