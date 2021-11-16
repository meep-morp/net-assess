import { GlobalStyles } from "../styles/GlobalStyles";
import "antd/dist/antd.css";

function MyApp({ Component, pageProps }) {
	return (
		<GlobalStyles>
			<Component {...pageProps} />
		</GlobalStyles>
	);
}

export default MyApp;
