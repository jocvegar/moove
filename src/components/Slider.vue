<script setup>
// In your Vue.js component.
import { VueperSlides, VueperSlide } from "vueperslides";
import "vueperslides/dist/vueperslides.css";
const slides = [
  {
    title: "Esta, NOLA",
    image: new URL("../assets/images/filler.jpeg", import.meta.url).href,
  },
  {
    title: "Ninfle, BR",
    image: new URL("../assets/images/filler3.jpeg", import.meta.url).href,
  },
  {
    title: "Aquella, Miami",
    image: new URL("../assets/images/filler2.jpeg", import.meta.url).href,
  },
];
</script>
<template>
  <vueper-slides
    fade
    :parallax="1"
    :parallax-fixed-content="true"
    fixed-height="70vh"
  >
    <vueper-slide
      v-for="(slide, i) in slides"
      :key="i"
      :image="slide.image"
      :title="slide.title"
    />
  </vueper-slides>
</template>

<style>
.vueperslide__title {
  font-size: 3em !important;
  opacity: 0.7 !important;
  color: rgb(255, 255, 255);
}
</style>
