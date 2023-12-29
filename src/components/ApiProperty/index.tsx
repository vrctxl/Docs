import React, { useEffect, useState } from "react";
import styles from "./styles.module.scss";
import useDocusaurusContext from "@docusaurus/useDocusaurusContext";
import Link from "@docusaurus/Link";

interface Props {
  return: string;
  property: string;
  get?: boolean;
  set?: boolean;
}

const ApiProperty: React.FC<Props> = (props) => {
  const { siteConfig } = useDocusaurusContext();
  const baseUrl = siteConfig.url;

  return (
    <>
        <code className={styles.return}>{props.return}</code> <code className={styles.property}>{props.property}</code>
        {props.get && (
            <button
            className={styles.btn}
            style={{
                backgroundColor: 'var(--ifm-color-info)',
                color: 'var(--ifm-badge-color)',
            }}
            >
            GET
            </button>
        )}
        {props.set && (
            <button
            className={styles.btn}
            style={{
                backgroundColor: 'var(--ifm-color-warning)',
                color: 'var(--ifm-badge-color)',
            }}
            >
            SET
            </button>
        )}
    </>
  );
};

export default ApiProperty;