<script lang="ts" setup>
import { Button, Card, CardBody, CardFooter, Typography } from "./index";
</script>

<template>
  <div class="max-w-[1200px] mx-auto pt-20">
    <Card class="mt-6 w-96">
      <CardBody>
        <Typography variant="h5" className="mb-2">
          UI/UX Review Check
        </Typography>
        <Typography>
          The place is close to Barceloneta Beach and bus stop just 2 min by
          walk and near to &quot;Naviglio&quot; where you can enjoy the main
          night life in Barcelona.
        </Typography>
      </CardBody>
      <CardFooter class="pt-0">
        <Button>Read More</Button>
      </CardFooter>
    </Card>
  </div>
</template>
