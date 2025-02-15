<template>
  <div v-if="isOpen" class="flex fixed inset-0 justify-center items-center bg-black bg-opacity-50">
    <div class="p-6 w-96 bg-white rounded-lg shadow-lg">
      <h2 class="mb-4 text-xl font-bold">Share Resume</h2>
      <div class="mb-4">
        <p class="mb-2 text-sm text-gray-600">Share this link with others to get feedback:</p>
        <div class="flex gap-2">
          <input ref="linkInput" type="text" :value="shareLink" readonly class="p-2 w-full bg-gray-50 rounded border" />
          <button @click="copyLink" class="px-4 py-2 text-white bg-blue-500 rounded hover:bg-blue-600">Copy</button>
        </div>
      </div>
      <button @click="$emit('close')" class="px-4 py-2 mt-4 w-full text-gray-800 bg-gray-200 rounded hover:bg-gray-300">
        Close
      </button>
    </div>
  </div>
</template>

<script setup>
const props = defineProps({
  isOpen: Boolean,
  resumeId: String,
});

defineEmits(["close"]);

const linkInput = ref(null);
const shareLink = computed(() => {
  return `${window.location.origin}/share/${props.resumeId}`;
});

const copyLink = () => {
  linkInput.value.select();
  document.execCommand("copy");
  alert("Link copied to clipboard!");
};
</script>
