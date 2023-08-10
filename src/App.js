import Header from './components/Header';
import Card from './components/Card';
import Footer from './components/Footer';
import "bootstrap/dist/css/bootstrap.min.css";
import Button from "react-bootstrap/Button";

function App() {
  return (
    <div className='main-container'>
      <Header title='Galería de imágenes con React'/>

      <div className='card-container'>
        <Card
          image='https://viajes.nationalgeographic.com.es/medio/2017/02/09/shutterstock-302415089_6b607cdb.jpg'
          title='Berlín'
          description='Alemanía'
        />
        <Card
          image='https://www.sueddeutsche.de/image/sz.1.4092664/704x396?v=1651571308'
          title='Viena'
          description='Austría'
        />
        <Card
          image='https://cdn2.civitatis.com/dinamarca/copenhague/guia/nyhavn-grid-m.jpg'
          title='Copenhague'
          description='Dinamarca'
        />
        <Card
          image='https://www.lavanguardia.com/files/content_image_mobile_filter/uploads/2019/08/14/5fa535be75314.jpeg'
          title='Cracovia'
          description='Polonia'
        />
        <Card
          image='https://img2.viajar.elperiodico.com/f8/8b/e6/barcelona-ciudad-mundo-650x454.jpg'
          title='Barcelona'
          description='España'
        />
        <Card
          image='https://www.eurail.com/content/dam/city-guides/City-guides/amsterdam%20masthead.jpg'
          title='Ámsterdam'
          description='Paises Bajos'
        />
        
      </div>
      <Button variant="outline-dark"> Siguiente </Button>
      <Footer
        feet='All Rights Reserved'
      />


    </div>

);
}

export default App;













/* import "bootstrap/dist/css/bootstrap.min.css";
import Button from "react-bootstrap/Button";

function App() {
  return (
    <div>



      

          <Button variant="primary">Go somewhere</Button>


    </div>
  );
}
export default App;
 */