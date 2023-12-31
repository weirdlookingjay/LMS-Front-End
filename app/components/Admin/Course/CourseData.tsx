import { styles } from "@/app/styles/style";
import React, { FC } from "react";
import toast from "react-hot-toast";
import { AiFillPlusCircle } from "react-icons/ai";

type Props = {
  benefits: { title: string }[];
  setBenefits: (benefits: { title: string }[]) => void;
  prerequisites: { title: string }[];
  setPrerequisites: (prerequisites: { title: string }[]) => void;
  active: number;
  setActive: (active: number) => void;
};

const CourseData: FC<Props> = ({
  benefits,
  setBenefits,
  prerequisites,
  setPrerequisites,
  active,
  setActive,
}) => {
  const handleBenefitChange = (index: number, value: any) => {
    const updatdeBenefits = [...benefits];
    updatdeBenefits[index].title = value;
    setBenefits(updatdeBenefits);
  };

  const handleAddBenefit = () => {
    setBenefits([...benefits, { title: "" }]);
  };

  const handlePrerequisiteChange = (index: number, value: any) => {
    const updatdePrerequisite = [...prerequisites];
    updatdePrerequisite[index].title = value;
    setPrerequisites(updatdePrerequisite);
  };

  const handleAddPrerequisite = () => {
    setPrerequisites([...prerequisites, { title: "" }]);
  };

  const prevButton = () => {
    setActive(active - 1);
  };

  const handleOptions = () => {
    if (
      benefits[benefits.length - 1]?.title !== "" &&
      prerequisites[prerequisites.length - 1]?.title !== ""
    ) {
      setActive(active + 1);
    } else {
      toast.error(
        "Please fill in all required fields before proceeding to the next step"
      );
    }
  };

  return (
    <div className="w-[80%] m-auto mt-24 block">
      <div>
        <label className={`${styles.label} text-[20px]`} htmlFor="benefit">
          What are the benefits for students in this course?
        </label>
        <br />
        {benefits.map((benefits: any, index: number) => (
          <input
            type="text"
            key={index}
            name="benefit"
            placeholder="You will be able to build a full stack LSM Platform"
            required
            className={`${styles.input} my-2`}
            value={benefits.title}
            onChange={(e) => handleBenefitChange(index, e.target.value)}
          />
        ))}
        <AiFillPlusCircle
          style={{ margin: "10px 0px", cursor: "pointer", width: "30px" }}
          className="text-black dark:text-white"
          onClick={handleAddBenefit}
        />
      </div>

      <div>
        <label
          className={`${styles.label} text-[20px]`}
          htmlFor="prerequisites"
        >
          What are the prerequisites for starting this course?
        </label>
        <br />
        {prerequisites.map((prerequisites: any, index: number) => (
          <input
            type="text"
            key={index}
            id="prerequisites"
            name="prerequisites"
            placeholder="You will need basic knowledge of MERN stack"
            required
            className={`${styles.input} my-2`}
            value={prerequisites.title}
            onChange={(e) => handlePrerequisiteChange(index, e.target.value)}
          />
        ))}
        <AiFillPlusCircle
          style={{ margin: "10px 0px", cursor: "pointer", width: "30px" }}
          className="text-black dark:text-white"
          onClick={handleAddPrerequisite}
        />
      </div>
      <div className="w-full flex items-center justify-between">
        <div
          className="w-full 800px:w-[180px] flex items-center justify-center h-[40px] bg-[#37a39a] text-center text-[#fff] rounded mt-8 cursor-pointer"
          onClick={() => prevButton()}
        >
          Prev
        </div>
        <div
          className="w-full 800px:w-[180px] flex items-center justify-center h-[40px] bg-[#37a39a] text-center text-[#fff] rounded mt-8 cursor-pointer"
          onClick={() => handleOptions()}
        >
          Next
        </div>
      </div>
    </div>
  );
};

export default CourseData;
