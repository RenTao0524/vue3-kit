<template>
  <div>
    <header>
      <slot></slot>
    </header>
    <slot name="header"></slot>
    <slot name="main"></slot>
    <slot name="footer"></slot>
    {{ msg }}
  </div>
</template>

<script setup lang="ts">
import { inject, type Ref } from "vue";

const msg = inject<Ref<string>>("msg", "");

console.log(msg.value);
</script>
