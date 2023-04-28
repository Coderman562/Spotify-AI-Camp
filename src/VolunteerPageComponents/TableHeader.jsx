
import React from 'react';
import '../index.css';

function TableHeader() {
    return (
        // Add configuration in this file to tell program what heading to show based on their configuration - sent in from props. Use state to manage this
        <tr>
            <th className="tableHeading">User id</th>
            <th className="tableHeading">First Name</th>
            <th className="tableHeading">Last Name</th>
            <th className="tableHeading">Phone Number</th>
            <th className="tableHeading">Email</th>
            <th className="tableHeading">Address</th>
        </tr>
    );
}

export default TableHeader;