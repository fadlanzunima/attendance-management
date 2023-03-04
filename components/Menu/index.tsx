import { ReactNode } from "react";

interface Props {
  icon?: ReactNode;
  children?: ReactNode;
}

const MenuItem = ({ icon, children }: Props) => {
  return (
    <div className="py-4 px-3 text-[#9DB2CE] flex items-center flex-col hover:text-[#386BF6]">
      {icon}
      {children}
    </div>
  );
};

export default MenuItem;
