import SignUpView from "../../views/SignUpView.vue";
import SignInView from "../../views/SignInView.vue";
import MainView from "../../views/MainView.vue";
import ChatView from "../../views/ChatView.vue";

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
    ],
  },
];

export default routes;
