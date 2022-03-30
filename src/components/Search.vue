<template>
  <div class="search">
    <input type="search" v-model="$store.state.input" class="searchBar" />
  </div>
</template>

<script setup lang="ts"></script>

<style lang="scss" scoped>
input[type="search"]::-webkit-search-cancel-button {
  position: relative;
  right: 20px;
  cursor: pointer;
}
.search {
  margin-top: 20px;
  margin-bottom: 40px;
  .searchBar {
    border: 2px solid rgb(78, 72, 72);
    border-radius: 20px;
    height: 3rem;
    text-indent: 1rem;
    width: 80%;
    font-size: 1.5rem;
    &:focus {
      border: 3px solid #000000;
    }
  }
}
</style>
