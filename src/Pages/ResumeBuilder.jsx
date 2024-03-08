import React, { useState } from "react";
import RequiredStar from "../Components/RequiredStar";
import BlueCircle from "../Components/BlueCircle";
import PurpleCircle from "../Components/PurpleCircle";
import { FaGithub, FaLinkedin, FaTwitter } from "react-icons/fa";
import OrangeCircleBg from "../Components/OrangeCircleBg";
import { toast } from "react-toastify";

const ResumeBuilder = () => {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    title: "",
    description: "",
    phone: "+92",
    email: "",
    city: "",
    country: "",
    zipCode: "",
    socials: {},
    skills: [],
    // education: [{ degree: "", inst: "", year: "" }],
    eduDegree: "",
    eduInst: "",
    eduYear: "",
    workCompany: "",
    workRole: "",
    workResponsibility: "",
    workDuration: "",
  });
  const [socialLinks, setSocialLinks] = useState({
    twitter: "",
    github: "",
    linkedin: "",
  });

  const [skill, setSkill] = useState("");

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSocialLinks = (e) => {
    const { name, value } = e.target;
    setSocialLinks({
      ...socialLinks,
      [name]: value,
    });
  };

  const handleAddSkill = () => {
    if (!skill) {
      return;
    }
    const prevSkills = formData.skills;
    prevSkills.push(skill);
    setFormData({
      ...formData,
      socials: prevSkills,
    });
    setSkill("");
  };

  const handleRemoveSkill = (index) => {
    const prevSkills = formData.skills;
    prevSkills.splice(index, 1);

    setFormData({
      ...formData,
      socials: prevSkills,
    });
  };

  const saveDetails = (e) => {
    e.preventDefault();

    if (
      !formData.firstName ||
      !formData.title ||
      !formData.phone ||
      !formData.email ||
      !formData.description ||
      !formData.city ||
      !formData.country ||
      !formData.zipCode ||
      !formData.eduDegree ||
      !formData.eduInst ||
      !formData.eduYear ||
      !formData.workCompany ||
      !formData.workRole ||
      !formData.workResponsibility ||
      !formData.workDuration
    ) {
      return toast.error("Please fill all fields");
    }

    if (formData.skills.length === 0) {
      return toast.warning("Please provide atleast one skill");
    }

    formData.socials = socialLinks;
    console.log(formData);

    localStorage.setItem("resumeData", JSON.stringify(formData));

    return toast.success("asas");
  };

  return (
    <section className="min-h-screen w-full flex justify-center items-center pt-[80px]">
      <div className="absolute top-[60%] left-[50%]">
        <OrangeCircleBg />
      </div>
      <div className="relative glassy p-4 rounded-3xl w-full mx-5">
        <BlueCircle />
        <PurpleCircle />
        <h1 className="text-[26px] text-center font-bold capitalize mb-10 text-primary">
          Provide your details
        </h1>
        <form onSubmit={saveDetails}>
          <div>
            <h2 className="text-secondary text-[24px] my-5">
              Personal Details
            </h2>

            <div className="grid md:grid-cols-2 grid-cols-1 gap-x-3 gap-y-4">
              <div className="flex flex-col gap-1">
                <label htmlFor="firstName" className="theme-text">
                  First Name: <RequiredStar />
                </label>
                <input
                  required
                  value={formData.firstName}
                  type="text"
                  name="firstName"
                  onChange={handleInputChange}
                  autoFocus={true}
                  className="input"
                />
              </div>

              <div className="flex flex-col gap-1">
                <label htmlFor="firstName" className="theme-text">
                  Last Name:
                </label>
                <input
                  value={formData.lastName}
                  type="text"
                  name="lastName"
                  onChange={handleInputChange}
                  className="input"
                />
              </div>

              <div className="flex flex-col gap-1">
                <label htmlFor="firstName" className="theme-text">
                  Tilte: <RequiredStar />
                </label>
                <input
                  required
                  value={formData.title}
                  type="text"
                  name="title"
                  onChange={handleInputChange}
                  className="input"
                />
              </div>

              <div className="flex flex-col gap-1">
                <label htmlFor="firstName" className="theme-text">
                  Phone: <RequiredStar />
                </label>
                <input
                  required
                  value={formData.phone}
                  type="text"
                  name="phone"
                  onChange={handleInputChange}
                  className="input"
                />
              </div>

              <div className="flex flex-col gap-1">
                <label htmlFor="firstName" className="theme-text">
                  Email: <RequiredStar />
                </label>
                <input
                  required
                  value={formData.email}
                  type="text"
                  name="email"
                  onChange={handleInputChange}
                  className="input"
                />
              </div>

              <div className="flex flex-col gap-1 md:col-span-2 col-span-1">
                <label htmlFor="firstName" className="theme-text">
                  Description: <RequiredStar />{" "}
                  <span className="font-light text-[12px] text-secondary">
                    (max 50 characters)
                  </span>
                </label>
                <textarea
                  value={formData.description}
                  type="text"
                  name="description"
                  onChange={handleInputChange}
                  className="input"
                />
              </div>
            </div>
          </div>

          <div>
            <h2 className="text-secondary text-[24px] my-5">Address Details</h2>

            <div className="grid md:grid-cols-2 grid-cols-1 gap-x-3 gap-y-4">
              <div className="flex flex-col gap-1">
                <label htmlFor="firstName" className="theme-text">
                  City: <RequiredStar />
                </label>
                <input
                  required
                  value={formData.city}
                  type="text"
                  name="city"
                  onChange={handleInputChange}
                  className="input"
                />
              </div>

              <div className="flex flex-col gap-1">
                <label htmlFor="firstName" className="theme-text">
                  Country: <RequiredStar />
                </label>
                <input
                  required
                  value={formData.country}
                  type="text"
                  name="country"
                  onChange={handleInputChange}
                  className="input"
                />
              </div>

              <div className="flex flex-col gap-1">
                <label htmlFor="firstName" className="theme-text">
                  ZIP/Postal Code: <RequiredStar />
                </label>
                <input
                  required
                  value={formData.zipCode}
                  type="text"
                  name="zipCode"
                  onChange={handleInputChange}
                  className="input"
                />
              </div>
            </div>
          </div>

          <div>
            <h2 className="text-secondary text-[24px] my-5">Social Links</h2>

            <div className="flex flex-wrap gap-x-3 gap-y-4">
              <div className="flex items-center gap-1">
                <label htmlFor="" className="theme-text text-[22px]">
                  <FaTwitter className="inline-block" /> : &nbsp;
                </label>
                <input
                  type="text"
                  name="twitter"
                  onChange={handleSocialLinks}
                  className="input"
                />
              </div>

              <div className="flex items-center gap-1">
                <label htmlFor="" className="theme-text text-[22px]">
                  <FaLinkedin className="inline-block" /> : &nbsp;
                </label>
                <input
                  type="text"
                  name="linkedin"
                  onChange={handleSocialLinks}
                  className="input"
                />
              </div>

              <div className="flex items-center gap-1">
                <label htmlFor="" className="theme-text text-[22px]">
                  <FaGithub className="inline-block" /> : &nbsp;
                </label>
                <input
                  type="text"
                  name="github"
                  onChange={handleSocialLinks}
                  className="input"
                />
              </div>
            </div>
          </div>

          <div>
            <h2 className="text-secondary text-[24px] my-5">Skills </h2>

            <div className="flex flex-col gap-1">
              <label htmlFor="" className="theme-text">
                Add SKill
              </label>
              <div className="flex gap-3">
                <input
                  value={skill}
                  type="text"
                  name="twitter"
                  onChange={(e) => setSkill(e.target.value)}
                  className="input w-full"
                />
                <button
                  className="bg-primary theme-text px-4 rounded-lg"
                  type="button"
                  onClick={handleAddSkill}
                >
                  Add
                </button>
              </div>
            </div>

            <div className="flex flex-wrap gap-2 my-3">
              {formData?.skills?.map((skill, key) => (
                <div
                  key={key}
                  className="bg-primary theme-text px-4 py-2 rounded-md cursor-pointer"
                  onDoubleClick={() => handleRemoveSkill(key)}
                >
                  {skill}
                </div>
              ))}
            </div>
          </div>

          <div>
            <h2 className="text-secondary text-[24px] my-5">
              Educational Details
            </h2>

            <div className="grid md:grid-cols-2 grid-cols-1 gap-x-3 gap-y-4">
              <div className="flex flex-col gap-1">
                <label htmlFor="firstName" className="theme-text">
                  Degree Title: <RequiredStar />
                </label>
                <input
                  required
                  value={formData.eduDegree}
                  type="text"
                  name="eduDegree"
                  onChange={handleInputChange}
                  className="input"
                />
              </div>

              <div className="flex flex-col gap-1">
                <label htmlFor="firstName" className="theme-text">
                  Institute: <RequiredStar />
                </label>
                <input
                  required
                  value={formData.eduInst}
                  type="text"
                  name="eduInst"
                  onChange={handleInputChange}
                  className="input"
                />
              </div>

              <div className="flex flex-col gap-1">
                <label htmlFor="firstName" className="theme-text">
                  Passing Year: <RequiredStar />
                </label>
                <input
                  required
                  value={formData.eduYear}
                  type="date"
                  name="eduYear"
                  onChange={handleInputChange}
                  className="input"
                />
              </div>
            </div>
          </div>

          <div>
            <h2 className="text-secondary text-[24px] my-5">Working Details</h2>

            <div className="grid md:grid-cols-2 grid-cols-1 gap-x-3 gap-y-4">
              <div className="flex flex-col gap-1">
                <label htmlFor="firstName" className="theme-text">
                  Company : <RequiredStar />
                </label>
                <input
                  required
                  value={formData.workCompany}
                  type="text"
                  name="workCompany"
                  onChange={handleInputChange}
                  className="input"
                />
              </div>

              <div className="flex flex-col gap-1">
                <label htmlFor="firstName" className="theme-text">
                  Role: <RequiredStar />
                </label>
                <input
                  required
                  value={formData.workRole}
                  type="text"
                  name="workRole"
                  onChange={handleInputChange}
                  className="input"
                />
              </div>

              <div className="flex flex-col gap-1">
                <label htmlFor="firstName" className="theme-text">
                  Responsibility: <RequiredStar />{" "}
                </label>
                <input
                  required
                  value={formData.workResponsibility}
                  type="text"
                  name="workResponsibility"
                  onChange={handleInputChange}
                  className="input"
                />
              </div>

              <div className="flex flex-col gap-1">
                <label htmlFor="firstName" className="theme-text">
                  Duration: <RequiredStar />
                  <span className="font-light text-[12px] text-secondary">
                    (in month or years)
                  </span>
                </label>
                <input
                  required
                  value={formData.workDuration}
                  type="text"
                  name="workDuration"
                  onChange={handleInputChange}
                  className="input"
                />
              </div>
            </div>
          </div>

          <div className="w-full flex justify-center mt-5">
            <button
              type="submit"
              className="theme-btn font-bold px-4 py-2 rounded-lg transition-all duration-300"
            >
              Create Resume
            </button>
          </div>
        </form>
      </div>
    </section>
  );
};

export default ResumeBuilder;
