import React, { useEffect, useState } from "react";
import styles from "./styles.module.scss";
import useDocusaurusContext from "@docusaurus/useDocusaurusContext";
import Link from "@docusaurus/Link";
import chunk from "lodash-es/chunk";
import {useColorMode} from '@docusaurus/theme-common';

import prefabIcon from "./icons/Prefab.png";
import variantIcon from "./icons/PrefabVariant.png";
import modelIcon from "./icons/PrefabModel.png";
import gameObjectIcon from "./icons/GameObject.png";
import prefabIconDark from "./icons/d_Prefab.png";
import variantIconDark from "./icons/d_PrefabVariant.png";
import modelIconDark from "./icons/d_PrefabModel.png";
import gameObjectIconDark from "./icons/d_GameObject.png";

interface Props {
  name: string;
  type?: string;
}

const lightIcons = {
  gameObject: gameObjectIcon,
  prefab: prefabIcon,
  variant: variantIcon,
  model: modelIcon,
};

const darkIcons = {
  gameObject: gameObjectIconDark,
  prefab: prefabIconDark,
  variant: variantIconDark,
  model: modelIconDark,
}

const GameObject: React.FC<Props> = (props) => {
  const { siteConfig } = useDocusaurusContext();
  const { colorMode } = useColorMode();
  const baseUrl = siteConfig.url;

  const type = props.type ?? 'gameObject';
  const iconSet = colorMode === 'dark' ? darkIcons : lightIcons;
  const icon = iconSet[type];

  return (
    <>
      <div className={styles.gameObject}>
        <img src={icon} /> {props.name}
      </div>
    </>
  );
};

export default GameObject;