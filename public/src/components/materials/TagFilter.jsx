import { Component } from "react";
import {Input} from "../common/Input";

export class TagFilter extends Component {
  render() {
    return (
      <div>
          <Input name="TagFilter" label="TagFilter" type="checkbox" className="mr-2"/>
      </div>
    );
  }
}
