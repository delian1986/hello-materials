import { ColorFilters } from "./ColorFilters";
import { Favorites } from "./Favorites";
import { MaterialTypes } from "./MaterialTypes";
import { SaveFilter } from "./SaveFilter";
import { TagsFilters } from "./TagsFilters";

export const FiltersContainer = () => {
    return (
      <div className="h-100 overflow-auto">
        <SaveFilter />
        <Favorites />
        <MaterialTypes />
        <ColorFilters />
        <TagsFilters />
      </div>
    );
}
