import LandingView from "@/views/LandingView.vue";
import SignUpView from "@/views/SignUpView.vue";
import MainView from "@/views/MainView.vue";
import ChatView from "@/views/ChatView.vue";
import ProfileView from "@/views/ProfileView.vue";

const routes = [
  {
    name: "LandingView",
    path: "/",
    component: LandingView,
  },
  {
    name: "signUpView",
    path: "/signup",
    component: SignUpView,
  },
  {
    name: "MainView",
    path: "",
    component: MainView,
    children: [
      {
        name: "ChatView",
        path: "/chat",
        component: ChatView,
      },
      {
        name: "ProfileView",
        path: "/profile",
        component: ProfileView,
      },
    ],
  },
];

export default routes;
