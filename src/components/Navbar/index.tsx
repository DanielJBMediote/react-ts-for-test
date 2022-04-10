import Button from "~/components/utils/Button";

const Navbar: React.FunctionComponent = () => {
  return (
    <nav className="w-full p-2 bg-primary-800 flex">
      <span className="text-primary-200">Devlopments</span>
      <Button label="Example" />
    </nav>
  );
};
export default Navbar;
