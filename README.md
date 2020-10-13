# Gatsby Linaria HMR Bug

## Setup

```shell
yarn install
```

## Run

1. Run the following command.
   ```shell
   yarn develop
   ```
2. Open http://localhost:8000 to view it in the browser.

## Reproducing bug

1. Try to edit linaria styles from [header.js](./src/components/header.js) and see the hot reloading works.
2. Now, try to edit theme properties in `./src/styles/themes`. Changing their colors **doesn't trigger hot reloading**.
3. Next, try to edit `headerText` property in `./src/styles/theme.js`. Changing its color will trigger hot reloading.

## About

This project uses the old version of Gatsby, 2.24.9, because of its hot reload bug. I supposed it would be related to this issue: [Gatsby#26580](https://github.com/gatsbyjs/gatsby/issues/26580).
