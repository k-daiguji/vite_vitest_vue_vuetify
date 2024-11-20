<script setup lang="ts">
import { ref } from "vue";

import { ICON, Icon, Section, Sections, Switch } from "@/base";

const enabled = ref(true);
const activeTitle = ref("Title 1");
const sections = [
  { title: "Title 1", body: 1 },
  { title: "Title 2", body: 2 },
  { title: "Title 3", body: 3 },
];
</script>

<template>
  <Switch v-model="enabled" />
  <Icon
    :icon="ICON.CLOSE"
    @clicked="console.log('clicked1')"
  />
  <Icon
    :enabled
    :icon="ICON.COPY"
    @clicked="console.log('clicked2')"
  />
  <Sections
    class="mt-5"
    :active-title
    :enabled
    @switched="activeTitle = $event"
  >
    <Section
      v-for="{ title, body } in sections"
      :key="title"
      :title
    >
      <div>{{ body }}</div>
    </Section>
  </Sections>
</template>
