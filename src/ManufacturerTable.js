import React from 'react';

function ManufacturerTable(props) {
  const filteredManufacturers = props.manufacturers.filter(
    (manufacturer) =>
      (manufacturer.Mfr_Name.toLowerCase().includes(props.searchTerm.toLowerCase()) ||
        manufacturer.Country.toLowerCase().includes(props.searchTerm.toLowerCase())) &&
      (props.filterByVehicleType === '' || manufacturer.VehicleTypeName === props.filterByVehicleType)
  );

  return (
    <table>
      <thead>
        <tr>
          <th>Name</th>
          <th>Country</th>
          <th>Type</th>
        </tr>
      </thead>
      <tbody>
        {filteredManufacturers
          .filter((manufacturer) =>
            manufacturer.VehicleTypes.some((vehicleType) => vehicleType.IsPrimary)
          )
          .map((manufacturer) => {
            const primaryVehicleType = manufacturer.VehicleTypes.find(
              (vehicleType) => vehicleType.IsPrimary
            );

            return (
              <tr key={manufacturer.Mfr_ID}>
                <td>{manufacturer.Mfr_Name}</td>
                <td>{manufacturer.Country}</td>
                <td>{primaryVehicleType.Name}</td>
              </tr>
            );
          })}
      </tbody>
    </table>
  );
}

export default ManufacturerTable;
