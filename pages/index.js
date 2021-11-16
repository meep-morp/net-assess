import { Button, Progress } from "antd";
import { useEffect, useState } from "react";
import { HomeContainer } from "../components/Home/HomeStyles";
import Nav from "../components/NavBar";
import measureConnectionSpeed from "../lib/utils/measureConnectionSpeed";

export default function Home() {
	const [speed, setSpeed] = useState(false);

	const setConnectionSpeed = async () => {
		setSpeed(false);
		const mbps = await measureConnectionSpeed();
		setSpeed(mbps);
	};

	useEffect(() => {
		setConnectionSpeed();
	}, []);

	return (
		<>
			<Nav />
			<HomeContainer>
				<h2>Test your Internet Speed </h2>
				<Progress
					type="dashboard"
					strokeColor={{
						"100%": "#fffa8b",
						"0%": "#78e08f",
					}}
					gapDegree={30}
					format={percent => `${percent} mbps`}
					width={400}
					percent={speed}
				/>

				<Button size="large" loading={!speed} onClick={setConnectionSpeed} type="primary">
					Retest
				</Button>
			</HomeContainer>
		</>
	);
}
