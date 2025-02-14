<template>
  <div class="container mx-auto p-8">
    <h1 class="text-3xl font-bold mb-6">Resume Editor</h1>
    <div class="grid grid-cols-2 gap-8">
      <!-- Markdown Editor -->
      <div class="border rounded p-4">
        <h2 class="text-xl font-semibold mb-4">Markdown Editor</h2>
        <textarea
          v-model="markdown"
          class="w-full h-[600px] p-4 border rounded font-mono"
          placeholder="Write your resume in markdown..."
        ></textarea>
      </div>

      <!-- Preview -->
      <div class="border rounded p-4">
        <h2 class="text-xl font-semibold mb-4">Preview</h2>
        <div class="prose prose-sm max-w-none" v-html="renderedMarkdown"></div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { marked } from "marked";

const markdown = ref(`# John Doe
## Software Developer

### Experience
- **Company Name** (2020-Present)
  - Developed web applications
  - Led team projects
`);

const renderedMarkdown = computed(() => {
  return marked(markdown.value);
});
</script>
