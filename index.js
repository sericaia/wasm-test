import Counter from './wasm/counter.wasm';

let wasmHelloWorld = () => {
  let counter = null;

  return {
    init: function() {
      counter = new Counter({
        'env': {
          'memoryBase': 0,
          'tableBase': 0,
          'memory': new WebAssembly.Memory({
            initial: 256
          }),
          'table': new WebAssembly.Table({
            initial: 0,
            element: 'anyfunc'
          })
        }
      });
    },
    inc: function() {
      return counter.exports._count();
    }
  }
}

window.onload = () => {
  window.wasmHelloWorld = wasmHelloWorld();
  window.wasmHelloWorld.init();
}
