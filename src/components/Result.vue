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
            <a :href="song.collectionViewUrl" target="__blank">
              <div style="width: 50px; height: 50px; color: white;" >
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512">
                  <!--! Font Awesome Pro 6.1.1 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. -->
                  <path
                    d="M256 0C114.6 0 0 114.6 0 256c0 141.4 114.6 256 256 256s256-114.6 256-256C512 114.6 397.4 0 256 0zM406.6 278.6l-103.1 103.1c-12.5 12.5-32.75 12.5-45.25 0s-12.5-32.75 0-45.25L306.8 288H128C110.3 288 96 273.7 96 256s14.31-32 32-32h178.8l-49.38-49.38c-12.5-12.5-12.5-32.75 0-45.25s32.75-12.5 45.25 0l103.1 103.1C414.6 241.3 416 251.1 416 256C416 260.9 414.6 270.7 406.6 278.6z"
                  />
                </svg>
              </div>
              </a
            >
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { watch } from "@vue/runtime-core";

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
