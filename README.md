# mahmudjion.github.io

## Build Setup

```bash
# install dependencies
$ npm install

# serve with hot reload at localhost:3000
$ npm run dev

# build for production and launch server
$ npm run build
$ npm run start

# generate static project
$ npm run generate

# deploy site locally to master branch
$ npm run deploy
```

## GitHub Pages Deployment

This project uses GitHub Actions to publish the generated `dist` folder to the `master` branch when changes are pushed to the `development` branch.

The workflow also configures GitHub Pages to serve from the `master` branch root automatically.

> Note: Local builds require Node.js `>=20.19.0`.

For detailed explanation on how things work, check out [Nuxt.js docs](https://nuxtjs.org).
