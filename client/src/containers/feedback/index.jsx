import React, { useState } from "react";
import ArrowDropDownIcon from "@mui/icons-material/ArrowDropDown";
import "./index.css";

const FeedbackForm = () => {
  const [rating, setRating] = useState(0); // Initialize the rating as 0.
  const [notes, setNotes] = useState("");

  const submitFeedback = (e) => {
    e.preventDefault();
    // You can handle the submission of feedback data here.
    console.log({
      rating: rating,
      notes: notes,
    });
  };

  return (
    <div className="login flex flex-col items-center justify-center text-slate-200 min-h-screen">
      <h1 className="p-4 text-4xl font-bold">Feedback Form</h1>
      <div className="w-full max-w-md">
        <form className="glass-form rounded-xl shadow-md px-8 pt-6 pb-8 mb-4">
          <div className="mb-4">
            <label
              className="block text-sm font-bold mb-2 text-slate-200"
              htmlFor="rating"
            >
              Rating
            </label>
            <div className="relative">
              <select
                className={`appearance-none shadow-lg bg-slate-600 text-center rounded-xl w-full py-2 px-3 mb-3 leading-tight focus:outline-none focus:shadow-outline`}
                id="rating"
                value={rating}
                onChange={(e) => {
                  setRating(e.target.value);
                }}
              >
                <option value="0">Select a Rating</option>
                <option value="1">1 - Very Poor</option>
                <option value="2">2 - Poor</option>
                <option value="3">3 - Fair</option>
                <option value="4">4 - Good</option>
                <option value="5">5 - Excellent</option>
              </select>
              <ArrowDropDownIcon className="absolute right-3 top-1/2 transform -translate-y-1/2 text-slate-200" />
            </div>
          </div>

          <div className="mb-6">
            <label
              className="block text-sm font-bold mb-2 text-slate-200"
              htmlFor="notes"
            >
              Notes (Optional)
            </label>
            <textarea
              className={`appearance-none shadow-lg bg-slate-600 rounded-xl w-full py-2 px-3 mb-3 leading-tight focus:outline-none focus:shadow-outline`}
              id="notes"
              rows="4"
              placeholder="Add any additional notes or comments here..."
              value={notes}
              onChange={(e) => {
                setNotes(e.target.value);
              }}
            ></textarea>
          </div>

          <div className="flex items-center justify-center">
            <button
              className="bg-transparent hover:bg-white text-slate-200 hover:text-black font-bold py-2 px-4 border-2 border-white hover:border-white rounded-xl"
              type="submit"
              onClick={submitFeedback}
            >
              Submit Feedback
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default FeedbackForm;
