import React from "react";
import PrivateLayout from "@/layout/PrivateLayout";

const UserProfile = () => {
  return (
    <>
      <div className="max-w-md mx-auto bg-white shadow-lg rounded-md overflow-hidden mt-20">
        <div className="p-4">
          <img
            src="https://placekitten.com/200/200" // Replace with the URL of the user's profile picture
            alt="Profile"
            className="w-16 h-16 rounded-full mx-auto mb-4"
          />
          <h2 className="text-xl font-semibold text-gray-800 text-center mb-2">
            John Doe {/* Replace with the user's name */}
          </h2>
          <p className="text-gray-600 text-center">Software Developer</p>
        </div>
        <div className="bg-gray-100 p-4">
          <h3 className="text-lg font-semibold text-gray-800 mb-2">
            Contact Information
          </h3>
          <p className="text-gray-600">
            Email: john.doe@example.com {/* Replace with the user's email */}
          </p>
          <p className="text-gray-600">
            Phone: +1 123-456-7890 {/* Replace with the user's phone number */}
          </p>
        </div>
      </div>
    </>
  );
};

UserProfile.getLayout = function getLayout(page) {
  return <PrivateLayout>{page}</PrivateLayout>;
};

export default UserProfile;
