import React, { ChangeEvent, useState, useEffect } from "react";
import { useRouter } from "next/router";
import Logo from "@/assets/icons/logo.svg";
import Checkbox from "@/components/shared/inputs/checkbox/Checkbox";
import { P2 } from "@/components/shared/headings/Heading";
import Button from "@/components/shared/buttons/Button";
import Img from "@/components/shared/image/Image";
import IpadLogo from "@/assets/icons/ipad-logo.svg";
import LaptopLogo from "@/assets/icons/laptop-logo.svg";

const signup = () => {
  const [deviceType, setDeviceType] = useState("");
  const [checkboxes, setCheckboxes] = useState({
    Power_Bank: false,
    Screen_Guard: false,
  });

  const router = useRouter();

  const handleNextPage = () => {
    router.push("/retailer/signup");
  };

  const handleCheckboxChange = (name: string) => {
    const newCheckboxes = {
      Power_Bank: false,
      Screen_Guard: false,
    };
    setCheckboxes({ ...newCheckboxes, [name]: true });
  };

  useEffect(() => {
    const handleResize = () => {
      if (typeof window !== "undefined") {
        const width = window.innerWidth;
        if (width < 768) {
          setDeviceType("Mobile");
        } else if (width >= 768 && width < 1024) {
          setDeviceType("iPad");
        } else {
          setDeviceType("Laptop");
        }
      }
    };
    handleResize();
    if (typeof window !== "undefined") {
      window.addEventListener("resize", handleResize);
    }
    return () => {
      if (typeof window !== "undefined") {
        window.removeEventListener("resize", handleResize);
      }
    };
  }, []);

  return (
    <div>
      <div className=" overflow-y-hidden">
        {/* Conditionally render based on device type */}
        {deviceType === "Mobile" && (
          <div>
            <div className="w-[350px] mx-auto mt-[4rem]">
              <div className="flex items-center gap-[4rem]">
                <Logo />
                <p className="font-normal text-[14px] text-[#211E1ECC] ml-auto">
                  Step 1 of 3
                </p>
              </div>
              <div>
                <p className="text-[20px] font-normal mt-8">
                  <span className="text-[20px] font-bold">Boss</span> Welcome!
                </p>
                <p className="text-[24px] font-normal mt-2 ">
                  How do you{""}{" "}
                  <span className="text-[24px] font-bold">
                    want to partner with us?
                  </span>
                </p>
                <p className="text-[16px] font-normal text-[#9A9B9C] my-8">
                  Already have an account?{" "}
                  <span className="text-[#02BF6F]">Log in</span>
                </p>
              </div>
              <hr />
              <p className="mt-6">Select an Account you wish to open</p>

              <div className="border w-full h-[55px] border-[#D0D5DD] flex items-center gap-2 mt-5 hover:border-[#02BF6F]">
                <Checkbox
                  value={checkboxes.Power_Bank}
                  name="Power_Bank"
                  onChange={() => handleCheckboxChange("Power_Bank")}
                  className="ml-6"
                />
                <P2 className="text-[#505050]">A retailer</P2>
              </div>

              <div className="border w-full h-[55px] border-[#D0D5DD] flex items-center gap-2 mt-5 hover:border-[#02BF6F]">
                <Checkbox
                  value={checkboxes.Screen_Guard}
                  name="Screen_Guard"
                  onChange={() => handleCheckboxChange("Screen_Guard")}
                  className="ml-6"
                />
                <P2 className="text-[#505050]">A wholesaler</P2>
              </div>
              <Button
                onClick={handleNextPage}
                className="flex gap-3 mt-[8rem] ml-auto"
                size="lg"
                color="secondary"
              >
                <P2 className="text-white">Next {">"}</P2>
              </Button>
            </div>
          </div>
        )}
        {deviceType === "iPad" && (
          <div>
            <div className="w-full h-screen ">
              <Img path={IpadLogo} name={"Phonecom"} className="h-[15rem]" />
              <div className="w-[578px] mx-auto">
                <div className="flex pt-12">
                  <p>{""}</p>
                  <p className=" font-normal text-[14px] text-[#211E1ECC] ml-auto">
                    Step 1 of 3
                  </p>
                </div>
                <div>
                  <p className="text-[20px] font-normal mt-8">
                    <span className="text-[20px] font-bold">Boss</span> Welcome!
                  </p>
                  <p className="text-[24px] font-normal mt-2 whitespace-nowrap">
                    How do you{" "}
                    <span className="text-[24px] font-bold">
                      want to partner with us?
                    </span>
                  </p>
                  <p className="text-[16px] font-normal text-[#9A9B9C] my-8">
                    Already have an account?{" "}
                    <span className="text-[#02BF6F]">Log in</span>
                  </p>
                </div>
                <hr />
                <p className="mt-6">Select an Account you wish to open</p>
                <div className="border w-full h-[55px] border-[#D0D5DD] flex items-center gap-2 mt-5 hover:border-[#02BF6F]">
                  <Checkbox
                    value={checkboxes.Power_Bank}
                    name="Power_Bank"
                    onChange={() => handleCheckboxChange("Power_Bank")}
                    className="ml-6"
                  />
                  <P2 className="text-[#505050]">A retailer</P2>
                </div>
                <div className="border w-full h-[55px] border-[#D0D5DD] flex items-center gap-2 mt-5 hover:border-[#02BF6F]">
                  <Checkbox
                    value={checkboxes.Screen_Guard}
                    name="Screen_Guard"
                    onChange={() => handleCheckboxChange("Screen_Guard")}
                    className="ml-6"
                  />
                  <P2 className="text-[#505050]">A wholesaler</P2>
                </div>
                <Button
                  onClick={handleNextPage}
                  className="flex gap-3 mt-[8rem] ml-auto"
                  size="lg"
                  color="secondary"
                >
                  <P2 className="text-white">Next {">"}</P2>
                </Button>{" "}
              </div>
            </div>
          </div>
        )}
        {deviceType === "Laptop" && (
          <div className="flex gap-[3rem]">
            <div>
              <div className="h-[60rem]">
                {" "}
                <LaptopLogo />
              </div>
            </div>
            <div className="mt-[5rem]">
              <div className="w-[578px] mx-auto">
                <div className="flex pt-12">
                  <p>{""}</p>
                  <p className=" font-normal text-[14px] text-[#211E1ECC] ml-auto">
                    Step 1 of 3
                  </p>
                </div>
                <div>
                  <p className="text-[20px] font-normal mt-8">
                    <span className="text-[20px] font-bold">Boss</span> Welcome!
                  </p>
                  <p className="text-[24px] font-normal mt-2 whitespace-nowrap">
                    How do you{" "}
                    <span className="text-[24px] font-bold">
                      want to partner with us?
                    </span>
                  </p>
                  <p className="text-[16px] font-normal text-[#9A9B9C] my-8">
                    Already have an account?{" "}
                    <span className="text-[#02BF6F]">Log in</span>
                  </p>
                </div>
                <hr />
                <p className="mt-6">Select an Account you wish to open</p>
                <div className="border w-full h-[55px] border-[#D0D5DD] flex items-center gap-2 mt-5 hover:border-[#02BF6F]">
                  <Checkbox
                    value={checkboxes.Power_Bank}
                    name="Power_Bank"
                    onChange={() => handleCheckboxChange("Power_Bank")}
                    className="ml-6"
                  />
                  <P2 className="text-[#505050]">A retailer</P2>
                </div>
                <div className="border w-full h-[55px] border-[#D0D5DD] flex items-center gap-2 mt-5 hover:border-[#02BF6F]">
                  <Checkbox
                    value={checkboxes.Screen_Guard}
                    name="Screen_Guard"
                    onChange={() => handleCheckboxChange("Screen_Guard")}
                    className="ml-6"
                  />
                  <P2 className="text-[#505050]">A wholesaler</P2>
                </div>
                <Button
                  onClick={handleNextPage}
                  className="flex gap-3 mt-[8rem] ml-auto"
                  size="lg"
                  color="secondary"
                >
                  <P2 className="text-white">Next {">"}</P2>
                </Button>{" "}
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default signup;
