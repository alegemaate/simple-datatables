import * as React from "react";

import { Basic } from "./basic";
import { Dense } from "./dense";

/**
 * Here you can add any extra examples with the Card label as the key, and the component to render as the value
 */
export const EXAMPLES: Record<string, JSX.Element> = {
  Basic: <Basic />,
  Dense: <Dense />,
};
