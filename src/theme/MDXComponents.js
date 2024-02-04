import MDXComponents from "@theme-original/MDXComponents";
import ApiMethod from "@site/src/components/ApiMethod";
import ApiProperty from "@site/src/components/ApiProperty";
import DocsTag from "@site/src/components/DocsTag";
import GameObject from "@site/src/components/GameObject";
import ProsCons from "@site/src/components/ProsCons";

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'; // Import the FontAwesomeIcon component.
import { library } from '@fortawesome/fontawesome-svg-core'; // Import the library component.
import { fas } from '@fortawesome/free-solid-svg-icons'; // Import all solid icons.

library.add(fas); // Add all icons to the library so you can use them without importing them individually.


export default {
  ...MDXComponents,
  ApiMethod: ApiMethod,
  ApiProperty: ApiProperty,
  DocsTag: DocsTag,
  GameObject: GameObject,
  Icon: FontAwesomeIcon,
  ProsCons: ProsCons,
};