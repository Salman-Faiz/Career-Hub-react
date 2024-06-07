import { useLoaderData, useParams } from "react-router-dom";

import Header from "../Header/Header";

import { FaDollarSign, FaBox, FaPhone, FaAddressBook } from "react-icons/fa";
import { MdEmail } from "react-icons/md";
import React from 'react';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { saveApplicationToLocalStorage } from "../../Utility/LocalStorage";


const DetailsJob = () => {
    const jobs = useLoaderData();
    const { id } = useParams();
    // console.log(id,jobs)
    const intId = parseInt(id);
    const job = jobs.find(job => job.id === intId)
    // console.log(job);
    const { job_description, job_responsibility, educational_requirements, experiences, contact_information, salary, job_title } = job;

    const appliedJob = () => {
        saveApplicationToLocalStorage(intId);
        toast('you have applied successfully');
    }
    return (
        <div>
            <div className="bg-[url('../public/assets/images/bg2.png')] bg-no-repeat bg-right-top">
                <div className="  pt-10 pb-4 bg-[url('../public/assets/images/bg1.png')] bg-no-repeat bg-left-bottom">
                    <Header></Header>
                    <h1 className="text-5xl text-center font-semibold pt-32">Job Details</h1>
                </div>
            </div>
            <div className="grid md:grid-cols-3 max-w-7xl mx-auto py-20">
                <div className="col-span-2 px-5 text-xl space-y-3">
                    <p ><span className="font-bold">Job description :</span><span className=" text-slate-500">{job_description}</span> </p>
                    <p><span className="font-bold">Job Responsibility :</span> <span className=" text-slate-500">{job_responsibility}</span> </p>
                    <h4><span className="font-bold">Educational Requirements :</span></h4>
                    <p className=" text-slate-500">{educational_requirements}</p>
                    <h4><span className="font-bold">Experience :</span></h4>
                    <p className=" text-slate-500">{experiences}</p>
                </div>
                <div className="col-span-1 ">
                    <div className=" bg-violet-100 p-5 rounded-lg">
                        <h3 className="font-bold pb-4 text-2xl">Job Details</h3>
                        <hr className="border-2" />
                        <div className="text-xl space-y-3">
                            <div className="flex gap-1 ">
                                <FaDollarSign className=" text-3xl" />
                                <p><span className="font-semibold">Salary :</span> {salary}</p>
                            </div>
                            <div className="flex gap-2">
                                <FaBox className="text-2xl"></FaBox>
                                <p className=""><span className="font-semibold">Job Title :</span> {job_title}</p>
                            </div>
                        </div>
                        <p className="py-5 text-2xl font-bold">Contact information</p>
                        <div className="text-xl space-y-3">
                            <hr className="border-2 " />
                            <p className="flex gap-2" ><FaPhone className="text-2xl"></FaPhone><span className="font-semibold">phone :</span> {contact_information.phone}</p>
                            <p className="flex gap-2"><MdEmail className="text-2xl"></MdEmail><span className="font-semibold">Email :</span> {contact_information.email}</p>
                            <p className="flex gap-2"><FaAddressBook className="text-3xl"></FaAddressBook><span className="font-semibold">Address :</span> {contact_information.address}</p>
                        </div>
                    </div>
                    <ToastContainer />
                    <div>
                        <button onClick={appliedJob} className="mt-5 py-2 btn bg-gradient-to-r from-indigo-400 to-violet-600 text-white text-2xl w-full">Apply now</button>
                    </div>
                </div>
            </div>

        </div>
    );
};

export default DetailsJob;