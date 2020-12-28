import { Component } from "react";
import {Input} from "../common/Input";

export class Favorites extends Component {
  render() {
    return (
      <div>
        <h5>Favorites</h5>
          <Input label="My Favorite 1" type="checkbox" className="mr-2" name="Favorites" />
      </div>
    );
  }
}
