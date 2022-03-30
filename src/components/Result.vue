<template>
  <div class="results">
    <div class="search">
      <button class="searchButton" @click="search($store, $store.state.input)">
        Search
      </button>
    </div>
    <br />
    <div
      class="result"
      v-for="song in $store.state.data"
      :key="song.collectionId"
    >
      <div class="resultImage">
        <img :src="song.artworkUrl100" alt="" />
      </div>
      <div class="divine"></div>
      <div class="resultInfo">
        <div class="info">
          <div class="col1">
            <p>Artist: {{ song.artistName }}</p>
            <p>Collection Name: {{ song.collectionName }}</p>
            <p>Collection Censored Name: {{ song.collectionCensoredName }}</p>
            <p>Price: {{ song.collectionPrice }} {{ song.currency }}</p>
            <p>Track Count: {{ song.trackCount }}</p>
          </div>
          <div class="sep"></div>
          <div class="col2">
            <p>CopyRight: {{ song.copyright }}</p>
            <p>Country: {{ song.country }}</p>
            <p>Release Date: {{ song.releaseDate }}</p>
            <p>Genre: {{ song.primaryGenreName }}</p>
          </div>
          <div class="goto">
            <a :href="song.collectionViewUrl" target="__blank">Goto</a>
          </div>
        </div>
      </div>
    </div>
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

<style lang="sass" scoped>
$border-color: #4e4848
$button-color: #000000
.results
  display: flex
  flex-direction: column
  justify-content: center
  align-items: center
  .search
    .searchButton
      color: $button-color
      background: white
      border: 1px solid $border-color
      border-radius: 30px
      transition: all 0.3s ease-in-out
      cursor: pointer
      font-weight: 700
      font-size: 1.5rem
      height: 4rem
      width: 15rem
      &:hover
        color: white
        background: $button-color
  .result
    display: flex
    flex-direction: row
    align-items: center
    border: 1px solid $border-color
    border-radius: 100px
    width: 80%
    margin-bottom: 30px
    .resultImage
      display: flex
      justify-content: center
      align-items: center
      margin-left: 3rem
      padding-right: 1.5rem
      width: 10%
    .divine
      height: 8rem
      border: 2px solid grey
    .resultInfo
      width: 90%
      .info
        display: flex
        flex-direction: row
        text-align: left
        height: 13rem
        margin-left: 3rem
        .col1
          width: 37.5%
        .sep
          width: 5%
        .col2
          width: 37.5%
        .goto
          display: flex
          justify-content: center
          align-items: center
          width: 20%
</style>
