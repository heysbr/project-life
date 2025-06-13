import Button from "../Forms/Button";

const PageTitle = ({ title, btnLabel }) => {
  return (
    <div className="flex flex-row justify-between py-6">
      <h1 className="text-2xl font-semibold">
        {title}
      </h1>
      {btnLabel && <Button label={btnLabel}  />}
    </div>
  );
}
export default PageTitle;