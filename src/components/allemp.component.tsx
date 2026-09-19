import React, { useState, useEffect } from 'react';
import Axios from 'axios';
import { BootstrapTable, TableHeaderColumn } from 'react-bootstrap-table';

import { API_BASE_URL } from '../api';
const AllEmpComponent: React.FC = () => {

    const [emp, setEmp] = useState([]);

    useEffect(() => {
        Axios.get(`${API_BASE_URL}/viewallemps`)
        .then((response) => {
            console.log(response)
            setEmp(response.data);
        }).catch((error) => {
            console.log(error);
        })
    },[]);

    return(

        <BootstrapTable data={emp}>
            <TableHeaderColumn isKey dataField="empId">ID</TableHeaderColumn>
            <TableHeaderColumn dataField="name">Name</TableHeaderColumn>
            <TableHeaderColumn dataField="email">Email</TableHeaderColumn>
        </BootstrapTable>
    );
}

export default AllEmpComponent;
