<template>
  <div id="app">
    <!--直接进入vue router，根据router文件夹下的index.js显示界面-->
    <router-view></router-view>
  </div>
</template>

<script>
const debounce = (fn, delay) => {
  let timer
   return (...args) => {
     if (timer) {
       clearTimeout(timer)
     }
     timer = setTimeout(() => {
       fn(...args)
     }, delay)
   }
}
const _ResizeObserver = window.ResizeObserver;
window.ResizeObserver = class ResizeObserver extends _ResizeObserver{
   constructor(callback) {
     callback = debounce(callback, 200);
     super(callback);
   }
}
export default {
  name: 'app',
}
</script>