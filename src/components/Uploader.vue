<template>
    <div class="flex justify-center items-center w-full h-full">
        <input type="file" ref="fileInput" style="display:none;" @change="upload">
        <button @click="openFilePicker" class="px-4 py-2 bg-blue-500 text-white rounded-lg">Upload</button>
    </div>
</template>

<script setup>
import AWS from 'aws-sdk';
import { ref, defineEmits } from "vue";
const fileInput = ref(null);
const emit = defineEmits(['photo-uploaded'])

const openFilePicker = () => {
    fileInput.value.click();
}

const upload = async (event) => {
    const file = event.target.files[0];
    const s3 = new AWS.S3({
        accessKeyId: process.env.VUE_APP_AWS_ACCESS_KEY_ID,
        secretAccessKey: process.env.VUE_APP_AWS_SECRET_ACCESS_KEY,
        region: process.env.VUE_APP_AWS_REGION
    });
    const params = {
        Bucket: process.env.VUE_APP_AWS_BUCKET_NAME,
        Key: file.name,
        Body: file
    };
    try {
        const response = await s3.upload(params).promise();
        emit('photo-uploaded', response.Location);
    } catch (error) {
        console.log(error);
    }
}
</script>
