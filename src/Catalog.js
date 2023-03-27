import React, { useState } from 'react';
import SearchBar from './SearchBar';
import FilterByVehicleType from './FilterByVehicleType';
import ManufacturerTable from './ManufacturerTable';

function Catalog(props) {
  const [searchTerm, setSearchTerm] = useState('');
  const [filterByVehicleType, setFilterByVehicleType] = useState('');

  const handleSearch = (term) => {
    setSearchTerm(term);
  };

  const handleFilter = (vehicleType) => {
    setFilterByVehicleType(vehicleType);
  };

  return (
    <div>
      <h1>Vehicle Manufacturer Catalog</h1>
      <SearchBar onSearch={handleSearch} />
      <FilterByVehicleType onFilter={handleFilter} />
      <ManufacturerTable manufacturers={props.manufacturers} searchTerm={searchTerm} filterByVehicleType={filterByVehicleType} />
</div>
);
}
export default Catalog;