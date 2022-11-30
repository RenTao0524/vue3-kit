<script setup lang="ts">
import { defineAsyncComponent, provide, reactive, ref } from "vue";
import DemoTwo from "@/components/DemoTwo.vue";
import CustomInput from "@/components/CustomInput.vue";
import SlotDemo from "@/components/SlotDemo.vue";
import IconSupportVue from "@/components/icons/IconSupport.vue";
const title = ref("");

const demoInfo = reactive({
  title: "111",
  likes: 0,
  other: "33",
});

const someEvent = (str: string) => {
  console.log("do some thing", str);
};

const searchText = ref("");

provide("msg", ref("provide msg"));

const AsyncComp = defineAsyncComponent({
  // 加载函数
  loader: () => import('@/components/DemoOnwwe.vue'),

  // 加载异步组件时使用的组件
  // loadingComponent: "<div>loading</div>",
  // 展示加载组件前的延迟时间，默认为 200ms
  delay: 3000,

  // 加载失败后展示的组件
  errorComponent: IconSupportVue,
  // errorComponent: ErrorComponent,
  // 如果提供了一个 timeout 时间限制，并超时了
  // 也会显示这里配置的报错组件，默认值是：Infinity
  timeout: 3000
})

</script>

<template>
  <div>
    <h1>深入组件</h1>
    <DemoOne></DemoOne>
    <DemoTwo v-bind="demoInfo" @some-event="someEvent" />
    <button @click="() => (title = '333')">change</button>
    <CustomInput v-model.capitalize="searchText" />
    <SlotDemo>
      <template #footer>
        <div>footer</div>
      </template>
      <template #main>
        <h1>main</h1>
      </template>
      <template #header>
        <h2>heeader</h2>
      </template>
      <template #default>
        <span>default</span>
      </template>
    </SlotDemo>
    <AsyncComp></AsyncComp>
  </div>
</template>
