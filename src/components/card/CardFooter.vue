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
import type { CardFooterProps } from "../../types/components/card";
import { cardFooter } from "../../theme";

const props = withDefaults(defineProps<CardFooterProps>(), {
  divider: false,
});

const { base } = cardFooter;

const classes = computed(() => {
  return twMerge(
    classNames(objectsToString(base.initial), {
      [objectsToString(base.divider)]: props.divider,
    })
  );
});
</script>
