<template>
  <button @click="search($store, $store.state.input)">Search</button>
  <br />
  <div v-for="song in $store.state.data" :key="song.collectionId">
    <img :src="song.artworkUrl100" alt="">
  </div>
</template>

<script setup lang="ts">
import { watch } from "@vue/runtime-core";
// import { itunesSearch } from "../services/iTunesApi";

async function search(store, input: string) {
  console.log("Called");
  await fetch(`https://itunes.apple.com/search?term=${input}&entity=album`)
    .then((val) => {
      return val.json();
    })
    .then((res) => {
      store.commit("changeData", res.results);
    });
}
</script>

<style></style>
