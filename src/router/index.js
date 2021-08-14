import Vue from "vue";
import VueRouter from "vue-router";
import store from "@/store";

import routes from "./routes";

const originalPush = VueRouter.prototype.push;
VueRouter.prototype.push = function push(location) {
  return originalPush.call(this, location).catch((err) => err);
};

Vue.use(VueRouter);

const router = new VueRouter({
  mode: "history",
  routes,
});

router.beforeEach(async (to, from, next) => {
  if (to.path === "/") return next();

  try {
    await store.dispatch("fetchSignedInUser", "once");
  } catch (e) {
    console.log(e.message);
  }

  const authPages = ["/signup"];
  const publicPages = [...authPages];

  const isPublic =
    publicPages.filter((p) => to.path.startsWith(p)).length > 0 ||
    to.path === "/";
  const isAuthPage = authPages.filter((p) => to.path.startsWith(p)).length > 0;

  const signedInUser = store.getters.signedInUser;

  if (!isPublic && !signedInUser) {
    alert("Sign in first!");
    return next("/");
  } else if ((isAuthPage || to.path === "/") && signedInUser) {
    return next("/chat");
  } else {
    return next();
  }
});

export default router;
