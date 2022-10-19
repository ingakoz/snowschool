import { Carousel } from "react-responsive-carousel";

////Karuzela nie sprawdzania, zdjecia pozmienianc na logo stadionu itp
export const Partners = (props) => {
  return (
    <div id='partners' className='text-center'>
      <div className='container'>
      <Carousel autoPlay>
    <div>
      <img alt="" src="http://lorempixel.com/output/cats-q-c-640-480-1.jpg" />
      <p className="legend">Legend 1</p>
    </div>
    <div>
      <img alt="" src="http://lorempixel.com/output/cats-q-c-640-480-2.jpg" />
      <p className="legend">Legend 2</p>
    </div>
    <div>
      <img alt="" src="http://lorempixel.com/output/cats-q-c-640-480-3.jpg" />
      <p className="legend">Legend 3</p>
    </div>
 
    <div>
      <img alt="" src="http://lorempixel.com/output/cats-q-c-640-480-13.jpg" />
      <p className="legend">Legend 13</p>
    </div>
    <div>
      <img alt="" src="http://lorempixel.com/output/cats-q-c-640-480-14.jpg" />
      <p className="legend">Legend 14</p>
    </div>
  </Carousel>
      </div>
    </div>
  )
}
