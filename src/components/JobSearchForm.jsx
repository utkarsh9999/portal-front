import React from "react";
import Select from "react-select";
import CreatableSelect from "react-select/creatable";
import { FaSearch } from "react-icons/fa";
import "../components/styles/Style.css";

export const JobSearchForm = () => {
  const expYears = Array.from({ length: 10 }, (_, i) => ({
    value: `${i + 1}`,
    label: `${i + 1} ${i === 0 ? "Year" : "Years"}`,
  })).concat({ value: "10", label: "10+ Years" });

  const locations = [
      {
        label: "India",
        options: [
          "Remote", "Bangalore", "Hyderabad", "Pune", "Chennai",
          "Mumbai", "Delhi", "Gurgaon", "Noida", "Kolkata",
          "Ahmedabad", "Indore", "Jaipur", "Coimbatore", "Bhubaneswar",
          "Trivandrum", "Visakhapatnam", "Chandigarh", "Lucknow",
          "Nagpur", "Kochi",

          // Additional IT Hubs and Emerging Tech Cities
          "Mysore", "Vadodara", "Surat", "Bhopal", "Raipur",
          "Patna", "Ranchi", "Dehradun", "Vijayawada", "Goa",
          "Gwalior", "Jodhpur", "Madurai", "Varanasi", "Udaipur",
          "Ludhiana", "Kanpur", "Gandhinagar", "Shimla", "Agra"
        ].map(city => ({ value: city.toLowerCase(), label: city }))
      }
    ];

  const jobDesignations = [
  // Tech Job Designations
      "Software Engineer", "Full Stack Developer", "Backend Developer",
      "Frontend Developer", "DevOps Engineer", "Cloud Engineer",
      "Data Engineer", "Database Administrator", "Security Engineer",
      "Machine Learning Engineer", "AI Engineer", "Data Scientist",
      "QA Engineer", "Mobile Developer", "UI/UX Designer",
      "Systems Analyst", "Technical Support Engineer", "Network Engineer",
      "Software Architect", "IT Project Manager", "Product Manager",
      "Chief Technology Officer (CTO)", "Chief Information Officer (CIO)",
      "Blockchain Developer", "Embedded Software Engineer",
      "Site Reliability Engineer (SRE)",

      // Mechanical Engineering Job Designations
      "Mechanical Engineer", "Design Engineer", "Manufacturing Engineer",
      "Production Engineer", "Quality Engineer", "Automotive Engineer",
      "Aerospace Engineer", "HVAC Engineer", "Structural Engineer",
      "Piping Engineer", "Maintenance Engineer", "Power Plant Engineer",
      "Industrial Engineer", "Tooling Engineer", "Process Engineer",
      "Robotics Engineer", "Mechatronics Engineer", "Energy Engineer",
      "Reliability Engineer", "Thermal Engineer", "R&D Engineer",
      "Metallurgical Engineer", "Marine Engineer", "Railway Engineer",
      "Additive Manufacturing Engineer", "Material Science Engineer"
    ].map(role => ({ value: role.toLowerCase().replace(/ /g, "_"), label: role }));


  const techSkills = [
    "React.js", "Node.js", "Express.js", "Next.js", "Angular", "Vue.js", "Redux",
      "Socket.io", "MongoDB", "MySQL", "PostgreSQL", "Firebase", "GraphQL", "Docker",
      "Kubernetes", "Azure", "AWS", "GCP", "Spring Boot", "Java", "Python",
      "TypeScript", "JavaScript", "HTML5", "CSS3", "SASS", "Bootstrap", "Tailwind CSS",
      "Jest", "Cypress", "CI/CD Pipelines", "Git", "GitHub", "Bitbucket", "Jenkins",
      "Terraform", "Ansible", "Nginx", "Apache", "Linux", "Bash Scripting",
      "PowerShell", "Elasticsearch", "Apache Kafka", "RabbitMQ", "Redis",
      "Supabase", "Figma", "Postman", "Swagger",

      // Mechanical Engineering Skills
      "SolidWorks", "AutoCAD", "CATIA", "ANSYS", "Fusion 360", "PTC Creo",
      "MATLAB", "Simulink", "FEA", "CFD", "3D Printing", "GD&T", "Thermodynamics",
      "Fluid Mechanics", "Heat Transfer", "HVAC Design", "Manufacturing Processes",
      "Material Science", "Mechanisms Design", "Vibrations Analysis", "Finite Element Method",
      "Robotics", "Mechatronics", "Embedded Systems", "Control Systems", "PLC Programming",
      "Lean Manufacturing", "Six Sigma", "Quality Control", "Reliability Engineering",
      "Measuring Instruments", "CNC Programming", "Injection Molding", "Welding Processes",
      "Pneumatics", "Hydraulics", "Power Plant Engineering", "Automotive Engineering",
      "Aerospace Engineering", "Energy Systems", "Renewable Energy", "Structural Analysis",
      "Engineering Drawing", "Product Design", "Failure Analysis", "Additive Manufacturing",
      "Computational Mechanics"
  ].map(skill => ({ value: skill.toLowerCase().replace(/ /g, "_"), label: skill }));

  return (
    <div className="row justify-content-center">
      <div className="col-lg-4 col-md-4 col-sm-12 mb-2 p-0">
        <Select
            id="selec1"
          className="w-100"
          placeholder="Designation"
          styles={{ control: base => ({ ...base, borderRadius: 0,
              border:"0px solid white",
              fontWeight:"bold",
              minWidth: "100%" }) }}
          options={jobDesignations}
        />
      </div>
      <div className="col-lg-4 col-md-4 col-sm-12 mb-2 p-0">
        <Select
            id="selec2"
          className="w-100 selec"
          placeholder="Experience"
          styles={{ control: base => ({ ...base,
              borderRadius: 0,
              border:"0px solid white",
              fontWeight:"bold",
              minWidth: "100%" }) }}
          options={expYears}
        />
      </div>
      <div className="col-lg-4 col-md-4 col-sm-12 mb-2 p-0">
        <Select
            id="selec3"
          className="w-100 selec"
          placeholder="Location"
          styles={{ control: base => ({ ...base, borderRadius: 0,
              border:"0px solid white",
              fontWeight:"bold",
              minWidth: "100%" }) }}
          options={locations}
        />
      </div>
      <div className="col-12 p-0 mt-2">
        <CreatableSelect
          placeholder="Skills"
          isMulti
          options={techSkills}
          styles={{ control: base => ({ ...base, minHeight: "50px",
              fontWeight:"bold",
              height: "50px", overflowY: "scroll" }) }}
        />
      </div>
      <div className="col-12 p-0 mt-3 text-end">
        <button className="btn btn-primary shd">
          <FaSearch className="mb-1" /> Search
        </button>
      </div>
    </div>
  );
};
