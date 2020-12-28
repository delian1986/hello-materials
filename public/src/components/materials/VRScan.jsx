import { Component } from "react";

export class VRScan extends Component {
  render() {
    return (
      <div className="col mb-3">
        <div className="card">
          <div className="card-body p-2">
            <img
              src="https://download.chaosgroup.com/images/vrscans/thumb/cnv82"
              alt="Cnv82"
              className="card-img-top"
            />
            <h5 className="card-title pt-2 mb-0">Name</h5>
            <div className="card-text">other stuff</div>
          </div>
        </div>
      </div>
    );
  }
}
