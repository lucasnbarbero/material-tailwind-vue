<template>
  <img v-bind="$attrs" :class="classes" />
</template>

<script lang="ts" setup>
import { computed } from "vue";
import { twMerge } from "tailwind-merge";
import classNames from "classnames";

import { avatar } from "../../theme";
import { objectsToString } from "../../utils";
import type { AvatarProps } from "../../types";

const props = withDefaults(defineProps<AvatarProps>(), {
  variant: "circular",
  size: "md",
  withBorder: false,
  color: "dark",
});

const { base, borderColor, sizes, variants } = avatar;

const avatarVariant = objectsToString(variants[props.variant]);
const avatarSize = objectsToString(sizes[props.size]);
const avatarBorderColor = objectsToString(borderColor[props.color]);

const classes = computed(() => {
  return twMerge(
    classNames(objectsToString(base.initial), avatarVariant, avatarSize, {
      [objectsToString(base.withBorder)]: props.withBorder,
      [avatarBorderColor]: props.withBorder,
    })
  );
});
</script>
