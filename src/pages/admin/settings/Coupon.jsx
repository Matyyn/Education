import React, { useState } from "react";
import Coupons from "../../../components/admin/form/Coupons";
import CardImage from "../../../assets/images/admin/Card.png";
import VerticalDots from "../../../assets/icons/VerticalDots.svg";
import Arrow from "../../../assets/icons/CardArrow.svg";
import SmallModalButton from "../../../components/button/SmallModalButton";
import Button from "../../../components/button/Button";
import Send from "../../../assets/icons/Send.svg";
import Delete from "../../../assets/icons/Trash.svg";

const CouponsManagement = () => {
  const couponDetails = {
    code: "ABCDEFGHIJ",
    discount: "30%",
    createdDate: new Date().toLocaleDateString(),
    validTill: new Date().toLocaleDateString(),
  };
  const [showStudentFields, setShowStudentFields] = useState(false);
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const createdDate = new Date().toLocaleDateString();
  const validTill = new Date().toLocaleDateString();

  const handleCreateFieldsClick = () => {
    setShowStudentFields(true);
  };

  const toggleDropdown = () => {
    setDropdownOpen(!dropdownOpen);
  };

  return (
    <div className="bg-[#FFF] w-full h-screen-1/2 p-4 rounded-xl relative">
      <h1 className="text-md font-semibold mb-4">Create Coupon</h1>
      {showStudentFields ? (
        <Coupons />
      ) : (
        <div className="flex justify-start items-center mt-0">
          <div
            style={{
              backgroundImage: `url(${CardImage})`,
              backgroundSize: "contain",
              backgroundRepeat: "no-repeat",
            }}
            className="w-1/3 h-60 rounded-md flex flex-col justify-between p-12 text-white mr-2 relative"
          >
            <div className="relative inline-block text-left">
              <div>
                <h2 className="text-4xl font-semibold">{couponDetails.code}</h2>
                <button
                  type="button"
                  onClick={toggleDropdown}
                  className="focus:outline-none"
                >
                  <img
                    src={VerticalDots}
                    alt="menu"
                    style={{
                      position: "absolute",
                      top: "5px",
                      right: "0",
                      height: "20px",
                    }}
                  />
                </button>
              </div>
              {dropdownOpen && (
                <div className="origin-top-right absolute right-0 w-40 rounded-md shadow-lg bg-white ring-1 ring-black ring-opacity-5">
                  <div
                    className="py-1"
                    role="menu"
                    aria-orientation="vertical"
                    aria-labelledby="options-menu"
                  >
                    <SmallModalButton
                      buttonText="Send"
                      textColor="black"
                      icon={Send}
                    />
                    <Button
                      buttonText="Deactivate"
                      textColor={"black"}
                      icon={Delete}
                    />
                  </div>
                </div>
              )}
              <p className="text-lg font-semibold">
                {couponDetails.discount} Discount
              </p>
            </div>
            <div className="flex flex-row justify-between items-center">
              <div className="flex flex-col">
                <p className="text-md mt-4 font-semibold">Created Date</p>
                <p className="text-md mt-2 font-semibold">
                  {couponDetails.createdDate}
                </p>
              </div>
              <div className="flex flex-col">
                <p className="text-md mt-4 font-semibold">Valid Till</p>
                <p className="text-md mt-2 font-semibold">
                  {couponDetails.validTill}
                </p>
              </div>
              <div class="flex ">
                <img src={Arrow} alt="arrow" />
              </div>
            </div>
          </div>

          <button
            className="text-black font-semibold py-4 px-6 w-1/3 h-60 rounded-md border-dotted border-4 border-black"
            onClick={handleCreateFieldsClick}
          >
            No Coupon found, Create Coupon
          </button>
        </div>
      )}
    </div>
  );
};

export default CouponsManagement;
