import { Component } from "react";

export class SaveFilter extends Component {
  render() {
    return (
      <div className="pr-2">
        <h5>SaveFilter</h5>
        <div className="input-group input-group-sm mb-1">
          <input type="text" className="form-control" />
          <div className="input-group-append">
            <button className="btn btn-success" type="button">
              Add
            </button>
          </div>
        </div>
        <div className="input-group input-group-sm mb-2">
          <select className="form-control">
            <option>Option1</option>
            <option>Option2</option>
            <option>Option3</option>
          </select>
          <div className="input-group-append">
            <button className="btn btn-danger" type="button">
              Del
            </button>
          </div>
        </div>
      </div>
    );
  }
}
