import { Component } from "react";
import {Input} from "../common/Input";

export class ColorCheckbox extends Component {
  render() {
    return <Input type="checkbox" name="name" className="m-1 p-3"/>;
  }
}
