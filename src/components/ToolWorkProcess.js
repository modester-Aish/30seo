import React from 'react';

const ToolWorkProcess = ({ points = [], toolTitle }) => {
  const safePoints = [
    points[0] || 'Bramework Group Buy at Cheap Prices With Bounce Tools Unlimited',
    points[1] || 'Get Unlimited credits per day.',
    points[2] || 'Instant Access',
    points[3] || '99.99% Uptime Guarantee!',
  ];

  return (
    <>
      {/*==================== Work Process (tool specific) start ====================*/}
      <div
        className="work-process-area bg-position-right pd-top-60 pd-bottom-90"
        style={{ backgroundImage: 'url("/assets/img/bg/16.png")' }}
      >
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-lg-8">
              <div className="section-title text-center pb-5">
                <h6 className="sub-title-sky-blue">WORK PROCESS</h6>
                {toolTitle ? <h3 className="title mt-2">{toolTitle}</h3> : null}
              </div>
            </div>
          </div>
          <div className="work-process-area-inner-2">
            <div className="row">
              <div className="col-xl-3 col-lg-4 col-md-6">
                <div className="single-work-process-inner style-2 text-center h-100">
                  <div className="thumb mb-3">
                    <img src="/assets/img/icon/36.svg" alt="img" />
                  </div>
                  <div className="details">
                    <h5 className="mb-3">Assessment</h5>
                    <p className="content">{safePoints[0]}</p>
                  </div>
                </div>
              </div>
              <div className="col-xl-3 col-lg-4 col-md-6">
                <div className="single-work-process-inner style-2 text-center h-100">
                  <div className="thumb mb-3">
                    <img src="/assets/img/icon/37.svg" alt="img" />
                  </div>
                  <div className="details">
                    <h5 className="mb-3">Implementationplanning</h5>
                    <p className="content">{safePoints[1]}</p>
                  </div>
                </div>
              </div>
              <div className="col-xl-3 col-lg-4 col-md-6">
                <div className="single-work-process-inner style-2 text-center h-100">
                  <div className="thumb mb-3">
                    <img src="/assets/img/icon/38.svg" alt="img" />
                  </div>
                  <div className="details">
                    <h5 className="mb-3">Capabilities</h5>
                    <p className="content">{safePoints[2]}</p>
                  </div>
                </div>
              </div>
              <div className="col-xl-3 col-lg-4 col-md-6">
                <div className="single-work-process-inner style-2 text-center h-100">
                  <div className="thumb mb-3">
                    <img src="/assets/img/icon/39.svg" alt="img" />
                  </div>
                  <div className="details">
                    <h5 className="mb-3">Innovation</h5>
                    <p className="content">{safePoints[3]}</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/*==================== Work Process (tool specific) end ====================*/}
    </>
  );
};

export default ToolWorkProcess;


