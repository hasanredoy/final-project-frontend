/* eslint-disable react/prop-types */

const SectionTitle = ({heading , subHeading}) => {
  return (
    <div className=" flex-col  text-center w-full my-10">
      <p className="text-lg font-medium text-yellow-500">{subHeading}</p>
      
      <h1 className="my-5 py-3 mx-auto max-w-md text-3xl font-bold border-y-4 uppercase">{heading}</h1>
    
    </div>
  );
};

export default SectionTitle;