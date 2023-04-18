import React, { useState } from "react";
import Stepper from "@mui/material/Stepper";
import Step from "@mui/material/Step";
import StepLabel from "@mui/material/StepLabel";
import joinUS from "../../../Assets/background/JoinUS-edit.png";
import Typography from "@mui/material/Typography";
import { loadStripe } from "@stripe/stripe-js";
import { Elements } from "@stripe/react-stripe-js";
import CheckoutForm from "./CheckoutForm";
import { useAuthState } from "react-firebase-hooks/auth";
import auth from "../../../firebase.init";
import { HiPencilAlt } from "react-icons/hi";
import AboutForm from "../../DynamicPages/DynamicForum/AboutForm";
const ForumRegister = ({ serviceId }) => {
  const stripePromise = loadStripe(
    "pk_test_51LXS98B5Y3AeAE8iNY0Hgf4QUbKwQQVuUk1NqhUhbNZ1UhjYvdE5UJw3DnEJBLmlWBgFqKIjfXEnVZujomnNCAyo00kHESTAcf"
  );
  const mcq = [
    {
      id: 1,
    },
    {
      id: 2,
    },
  ];

  const [activeStep, setActiveStep] = useState(0);
  const handleNext = () => {
    setActiveStep(activeStep + 1);
  };

  const [user] = useAuthState(auth)

  const [, setCancle] = useState(false);
  const crossHandle = () => {
    setCancle(false)
  }

  function getStepContent(step) {
    switch (step) {
      case 0:
        return (
          <>
            <div className="card-body -mt-8">
              <h1 className="text-xl font-bold text-center">Information</h1>
              <form className="w-full max-w-screen">
                <div className="form-control w-full max-w-xs">
                  <label className="label">
                    <span className="label-text">What is your name?</span>
                  </label>
                  <input
                    type="text"
                    placeholder="Type here"
                    className="input input-bordered w-full max-w-xs"
                  />
                </div>
                <div className="form-control w-full max-w-xs">
                  <label className="label">
                    <span className="label-text">What is your student ID?</span>
                  </label>
                  <input
                    type="number"
                    placeholder="Type here"
                    className="input input-bordered w-full max-w-xs"
                  />
                </div>
                <div className="form-control w-full max-w-xs">
                  <label className="label">
                    <span className="label-text">What is your Email?</span>
                  </label>
                  <input
                    type="email"
                    placeholder="Type here"
                    className="input input-bordered w-full max-w-xs"
                  />
                </div>

                <div className="card-actions justify-end mt-2 -mb-5 ">
                  <button
                    onClick={handleNext}
                    disabled={activeStep === 3}
                    className=" text-gray-700 px-8 rounded py-2 mb-5 bg-white"
                  >
                    {activeStep === 2 ? "Finish" : "Next"}
                  </button>
                </div>
              </form>
            </div>
          </>
        );

      case 1:
        return (
          <>
            <div className="card-body ">
              <div className="card-body">
                <p className="text-success text-2xl font-bold">
                  Hello, from UIU
                </p>
                <p>Please pay: 350 tk</p>
              </div>
            </div>
            <div className="card flex-shrink-0 w-50 max-w-md shadow-2xl bg-base-100">
              <div className="card-body">
                {/* see here is problem payment options can't show here */}
                <Elements stripe={stripePromise}>
                  <CheckoutForm stripe={stripePromise} />
                </Elements>
              </div>
              <div className="card-actions justify-end">
                <button
                  onClick={handleNext}
                  disabled={activeStep === 2}
                  className=" text-gray-700 px-8 rounded py-2 bg-white"
                >
                  {activeStep === 2 ? "Finish" : "Next"}
                </button>
              </div>
            </div>
          </>
        );
      default:
        return "Unkown";
    }
  }

  return (
    <div>
      <div className="py-12 flex justify-center  items-center w-full flex-col mt-10 ">

        <div className="md:hidden mt-6 w-full">
          <img
            src={serviceId.aboutImg ? serviceId?.aboutImg : joinUS}
            alt="pexels-dmitry-zvolskiy-2082090-1"
            className="w-full"
          />
        </div>
        <div className="flex justify-between  items-stretch flex-row">
          <div className="flex items-center bg-primary justify-center">
            <p className="transform flex flex-shrink-0 -rotate-90 text-4xl font-semibold tracking-wide leading-normal text-white">
              Registation
            </p>
          </div>
          <div className="flex justify-center items-start flex-col xl:w-2/5 md:w-5/12 xl:px-7 px-6 md:px-0 md:py-0 py-5">
            <div>
              <p className="text-3xl xl:text-4xl font-semibold leading-9 text-gray-800">
                {serviceId?.abtitle ? serviceId?.abtitle : "Act before it’s too late!"}
              </p>
            </div>
            <div className="xl:mt-4 mt-2 relative">
              <p className="text-base xl:text-xl leading-7 text-gray-600 pr-4">
                {serviceId?.abDescr ? serviceId?.abDescr : "Furniture that looks modern and is comfortable as well. Avail the 50% offer now."}
              </p>
              <div>
                {/* The button to open modal */}
                <label
                  htmlFor="my-modal-3"
                  className="mt-6 shrink-0 w-full md:w-56 lg:mt-8 py-2 md:py-3 px-10 flex justify-center duration-700  items-center text-base border-2 border-primary transition hover:-translate-y-1 hover:bg-primary hover:text-white font-medium text-primary"
                >
                  Join Now
                </label>
                {/* model details Part */}
                <input type="checkbox" id="my-modal-3" className="modal-toggle" />
                <div className="modal">
                  <div className="modal-box relative">
                    <label
                      htmlFor="my-modal-3"

                      className="btn btn-sm btn-circle hover:bg-rose-600 hover:text-white absolute right-2 top-2"
                    >
                      ✕
                    </label>
                    {/* <h3 className="text-lg font-bold">
                Congratulations random Internet user!
              </h3>
              <p className="py-4">
                You've been selected for a chance to get one year of
                subscription to use Wikipedia for free!
              </p> */}
                    {/* start */}
                    <div className="bg-white overflow-x-hidden">
                      <div className="mt-5">
                        <Stepper activeStep={activeStep}>
                          {mcq.map((step) => {
                            return (
                              <Step>
                                <StepLabel>{step.length}</StepLabel>
                              </Step>
                            );
                          })}
                        </Stepper>
                      </div>

                      <div className="card mx-auto bg-gray-100 mt-6">
                        {activeStep === 2 ? (
                          <Typography variant="h3" className="align-center text-center p-5">
                            Thanks for Joining
                          </Typography>
                        ) : (
                          <>{getStepContent(activeStep)}</>
                        )}
                      </div>
                    </div>
                    {/* Ends */}

                  </div>
                </div>

              </div>

            </div>
          </div>
          <div className="hidden relative md:block h-44 md:h-60 xl:h-72">
            <img
              className="hidden h-full relative object-cover lg:w-96  xl:block"
              src={joinUS}
              alt="pexels-dmitry-zvolskiy-2082090-1"
            />
            <img
              className="xl:hidden h-full"
              src={joinUS}
              alt="pexels-dmitry-zvolskiy-2082090-1-1"
            />
            {
              user?.email === serviceId?.email ? <div className="absolute bottom-0 right-2">
                <label htmlFor="my-modal-5" className=" uppercase cursor-pointer"><h1 className="flex items-center full text-black py-2 px-3 border-black border-2">
                  <HiPencilAlt className="mr-3 text-xl" />
                  Edit
                </h1></label>
                <input type="checkbox" id="my-modal-5" className="modal-toggle" />
                <div className="modal md:pt-10 pt-40 w-full overflow-scroll">
                  <div className="relative w-full rounded-lg md:w-9/12 lg:w-7/12 bg-black h-auto">
                    <label htmlFor="my-modal-5" onClick={crossHandle} className=" btn-sm text-white btn-circle absolute right-0 top-3 text-2xl font-bold">✕</label>
                    <AboutForm />
                  </div>
                </div>
              </div> : " "
            }
          </div>
        </div>
      </div>
    </div>
  );
};

export default ForumRegister;
