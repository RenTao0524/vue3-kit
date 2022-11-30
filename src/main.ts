import { createApp } from "vue";
import { createPinia } from "pinia";

import App from "./App.vue";
import router from "./router";
import DemoOne from "./components/DemoOne.vue";

import "./assets/main.css";

const app = createApp(App);

app.use(createPinia());
app.use(router);

app.directive("hover", {
  // 在绑定元素的 attribute 前
  // 或事件监听器应用前调用
  //   created(el, binding, vnode, prevVnode) {
  //     console.log('el', el, binding, vnode, prevVnode)
  //     // 下面会介绍各个参数的细节
  //   },
  //   // 在元素被插入到 DOM 前调用
  //   beforeMount(el, binding, vnode, prevVnode) {},
  // 在绑定元素的父组件
  // 及他自己的所有子节点都挂载完成后调用
  mounted(el: HTMLElement, binding, vnode, prevVnode) {
    console.log("el:", el);
    el.addEventListener("touchstart", (e: Event) => {
      console.log("touchstart:", e);
      el.style.opacity = "0.3";
      let flag = 200;
      const timer = setInterval(() => {
        flag = flag - 10;
        console.log("flag:", flag);
        if (flag <= 0) {
          clearInterval(timer);
          el.style.opacity = "1";
        }
      }, 10);
    });
    el.addEventListener("touchend", (e: Event) => {
      console.log("touchend:", e);
      el.style.opacity = "1";
    });
  },
  // 绑定元素的父组件更新前调用
  //   beforeUpdate(el, binding, vnode, prevVnode) {},
  //   // 在绑定元素的父组件
  //   // 及他自己的所有子节点都更新后调用
  //   updated(el, binding, vnode, prevVnode) {},
  //   // 绑定元素的父组件卸载前调用
  //   beforeUnmount(el, binding, vnode, prevVnode) {},
  //   // 绑定元素的父组件卸载后调用
  //   unmounted(el: HTMLElement, binding, vnode, prevVnode) {
  //     el.removeEventListener("touchstart", () => {
  //         console.log('2323')
  //     });
  //     el.removeEventListener("touchend", () => {
  //         console.log('11')
  //     });
  //   },
});

app.config.globalProperties.$msg = "hello";

const myPlugin = {
  install(app: App<Element>, options) {
    // 配置此应用
    app.component("DemoOne", DemoOne);
    app.provide("provideDD", "provideDD");
    console.log("app options:", app, options);
    app.config.globalProperties.$calc = (one: number, two: number) => {
      return one + two;
    };
  },
};

app.use(myPlugin, {
  name: "3",
  age: "232",
});

app.mount("#app");
