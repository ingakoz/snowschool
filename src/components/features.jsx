import { Image } from "./image";

export const Features = (props) => {

  return (
    <div id='cennik' className='text-center'>
      <div className='container'>
        <div className='col-md-10 col-md-offset-1 section-title'>
          <h2>Cennik</h2>
          {props.data
              ? props.data.map((d, i) => (
                <div key={`${d.title}-${i}`} className='col-sm-10 col-md-12 col-lg-12'>
                  <Image title={d.title} largeImage={d.largeImage} smallImage={d.smallImage} />
                </div>
              ))
              : 'Loading...'}
        </div>
        </div>
        <h4>Oferta grupowa dostępna już wkrótce!</h4>
       </div>
       
  )
}  
      
