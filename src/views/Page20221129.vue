<script setup lang="ts">
import {
  computed,
  onMounted,
  onUpdated,
  reactive,
  ref,
  watch,
  watchEffect,
} from "vue";
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
  items.value.push({
    message: "ddd",
    age: 3,
  });
};

const obj = {
  foo: ref(1),
  bar: ref(2),
};

let someCount = $ref(123);

const isOk = computed<number | boolean>(() => state.count > 3);

const _isOk = $computed<number | boolean>(() => state.count > 3);

console.log("isok:", isOk.value, _isOk);

const items = ref([{ message: "Foo" }, { message: "Bar" }]);

function greet(event: any) {
  //   alert(`Hello ${state.count}!`)
  console.log(event.target.tagName);
  // `event` 是 DOM 原生事件
  //   if (event) {
  //     alert(event.target.tagName)
  //   }
}

let text = $ref("");

const inputHandler = (event: any) => {
  console.log(event);
  text = event.target.value;
};

const inputChange = (e: any) => {
  console.log("change:", e);
};

onMounted(() => {
  console.log("mounted ...");
});

onUpdated(() => {
  console.log("onupdated");
});

const question = $ref("");

watch([question, () => state.count], (pre, old) => {
  console.log("watch:", pre, old);
});

watchEffect(() => {
  console.log("watcheffect::", question);
});

const flushCount = ref(0);

const flushBtnRef = ref<HTMLButtonElement | null>(null);

const incrementFlushCount = () => {
  flushCount.value++;
};

watchEffect(
  () => {
    console.log(
      "test watcheffect flush:",
      flushCount.value,
      flushBtnRef.value?.innerText
    );
  },
  {
    flush: "post",
  }
);

// input 自动聚焦
const inputRef = ref<HTMLInputElement | null>(null);

onMounted(() => {
  inputRef.value?.focus();
});
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
      <li>
        <h3>模板引用</h3>
        <input type="text" ref="inputRef" />
      </li>
    </ol>
    <p v-for="({ message = '', age }, index) in items" :key="index">
      {{ message }} - {{ age }}
    </p>
    <!-- `greet` 是上面定义过的方法名 -->
    <button @click="greet">Greet</button>

    <input
      type="text"
      :value="text"
      @input="inputHandler"
      @change="inputChange"
    />

    <input type="text" v-model="question" />

    <button @click="incrementFlushCount" ref="flushBtnRef">
      {{ flushCount }}
    </button>
  </div>
</template>
