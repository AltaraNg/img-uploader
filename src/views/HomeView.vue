<template>
  <div class="flex justify-center items-center w-full h-full">
    <div v-if="!photo">
      <Camera @photo-taken="photo = $event" />
    </div>
    <div v-else>
      <img :src="photo" class="max-w-full max-h-full" />
      <Uploader @photo-uploaded="photo = $event" />
    </div>
  </div>
</template>

<script setup>
import { ref } from "vue";
import Camera from "@/components/Camera.vue";
import Uploader from "@/components/Uploader.vue";

const photo = ref(null);
</script>
