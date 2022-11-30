<template>
  <input type="text" :value="modelValue" @input="handleInput" />
</template>

<script setup lang="ts">
const props = withDefaults(
  defineProps<{
    modelValue: string;
    modelModifiers: { capitalize: boolean };
  }>(),
  {
    modelValue: "",
    modelModifiers: () => {
      return {
        capitalize: false,
      };
    },
  }
);
const emit = defineEmits<{
  (e: "update:modelValue", str: string): void;
}>();

const handleInput = (e: Event) => {
  console.log("props:", props.modelModifiers.capitalize);
  emit("update:modelValue", (e.target as HTMLInputElement).value);
};
</script>
