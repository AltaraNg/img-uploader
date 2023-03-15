# Image Uploader App

This is a simple Vue.js 3 app that allows users to take a picture using their device's camera, capture the image, and upload it to an Amazon S3 bucket.

## Setup

Before you can run the app, you need to create an Amazon S3 bucket and obtain your AWS credentials (access key ID and secret access key). Replace the placeholder values in the Upload.vue component with your own values.

Then, follow these steps:

1. Clone the repository and navigate to the project directory.
2. Install dependencies using npm install.
3. Run the app using npm run serve.
4. Open the app in your browser at <http://localhost:8080>.

## Usage

1. Click the "Open Camera" button to activate your device's camera.
2. Use the camera to take a picture.
3. Click the "Take Picture" button to capture the image.
3. Click the "Upload Picture" button to upload the captured image to your Amazon S3 bucket.

## Components

The app consists of three components:

- Camera.vue: This component opens the device's camera and displays the video feed.
- Capture.vue: This component captures the image and emits an event with the captured image data.
- Upload.vue: This component displays the captured image and allows the user to upload it to their Amazon S3 bucket.

## Technologies Used

- Vue.js 3: A progressive JavaScript framework for building user interfaces.
- Tailwind CSS: A utility-first CSS framework for building responsive and customizable UI components.
- AWS SDK for JavaScript: A collection of JavaScript libraries for AWS services, including Amazon S3.


## License

This app is released under the MIT License. Feel free to use, modify, and distribute the app as you see fit.
