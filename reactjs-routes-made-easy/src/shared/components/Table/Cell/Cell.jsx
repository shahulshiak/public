import React from 'react';

import styles from './Cell.module.scss';

const Cell = ({
    content,
    header,
}) => {

    return header ? (
        <th className={styles.cell}>
            {content}
        </th>
    ) : (
        <td className={styles.cell}>
            {content}
        </td>
    );
}

export default Cell;