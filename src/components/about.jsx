export const About = (props) => {
  return (
    <div id="o-nas">
      <div className="container">
        <div className="row">
        <h2>O nas</h2>
<div>
        {props.data
                      ? props.data.paragraph.map((d, i) => (
                          <p className="onas-paragraf" key={`${d}-${i}`}>{d}</p>
                        ))
                      : "loading"}
</div>
          <div className="col-xs-12 col-md-6">
            {" "}
            <img src="img/ski-child-bg.jpg" className="img-responsive" alt="" />{" "}
          </div>
          <div className="col-xs-12 col-md-6">
            <div className="about-text">
              
              <h3>Co nas wyróżnia?</h3>
              <div className="list-style">
                <div className="col-lg-6 col-sm-6 col-xs-12">
                  <ul>
                    {props.data
                      ? props.data.Why.map((d, i) => (
                          <li key={`${d}-${i}`}>{d}</li>
                        ))
                      : "loading"}
                  </ul>
                </div>
                <div className="col-lg-6 col-sm-6 col-xs-12">
                  <ul>
                    {props.data
                      ? props.data.Why2.map((d, i) => (
                          <li key={`${d}-${i}`}> {d}</li>
                        ))
                      : "loading"}
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
