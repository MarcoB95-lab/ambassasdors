import React from "react";

interface HomePageProps {
  featuredJob: any;
  jobs: any[];
}

// Add this sample data to your index.page file
const featuredJob = {
    title: "Software Engineer",
    description: "A software engineer with 3+ years of experience in web development.",
  };
  
  const jobs = [
    {
      title: "Frontend Developer",
      description: "A frontend developer with experience in React and Vue.js.",
    },
    {
      title: "Backend Developer",
      description: "A backend developer with experience in Node.js and Django.",
    },
  ];

const HomePage: React.FC<HomePageProps> = ({ featuredJob, jobs }) => {
  return (
    <div className="container mx-auto px-4">
      <div className="mt-8">
        <input
          type="text"
          className="w-full px-4 py-2 text-xl rounded-lg border-gray-300 focus:outline-none focus:ring"
          placeholder="Search jobs..."
        />
      </div>
      <div className="mt-8">
        <h2 className="text-4xl font-bold">Featured Job</h2>
        <div className="border p-4 mt-4 rounded-lg">
          <h3 className="text-2xl font-semibold">{featuredJob.title}</h3>
          <p className="mt-2">{featuredJob.description}</p>
        </div>
      </div>
      <div className="mt-8">
        <h2 className="text-4xl font-bold">All Jobs</h2>
        {jobs.map((job, index) => (
          <div key={index} className="border p-4 mt-4 rounded-lg">
            <h3 className="text-2xl font-semibold">{job.title}</h3>
            <p className="mt-2">{job.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default HomePage;
