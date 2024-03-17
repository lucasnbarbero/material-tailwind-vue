<template>
  <div :class="classes">
    <slot />
  </div>
</template>

<script lang="ts" setup>
import { computed } from "vue";
import { twMerge } from "tailwind-merge";
import classNames from "classnames";

import { objectsToString } from "../../utils";
import { cardBody } from "../../theme";

const { base } = cardBody;

const classes = computed(() => {
  return twMerge(classNames(objectsToString(base)));
});
</script>
