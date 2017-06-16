#### This is just a working example using WebAssembly


##### Useful links
- [Blogpost with some WebAssembly ideas](http://blog.openbloc.fr/webassembly-first-steps/)
- [wasm-loader](https://github.com/ballercat/wasm-loader)


### How to run

1. Compile C to WASM 
```emcc wasm/counter.c -O1 -o wasm/counter.wasm -s WASM=1 -s SIDE_MODULE=1```

2. Run `npm install`

3. Run `webpack` to build your code (inside `index.js`) and wasm file, using `wasm-loader`

3. Open index.html in browser and play around