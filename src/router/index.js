import { createRouter, createWebHistory } from 'vue-router';
import HomeView from '@/views/HomeView.vue';

const routes = [
  {
    path: "/",
    name: "home",
    component: HomeView,
    meta: {
      title: "Altara Credit - Image Uploader",
      metaTags: [
        {
          name: "description",
          content: "This is an app to upload images to S3",
        },
        {
          property: "og:description",
          content: "This is an app to upload images to S3",
        },
      ],
    },
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

router.beforeEach((to, from, next) => {
  // Get the page title from the route meta data that we have defined
  // See further down below for how we setup this data
  const title = to.meta.title;
  // If the route has a title, set it as the page title of the document/page
  if (title) {
    document.title = title;
  }
  // Continue resolving the route
  next();
});

export default router;
