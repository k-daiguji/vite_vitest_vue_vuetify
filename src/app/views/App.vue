<template>
  <router-view/>
</template>

<style>
.primary {
  &:disabled {
    background-color: lightgray;
    color: #b0b0b0;
  }

  &:enabled {
    background-color: aquamarine;
    color: #000;

    &:hover {
      background-color: aqua;
    }

    &:active {
      background-color: aqua;
      color: #fff;
    }
  }
}
</style>
