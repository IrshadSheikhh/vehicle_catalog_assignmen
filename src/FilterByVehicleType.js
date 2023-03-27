import React from 'react';

function FilterByVehicleType(props) {
  const handleChange = (event) => {
    props.onFilter(event.target.value);
  };

  return (
    <div>
      <label htmlFor="filter-vehicle-type">Filter by Vehicle Type:</label>
      <select id="filter-vehicle-type" name="filter-vehicle-type" onChange={handleChange}>
        <option value="">All</option>
        <option value="Passenger Car">Passenger Car</option>
        <option value="Multipurpose Passenger Vehicle (MPV)">Multipurpose Passenger Vehicle (MPV)</option>
        <option value="Low Speed Vehicle (LSV)">Low Speed Vehicle (LSV)</option>
        <option value="Incomplete Vehicle">Incomplete Vehicle</option>
        <option value="Truck">Truck</option>
        <option value="Bus">Bus</option>
      </select>
    </div>
  );
}

export default FilterByVehicleType;