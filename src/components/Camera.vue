<template>
    <div class="flex justify-center items-center w-full h-full">
        <div v-if="!validCamera" class="">
            <h1 class="mt-4 text-3xl font-bold tracking-tight text-gray-900 sm:text-5xl">Camera not found</h1>
            <p class="mt-6 text-base leading-7 text-gray-600">Sorry, we couldn’t find the camera on this device.</p>
            <div class="mt-10">
                <a href="#" class="text-sm font-semibold leading-7 text-indigo-600"><span aria-hidden="true">&larr;</span> Back to home</a>
            </div>
        </div>
        <template v-else>
            <video ref="video" width="640" height="480"></video>
            <canvas ref="canvas" width="640" height="480" style="display: none"></canvas>
            <button @click="capture" class="px-4 py-2 bg-blue-500 text-white rounded-lg">Take Photo</button>
        </template>
    </div>
</template>

<script setup>
import { ref, onMounted, onBeforeUnmount, defineEmits } from "vue";
const stream = ref(null);
const video = ref(null)
const canvas = ref(null)
const emit = defineEmits(['photo-taken'])
const validCamera = ref(true)

const startCamera = () => {
    navigator.mediaDevices
        .getUserMedia({ video: true })
        .then((stream) => {
            video.value.srcObject = stream;
            video.value.play();
            stream.value = stream;
        })
        .catch((error) => {
            console.error(error);
            validCamera.value = false
        });
};

const stopCamera = () => {
    if (stream.value) {
        stream.value.getTracks().forEach((track) => {
            track.stop();
        });
        video.value.srcObject = null;
        stream.value = null;
    }
}

const capture = () => {
    const context = canvas.value.getContext("2d");
    context.drawImage(video.value, 0, 0, 640, 480);
    const dataURL = canvas.value.toDataURL("image/jpeg", 0.8);
    emit("photo-taken", dataURL);
}

onMounted(() => {
    startCamera();
});

onBeforeUnmount(() => {
    stopCamera();
});
</script>
