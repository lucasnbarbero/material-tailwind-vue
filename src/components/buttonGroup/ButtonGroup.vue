<template>
  <div :class="classes">
    <template v-for="(child, index) in children" :key="index">
      <component
        :is="renderElement(child)"
        :size="size"
        :color="color"
        :variant="variant"
        :fullWidth="fullWidth"
        :class="
          twMerge(
            classNames({
              'rounded-r-none': index !== children?.length! - 1,
              'border-r-0': index !== children?.length! - 1,
              'rounded-l-none': index !== 0,
            }),
          )
        "
      ></component>
    </template>
  </div>
</template>

<script lang="ts" setup>
import { computed, useSlots } from "vue";
import { twMerge } from "tailwind-merge";
import classNames from "classnames";

import { objectsToString, renderElement } from "../../utils";
import { buttonGroup } from "../../theme";
import { ButtonGroupProps } from "../../types";

const slots = useSlots();
const children = slots.default?.();

const props = withDefaults(defineProps<ButtonGroupProps>(), {
  color: "dark",
  fullWidth: false,
  loading: false,
  size: "md",
  variant: "filled",
});

const { base, dividerColor } = buttonGroup;

const classes = computed(() => {
  return twMerge(
    classNames(objectsToString(base.initial), {
      [objectsToString(base.fullWidth)]: props.fullWidth,
      "divide-x": props.variant !== "outlined",
      [dividerColor[props.color]]: props.color,
    })
  );
});
</script>
