import * as React from 'react';

import Cell from './Cell/Cell';
import styles from './Table.module.scss';

const Table = ({ headings, rows }) => {

  const renderHeadingRow = (_cell, cellIndex) => {
    return (
      <Cell
        key={`heading-${cellIndex}`}
        content={headings[cellIndex]}
        header={true}
      />
    )
  };

  const renderRow = (row, rowIndex) => {

    return (
      <tr key={`row-${rowIndex}`}>
        {Object.entries(row).map((_entry, cellIndex) => {
          return (
            <Cell key={`${rowIndex}-${cellIndex}`} content={_entry[1]} />
          )
        })}
      </tr>
    )
  };

  return (
    <table className={styles.table}>
      <thead>
        <>
          {<tr key="heading">
            {headings.map(renderHeadingRow)}
          </tr>}
        </></thead>
      <tbody>{rows.map(renderRow)}</tbody>
    </table>
  );
}

export default Table;
