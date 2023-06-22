import DefaultLayout from "../Layout/DefaultLayout";
import Spline from "@splinetool/react-spline";

const SplinePage = () => {
	return (
		<DefaultLayout>
			<Spline
				scene='https://prod.spline.design/eCYbdQYr4q0ueVZx/scene.splinecode'
				className='spline-scene'
			/>
		</DefaultLayout>
	);
};

export default SplinePage;
