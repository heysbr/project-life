export default function OtpInputs() {
  const inputs = Array(4).fill("");
  return (
    <div className={`flex flex-row gap-x-3 justify-center mb-10`}>
      {inputs.map((_, index) => (
        <input
          key={index}
          type="text"
          maxLength={1}
          placeholder="*"
          className={`size-10 border text-center border-gray-300 rounded-md placeholder-[#BEC5D3] text-2xl 
           `}
          required
        />
      ))}
    </div>
  );
}
