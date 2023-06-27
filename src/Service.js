import React from "react";
import Source from "./Source";

const Service = () => {
  let web = "https://picsum.photos/300/200.jpg";
  let web1 = "https://picsum.photos/300/201.jpg";
  let web2 = "https://picsum.photos/300/199.jpg";
  let web3 = "https://picsum.photos/301/200.jpg";
  let web4 = "https://picsum.photos/302/200.jpg";
  let web5 = "https://picsum.photos/299/200.jpg";

  return (
    <React.Fragment>
      <div className="my-5">
        <h1 className="text-center">Our Service</h1>
        <div className="container-fluid mb-5">
          <div className="row">
            <div className="col-10 mx-auto">
              <div className="row gy-4">
                <Source imgs={web} title="business" />
                <Source imgs={web1} title="marketing" />
                <Source imgs={web2} title="engineering" />
                <Source imgs={web3} title="study" />
                <Source imgs={web4} title="developer" />
                <Source imgs={web5} title="apple" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </React.Fragment>
  );
};

export default Service;
