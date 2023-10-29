import React, { ChangeEvent, useState, useEffect } from "react";
import { useRouter } from "next/router";
import Logo from "@/assets/icons/logo.svg";
import Checkbox from "@/components/shared/inputs/checkbox/Checkbox";
import { P2 } from "@/components/shared/headings/Heading";
import Button from "@/components/shared/buttons/Button";
import Img from "@/components/shared/image/Image";
import IpadLogo from "@/assets/icons/ipad-logo.svg";
import LaptopLogo from "@/assets/icons/laptop-logo.svg";
import Input from "@/components/shared/inputs/input/Input";

const signup = () => {
  const [deviceType, setDeviceType] = useState("");

  const [checkboxes, setCheckboxes] = useState({
    Agree: false,
  });

  const router = useRouter();

  const handleNextPage = () => {
    router.push("/retailer/complete-signup");
  };

  const handleCheckboxChange = (e: ChangeEvent<HTMLInputElement>) => {
    setCheckboxes((prevState: any) => {
      return { ...prevState, [e.target.name]: e.target.checked };
    });
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
      <div className="">
        {/* Conditionally render based on device type */}
        {deviceType === "Mobile" && (
          <div>
            <div className="w-[350px] mx-auto mt-[4rem]">
              <div className="flex items-center gap-[4rem]">
                <Logo />
                <p className="font-normal text-[14px] text-[#211E1ECC] ml-auto">
                  Step 2 of 3
                </p>
              </div>

              <div>
                <p className="text-[20px] font-normal mt-8">
                  <span className="text-[20px] font-bold">Boss</span> Welcome!
                </p>
                <p className="text-[24px] font-normal mt-2 ">
                  Let's know{""}{" "}
                  <span className="text-[24px] font-bold">
                    little about you!
                  </span>
                </p>
                <p className="text-[16px] font-normal text-[#9A9B9C] my-8">
                  Already have an account?{" "}
                  <span className="text-[#02BF6F]">Log in</span>
                </p>
              </div>
              <hr />

              <div className="mt-4">
                <Input
                  label={"Name"}
                  name={""}
                  placeholder={"Full Name"}
                  type={""}
                />
                <div className="mt-6">
                  <Input
                    label={"Phone Number"}
                    name={""}
                    placeholder={"Full Name"}
                    type={""}
                    className=""
                  />
                </div>

                <div className="mt-6">
                  <Input
                    label={"Enter Email"}
                    name={""}
                    placeholder={"Full Name"}
                    type={""}
                  />
                </div>

                <div className="mt-6">
                  <Input
                    label={"Enter Password"}
                    name={""}
                    placeholder={"Full Name"}
                    type={""}
                  />
                </div>
              </div>

              <div className=" flex items-center gap-2 mt-6">
                <Checkbox
                  value={checkboxes.Agree}
                  name=""
                  onChange={handleCheckboxChange}
                />
                <P2 className="text-[#505050]">
                  By clicking this box you agree with our{" "}
                  <span className=" font-semibold">Terms and Conditions</span>{" "}
                </P2>
              </div>
              <div className="flex">
                <div> </div>
                <div className="ml-auto">
                  <Button
                    onClick={handleNextPage}
                    className="mt-6 "
                    size="lg"
                    color="secondary"
                  >
                    <P2 className="text-white">Next {">"}</P2>
                  </Button>
                </div>
              </div>
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
                    Step 2 of 3
                  </p>
                </div>
                <div>
                  <p className="text-[20px] font-normal mt-8">
                    <span className="text-[20px] font-bold">Boss</span> Welcome!
                  </p>
                  <p className="text-[24px] font-normal mt-2 whitespace-nowrap">
                    Let's Know{" "}
                    <span className="text-[24px] font-bold">
                      little about you!
                    </span>
                  </p>
                  <p className="text-[16px] font-normal text-[#9A9B9C] my-8">
                    Already have an account?{" "}
                    <span className="text-[#02BF6F]">Log in</span>
                  </p>
                </div>
                <hr />
                <div className="mt-4">
                  <Input
                    label={"Name"}
                    name={""}
                    placeholder={"Full Name"}
                    type={""}
                  />
                  <div className="mt-6">
                    <Input
                      label={"Phone Number"}
                      name={""}
                      placeholder={"Full Name"}
                      type={""}
                      className=""
                    />
                  </div>

                  <div className="mt-6">
                    <Input
                      label={"Enter Email"}
                      name={""}
                      placeholder={"Full Name"}
                      type={""}
                    />
                  </div>

                  <div className="mt-6">
                    <Input
                      label={"Enter Password"}
                      name={""}
                      placeholder={"Full Name"}
                      type={""}
                    />
                  </div>
                </div>
                <div className=" flex items-center gap-2 mt-6">
                  <Checkbox
                    value={checkboxes.Agree}
                    name=""
                    onChange={handleCheckboxChange}
                  />
                  <P2 className="text-[#505050]">
                    By clicking this box you agree with our{" "}
                    <span className=" font-semibold">Terms and Conditions</span>{" "}
                  </P2>
                </div>
                <Button
                  onClick={handleNextPage}
                  className="flex gap-3 mt-12 ml-auto"
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
                    Let's Know{" "}
                    <span className="text-[24px] font-bold">
                      little about you!
                    </span>
                  </p>
                  <p className="text-[16px] font-normal text-[#9A9B9C] my-8">
                    Already have an account?{" "}
                    <span className="text-[#02BF6F]">Log in</span>
                  </p>
                </div>
                <hr />
                <div className="mt-4">
                  <Input
                    label={"Name"}
                    name={""}
                    placeholder={"Full Name"}
                    type={""}
                  />
                  <div className="mt-6">
                    <Input
                      label={"Phone Number"}
                      name={""}
                      placeholder={"Full Name"}
                      type={""}
                      className=""
                    />
                  </div>

                  <div className="mt-6">
                    <Input
                      label={"Enter Email"}
                      name={""}
                      placeholder={"Full Name"}
                      type={""}
                    />
                  </div>

                  <div className="mt-6">
                    <Input
                      label={"Enter Password"}
                      name={""}
                      placeholder={"Full Name"}
                      type={""}
                    />
                  </div>
                </div>
                <div className=" flex items-center gap-2 mt-6">
                  <Checkbox
                    value={checkboxes.Agree}
                    name=""
                    onChange={handleCheckboxChange}
                  />
                  <P2 className="text-[#505050]">
                    By clicking this box you agree with our{" "}
                    <span className=" font-semibold">Terms and Conditions</span>{" "}
                  </P2>
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
