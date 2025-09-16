"use client";

export default function CustomInput({ label, name, type = "text", register, rules, error }) {
  return (
    <div className="flex flex-col gap-1">
      <label className="text-sm font-medium">{label}</label>
      <input
        type={type}
        {...(register ? register(name, rules) : {})}
        className="border rounded-lg p-2"
        placeholder={`Enter ${label}`}
      />
      {error && <p className="text-red-500 text-sm">{error}</p>}
    </div>
  );
}
