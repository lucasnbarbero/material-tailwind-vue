<template>
  <div :class="classes" v-bind="$attrs">
    <slot />
  </div>
</template>

<script lang="ts" setup>
import { computed } from "vue";
import { twMerge } from "tailwind-merge";
import classNames from "classnames";

import { objectsToString } from "../../utils";
import type { CardProps } from "../../types/components/card";
import { card } from "../../theme";

const props = withDefaults(defineProps<CardProps>(), {
  color: "white",
  variant: "filled",
  shadow: true,
});

const { base, variants } = card;

const classes = computed(() => {
  return twMerge(
    classNames(
      objectsToString(base.initial),
      objectsToString(variants[props.variant][props.color]),
      { [objectsToString(base.shadow)]: props.shadow }
    )
  );
});
</script>
