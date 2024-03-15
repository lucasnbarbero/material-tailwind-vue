<template>
  <component :is="componentTag" v-bind="$attrs" :class="classes">
    <slot />
  </component>
</template>

<script lang="ts" setup>
import { computed } from "vue";
import { twMerge } from "tailwind-merge";
import classNames from "classnames";

import { objectsToString } from "../../utils";
import { typography } from "../../theme";
import type { TypographyProps } from "../../types";

const props = withDefaults(defineProps<TypographyProps>(), {
  color: "dark",
  variant: "paragraph",
});

const { colors, variants } = typography;

const classes = computed(() => {
  return twMerge(
    classNames(objectsToString(variants[props.variant]), colors[props.color])
  );
});

const createElement = () => {
  if (props.variant === "paragraph" || props.variant === "small") return "p";
  return props.variant;
};

const componentTag = createElement();
</script>
