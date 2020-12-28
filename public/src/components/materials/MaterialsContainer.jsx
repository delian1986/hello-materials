import { FiltersContainer } from "./FiltersContainer";
import { Search } from "./Search";
import { VRScans } from "./VRScans";

export const MaterialsContainer = () => {
    return (
      <div className="container">
        <div className="bg-light card p-3 vh-100 d-flex flex-column">
          <h2>VRScans</h2>
          <div className="row overflow-hidden">
            <div className="col-sm-3 h-100">
              <FiltersContainer />
            </div>
            <div className="col-sm-9 h-100 d-flex flex-column">
              <Search />
              <VRScans />
            </div>
          </div>
        </div>
      </div>
    );
}
