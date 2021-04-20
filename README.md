# Marko News App

Just little news app using [`marko-js`](https://github.com/marko-js), to learn myself [`marko-js`](https://github.com/marko-js).

## 🤖 The Build

Just a single view, with a couple components. I'm simply hitting a News api, and providing a search to update results based on query. I started with with [`marko-starter`](https://github.com/marko-js/marko-starter).

Of course, as tech goes, new/better ways to build have emerged, and this project also does things you just shouldn't do. More on that below.

### Deps

- [MarkoJs](https://github.com/marko-js)
- [Lasso](https://www.npmjs.com/package/lasso)
- [NewsApi](https://newsapi.org)
- [Axios](https://www.npmjs.com/package/axios)

## 📦 Install

`npm i`

## 🧪 Start Dev Server

`npm run dev`

Fires up a dev server on port 8080

## 🗄️ Project Structure

```
src
 |-- components // marko components
    |
    |-- /app-layout // main app layout wrapper, html reqs, also loads global css
    |-- /app-header // global header and sub components
    |-- etc...

 |-- routes // page-based routes, follows file/folder naming
 |-- data // mock data
 |-- styles // global style(less) and less utils
 |-- utils // global js utils
```

## 🚀 Updated Resources

They Marko team has been releasing various updated ways to build, including a new no-config approach with the cli, and a shift from Lasso to Webpack / Rollup.

- [Marko cli](https://github.com/marko-js/cli)
- [`@marko/create`](https://github.com/marko-js/cli/blob/master/packages/create/README.md), [`@marko/serve`](https://github.com/marko-js/cli/blob/master/packages/serve/README.md), [`@marko/build`](https://github.com/marko-js/cli/blob/master/packages/build/README.md)
- [Marko Webpack](https://github.com/marko-js/webpack)
- [Marko Rollup](https://github.com/marko-js/rollup)

## 👀 Examples

- [Bulding a HackerNews Clone with Marko](https://dev.to/ryansolid/back-to-basics-building-a-hackernews-clone-with-marko-mj)
- [A first look at MarkoJS](https://dev.to/ryansolid/a-first-look-at-markojs-3h78)
- [Marko Examples](https://github.com/marko-js/examples)

## 🏷️ Better Queries with Marko Tags

For queries, it's best to create a simple api client to fetch your response and then leverage Marko's [`<await>`](https://markojs.com/docs/core-tags/#await) tag.

```
// some simple fetch api client
import {getProduct} from '../../utils/api'

<section.product>
  <await(getProduct(input.query.id))>
    <@then|product|>
      <product-mast
        image=product.image
        title=product.title
      />
      ...
    </@then>
    <@catch|err|>
      ${err.message}
    </@catch>
  </await>
```
