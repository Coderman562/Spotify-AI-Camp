// TableHeader.jsx
import React from 'react';
import '../index.css';

function TableHeader({ tableConfig }) {
  return (
    <tr>
      {tableConfig.showFirstName && <th className="tableHeading">First Name</th>}
      {tableConfig.showLastName && <th className="tableHeading">Last Name</th>}
      {tableConfig.showPhoneNumber && <th className="tableHeading">Phone Number</th>}
      {tableConfig.showEmail && <th className="tableHeading">Email</th>}
      {tableConfig.showAddress && <th className="tableHeading">Address</th>}
    </tr>
  );
}

export default TableHeader;
