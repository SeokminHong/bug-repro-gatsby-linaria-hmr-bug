import lightTheme from "./themes/light"
import darkTheme from "./themes/dark"

const colors = {
  light: lightTheme,
  dark: darkTheme,
}

const theming = cb =>
  Object.keys(colors).reduce(
    (acc, name) =>
      Object.assign(acc, {
        [`html.${name} &`]: cb(colors[name]),
      }),
    {}
  )

export { theming }
