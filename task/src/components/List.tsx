import {
  Paper,
  Table,
  TableContainer,
  TableHead,
  TableBody,
  TableRow,
  TableCell,
} from '@mui/material';

import React, { useEffect, useState } from 'react';

//mock data
import Data from '../data/mock.json';

//styles
import styles from '../styles/List.module.scss';

type Props = {
  handle: (event: any, index: number) => void;
};

export default function List({}: Props) {
  const [columnNames, setcolumnNames] = useState<string[]>([]);
  const names = Object.getOwnPropertyNames(Data[0]);

  useEffect(() => {
    const names = Object.getOwnPropertyNames(Data[0]);
    setcolumnNames(names);
  }, [Data]);

  return (
    <div className={styles.listContainer}>
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
              {columnNames.map((item) => (
                <TableCell>{item}</TableCell>
              ))}
            </TableRow>
          </TableHead>
          <TableBody>
            {Data.map((row: any, index: number) => (
              <TableRow role="table-row" key={row.id}>
                <TableCell className="idRow">
                  <input
                    onChange={(e) => {
                      handle(e, index);
                    }}
                    type="checkbox"
                    id="vehicle1"
                    name="vehicle1"
                    value="Bike"
                  ></input>
                </TableCell>
                <TableCell>{index}</TableCell>
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
