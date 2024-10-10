"use client";

import React, { useRef, useState } from "react";
// @ts-ignore
import html2pdf from 'html2pdf.js';
import Image from "next/image";
import CA from "../Image/CA.jpg";
import letter from "../Image/letter.jpg";
import { MdClose } from "react-icons/md";

const PdfTemplate = () => {
  const printRef = useRef();
  const [openAirPopup, setAirPopup] = useState(false);
  const [eliteId, setEliteId] = useState("");
  const [dateStart, setDateStart] = useState("");
  const [Name, setName] = useState("");
  const [position, setPosition] = useState("");
  const [jobTitle, setJobTitle] = useState("");
  const [duration, setDuration] = useState("");
  const [unpaidDate, setUnpaidDate] = useState("");
  const [ojtStart, setOjtStart] = useState("");
  const [ojtEnd, setOjtEnd] = useState("");
  const [reportingDate, setReportingDate] = useState("");
  const [stipend, setStipend] = useState("");
  const [incentive, setIncentive] = useState("");
  const [report, setReport] = useState("");
  const [fullTime, setFullTime] = useState("");
  const [fixed, setFixed] = useState("");
  const [variable, setVariable] = useState("");
  const [List, setList] = useState([]);

  const addData = () => {
    setList((prevList) => [
      ...prevList,
      {
        dateStart: dateStart,
        name: Name,
        position: position,
        jobTittle: jobTitle,
        duration: duration,
        unpaidDate: unpaidDate,
        eliteId:eliteId,
        ojtStart:ojtStart,
        ojtEnd:ojtEnd,
        reportingDate:reportingDate,
        stipend:stipend,
        incentive:incentive,
        report:report,
        fullTime:fullTime,
        fixed:fixed,
        variable:variable,
      },
    ]);

    // Clear input fields
    setDateStart("");
    setName("");
    setPosition("");
    setJobTitle("");
    setDuration("");
    setUnpaidDate("");
    setEliteId("");
    setOjtStart("");
    setOjtEnd("");
    setReportingDate("");
    setStipend("");
    setIncentive("");
    setReport("");
    setFullTime("");
    setFixed("");
    setVariable("");
    setAirPopup(false);
  };

  const handlePrint = () => {
    const element = printRef.current;

    const options = {
      filename: "document.pdf",
      image: { type: "jpeg", quality: 2.0 },
      html2canvas: { scale: 1 },
      jsPDF: { unit: "in", format: "letter", orientation: "portrait" },
    };

    html2pdf().from(element).set(options).save();
  };

  return (
    <>
      <div className="mx-5">
        <div className="mb-5 p-5 shadow">
          <button
            onClick={handlePrint}
            className="border px-4 rounded mx-5 py-2 fs-5 bg-primary text-white"
          >
            Print PDF
          </button>

          {/* Add Product Button */}
          <button
            className="border px-4 rounded mx-5 py-2 fs-5 bg-primary text-white"
            onClick={() => setAirPopup(true)}
          >
            Add Details
          </button>
        </div>

        {/* Dialog for Adding Product */}
        {openAirPopup && (
          <div className="shadow px-2 py-2">
            <div>
              <div className="title">
                <div className="icon-cross" onClick={() => setAirPopup(false)}>
                  <MdClose style={{ cursor: "pointer", fontSize: "24px" }} />
                </div>
              </div>
            </div>
            <div>
              <div className="container">
                <div className="forms">
                <input
                    type="text"
                    value={eliteId}
                    onChange={(e) => setEliteId(e.target.value)}
                    placeholder="Elite ID"
                  />
                  <input
                    type="text"
                    value={dateStart}
                    onChange={(e) => setDateStart(e.target.value)}
                    placeholder="Date"
                  />
                  <input
                    type="text"
                    value={Name}
                    onChange={(e) => setName(e.target.value)}
                    placeholder="Name"
                  />
                  <input
                    type="text"
                    value={position}
                    onChange={(e) => setPosition(e.target.value)}
                    placeholder="Job Position"
                  />
                  <input
                    type="text"
                    value={jobTitle}
                    onChange={(e) => setJobTitle(e.target.value)}
                    placeholder="Job Title"
                  />
                  <input
                    type="text"
                    value={duration}
                    onChange={(e) => setDuration(e.target.value)}
                    placeholder="Duration of Internship"
                  />
                  <input
                    type="text"
                    value={unpaidDate}
                    onChange={(e) => setUnpaidDate(e.target.value)}
                    placeholder="Unpaid Training Date"
                  />
                  <input
                    type="text"
                    value={ojtStart}
                    onChange={(e) => setOjtStart(e.target.value)}
                    placeholder="OJT Start Date"
                  />
                  <input
                    type="text"
                    value={ojtEnd}
                    onChange={(e) => setOjtEnd(e.target.value)}
                    placeholder="OJT End Date"
                  />
                  <input
                    type="text"
                    value={reportingDate}
                    onChange={(e) => setReportingDate(e.target.value)}
                    placeholder="Reporting Date and Time"
                  />
                  <input
                    type="text"
                    value={stipend}
                    onChange={(e) => setStipend(e.target.value)}
                    placeholder="Stipend"
                  />
                  <input
                    type="text"
                    value={incentive}
                    onChange={(e) => setIncentive(e.target.value)}
                    placeholder="Incentive"
                  />
                  <input
                    type="text"
                    value={report}
                    onChange={(e) => setReport(e.target.value)}
                    placeholder="Reporting Date"
                  />
                  <input
                    type="text"
                    value={fullTime}
                    onChange={(e) => setFullTime(e.target.value)}
                    placeholder="Full-Time Date"
                  />
                  <input
                    type="text"
                    value={fixed}
                    onChange={(e) => setFixed(e.target.value)}
                    placeholder="Fixed"
                  />
                  <input
                    type="text"
                    value={variable}
                    onChange={(e) => setVariable(e.target.value)}
                    placeholder="Variable"
                  />
                </div>
                <div className="text-center py-3">
                  <button
                    className="border px-4 rounded py-2 fs-5 bg-primary text-white"
                    onClick={addData}
                  >
                    Add
                  </button>
                </div>
              </div>
            </div>
          </div>
        )}

        <div className="background_color">
          <div className="container-fluid image-container" ref={printRef}>
            <div className="image-overlay">
              <Image className="image" src={letter} alt="image1"  priority />
              <div className="container text-overlay">
                <div className="row my-5">
                  <div className="container px-4">
                    <div className="container content px-5 pl-4">
                      <div className="text-center pt-5">
                        <span className="fs-5 pb-3 border-bottom border-dark fw-bold">
                          OFFER LETTER
                        </span>
                      </div>

                      <div className="pt-4 fw-bold">
                        <div className="row">
                          <div className="col-md-6">
                            <ul>
                              {List.length ? List.map((items, index)=>(
                                <div key={index}>
                                <li>DATE: {items.dateStart}</li>
                                <li className="pt-3">Dear {items.name},</li>
                              </div>
                              )):null}
                            </ul>
                          </div>
                          <div className="col-md-6">
                            {List.length ? List.map((items, index)=>(
                            <p className="text-end" key={index}>
                              <b>{items.eliteId}</b>
                            </p>
                            )):null}
                          </div>
                        </div>
                      </div>

                      <div>
                        <p className="pt-3">
                          <b>Congratulations</b>, you have successfully made it through
                          the Selection process. We are pleased to offer you the
                          role as {List.length ? List.map((items, index)=>(
                            <b key={index}>{items.position} in INTERNSELITE
                          EDUTECH PVT. LTD.</b> 
                          )):null} We are excited to have you onboard
                          with us. We believe that you are the suitable
                          candidate and would play a significant role in the
                          success of our organization. We wish you success with
                          a platform for learning with lots of experience in{' '}
                          <b>INTERNSELITE</b>.
                        </p>
                        <p className="pt-3">
                          {List.length ? List.map((items, index)=>(
                            <ul key={index}>
                            <li>
                              <b>Please find the following details :</b>
                            </li>
                            <li>
                              Job Title: <b>{items.jobTitle}</b>
                            </li>
                            <li>
                              Duration of Internship : <b>{items.duration}</b>
                            </li>
                            <li>
                              Unpaid training date:{" "}
                              <b>{items.unpaidDate}</b>
                            </li>
                            <li>
                              OJT Start Date: <b>{items.ojtStart}</b>
                            </li>
                            <li>
                              OJT End Date: <b>{items.ojtEnd}</b>
                            </li>
                            <li>
                              Reporting Date and Time:{" "}
                              <b>{items.reportingDate}</b>
                            </li>
                          </ul>
                          )):null}
                        </p>
                        <p className="pt-3">
                          {List.length ? List.map((items, index)=>(
                            <ul key={index}>
                            <li>
                              <b>Stipend : {items.stipend}.</b>
                            </li>
                            <li>
                              <b>
                                Incentive : {items.incentive}
                              </b>
                            </li>
                            <li>
                              <b>
                                You will be converted as a Full Time Employee
                                after successfully completion of your Trainee/{" "}
                              </b>
                            </li>
                            <li>
                              <b>Internship duration.</b>
                            </li>
                          </ul>
                          )):null}
                        </p>
                        {List.length ? List.map((items, index)=>(
                          <p className="pt-3" key={index}>
                          Please confirm your acceptance, by signing the letter
                          and mail the signed and scanned copy of your offer
                          letter with the documents as mentioned below to the
                          same mail within <b>3 working days. Otherwise, it will
                          automatically withdraw if we do not receive your
                          acceptance as per mentioned timeline.</b> In case of any
                          query or doubts kindly reach out to us. I have read
                          and understood the above terms and conditions and I
                          accept this offer, as set forth above with,{' '}
                          <b>InternsElite and will report on {items.report}.</b>
                        </p>
                        )):null}
                        <div className="pt-5">
                          <div className="row">
                            <div className="col-md-6">
                              <ul>
                                <li>
                                  <b>SIGNATURE:______________________</b>
                                </li>
                                <li>
                                  <b>(Candidate&apos;s Signature)</b>
                                </li>
                              </ul>
                            </div>
                            <div className="col-md-6">
                              <p>
                                <b>DATE:______________________</b>
                              </p>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="image-overlay">
              <Image className="image" src={letter} alt="image2"  priority />
              <div className="container text-overlay">
                <div className="row my-5">
                  <div className="container px-4">
                    <div className="container content px-5">
                      <div className="text-center pt-5">
                        <span className="fs-5 pb-3 pt-2 border-bottom border-dark fw-bold">
                          TRAINING POLICY
                        </span>
                      </div>

                      <div className="list">
                        <p className="pt-4 pl-4">
                          <ul>
                            <li>
                              By accepting this offer letter, you agree to
                              perform all the responsibilities and duties
                              assigned to you during your working hours with
                              management norms.
                            </li>
                            <li>
                              You are requested to do proper work in the working
                              hours with full efforts and not allowed to do any
                              other work (except college related).
                            </li>
                            <li>
                              During your Training period you will be receiving
                              1 sick leave(need to submit required document of
                              your sickness for the same).
                            </li>
                            <li>
                              Apart from the sick leaves you are not able to
                              receive any of the employee benefits in your
                              training period.
                            </li>
                            <li>
                              During your training period, company have rights
                              to terminate your service on unsatisfied
                              performance or any breach of the code of conduct
                              or misbehave in the organization.
                            </li>
                            <li>
                              By any chance you wish to discontinue the training
                              because of any reason you have to inform formally
                              to concerned HR and managers via mail and need to
                              serve a mandatory notice period of 30 days (1
                              Month) in order to get your Full and final
                              settlement, duration is 30 days.{" "}
                            </li>
                            <li>
                              In case you don&apos;t serve your notice period then
                              your previous day of your working before resigning
                              will be considered as your Notice Period in lieu
                              of your salary.
                            </li>
                            <li>
                              All the rules, regulations and code of conduct and
                              other policies need to be followed at
                              organization.
                            </li>
                            <li>
                              After successfully completion of your internship,
                              On your consent or based-on performance you will
                              be offered with Full time offer by the company.
                            </li>
                            <li className="pt-3">
                              <b>
                                Targets be allotted as per the joining date
                                which is followed below:-
                              </b>
                            </li>
                            <li>
                              Target will be followed on monthly base from
                              1st-30/31 of every month.
                            </li>
                            <li>
                              1st Month: Your target will be ₹70,000, with a
                              minimum of 16 payments.
                            </li>
                            <li>
                              2nd Month: Your target will be ₹1,00,000, with a
                              minimum of 20 payments.
                            </li>
                            <li>
                              2nd Month: Your target will be ₹1,00,000, with a
                              minimum of 20 payments.
                            </li>
                            <li>
                              3rd Month: Your target will be ₹1,25,000, with a
                              minimum of 25 payments.
                            </li>
                            <li>
                              4th Month Onwards: Your target will be 1,50,000
                              with a minimum of 30 payments.
                            </li>
                            <li>
                              From 5th Month Target will be same 1,50,000 every
                              month.
                            </li>
                          </ul>
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="image-overlay">
              <Image className="image" src={CA} alt="image3"  priority/>
              <div className="container text-overlay">
                <div className="row my-5">
                  <div className="container px-3">
                    <div className="container content px-5">
                      <div className="list mt-5">
                        <p>
                          <ul className="pl-4 pt-2">
                            <li>
                              Having said that, every month target will be sent
                              over your mail by your respective assigned TL&apos;s or
                              Managers.
                            </li>
                            <li>
                              Target Alloted each month follows duration
                              1-30/31st.
                            </li>
                            <li>
                              Working Hours:{" "}
                              <b>9 hours including Lunch break of 1 hour.</b>
                            </li>
                            <li>
                              Working Days : <b>6 days (Mon- Sat)</b>
                            </li>
                            <li>
                              Job Type: <b>Internship</b>
                            </li>
                            <li>
                              Location: Sohna{" "}
                              <b>(P.D. House Sector-4 Sohna-Gurgaon)</b>
                            </li>
                            <li>
                              Office Time: <b>10:00 AM TO 07:00 PM</b>
                            </li>
                          </ul>
                        </p>
                      </div>

                      <div className="text-center pt-5">
                        <span className="fs-5 pb-3 border-bottom border-dark fw-bold">
                          FULL-TIME EMPLOYMENT DETAILS
                        </span>
                      </div>

                      <div className="d-flex justify-content-center mt-5 mb-4">
                        {List.length ? List.map((items, index)=>(
                          <table key={index}>
                          <thead>
                            <tr>
                              <th className="px-5 py-3 text-center"><b>FULL-TIME DATE</b></th>
                              <th className="px-5 py-3 text-center"><b>FIXED</b></th>
                              <th className="px-5 py-3 text-center"><b>VARIABLE</b></th>
                            </tr>
                            <tr>
                              <th className="px-5 py-3 text-center"><b>{items.fullTime}</b></th>
                              <th className="px-5 py-3 text-center"><b>{items.fixed}</b></th>
                              <th className="px-5 py-3 text-center"><b>1 LPA</b></th>
                            </tr>
                          </thead>
                        </table>
                        )):null}
                      </div>

                      <div className="row">
                        <div className="col-md-4"></div>
                        <div className="col-md-4"></div>
                        <div className="col-md-4">
                          <ul className="">
                            <li>
                              <b>DATE:__________________</b>
                            </li>
                            <li className="pt-4 pb-3">
                              <b>SIGNATURE:____________________</b>
                            </li>
                            <li>
                              <b>(Candidate&apos;s Signature)</b>
                            </li>
                          </ul>
                        </div>
                      </div>

                      <div>
                        <div className="pt-3 pl-4">
                          <br></br>
                          <h3 className="pb-4">
                            <b>With Regards</b>
                          </h3>
                          <br></br>
                          <h4 className="pt-5">
                            <b>INTERNSELITE EDUTECH PVT. LTD</b>
                          </h4>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="image-overlay">
              <Image className="image" src={letter} />
              <div className="container text-overlay">
                <div className="row my-5">
                  <div className="container px-4">
                    <div className="container content px-5">
                      <div className="text-center pt-5 mt-4">
                        <span className="fs-6 pt-5 fw-bold">Documentation</span>
                      </div>

                      <div className="mt-4">
                        <p>
                        <table>
                          <thead>
                            <tr>
                              <th className="p-3">Sl. No</th>
                              <th className="p-3">Particulars</th>
                            </tr>
                            <tr>
                              <th className="p-3">1.</th>
                              <th className="p-3"> 
                                <b>
                                  Professional / Educational Certificates and
                                  Mark Sheets towards:
                                </b>
                                <div className="list">
                                <ul>
                                  <li>
                                    10th standard or equivalent examination
                                    (Original MS for Verification) 12th standard
                                    or equivalent examination (Original MS for
                                    Verification)
                                  </li>
                                  <li>Graduation</li>
                                  <li>Post-graduation / Doctorate Other relevant educational or skill certifications(If any)</li>
                                </ul>
                                </div>
                              </th>
                            </tr>
                            <tr>
                              <th className="p-3">2.</th>
                              <th className="p-3">COLOR SCANNED COPY OF YOUR PHOTOGRAPHS</th>
                            </tr>
                            <tr>
                              <th className="p-3">3.</th>
                              <th className="p-3">PAN Card, Voter ID or Driving Licence Scanned Copy.</th>
                            </tr>
                            <tr>
                              <th className="p-3">4.</th>
                              <th className="p-3"><b>Bank Account Details: Bank Name, Your Name as per Bank records,
                              Account Number, IFSC Code</b></th>
                            </tr>
                          </thead>
                        </table>
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default PdfTemplate;
