import { jsPDF } from "jspdf";
import Sample from "./sample.jpg";
import Address from "./address.jpg";
import Call from "./call.jpg";
import Email from "./mail.jpg";
import { useEffect, useState } from "react";

const ShippingLabel = () => {
  const [resumeData, setResumeData] = useState(false);

  const createPDF = async () => {
    const pdf = new jsPDF("portrait", "pt", "a4");
    const data = await document.querySelector("#pdf");
    pdf.html(data).then(() => {
      pdf.save("shipping_label.pdf");
    });
  };

  const getResumeData = () => {
    const resumeDataLocal = localStorage.getItem("resumeData");
    setResumeData(JSON.parse(resumeDataLocal));
  };

  useEffect(() => {
    getResumeData();
  }, []);

  console.log(resumeData);

  return (
    <section className="mt-[80px]">
      <div className="shipping w-[595px] h-[842px] ">
        <div className="pdf border-[10px] border-blue-950 px-5" id="pdf">
          {" "}
          <div className="main flex flex-row justify-between items-center p-1">
            <div className="resumeName text-[20px] text-blue-950 p-[10px] w-[400px]  ">
              {resumeData.firstName + " " + resumeData.lastName}
              <h2 className="text-[16px] capitalize text-blue-700">
                {resumeData.title}
              </h2>
            </div>
            <div>
              <img
                src={Sample}
                alt="Barcode"
                className=" object-contain w-[50px] rounded-[50px] border-2 border-blue-950 "
              />
            </div>
          </div>
          <div className="context text-[15px] w-[550px] p-1 text-gray-700 text-[14px]">
            {resumeData.description}
          </div>
          <div className=" h-auto bg-blue-950 p-1 rounded-md text-center py-[10px] px-[5px] mt-[10px] mb-[10px]">
            <ul className="flex flex-wrap text-white justify-between items-center gap-2 ">
              <li className="flex gap-x-2 items-center">
                <img
                  src={Call}
                  alt=""
                  className="w-[25px] bg-white rounded-[25px] p-1 "
                />
                {resumeData.phone}
              </li>
              <li className="flex gap-x-2 ">
                <img
                  src={Email}
                  alt=""
                  className="w-[25px] bg-white rounded-[25px] p-1 "
                />
                {resumeData.email}
              </li>
              <li className="flex gap-x-2 ">
                <img
                  src={Address}
                  alt=""
                  className="w-[25px] bg-white rounded-[25px] p-1 "
                />
                {resumeData.city +
                  ", " +
                  resumeData.country +
                  ", " +
                  resumeData.zipCode}
              </li>
            </ul>
          </div>
          <div className="skills flex flex-col p-1">
            <div className="heading">
              <h1 className="text-[20px] text-gray-900 capitalize pb-3 font-bold ">
                Skills
              </h1>
            </div>
            <div>
              <ul className="flex flex-wrap gap-x-4 gap-y-2 text-gray-700">
                {resumeData?.skills?.map((skill, key) => (
                  <li
                    key={key}
                    className="bg-blue-950 text-white px-4 py-2 rounded-md"
                  >
                    {skill}
                  </li>
                ))}
              </ul>
            </div>
          </div>
          <div className="work-experience p-1">
            <div className="heading">
              <h1 className="text-[20px] text-gray-900 uppercase font-bold ">
                Work Experience
              </h1>
            </div>
            <div className="">
              <div className="heading">
                <h1 className="text-gray-900 uppercase">
                  {resumeData.workCompany}
                </h1>
              </div>
              <div className=" flex gap-x-5 items-center">
                <h2 className=" capitalize text-gray-700">
                  {resumeData.workRole}
                </h2>
              </div>
              <div className=" flex gap-x-5 items-center">
                <h2 className=" capitalize text-gray-700">
                  {resumeData.workResponsibility}
                </h2>
              </div>
              <div className=" flex gap-x-5 items-center">
                <h2 className=" capitalize text-gray-700">
                  {resumeData.workDuration}
                </h2>
              </div>
            </div>
          </div>
          <div className="education p-1">
            <div className="heading">
              <h1 className="text-[20px] text-gray-900 uppercase font-bold">
                Education
              </h1>
            </div>
            <div className="">
              <div className=" flex gap-x-5 items-center">
                <h2 className=" capitalize text-gray-700">
                  {resumeData.eduDegree}
                </h2>
              </div>

              <div className=" flex gap-x-5 items-center">
                <h2 className=" capitalize text-gray-700">
                  {resumeData.eduInst}
                </h2>
              </div>

              <div className=" flex gap-x-5 items-center">
                <h2 className=" capitalize text-gray-700">
                  {resumeData.eduYear}
                </h2>
              </div>
            </div>
          </div>
          <div className="social">
            <div className="heading">
              <h1 className="text-[20px] text-gray-900 capitalize font-bold">
                Social Links
              </h1>
            </div>
            <ul className="mb-5">
              <li className="flex gap-2">
                <h2>Twitter: </h2>
                <p>{resumeData?.socials?.twitter}</p>
              </li>

              <li className="flex gap-2">
                <h2>Linkedin: </h2>
                <p>{resumeData?.socials?.linkedin}</p>
              </li>

              <li className="flex gap-2">
                <h2>Github: </h2>
                <p>{resumeData?.socials?.github}</p>
              </li>
            </ul>
          </div>
        </div>

        <button
          onClick={createPDF}
          type="button"
          className="bg-blue-950 text-white px-4 py-1 rounded-md mb-4 mt-2"
        >
          Download
        </button>
      </div>
    </section>
  );
};

export default ShippingLabel;
