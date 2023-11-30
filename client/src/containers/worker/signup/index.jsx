import React, { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import "./index.css";
import DefaultAvatar from "../../../images/Default Avatar.jpg";

const WorkerSignup = () => {
  const [step, setStep] = useState(1);
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [gender, setGender] = useState("");
  const [dob, setDob] = useState("");
  const [image, setImage] = useState(null);
  const [cnic, setCnic] = useState("");
  const [no, setNo] = useState("");
  const [workerType, setWorkerType] = useState("");
  const [address, setAddress] = useState("");

  const [firstNameRequired, setFirstNameRequired] = useState(true);
  const [lastNameRequired, setLastNameRequired] = useState(true);
  const [emailRequired, setEmailRequired] = useState(true);
  const [passwordRequired, setPasswordRequired] = useState(true);
  const [confirmPasswordRequired, setConfirmPasswordRequired] = useState(true);
  const [dobRequired, setDobRequired] = useState(true);
  const [cnicRequired, setCnicRequired] = useState(true);
  const [noRequired, setNoRequired] = useState(true);
  const [workerTypeRequired, setWorkerTypeRequired] = useState(true);
  const [addressRequired, setAddressRequired] = useState(true);

  const navigate = useNavigate();

  // const addImage = async (userId) => {
  //   try {
  //     await axios.post(
  //       "",
  //       {
  //         image,
  //       },
  //       {
  //         token: localStorage.getItem("token"),
  //         CustomHeader: "custom-value",
  //       }
  //     );
  //   } catch (err) {
  //     alert(err.message);
  //   }
  // };

  const setFileToBase = (file) => {
    const reader = new FileReader();
    reader.readAsDataURL(file);
    reader.onloadend = () => {
      setImage(reader.result);
    };
  };

  const handleImage = (e) => {
    const file = e.target.files[0];
    setFileToBase(file);
  };

  const [city, setCity] = useState("");
  const [country, setCountry] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    // You can perform any validation before calling the onSubmit function
  };

  const submit = async (e) => {
    e.preventDefault();

    const workerEndpoint = "http://127.0.0.1:8000/workers/";

    try {
      if (password === confirmPassword) {
        const fullName = firstName + " " + lastName;

        if (password === confirmPassword) {
          const res = await axios.post(workerEndpoint, {
            user: {
              name: fullName,
              email,
              cnic,
              phone: no,
              image_url: image || DefaultAvatar,
              date_of_birth: dob,
              gender,
              password,
            },
          });
          console.log(res);
          navigate("/customer-access/login");
        } else {
          alert("Passwords do not match");
        }
      }

      //   if (res.data === "Email already exists") {
      //     alert(res.data);
      //   } else if (password !== confirmPassword) {
      //     alert("Passwords Must Match");
      //   } else {
      //     localStorage.setItem("token", token);
      //     addImage(user.id);
      //     navigate(`/home/${user.id}`);
      //   }
      // } catch (err) {
      //   alert(err.message);
      // }
    } catch (err) {
      console.log(err);
    }
  };
  const validatePhoneNumber = (value) => {
    const regex = /[0-9]/;
    return regex.test(value);
  };

  const handlePhoneNumberChange = (e) => {
    const inputValue = e.target.value;
    if (validatePhoneNumber(inputValue)) {
      setNo(inputValue);
    }
    if (no.length === 11) {
      setNoRequired(false);
    }
  };

  const submitStep1 = () => {
    setStep(2);
  };

  const goBack = () => {
    setStep(1);
  };

  return (
    <div className="signup flex flex-col items-center justify-center text-white min-h-screen">
      <h1 className="p-4 text-4xl font-bold">Become A Worker</h1>
      {step === 1 && (
        <div className="w-full max-w-lg">
          <form className="glass-form rounded-xl shadow-md px-8 pt-6 pb-8 mb-4">
            <div className="mb-2 flex flex-wrap -mx-3">
              <div className="w-full md:w-1/2 px-3 mb-3 md:mb-0">
                <label
                  className="block text-md font-bold mb-2 text-slate-200"
                  htmlFor="firstName"
                >
                  First Name
                  {firstNameRequired && (
                    <span className="text-red-500 text-sm"> *</span>
                  )}
                </label>
                <input
                  className={`appearance-none shadow-lg bg-slate-600 rounded-xl w-full py-2 px-3 mb-3 leading-tight focus:outline-none focus:shadow-outline`}
                  id="firstName"
                  type="text"
                  placeholder="First Name"
                  onChange={(e) => {
                    setFirstName(e.target.value);
                    setFirstNameRequired(false);
                  }}
                />
              </div>
              <div className="w-full md:w-1/2 px-3">
                <label
                  className="block text-md font-bold mb-2 text-slate-200"
                  htmlFor="lastName"
                >
                  Last Name
                  {lastNameRequired && (
                    <span className="text-red-500 text-sm"> *</span>
                  )}
                </label>
                <input
                  className={`appearance-none shadow-lg bg-slate-600 rounded-xl w-full py-2 px-3 mb-3 leading-tight focus:outline-none focus:shadow-outline`}
                  id="lastName"
                  type="text"
                  placeholder="Last Name"
                  onChange={(e) => {
                    setLastName(e.target.value);
                    setLastNameRequired(false);
                  }}
                />
              </div>
            </div>

            <div className="mb-2">
              <label
                className="block text-md font-bold mb-2 text-slate-200"
                htmlFor="email"
              >
                Email
                {emailRequired && (
                  <span className="text-red-500 text-sm"> *</span>
                )}
              </label>
              <input
                className={`appearance-none shadow-lg bg-slate-600 rounded-xl w-full py-2 px-3 mb-3 leading-tight focus:outline-none focus:shadow-outline`}
                id="email"
                type="text"
                placeholder="Email"
                onChange={(e) => {
                  setEmail(e.target.value);
                  setEmailRequired(false);
                }}
              />
            </div>

            <div className="mb-2 flex flex-wrap -mx-3">
              <div className="w-full md:w-1/2 px-3 mb-3 md:mb-0">
                <label
                  className="block text-md font-bold mb-2 text-slate-200"
                  htmlFor="password"
                >
                  Password
                  {passwordRequired && (
                    <span className="text-red-500 text-sm"> *</span>
                  )}
                </label>
                <input
                  className={`appearance-none shadow-lg bg-slate-600 rounded-xl w-full py-2 px-3 mb-3 leading-tight focus:outline-none focus:shadow-outline`}
                  id="password"
                  type="password"
                  placeholder="Password"
                  onChange={(e) => {
                    setPassword(e.target.value);
                    setPasswordRequired(false);
                  }}
                />
              </div>
              <div className="w-full md:w-1/2 px-3">
                <label
                  className="block text-md font-bold mb-2 text-slate-200"
                  htmlFor="confirmPassword"
                >
                  Confirm Password
                  {confirmPasswordRequired && (
                    <span className="text-red-500 text-sm"> *</span>
                  )}
                </label>
                <input
                  className={`appearance-none shadow-lg bg-slate-600 rounded-xl w-full py-2 px-3 mb-3 leading-tight focus:outline-none focus:shadow-outline`}
                  id="confirmPassword"
                  type="password"
                  placeholder="Confirm Password"
                  onChange={(e) => {
                    setConfirmPassword(e.target.value);
                    setConfirmPasswordRequired(false);
                  }}
                />
              </div>
            </div>

            <div className="mb-2">
              <label
                className="block text-md font-bold mb-2 text-slate-200"
                htmlFor="cnic"
              >
                CNIC
                {cnicRequired && (
                  <span className="text-red-500 text-sm"> *</span>
                )}
              </label>
              <input
                className={`appearance-none shadow-lg bg-slate-600 rounded-xl w-full py-2 px-3 mb-3 leading-tight focus:outline-none focus:shadow-outline`}
                id="cnic"
                type="text"
                placeholder="xxxxx-xxxxxxx-x"
                onChange={(e) => {
                  setCnic(e.target.value);
                  setCnicRequired(false);
                }}
              />
            </div>

            <div className="mb-2 flex flex-wrap -mx-3">
              <div className="w-full md:w-1/2 px-3 mb-3 md:mb-0">
                <label
                  className="block text-md font-bold mb-2 text-slate-200"
                  htmlFor="dob"
                >
                  Date of Birth
                  {dobRequired && (
                    <span className="text-red-500 text-sm"> *</span>
                  )}
                </label>
                <input
                  className={`appearance-none shadow-lg bg-slate-600 rounded-xl w-full py-2 px-3 mb-3 leading-tight focus:outline-none focus:shadow-outline`}
                  id="dob"
                  type="date"
                  placeholder="Date of Birth"
                  onChange={(e) => {
                    setDob(e.target.value);
                    setDobRequired(false);
                  }}
                />
              </div>
              <div className="w-full md:w-1/2 px-3">
                <label
                  className="block text-md font-bold mb-2 text-slate-200"
                  htmlFor="image"
                >
                  Profile Image
                </label>
                <input
                  type="file"
                  id="image"
                  onChange={handleImage}
                  name="image"
                  accept="image/png image/jpeg image/jpg image/jfif"
                  className="appearance-none shadow-lg bg-slate-600 rounded-xl w-full py-2 px-3 mb-3 leading-tight focus:outline-none focus:shadow-outline"
                />
              </div>
            </div>

            <div className="mb-2">
              <label
                className="block text-md font-bold mb-2 text-slate-200"
                htmlFor="no"
              >
                Phone Number
                {noRequired && <span className="text-red-500 text-sm"> *</span>}
              </label>
              <input
                className={`appearance-none shadow-lg bg-slate-600 rounded-xl w-full py-2 px-3 mb-3 leading-tight focus:outline-none focus:shadow-outline`}
                id="no"
                type="text"
                maxLength="11"
                placeholder="03xx xxxxxxx"
                value={no}
                onChange={handlePhoneNumberChange}
              />
            </div>

            <div className="mb-6 flex flex-wrap justify-center -mx-3">
              <div className="w-full md:w-1/2 px-3 mb-3 md:mb-0">
                <label
                  className="block text-md font-bold mb-2 text-slate-200"
                  htmlFor="gender"
                >
                  Gender
                </label>
                <div className="relative">
                  <select
                    className="appearance-none shadow-lg bg-slate-600 rounded-xl w-full py-2 px-3 mb-3 leading-tight focus:outline-none focus:shadow-outline"
                    id="gender"
                    value={gender}
                    onChange={(e) => setGender(e.target.value)}
                  >
                    <option value="">...</option>
                    <option value="Male">Male</option>
                    <option value="Female">Female</option>
                    <option value="Others">Others</option>
                  </select>
                  <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-white">
                    <svg
                      className="fill-current h-4 w-4"
                      xmlns="http:www.w3.org/2000/svg"
                      viewBox="0 0 20 20"
                    >
                      <path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z" />
                    </svg>
                  </div>
                </div>
              </div>
            </div>

            <div className="flex items-center justify-center">
              <button
                className="bg-cyan-950 text-cyan-400 border border-cyan-400 border-b-4 font-medium overflow-hidden relative px-4 py-2 rounded-md hover:brightness-150 hover:border-t-4 hover:border-b active:opacity-75 outline-none duration-300 group"
                type="button"
                onClick={submitStep1}
              >
                Continue to Step 2
              </button>
            </div>
          </form>
        </div>
      )}
      {step === 2 && (
        <div className="w-full max-w-lg">
          <form className="glass-form rounded-xl shadow-md justify-center px-8 pt-6 pb-8 mb-4">
            <div className="mb-6 flex flex-wrap justify-center -mx-3">
              <div className="w-full md:w-1/2 items-center px-3">
                <label
                  className="block text-md font-bold mb-2 text-slate-200"
                  htmlFor="workerType"
                >
                  Worker Type
                </label>
                <div className="relative">
                  <select
                    className="appearance-none shadow-lg bg-slate-600 rounded-xl w-full py-2 px-3 mb-3 leading-tight focus:outline-none focus:shadow-outline"
                    id="workerType"
                    value={workerType}
                    onChange={(e) => setWorkerType(e.target.value)}
                  >
                    <option value="">...</option>
                    <option value="Electrician">Electrician</option>
                    <option value="Plumber">Plumber</option>
                    <option value="Carpenter">Carpenter</option>
                    <option value="Goldsmith">Goldsmith</option>
                    <option value="Blacksmith">Blacksmith</option>
                    <option value="Others">Others</option>
                  </select>
                  <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-white">
                    <svg
                      className="fill-current h-4 w-4"
                      xmlns="http:www.w3.org/2000/svg"
                      viewBox="0 0 20 20"
                    >
                      <path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z" />
                    </svg>
                  </div>
                </div>
              </div>
            </div>

            <div className="mb-4">
              <label className="block text-md font-bold mb-2" htmlFor="city">
                City
              </label>
              <input
                className="appearance-none shadow-lg bg-gray-600 rounded-xl w-full py-2 px-3 leading-tight focus:outline-none focus:shadow-outline"
                id="city"
                type="text"
                placeholder="Enter your city"
                value={city}
                onChange={(e) => setCity(e.target.value)}
              />
            </div>

            <div className="mb-6">
              <label className="block text-md font-bold mb-2" htmlFor="country">
                Country
              </label>
              <input
                className="appearance-none shadow-lg bg-gray-600 rounded-xl w-full py-2 px-3 leading-tight focus:outline-none focus:shadow-outline"
                id="country"
                type="text"
                placeholder="Enter your country"
                value={country}
                onChange={(e) => setCountry(e.target.value)}
              />
            </div>

            <div className="mb-6">
              <label className="block text-md font-bold mb-2" htmlFor="country">
                Shop Address
              </label>
              <input
                className="appearance-none shadow-lg bg-gray-600 rounded-xl w-full py-2 px-3 leading-tight focus:outline-none focus:shadow-outline"
                id="address"
                type="text"
                placeholder="Enter your shop's complete address"
                value={address}
                onChange={(e) => setAddress(e.target.value)}
              />
            </div>

            <div className="flex items-center justify-evenly">
              <button
                className="bg-slate-950 text-slate-400 border border-slate-400 border-b-4 font-medium overflow-hidden relative px-4 py-2 rounded-md hover:brightness-150 hover:border-t-4 hover:border-b active:opacity-75 outline-none duration-300 group"
                type="button"
                onClick={goBack}
              >
                Back to Step 1
              </button>
              <button
                className="bg-cyan-950 text-cyan-400 border border-cyan-400 border-b-4 font-medium overflow-hidden relative px-4 py-2 rounded-md hover:brightness-150 hover:border-t-4 hover:border-b active:opacity-75 outline-none duration-300 group"
                type="button"
                onClick={submit}
              >
                Signup
              </button>
            </div>
          </form>
        </div>
      )}
    </div>
  );
};

export default WorkerSignup;
