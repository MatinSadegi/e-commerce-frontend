import React, { Dispatch, SetStateAction } from "react";

type Props = {
  setSelectedItem: Dispatch<SetStateAction<string>>;
};

const Dashboard: React.FC<Props> = ({ setSelectedItem }) => {
  return (
    <div>
      <h4 className="mb-6">Dashboard</h4>
      <p className=" leading-5">
        From your account dashboard. you can easily check & view your{" "}
        <span
          className=" text-orange cursor-pointer"
          onClick={() => setSelectedItem("Orders")}
        >
          recent orders
        </span>{" "}
        , manage your{" "}
        <span
          className=" text-orange cursor-pointer"
          onClick={() => setSelectedItem("Addresses")}
        >
          {" "}
          shipping and billing addresses
        </span>{" "}
        and{" "}
        <span
          className=" text-orange cursor-pointer"
          onClick={() => setSelectedItem("Account Details")}
        >
          {" "}
          Edit your password and account details.
        </span>
      </p>
    </div>
  );
};

export default Dashboard;
