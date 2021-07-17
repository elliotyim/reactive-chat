import MainView from "../../views/MainView.vue";
import SignInView from "../../views/SignInView.vue";
import ChatView from "../../views/ChatView.vue";

const routes = [
  {
    path: "/signin",
    component: SignInView,
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
    ],
  },
];

export default routes;
