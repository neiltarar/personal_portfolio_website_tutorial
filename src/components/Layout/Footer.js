import React from "react";
import { Typography } from "@mui/material";

const Footer = () => {
	return (
		<footer style={{ paddingTop: "50px" }}>
			<Typography variant='body2' color='text.secondary' align='center'>
				This application was built with love and care by
				<a
					href='https://github.com/neiltarar'
					style={{ margin: "0 5px 0 5px" }}
				>
					Neil
				</a>
				and
				<a
					href='https://github.com/Bvaneerden'
					style={{ margin: "0 5px 0 5px" }}
				>
					Bree
				</a>
				using
				<a href='https://reactjs.org/' style={{ margin: "0 5px 0 5px" }}>
					React
				</a>
				and styled with
				<a href='https://mui.com/' style={{ margin: "0 5px 0 5px" }}>
					Material-UI (MUI)
				</a>
				. We hope that this project provides you a quick starting point to
				create a personal portfolio page using React Library.
			</Typography>
		</footer>
	);
};

export default Footer;
