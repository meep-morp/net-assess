import React from "react";
import Link from "next/link";
import { NavContainer } from "./NavStyles";

const Nav = () => {
	return (
		<NavContainer>
			<Link href="/">Home</Link>
		</NavContainer>
	);
};

export default Nav;
