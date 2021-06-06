# README

### Installation & development run

- Install dependencies: `$ npm install`

- Then run: `$ npm start`. This runs the app in the development mode.
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.


### Making builds & running production build

#### Make prod build
- Run `$ npm run build`

#### Serve prod build
- Install the `serve` package: `$ npm i -g serve`
- Run `$ npm start`



## Other Notes

- The file `/src/store/defaultStore.ts` contains an initial set of books already added which will be loaded on the first load if _localStorage_ is empty.
- To see the Redux store in Chrome DevTools, uncomment line #10 in the file `/src/store/store.ts`
