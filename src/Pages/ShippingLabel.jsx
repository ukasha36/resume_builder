import { jsPDF } from "jspdf";
import Sample from "./sample.jpg";
import Address from "./address.jpg";
import Call from "./call.jpg";
import Email from "./mail.jpg";

const ShippingLabel = () => {
  const createPDF = async () => {
    const pdf = new jsPDF("portrait", "pt", "a4");
    const data = await document.querySelector("#pdf");
    pdf.html(data).then(() => {
      pdf.save("shipping_label.pdf");
    });
  };

  const getResumeData = () => {
    
  };
  return (
    <section className="mt-[80px]">
      <div className="shipping w-[595px] h-[842px] ">
        <div className="pdf border-[10px] border-blue-950 px-5" id="pdf">
          {" "}
          <div className="main flex flex-row justify-between items-center p-1">
            <div className="resumeName text-[20px] text-blue-950 p-[10px] w-[400px]  ">
              Umar Aziz
              <h2 className="text-[16px] uppercase text-blue-700">
                Frontend Developer
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
          <div className="context text-[15px] w-[550px] p-1 text-gray-700">
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Mollitia
            voluptatem illo nostrum velit quis incidunt architecto delectus
            dolorum rem sequi.
          </div>
          <div className=" h-auto bg-blue-950 p-1 rounded-md text-center py-[10px] px-[5px] mt-[10px] mb-[10px]">
            <ul className="flex flex-wrap text-white justify-between items-center ">
              <li className="flex gap-x-2 items-center">
                <img
                  src={Call}
                  alt=""
                  className="w-[25px] bg-white rounded-[25px] p-1 "
                />
                033333333
              </li>
              <li className="flex gap-x-2 ">
                <img
                  src={Email}
                  alt=""
                  className="w-[25px] bg-white rounded-[25px] p-1 "
                />
                abc@gmail.com
              </li>
              <li className="flex gap-x-2 ">
                <img
                  src={Address}
                  alt=""
                  className="w-[25px] bg-white rounded-[25px] p-1 "
                />
                abc rorr ssddd
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
                <li className="bg-blue-950 text-white px-4 py-2 rounded-md">
                  React
                </li>
                <li className="bg-blue-950 text-white px-4 py-2 rounded-md">
                  Vue
                </li>
                <li className="bg-blue-950 text-white px-4 py-2 rounded-md">
                  Vue
                </li>
                <li className="bg-blue-950 text-white px-4 py-2 rounded-md">
                  Vue
                </li>
                <li className="bg-blue-950 text-white px-4 py-2 rounded-md">
                  Vue
                </li>
                <li className="bg-blue-950 text-white px-4 py-2 rounded-md">
                  Vue
                </li>
                <li className="bg-blue-950 text-white px-4 py-2 rounded-md">
                  Vue
                </li>
                <li className="bg-blue-950 text-white px-4 py-2 rounded-md">
                  Vue
                </li>
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
                <h1 className="text-[18px] text-gray-900 uppercase">
                  Company Name
                </h1>
              </div>
              <div className=" flex gap-x-5 items-center">
                <h2 className="text-[18px] uppercase text-gray-700">Role</h2>
                <h4 className="text-[15px] uppercase text-gray-400">3/33/3</h4>
              </div>
              <ul className="text-[16px] uppercase text-gray-600 list-disc">
                <li>one</li>
                <li>two</li>
              </ul>
            </div>
          </div>
          <div className="education p-1">
            <div className="heading">
              <h1 className="text-[20px] text-gray-900 uppercase font-bold">
                Education
              </h1>
            </div>
            <div className="">
              <div className="heading">
                <h1 className="text-[19px] text-gray-900 uppercase">SMIU</h1>
              </div>
              <div className=" flex gap-x-5 items-center">
                <h2 className="text-[18px] uppercase text-gray-700">Degree</h2>
                <h4 className="text-[15px] uppercase text-gray-400">3/33/3</h4>
              </div>
            </div>
          </div>
          <div className="social">
            <div className="heading">
              <h1 className="text-[20px] text-gray-900 capitalize font-bold">
                Social Links
              </h1>
            </div>
            <ul>
              <li></li>
            </ul>
          </div>
          <button
            onClick={createPDF}
            type="button"
            className="bg-blue-950 text-white px-4 py-1 rounded-md mb-4 mt-2"
          >
            Download
          </button>
        </div>
      </div>
    </section>
  );
};

export default ShippingLabel;
