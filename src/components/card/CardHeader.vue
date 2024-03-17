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
import type { CardHeaderProps } from "../../types/components/card";
import { cardHeader } from "../../theme";

const props = withDefaults(defineProps<CardHeaderProps>(), {
  color: "white",
  variant: "filled",
  shadow: true,
  floated: true,
});

const { base, variants } = cardHeader;

const classes = computed(() => {
  return twMerge(
    classNames(
      objectsToString(base.initial),
      objectsToString(variants[props.variant][props.color]),
      { [objectsToString(base.shadow)]: props.shadow },
      { [objectsToString(base.floated)]: props.floated }
    )
  );
});
</script>
