import * as React from "react";
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
			<QueryClientProvider client={queryClient}>
				<App codigoPais={location?.state?.codigoPais ?? "US"} />
			</QueryClientProvider>
		</AppEstilizada>
	);
};

export default GamePage;
