<template>
  <EditorProvider>
    <div class="container p-8 mx-auto">
      <div class="flex justify-between items-center mb-6">
        <h1 class="text-3xl font-bold">Resume Editor</h1>
        <button @click="isShareDialogOpen = true" class="px-4 py-2 text-white bg-blue-500 rounded hover:bg-blue-600">
          Share
        </button>
      </div>

      <div class="grid grid-cols-2 gap-8">
        <!-- Markdown Editor -->
        <div class="p-4 rounded border">
          <h2 class="mb-4 text-xl font-semibold">Markdown Editor</h2>
          <textarea
            v-model="localMarkdown"
            class="w-full h-[600px] p-4 border rounded font-mono"
            placeholder="Write your resume in markdown..."
          ></textarea>
        </div>

        <!-- Preview -->
        <div class="p-4 rounded border">
          <h2 class="mb-4 text-xl font-semibold">Preview</h2>
          <div class="max-w-none prose prose-sm" v-html="renderedMarkdown"></div>
        </div>
      </div>

      <ShareDialog :is-open="isShareDialogOpen" :resume-id="resumeId" @close="isShareDialogOpen = false" />
    </div>
  </EditorProvider>
</template>

<script setup>
import { marked } from "marked";
import { useResume } from "../../composables/useResume";
import { ref, watchEffect, computed } from "vue";
import { useRoute } from "vue-router";

const { resume, fetchResume } = useResume();
const route = useRoute();
const resumeId = route.params.id;

// Fetch on page load
await fetchResume();

// Create a local ref for the markdown content
const localMarkdown = ref("");

// Initialize localMarkdown when resume data is loaded
watchEffect(() => {
  if (resume.value?.content) {
    localMarkdown.value = resume.value.content;
  }
});

// Update the rendered markdown from the local value
const renderedMarkdown = computed(() => {
  return marked(localMarkdown.value);
});

const isShareDialogOpen = ref(false);
</script>
