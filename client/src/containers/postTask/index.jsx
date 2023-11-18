import React, { useEffect, useState } from "react";
import ArrowDropDownIcon from "@mui/icons-material/ArrowDropDown";

const PostTask = () => {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [address, setAddress] = useState({ lat: null, long: null });
  const [date, setDate] = useState("");
  const [time, setTime] = useState("");

  const [titleRequired, setTitleRequired] = useState(true);
  const [descriptionRequired, setDescriptionRequired] = useState(true);
  const [addressRequired, setAddressRequired] = useState(true);
  const [dateRequired, setDateRequired] = useState(true);
  const [timeRequired, setTimeRequired] = useState(true);

  const getLocation = async () => {
    navigator.geolocation.getCurrentPosition((pos) => {
      const lat = pos.coords.latitude;
      const long = pos.coords.longitude;
      setAddress({ lat, long });
      setAddressRequired(false);
    });
  };

  useEffect(() => {
    getLocation();
  }, []);

  const submit = async (e) => {
    e.preventDefault();
    if (
      !titleRequired &&
      !descriptionRequired &&
      !addressRequired &&
      !dateRequired &&
      !timeRequired
    ) {
    } else {
      alert("Fill all fields");
    }
  };

  return (
    <div className="login flex flex-col items-center justify-center text-slate-200 min-h-screen">
      <h1 className="p-4 text-4xl font-bold">Post Task</h1>
      <div className="w-full max-w-md">
        <form className="glass-form rounded-xl shadow-md px-8 pt-6 pb-8 mb-4">
          <div className="mb-4">
            <label
              className="block text-sm font-bold mb-2 text-slate-200"
              htmlFor="title"
            >
              Title
              {titleRequired && (
                <span className="text-red-500 text-sm"> *</span>
              )}
            </label>
            <input
              className={`appearance-none shadow-lg bg-slate-600 rounded-xl w-full py-2 px-3 mb-3 leading-tight focus:outline-none focus:shadow-outline`}
              id="title"
              type="text"
              placeholder="Title"
              value={title}
              onChange={(e) => {
                setTitle(e.target.value);
                setTitleRequired(e.target.value.trim() === "");
              }}
            />
          </div>

          <div className="mb-6">
            <label
              className="block text-sm font-bold mb-2 text-slate-200"
              htmlFor="description"
            >
              Type Of Worker
              {descriptionRequired && (
                <span className="text-red-500 text-sm"> *</span>
              )}
            </label>
            <div className="relative">
              <select
                className={`appearance-none shadow-lg bg-slate-600 text-center rounded-xl w-full py-2 px-3 mb-3 leading-tight focus:outline-none focus:shadow-outline`}
                id="description"
                value={description}
                onChange={(e) => {
                  setDescription(e.target.value);
                  setDescriptionRequired(e.target.value === "");
                }}
              >
                <option value=""></option>
                <option value="plumber">Plumber</option>
                <option value="carpenter">Carpenter</option>
                <option value="electrician">Electrician</option>
                <option value="painter">Painter</option>
                <option value="gardener">Gardener</option>
                <option value="others">Others ?</option>
              </select>
              <ArrowDropDownIcon className="absolute right-3 top-1/2 transform -translate-y-1/2 text-slate-200" />
            </div>
          </div>

          {addressRequired ? (
            <div className="mb-6">
              <label
                className="block text-sm font-bold mb-2 text-slate-200"
                htmlFor="address"
              >
                Address
                {addressRequired && (
                  <span className="text-red-500 text-sm"> *</span>
                )}
              </label>
              <button
                className={`justify-self-center appearance-none shadow-lg bg-slate-600 rounded-xl w-3/4 py-2 px-3 mb-3 leading-tight hover:text-black hover:bg-slate-200 hover:shadow-slate-200`}
                onClick={getLocation}
              >
                Get Current Location
              </button>
            </div>
          ) : (
            <div></div>
          )}

          <div className="flex justify-between mb-6">
            <div className="w-1/2 pr-2">
              <label
                className="block text-sm font-bold mb-2 text-slate-200"
                htmlFor="date"
              >
                Date
                {dateRequired && (
                  <span className="text-red-500 text-sm"> *</span>
                )}
              </label>
              <input
                className={`appearance-none shadow-lg bg-slate-600 rounded-xl w-full py-2 px-3 mb-3 leading-tight focus:outline-none focus:shadow-outline`}
                id="date"
                type="date"
                placeholder="Date of Task"
                value={date} // Use "value" to set the input's value
                onChange={(e) => {
                  setDate(e.target.value);
                  setDateRequired(e.target.value === "");
                }}
              />
            </div>
            <div className="w-1/2 pl-2">
              <label
                className="block text-sm font-bold mb-2 text-slate-200"
                htmlFor="time"
              >
                Time
                {timeRequired && (
                  <span className="text-red-500 text-sm"> *</span>
                )}
              </label>
              <div className="relative">
                <select
                  className={`appearance-none shadow-lg bg-slate-600 text-center rounded-xl w-full py-2 px-3 mb-3 leading-tight focus:outline-none focus:shadow-outline`}
                  id="time"
                  value={time}
                  onChange={(e) => {
                    setTime(e.target.value);
                    setTimeRequired(e.target.value === "");
                  }}
                >
                  <option value=""></option>
                  <option value="10:00">10:00 AM</option>
                  <option value="11:00">11:00 AM</option>
                  <option value="12:00">12:00 PM</option>
                  <option value="13:00">1:00 PM</option>
                  <option value="14:00">2:00 PM</option>
                  <option value="15:00">3:00 PM</option>
                  <option value="16:00">4:00 PM</option>
                  <option value="17:00">5:00 PM</option>
                  <option value="18:00">6:00 PM</option>
                  <option value="19:00">7:00 PM</option>
                  <option value="20:00">8:00 PM</option>
                  <option value="21:00">9:00 PM</option>
                  <option value="22:00">10:00 PM</option>
                </select>
                <ArrowDropDownIcon className="absolute right-3 top-1/2 transform -translate-y-1/2 text-slate-200" />
              </div>
            </div>
          </div>

          <div className="flex items-center justify-center">
            <button
              className="bg-transparent hover:bg-white text-slate-200 hover:text-black font-bold py-2 px-4 border-2 border-white hover:border-white rounded-xl"
              type="submit"
              onClick={submit}
            >
              Post
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default PostTask;
