<template>
  <div>
    <h2>{{ $msg }}</h2>
    <input type="text" v-focus />
    <div class="button" v-hover @click="handleClick">click</div>
    <DemoOne></DemoOne>
    {{ provideDD }}
    <h4>{{ $calc(3, 7) }}</h4>
  </div>
</template>

<script setup lang="ts">
import { getCurrentInstance, inject } from "vue";

const vFocus = {
  mounted(el: HTMLInputElement) {
    el.focus();
  },
};

const handleClick = () => {
  console.log("click");
};

const instance = getCurrentInstance();
console.log("instance:", instance?.proxy?.$msg);

const provideDD = inject("provideDD");

console.log(instance?.proxy?.$calc(7, 8));
</script>

<style lang="css" scoped>
.button {
  border: 1px solid #000;
  line-height: 24px;
  padding: 4px 16px;
  color: #000;
  display: inline-block;
  cursor: pointer;
  background-color: transparent !important;
}
</style>
