import React, { useState, useEffect } from 'react';
import Axios from 'axios';
import { BootstrapTable, TableHeaderColumn } from 'react-bootstrap-table';

import { API_BASE_URL } from '../api';
const EmpResRRComponent: React.FC = () => {

    const [empResRR, setEmpResRR] = useState([]);

    useEffect(() => {
        Axios.get(`${API_BASE_URL}/viewempresrrs`,{
            params: {
                id: localStorage.getItem("id")
            }
        })
        .then((response) => {
            console.log(response.data);
            setEmpResRR(response.data);
        }).catch((error) => {
            console.log(error);
        })
    },[]);

    return(

        <BootstrapTable data={empResRR}>
            <TableHeaderColumn isKey dataField="id">ID</TableHeaderColumn>
            <TableHeaderColumn dataField="date">Date</TableHeaderColumn>
            <TableHeaderColumn dataField="amount">Amount</TableHeaderColumn>
            <TableHeaderColumn dataField="info">Info</TableHeaderColumn>
            <TableHeaderColumn dataField="empID">Employee ID</TableHeaderColumn>
        </BootstrapTable>
    );
}

export default EmpResRRComponent;
