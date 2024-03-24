import { language } from "fontawesome";

export const Navigation = (props) => {
  let content = {
    English: {
      block1: "About Us",
      block2: "Fleet",
      block3: "Offer",
      block4: "Gallery",
      block5: "Contact",
      block6: "About_Us",
    },
    Polski: {
        block1: "O nas",
        block2: "Flota",
        block3: "Oferta",
        block4: "Galeria",
        block5: "Kontakt",
        block6: "O_Nas",
      }
    }


  props.language === "Polski"
  ? (content = content.Polski)
  : (content = content.English);


  return (
    <nav id='menu' className='navbar navbar-default navbar-fixed-top'>
      <div className='container'>
        <div className='navbar-header'>
          <button
            type='button'
            className='navbar-toggle collapsed'
            data-toggle='collapse'
            data-target='#bs-example-navbar-collapse-1'
          >
            {' '}

            <span className='icon-bar'></span>{' '}
            <span className='icon-bar'></span>{' '}
            <span className='icon-bar'></span>{' '}
          </button>
          <a className='navbar-brand navbar-logo page-scroll' href='#page-top'>
          <img src="img/sea2.png" className="img-responsive nav-logo" alt="logo" />{" "}
          </a>{' '}
        
        </div>
        <div
          className='collapse navbar-collapse'
          id='bs-example-navbar-collapse-1'
        >
          <ul className='nav navbar-nav navbar-right'>
            <li>
              <a href="#aboutus" className='page-scroll'>
            {content.block1}
              </a>
            </li>
            <li>
              <a href="#offer" className='page-scroll'>
              {content.block3}
              </a>
            </li>
            <li>
              <a href="#fleet" className='page-scroll'>
              {content.block2}
              </a>
            </li>
            <li>
              <a href="#gallery" className='page-scroll'>
              {content.block4}
              </a>
            </li>
          
            <li>
              <a href="#contact" className='page-scroll'>
              {content.block5}
              </a>
            </li>
          </ul>
        </div>
       
       
      </div>
      <div className="selector">
          <select
            className="custom-select"
            value={props.language}
            onChange={e => props.handleSetLanguage(e.target.value)}
          >
            <option value="English">English</option>
            <option value="Polski">Polski</option>
          </select>
         
          </div>
    </nav>
  )
}
