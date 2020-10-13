import { css } from "linaria"
import { theming } from "./theme"

export const globals = css`
  :global() {
    body {
      margin: 0;
      ${theming(c => ({
        backgroundColor: c.background,
        color: c.text,
      }))};
    }
  }
`
