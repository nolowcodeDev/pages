import HomeView from "@/views/index.vue";

import GoogleView from "@/views/google/index.vue";

import PreviewView from "@/views/google/preview/index.vue";
import PreviewShowView from "@/views/google/preview/[id].vue";

import ProductsView from "@/views/google/products/index.vue";
import ProductShowView from "@/views/google/products/[id].vue";

export const routes = [
  {
    path: "/",
    component: HomeView,
  },
  {
    path: "/google",
    component: GoogleView,
    children: [
      {
        path: "products",
        component: ProductsView,
        children: [
          {
            path: ":id",
            component: ProductShowView,
          },
        ],
      },
      {
        path: "preview",
        component: PreviewView,
        meta: { layout: "AppLayoutAdmin" },
        // children: [
        //   {
        //     path: ":id",
        //     component: PreviewShowView,
        //   },
        // ],
      },
    ],
  },
  {
    path: "/google/preview/:id",
    component: PreviewShowView,
    meta: { layout: "AppLayoutBlank" },
  },
];
