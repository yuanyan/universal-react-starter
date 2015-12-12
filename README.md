# Universal (isomorphic) React Starter
> A professional universal (isomorphic) react starter for building web apps.

## Why universal JavaScript

Universal JavaScript (aka *"isomorphic JavaScript"*) means that run the code on both the client and the server. There are many advantages to building apps this way, but the primary advantages are:

* **Faster page loads.** By rendering on the server, you get to send down a complete webpage, cut out an HTTP request, etc.

* **More reliable SEO.** Any crawler that navigates to your site will see a complete page filled with content, rather than an empty page that requires JavaScript execution.

## Data fetching

Universal data fetching use global `fetch` in `src/fetchData.js` module:
```js
fetch(url).then(function (res) {
  return res.json()
})
```

## Entry HTML

Entry HTML `src/inde.jst` is a JST file.

## Scripts
* Start - **npm start** - Start server for production.
* Developing - **npm run dev** - This will run a server at *localhost:3000*.
* Build - **npm run build** - Generate assets under *dist* directory.
