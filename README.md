#### This is just a working example using WebAssembly


### How to run

1. Compile C to WASM 
```emcc wasm/counter.c -O1 -o wasm/counter.wasm -s WASM=1 -s SIDE_MODULE=1```

2. Run `npm install`

3. Run `webpack` to build your code (inside `index.js`) and wasm file, using `wasm-loader`. See [webpack.config.js](https://github.com/sericaia/wasm-test/blob/master/webpack.config.js) for details.

3. Open `index.html` in browser and play around


##### Useful links
- [WebAssembly wiki](https://github.com/kripken/emscripten/wiki/WebAssembly)
- [WebAssembly-Standalone wiki](https://github.com/kripken/emscripten/wiki/WebAssembly-Standalone)
- [wasm-loader](https://github.com/ballercat/wasm-loader)
- [Blogpost - WebAssembly first steps](http://blog.openbloc.fr/webassembly-first-steps/)
- [Blogpost - How to get a performance boost using WebAssembly](https://hackernoon.com/how-to-get-a-performance-boost-using-webassembly-8844ec6dd665)
- [awesome-wasm](https://github.com/mbasso/awesome-wasm) 

