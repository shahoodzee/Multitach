import React from "react";

function FAQ() {
  return (
    <div className="bg-gray-900 p-8 rounded-lg">
      <h1 className="text-3xl text-white mb-6">Frequently Asked Questions</h1>

      <div className="bg-red-300 border border-red-700 rounded-lg p-6 mb-6">
        <h2 className="text-black text-xl mb-3">
          How can I register as a service provider on Multitach?
        </h2>
        <p>
          To register as a service provider, go to the 'Sign Up' page and choose
          the option for service providers. Fill in the required details and
          submit the form.
        </p>
      </div>

      <div className="bg-red-300 border border-red-700 rounded-lg p-6 mb-6">
        <h2 className="text-black text-xl mb-3">
          Can I hire multiple service providers for different tasks
          simultaneously?
        </h2>
        <p>
          Yes, you can hire multiple service providers for different tasks at
          the same time. Each task will be treated as a separate contract.
        </p>
      </div>

      <div className="bg-red-300 border border-red-700 rounded-lg p-6 mb-6">
        <h2 className="text-black text-xl mb-3">
          What payment methods are accepted on Multitach?
        </h2>
        <p>
          We accept various payment methods including credit/debit cards, online
          bank transfers, and digital wallets.
        </p>
      </div>
      {/* Add more FAQ cards */}
    </div>
  );
}

export default FAQ;
