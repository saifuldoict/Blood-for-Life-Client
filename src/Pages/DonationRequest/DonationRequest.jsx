import axios from 'axios';
import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

function DonationRequest() {
  const [donationRequest, setDonationRequest] = useState([]);
  useEffect(() => {
    (async () => {
      const status = 'pending';
      const { data } = await axios.get(
        `https://blood-for-life.vercel.app/donation-requests/home/${status}`
      );
      setDonationRequest(data);
    })();
  }, []);

  return (
    <div className="my-12 lg:my-20">
      <h2 className="text-4xl lg:text-5xl font-semibold lg:font-bold text-center mb-4 lg:mb-6">
        Donation Request Page
      </h2>
      <div className="flex justify-center items-center min-h-screen px-4">
  <div className="bg-white p-6 rounded-lg shadow-md w-full max-w-sm sm:max-w-md md:max-w-lg">
    <h3 className="text-xl font-semibold mb-4">Contact Information</h3>

    <p className="text-gray-700 mb-2">
      <span className="font-semibold">Phone:</span> {contactNumber}
    </p>

    <p className="text-gray-700 mb-2">
      <span className="font-semibold">District:</span> {district}
    </p>
  </div>
</div>

    </div>
  );
}

export default DonationRequest;
