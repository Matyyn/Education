const InputField = ({ placeholder, type }) => {
  return (
    <div className="w-[293px] h-10  rounded-lg  shadow-md justify-start items-center gap-3 inline-flex ">
      <input
        type={type}
        className="w-full rounded-lg h-full relative text-left text-black text-sm font-normal font-['Inter'] leading-normal outline-none"
        placeholder={placeholder}
      ></input>
    </div>
  );
};
export default InputField;
