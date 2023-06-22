import DefaultLayout from "../Layout/DefaultLayout";
import Paragraph from "../Layout/Paragraph";

const AboutPage = () => {
	const aboutMeParagraph = `
		Hi I am a passionate developer who loves CSS and FE development!
	`;

	return (
		<DefaultLayout>
			<h1>About Page</h1>
			<Paragraph text={aboutMeParagraph} />
		</DefaultLayout>
	);
};

export default AboutPage;
