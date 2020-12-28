import { Component } from "react";
import {Input} from "../common/Input";

export class MaterialType extends Component {
  render() {
    return (
      <div>
          <Input label="Type" name="MaterialType" type="checkbox" className="mr-2"/>
      </div>
    );
  }
}
