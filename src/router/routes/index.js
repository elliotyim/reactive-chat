import SignUpView from "@/views/SignUpView.vue";
import SignInView from "@/views/SignInView.vue";
import MainView from "@/views/MainView.vue";
import ChatView from "@/views/ChatView.vue";
import ProfileView from "@/views/ProfileView.vue";

const routes = [
  {
    path: "/signin",
    component: SignInView,
  },
  {
    path: "/signup",
    component: SignUpView,
  },
  {
    name: "MainView",
    path: "",
    component: MainView,
    children: [
      {
        path: "/chat",
        component: ChatView,
      },
      {
        path: "/profile",
        component: ProfileView,
      },
    ],
  },
];

export default routes;
