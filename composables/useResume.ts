export const useResume = () => {
  const route = useRoute();
  const resume = useState(`resume-${route.params.id}`, () => ({ content: "" }));

  async function fetchResume() {
    const { data } = await useFetch(`/api/resumes/${route.params.id}`);
    if (data.value) {
      resume.value = data.value;
    }
  }

  return {
    resume,
    fetchResume,
  };
};
