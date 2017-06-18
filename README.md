#### This is just a working example using WebAssembly


### How to run

1. Compile C to WASM 
```emcc wasm/counter.c -O1 -o wasm/counter.wasm -s WASM=1 -s SIDE_MODULE=1```

2. Run `npm install`

3. Run `webpack` to build your code (inside `index.js`) and wasm file, using `wasm-loader`. See [webpack.config.js](https://github.com/sericaia/wasm-test/blob/master/webpack.config.js) for details.

3. Open `index.html` in browser and play around


##### Useful links
- [Blogpost with some WebAssembly ideas](http://blog.openbloc.fr/webassembly-first-steps/)
- [wasm-loader](https://github.com/ballercat/wasm-loader)
- [WebAssembly wiki](https://github.com/kripken/emscripten/wiki/WebAssembly)
- [WebAssembly-Standalone wiki](https://github.com/kripken/emscripten/wiki/WebAssembly-Standalone)

