<template>
  <component
    :is="buttonComponent"
    :class="buttonClasses"
    :to="to"
    :href="href"
    v-bind="$attrs"
  >
    <slot />
  </component>
</template>

<script lang="ts" setup>
import { computed } from "vue";
import { twMerge } from "tailwind-merge";
import classNames from "classnames";

import { button } from "../../theme";
import type { ButtonProps } from "../../types";
import { objectsToString } from "../../utils";

const props = withDefaults(defineProps<ButtonProps>(), {
  color: "dark",
  size: "md",
  fullWidth: false,
  loading: false,
  ripple: false,
  variant: "filled",
});

const buttonComponent = props.to ? "router-link" : "button";

const { base, sizes, variants } = button;

const buttonClasses = computed(() => {
  return twMerge(
    classNames(
      objectsToString(base.initial),
      objectsToString(sizes[props.size]),
      objectsToString(variants[props.variant][props.color]),
      {
        [objectsToString(base.fullWidth)]: props.fullWidth,
      },
      {
        "flex items-center gap-2": props.loading,
        "gap-3": props.size === "lg",
      }
    )
  );
});
</script>
