import React from "react";
import { Header } from "./components/organisms/header/header";
import { Footer } from "./components/organisms/footer/footer";
import { Route, Routes } from "react-router-dom";
import { Login } from "./components/templates/login/login";
import { ForgotPassword } from "./components/templates/forgot_password/forgotPassword";
import styled from "styled-components";

export const App = () => {
	return (
		<Content>
			<Header />
			<Routes>
				<Route path="/login" element={<Login />} />
				<Route path="/forgot-password" element={<ForgotPassword />} />
			</Routes>
			<Footer />
		</Content>
	);
};
const Content = styled.div`
  box-sizing: border-box;
  padding: 0;
  margin: 0;
  font-family: roboto;
`;
