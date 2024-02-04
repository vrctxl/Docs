import React, { useEffect, useState } from "react";
import styles from "./styles.module.scss";
import useDocusaurusContext from "@docusaurus/useDocusaurusContext";
import Link from "@docusaurus/Link";
import chunk from "lodash-es/chunk";

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'; // Import the FontAwesomeIcon component.
import { library } from '@fortawesome/fontawesome-svg-core'; // Import the library component.
import { fas } from '@fortawesome/free-solid-svg-icons'; // Import all solid icons.

library.add(fas); // Add all icons to the library so you can use them without importing them individually.

interface Props {
  pros?: string[];
  cons?: string[];
}

const ProsCons: React.FC<Props> = (props) => {
  const { siteConfig } = useDocusaurusContext();
  const baseUrl = siteConfig.url;

  const pros = props.pros ?? [];
  const cons = props.cons ?? [];

  return (
    <>
        <div className={styles.mainBox}>
          <div className={styles.proBox}>
            <ul className={styles.proConList}>
              {pros.map((item) => 
                <li><FontAwesomeIcon icon="fa-solid fa-plus" className={styles.proIcon} /> {item}</li>
              )}
            </ul>
          </div>
          <div className={styles.conBox}>
            <ul className={styles.proConList}>
              {cons.map((item) => 
                <li><FontAwesomeIcon icon="fa-solid fa-minus" className={styles.conIcon} /> {item}</li>
              )}
            </ul>
          </div>
        </div>
    </>
  );
};

export default ProsCons;