import React, { useEffect, useState } from 'react';

//styles
import styles from '../styles/Header.module.scss';

type Props = {
  data: string | undefined;
};

export default function Header({ data }: Props) {
  const [indexArray, setIndexArray] = useState<string[]>([]);

  const check = (index: any) => {
    let updatedList: string[] = [...indexArray];
    if (index.includes('-')) {
      index = index.slice(1);
      updatedList.splice(updatedList.indexOf(index), 1);
    } else {
      updatedList.push(index);
    }
    updatedList.filter((e) => e);
    console.log(updatedList);
    setIndexArray(updatedList);
  };

  useEffect(() => {
    check(data);
  }, [data]);

  return (
    <div className={styles.headerContainer}>
      <h1 className={styles.headerSelected}>Selected:</h1>
      <p className={styles.index}>{indexArray.join(', ').slice(1)}</p>
    </div>
  );
}
