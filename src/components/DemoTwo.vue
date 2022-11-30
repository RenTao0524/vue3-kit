<template>
  <h2>demo two</h2>
  <h3>{{ title }}</h3>
  <p>{{ likes }}</p>
  <button @click="handleClick">someEvent</button>
</template>

<script setup lang="ts">
const props = withDefaults(
  defineProps<{
    title: string;
    likes?: number;
  }>(),
  {
    title: "demo title",
    likes: 0,
  }
);

const emit = defineEmits<{
  (e: "someEvent", str: string): void;
}>();

const handleClick = () => {
  emit("someEvent", props.title);
};
</script>
