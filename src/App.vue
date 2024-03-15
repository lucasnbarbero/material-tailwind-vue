<script lang="ts" setup>
import { Button } from "./index";
</script>

<template>
  <div class="max-w-[1200px] mx-auto pt-20">
    <div class="grid grid-cols-4">
      <div class="flex flex-col items-center gap-4">
        <Button variant="filled" v-ripple color="white"> Mi boton </Button>
        <Button variant="filled" v-ripple color="blue"> Mi boton </Button>
        <Button variant="filled" v-ripple color="dark"> Mi boton </Button>
        <Button variant="filled" v-ripple color="gray"> Mi boton </Button>
        <Button variant="filled" v-ripple color="green"> Mi boton </Button>
        <Button variant="filled" v-ripple color="pink"> Mi boton </Button>
        <Button variant="filled" v-ripple color="purple"> Mi boton </Button>
        <Button variant="filled" v-ripple color="red"> Mi boton </Button>
        <Button variant="filled" v-ripple color="yellow"> Mi boton </Button>
      </div>
      <div class="flex flex-col items-center gap-4">
        <Button variant="gradient" v-ripple color="white"> Mi boton </Button>
        <Button variant="gradient" v-ripple color="blue"> Mi boton </Button>
        <Button variant="gradient" v-ripple color="dark"> Mi boton </Button>
        <Button variant="gradient" v-ripple color="gray"> Mi boton </Button>
        <Button variant="gradient" v-ripple color="green"> Mi boton </Button>
        <Button variant="gradient" v-ripple color="pink"> Mi boton </Button>
        <Button variant="gradient" v-ripple color="purple"> Mi boton </Button>
        <Button variant="gradient" v-ripple color="red"> Mi boton </Button>
        <Button variant="gradient" v-ripple color="yellow"> Mi boton </Button>
      </div>
      <div class="flex flex-col items-center gap-4">
        <Button variant="outlined" v-ripple color="white"> Mi boton </Button>
        <Button variant="outlined" v-ripple color="blue"> Mi boton </Button>
        <Button variant="outlined" v-ripple color="dark"> Mi boton </Button>
        <Button variant="outlined" v-ripple color="gray"> Mi boton </Button>
        <Button variant="outlined" v-ripple color="green"> Mi boton </Button>
        <Button variant="outlined" v-ripple color="pink"> Mi boton </Button>
        <Button variant="outlined" v-ripple color="purple"> Mi boton </Button>
        <Button variant="outlined" v-ripple color="red"> Mi boton </Button>
        <Button variant="outlined" v-ripple color="yellow"> Mi boton </Button>
      </div>
      <div class="flex flex-col items-center gap-4">
        <Button variant="text" v-ripple color="white"> Mi boton </Button>
        <Button variant="text" v-ripple color="blue"> Mi boton </Button>
        <Button variant="text" v-ripple color="dark"> Mi boton </Button>
        <Button variant="text" v-ripple color="gray"> Mi boton </Button>
        <Button variant="text" v-ripple color="green"> Mi boton </Button>
        <Button variant="text" v-ripple color="pink"> Mi boton </Button>
        <Button variant="text" v-ripple color="purple"> Mi boton </Button>
        <Button variant="text" v-ripple color="red"> Mi boton </Button>
        <Button variant="text" v-ripple color="yellow"> Mi boton </Button>
      </div>
    </div>
  </div>
</template>
