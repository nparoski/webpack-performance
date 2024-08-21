# webpack-performance

## Setup

1. npm install
2. npm run build
3. npm run start

## Runs 

`npm run build`:

1. webpack 5.93.0 compiled with 6 warnings in 10416 ms
2. webpack 5.93.0 compiled with 6 warnings in 10342 ms
3. webpack 5.93.0 compiled with 6 warnings in 10104 ms
4. webpack 5.93.0 compiled with 6 warnings in 9688 ms
5. webpack 5.93.0 compiled with 6 warnings in 9166 ms

`npm run start`:

1. webpack 5.93.0 compiled with 10 warnings in 5852 ms
2. webpack 5.93.0 compiled with 10 warnings in 6350 ms
3. webpack 5.93.0 compiled with 10 warnings in 6448 ms
4. webpack 5.93.0 compiled with 10 warnings in 6267 ms
5. webpack 5.93.0 compiled with 10 warnings in 5954 ms

`npm run start` and make code change in core.js `sayHello` e.g `sayHello("core.js");` to `sayHello("core1.js");`:

1. webpack 5.93.0 compiled with 10 warnings in 5194 ms
2. webpack 5.93.0 compiled with 10 warnings in 5507 ms
3. webpack 5.93.0 compiled with 10 warnings in 4660 ms
4. webpack 5.93.0 compiled with 10 warnings in 4872 ms
5. webpack 5.93.0 compiled with 10 warnings in 4948 ms
