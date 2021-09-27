import * as React from "react";
import {Helmet} from "react-helmet";
import {QueryClient, QueryClientProvider} from "react-query";
import {App} from "@components/organisms/App";
import styled from "styled-components";

const queryClient = new QueryClient();

const AppEstilizada = styled.div`
	display: flex;
	align-items: center;
	justify-content: center;

	min-height: 100vh;
`;

const GamePage = ({location}) => {
	return (
		<AppEstilizada>
			<Helmet>
				<title>Higher or Lower YT</title>
			</Helmet>
			<QueryClientProvider client={queryClient}>
				<App codigoPais={location?.state?.codigoPais ?? "US"} />
			</QueryClientProvider>
		</AppEstilizada>
	);
};

export default GamePage;
