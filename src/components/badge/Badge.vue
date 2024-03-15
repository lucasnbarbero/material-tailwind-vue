<template>
  <div :class="containerClasses">
    <slot />
    <span :class="classes">{{ displayContent }}</span>
  </div>
</template>

<script lang="ts" setup>
import { computed } from "vue";
import { twMerge } from "tailwind-merge";
import classNames from "classnames";

import { badge } from "../../theme";
import { objectsToString } from "../../utils";
import type { BadgeProps } from "../../types/components/badge";

const props = withDefaults(defineProps<BadgeProps>(), {
  color: "red",
  content: "",
  placement: "top-end",
  max: 99,
});

const { base, colors, placements } = badge;

const badgePlacement = objectsToString(placements[props.placement]);
const badgeColor = objectsToString(colors[props.color]);
const badgeWithContent = objectsToString(base.badge.withContent);

const displayContent = computed(() => {
  if (!props.max) return props.content;
  return props.content && Number(props.content) > Number(props.max)
    ? `${props.max}+`
    : props.content;
});

const containerClasses = computed(() => {
  return twMerge(classNames(objectsToString(base.container)));
});

const classes = computed(() => {
  return twMerge(
    classNames(
      objectsToString(base.badge.initial),
      badgePlacement,
      badgeColor,
      {
        [badgeWithContent]: props.content,
      }
    )
  );
});
</script>
