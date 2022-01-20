import {
  Paper,
  Table,
  TableContainer,
  TableHead,
  TableBody,
  TableRow,
  TableCell,
} from '@mui/material';

import React from 'react';

//mock data
import Data from '../data/mock.json';

//styles
import styles from '../styles/List.module.scss';

type Props = {};

export default function List({}: Props) {
  return (
    <div className={styles.listContainer}>
      ;
      <TableContainer
        className="table-container"
        role="table-container"
        component={Paper}
      >
        <Table aria-label="simple table">
          <TableHead>
            <TableRow>
              <TableCell>#</TableCell>
              <TableCell>Checkbox</TableCell>
              <TableCell>ID</TableCell>
              <TableCell>Name</TableCell>
              <TableCell>Address</TableCell>
              <TableCell>Company</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {Data.map((row: any, index: number) => (
              <TableRow role="table-row" key={row.id}>
                <TableCell>{index}</TableCell>
                <TableCell className="idRow">
                  <input
                    type="checkbox"
                    id="vehicle1"
                    name="vehicle1"
                    value="Bike"
                  ></input>
                </TableCell>
                <TableCell>{row.id}</TableCell>
                <TableCell role="postcode-cell" className="postcode-cell">
                  {row.name}
                </TableCell>
                <TableCell>{row.address}</TableCell>
                <TableCell>{row.company}</TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </div>
  );
}
