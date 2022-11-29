<script setup lang="ts">
import { computed, reactive, ref } from "vue";
import { $ref, $computed } from "vue/macros";

const msg = ref<string | number>("hello vue3");

const rawHtml = ref('<span style="color: red">This should be red.</span>');

const objectOfAttrs = {
  id: "container",
  class: "wrapper",
};
interface StateType {
  count: number;
  name: string;
}
let state: StateType = reactive({ count: 0, name: "" });

const increment = () => {
  state.count++;
  obj.foo.value = 3;
  someCount++;
};

const obj = {
  foo: ref(1),
  bar: ref(2),
};

let someCount = $ref(123);

const isOk = computed<number | boolean>(() => state.count > 3);

const _isOk = $computed<number | boolean>(() => state.count > 3);

console.log("isok:", isOk.value, _isOk);
</script>

<template>
  <div>
    <h1>page20221129</h1>
    <h2>模板语法</h2>
    <ol>
      <li>
        <h3>文本插值</h3>
        <p>{{ msg }}</p>
      </li>
      <li>
        <h3>原始 HTML</h3>
        <p>Using text interpolation: {{ rawHtml }}</p>
        <p>Using v-html directive: <span v-html="rawHtml"></span></p>
      </li>
      <li>
        <h3>Attribute 绑定</h3>
        <div v-bind="objectOfAttrs">动态绑定多个值</div>
      </li>
      <li>
        <h3>使用 JavaScript 表达式</h3>
        <!-- <span :title="toTitleDate(date)">
          {{ formatDate(date) }}
        </span> -->
        {{ new Date() }}
        {{ new Date().getTime() }}
      </li>
    </ol>
    <h2>响应式基础</h2>
    <ol>
      <li>
        <button @click="increment">{{ state.count }}</button>
      </li>
      <li>
        {{ obj }}
        {{ obj.foo.value + 1 }}
      </li>
      <li>{{ someCount }}</li>
    </ol>
  </div>
</template>
