import React, { useEffect, useState } from "react";
import styles from "./styles.module.scss";
import useDocusaurusContext from "@docusaurus/useDocusaurusContext";
import Link from "@docusaurus/Link";
import chunk from "lodash-es/chunk";

interface Props {
  return: string;
  method: string;
  params?: string[];
}

const ApiMethod: React.FC<Props> = (props) => {
  const { siteConfig } = useDocusaurusContext();
  const baseUrl = siteConfig.url;

  const pairs = chunk(props.params ?? [], 2, undefined);

  return (
    <>
        <code className={styles.return}>{props.return}</code> <code className={styles.method}>{props.method}(</code>
        {pairs.map((pair, i) => 
          <>
            <code className={styles.paramType}> {pair[0]}</code> <code className={styles.paramName}>{pair[1]}</code>
            {i < (pairs.length - 1) ? <code className={styles.method}>,</code> : <> </>}
          </>
        )}
        <code className={styles.method}>)</code>
    </>
  );
};

export default ApiMethod;