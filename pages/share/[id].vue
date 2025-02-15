<template>
  <div class="container p-8 mx-auto">
    <div class="flex justify-between items-center mb-6">
      <h1 class="text-3xl font-bold">Shared Resume</h1>
      <NuxtLink :to="`/${resumeId}/edit`" class="px-4 py-2 text-white bg-blue-500 rounded hover:bg-blue-600">
        Edit Resume
      </NuxtLink>
    </div>

    <div class="p-6 mx-auto max-w-3xl rounded border">
      <div class="max-w-none prose" v-html="renderedMarkdown"></div>
    </div>
  </div>
</template>

<script setup>
import { marked } from "marked";
import { useResume } from "../../composables/useResume";
import { computed } from "vue";

const route = useRoute();
const resumeId = route.params.id;

const { resume, fetchResume } = useResume();

// Fetch on page load
await fetchResume();

const renderedMarkdown = computed(() => {
  return marked(resume.value?.content || "");
});
</script>
