import lightTheme from "./themes/light"
import darkTheme from "./themes/dark"

const colors = {
  light: { ...lightTheme, headerText: "red" },
  dark: { ...darkTheme, headerText: "yellow" },
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
