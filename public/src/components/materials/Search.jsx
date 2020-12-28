import {Input} from "../common/Input";

export const Search = () =>{
  const handleChange = () => {}

    return (
        <Input type="text" name="search" label="Search" placeholder="Search" onChange={handleChange}  className="form-control form-control-sm mb-3"/>
    );
}
