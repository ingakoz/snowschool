export const Navigation = (props) => {
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
          <img src="img/logo01.png" className="img-responsive nav-logo" alt="logo" />{" "}
          </a>{' '}
        
        </div>

        <div
          className='collapse navbar-collapse'
          id='bs-example-navbar-collapse-1'
        >
          <ul className='nav navbar-nav navbar-right'>
            <li>
              <a href='#o-nas' className='page-scroll'>
                O nas
              </a>
            </li>
            <li>
              <a href='#oferta' className='page-scroll'>
                Oferta
              </a>
            </li>
            <li>
              <a href='#cennik' className='page-scroll'>
                Cennik
              </a>
            </li>
            <li>
              <a href='#galeria' className='page-scroll'>
                Galeria
              </a>
            </li>
          
            <li>
              <a href='#kontakt' className='page-scroll'>
                Kontakt
              </a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  )
}
