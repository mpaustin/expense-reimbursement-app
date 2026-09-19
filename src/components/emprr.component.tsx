import Axios from 'axios';
import { BootstrapTable, TableHeaderColumn } from 'react-bootstrap-table';
import { useState, useEffect } from 'react';
import React from 'react';

import { API_BASE_URL } from '../api';
const EmpRRComponent: React.FC = () => {
    
    const [empRR, setEmpRR] = useState([]);

    useEffect(() => {
        Axios.get(`${API_BASE_URL}/viewemprrs`,{
            params: {
                id: localStorage.getItem("id")
            }
        })
        .then((response) => {
            console.log(response.data);
            setEmpRR(response.data);
        }).catch((error) => {
            console.log(error);
        })
    },[]);

    return(

        <BootstrapTable data={empRR}>
            <TableHeaderColumn isKey dataField="id">ID</TableHeaderColumn>
            <TableHeaderColumn dataField="date">Date</TableHeaderColumn>
            <TableHeaderColumn dataField="amount">Amount</TableHeaderColumn>
            <TableHeaderColumn dataField="info">Info</TableHeaderColumn>
            <TableHeaderColumn dataField="empID">Employee ID</TableHeaderColumn>
        </BootstrapTable>
    );
}

export default EmpRRComponent;
