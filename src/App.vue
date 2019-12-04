<template>
  <div id="app">
    <router-view/>
  </div>
</template>

<script>
export default {
  name: 'App'
}
</script>

<style lang="scss">
div{
  display: flex;
  position: relative;
  align-items: center;
  justify-content: center;
  width: 100%;
  box-sizing: border-box;
}
#app{
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  align-items: flex-start;
  text-align: center;
  color: #2c3e50;
  background-color: #e2e2e2;
  min-height: 100vh;
  
  &::before{
      content: '';
      z-index: 0;
      width: 100%;
      height: 200px;
      position: absolute;
      top: -100px;
      background: radial-gradient(ellipse at center, rgba(255,255,255,1) 0%,rgba(255,255,255,0) 75%);
  }
}
#app>div{
  z-index: 1;
}
body{
  margin: 0;
}

::-webkit-scrollbar {
  width: 5px;
  height: 5px;
  background-color: #eee;
  cursor: pointer;
}

::-webkit-scrollbar-thumb {
    background: #ccc; 
    border-radius: 10px;
    cursor: pointer;
}

</style>
