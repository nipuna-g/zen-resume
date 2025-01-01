export default function Home() {
  const { name, email, phone, address, summary, skills, experience, education } = {
    name: "John Doe",
    email: "john.doe@example.com",
    phone: "123-456-7890",
    address: "123 Main St, Anytown, USA",
    summary: "A highly skilled software engineer with a passion for building web applications.",
    skills: ["JavaScript", "React", "Node.js", "HTML", "CSS"],
    experience: [
      {
        company: "Tech Solutions",
        position: "Software Engineer",
        startDate: "2020-01-01",
        endDate: "2021-12-31",
        description: "Developed and maintained web applications using React and Node.js.",
      },
      {
        company: "Innovative Tech",
        position: "Frontend Developer",
        startDate: "2019-05-01",
        endDate: "2020-04-30",
        description: "Worked on the development of a responsive web application using React.",
      },
    ],
    education: [
      {
        institution: "University of Technology",
        degree: "Bachelor of Science in Computer Science",
        startDate: "2015-09-01",
        endDate: "2019-05-15",
        description: "Graduated with a 3.8 GPA.",
      },
    ],
  };
  return (
    <div className="">
      <main className="flex gap-8">
        <div className="flex flex-1 flex-col gap-4">
          <h1>Edit Resume</h1>
          <label htmlFor="name">Name</label>
          <input type="text" id="name" value={name} />
        </div>
        <div className="flex flex-1 flex-col gap-4">
          <h2>Resume</h2>

          {/* Profile information */}
          <div className="flex flex-col gap-4">
            <div className="flex gap-2">
              <span className="font-bold">Name</span>
              <span>{name}</span>
            </div>
            <div className="flex gap-2">
              <span className="font-bold">Email</span>
              <span>{email}</span>
            </div>
            <div className="flex gap-2">
              <span className="font-bold">Phone</span>
              <span>{phone}</span>
            </div>
            <div className="flex gap-2">
              <span className="font-bold">Address</span>
              <span>{address}</span>
            </div>
          </div>

          {/* Work Experience */}
          <div className="flex flex-col gap-4">
            <h2 className="font-bold text-lg">Work Experience</h2>
            {experience.map((exp) => (
              <div className="flex flex-col gap-2">
                <span className="font-bold">{exp.company}</span>
                <span>{exp.position}</span>
              </div>
            ))}
          </div>
        </div>
      </main>
    </div>
  );
}
