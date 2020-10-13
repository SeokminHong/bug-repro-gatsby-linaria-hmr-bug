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

## Bugs

1. Try to edit linaria styles from [header.js](./src/components/header.js) and see the hot reloading works.
2. Now, try to edit theme properties in `./src/styles/themes`. Changing their colors doesn't trigger hot reloading.
