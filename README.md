# webpack-performance

## Setup

1. npm install
2. npm run build
3. npm run start

## Runs 

`npm run build`:

1. webpack 5.93.0 compiled with 9 warnings in 6805 ms
2. webpack 5.93.0 compiled with 9 warnings in 5690 ms
3. webpack 5.93.0 compiled with 9 warnings in 5410 ms
4. webpack 5.93.0 compiled with 9 warnings in 5391 ms
5. webpack 5.93.0 compiled with 9 warnings in 6235 ms

`npm run start`:

1. webpack 5.93.0 compiled with 6 warnings in 6872 ms
2. webpack 5.93.0 compiled with 6 warnings in 5773 ms
3. webpack 5.93.0 compiled with 6 warnings in 6203 ms
4. webpack 5.93.0 compiled with 6 warnings in 5788 ms
5. webpack 5.93.0 compiled with 6 warnings in 5665 ms

`npm run start` and make code change in core.js `sayHello` e.g `sayHello("core.js");` to `sayHello("core1.js");`:

1. webpack 5.93.0 compiled with 6 warnings in 78 ms
2. webpack 5.93.0 compiled with 6 warnings in 98 ms
3. webpack 5.93.0 compiled with 6 warnings in 86 ms
4. webpack 5.93.0 compiled with 6 warnings in 90 ms
5. webpack 5.93.0 compiled with 6 warnings in 88 ms
