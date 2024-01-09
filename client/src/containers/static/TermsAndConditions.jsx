import React from "react";

function TermsAndConditions() {
  return (
    <div className="max-w-3xl mx-auto p-10 bg-gradient-to-br from-pink-300 to-lime-500 rounded-lg shadow-lg text-left text-black">
      <center>
        <h1 className="text-3xl mb-8">Terms and Conditions</h1>
      </center>
      <center>
        <h2 className="text-xl mb-8">For Users</h2>
      </center>
      <p className="mb-6">
        Welcome to Multitach! By using our platform, you agree to the following
        terms and conditions:
      </p>
      <ol className="mb-6 list-decimal list-inside">
        <li>We connect skilled workers with clients for various services.</li>
        <li>
          Users must provide accurate information when using the platform.
        </li>
        <li>
          Any transactions made through Multitach are the responsibility of the
          involved parties.
        </li>
        <li>
          Users should respect the privacy of other users and refrain from
          sharing sensitive information.
        </li>
        <li>
          Abusive or inappropriate behavior towards other users is strictly
          prohibited.
        </li>
        <li>
          Multitach reserves the right to suspend or terminate accounts
          violating our terms.
        </li>
        <li>Users must comply with our community guidelines and standards.</li>
      </ol>

      <center>
        <h2 className="text-xl mb-8">For Skilled Workers</h2>
      </center>
      <p className="mb-6">
        Skilled workers joining Multitach agree to the following terms:
      </p>
      <ol className="mb-6 list-decimal list-inside">
        <li>Provide quality services to clients.</li>
        <li>Abide by local laws and regulations.</li>
        <li>
          Maintain professionalism and adhere to the platform's guidelines.
        </li>
        <li>
          Workers should communicate clearly with clients regarding services and
          pricing.
        </li>
        <li>
          Payment disputes should be resolved amicably and professionally.
        </li>
        <li>
          Workers should maintain a positive rating by delivering satisfactory
          services.
        </li>
        <li>
          Workers are responsible for their profiles and the accuracy of
          information provided.
        </li>
      </ol>
      <p>
        Please review our complete{" "}
        <span className="text-blue-500">Terms and Conditions</span> for detailed
        information. If you have any questions, contact us at
        support@multitach.com.
      </p>
    </div>
  );
}

export default TermsAndConditions;
