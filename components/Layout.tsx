import React, { ReactNode } from "react";
import Link from "next/link";
import Head from "next/head";
import {
  AiOutlineHome,
  AiOutlineUser,
  AiOutlineIdcard,
  AiOutlineShopping,
} from "react-icons/ai";
import MenuItem from "./Menu";

type Props = {
  children?: ReactNode;
  title?: string;
};

const Layout = ({ children, title = "This is the default title" }: Props) => (
  <div className="container mx-auto md:max-w-5xl w-full relative">
    <Head>
      <title>{title}</title>
      <meta charSet="utf-8" />
      <meta name="viewport" content="initial-scale=1.0, width=device-width" />
    </Head>
    {children}
    <div className="bg-[#1E1E1E] rounded-xl fixed w-full bottom-0 md:max-w-5xl grid grid-cols-4 gap-4">
      <MenuItem
        icon={<AiOutlineHome className="mb-3 w-6 h-6" />}
        children={<Link href="/">Home</Link>}
      />
      <div className="py-4 px-3 text-[#9DB2CE] flex items-center flex-col">
        <AiOutlineIdcard className="mb-3 w-6 h-6" />
        <Link href="/about">Post</Link>
      </div>
      <div className="py-4 px-3 text-[#9DB2CE] flex items-center flex-col">
        <AiOutlineUser className="mb-3 w-6 h-6" />
        <Link href="/users">Users</Link>
      </div>
      <div className="py-4 px-3 text-[#9DB2CE] flex items-center flex-col">
        <AiOutlineShopping className="mb-3 w-6 h-6" />
        <a href="/api/users">Users API</a>
      </div>
    </div>
  </div>
);

export default Layout;
