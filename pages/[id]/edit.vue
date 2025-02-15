<template>
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
          v-model="store.resume.content"
          class="w-full h-[600px] p-4 border rounded font-mono"
          placeholder="Write your resume in markdown..."
        />
      </div>

      <!-- Preview -->
      <div class="p-4 rounded border">
        <h2 class="mb-4 text-xl font-semibold">Preview</h2>
        <div class="max-w-none prose prose-sm" v-html="renderedMarkdown"></div>
      </div>
    </div>

    <ShareDialog :is-open="isShareDialogOpen" :resume-id="resumeId" @close="isShareDialogOpen = false" />
  </div>
</template>

<script setup>
import { marked } from "marked";
import { useResume } from "../../composables/useResume";
import { ref, watchEffect, computed, onUnmounted } from "vue";
import { useRoute } from "vue-router";
import { useCollaborativeStore } from "../../composables/useCollaborativeStore";
import { enableVueBindings } from "@syncedstore/core";
import * as Vue from "vue";

enableVueBindings(Vue);

const route = useRoute();
const resumeId = route.params.id;

// Initialize collaborative store
const { store, provider } = useCollaborativeStore(resumeId);
const content = store.resume.content;

// get initial content for resume
const { resume, fetchResume } = useResume();
await fetchResume();
watchEffect(() => {
  if (resume.value?.content && content.length === 0) {
    content.insert(0, resume.value.content);
  }
});

// Update the rendered markdown from the collaborative store
const renderedMarkdown = computed(() => {
  return marked(store.resume.content.toString());
});

const isShareDialogOpen = ref(false);

// Cleanup WebRTC connection when component is destroyed
onUnmounted(() => {
  provider.disconnect();
});
</script>
