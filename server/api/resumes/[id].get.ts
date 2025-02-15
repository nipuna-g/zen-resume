export default defineEventHandler(async (event) => {
  const id = event.context.params?.id;

  const resume = {
    content: `# John Doe
## Software Developer

### Experience
- **Company Name** (2021-Present)
  - Developed web applications
  - Led team projects`,
  };

  return resume;
});
