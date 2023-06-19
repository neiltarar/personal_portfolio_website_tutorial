import DefaultLayout from "../Layout/DefaultLayout";
import ProjectNavBar from "../Layout/ProjectsNavBar";

const projects = [
	{
		name: "project1",
		title: "01",
		image: "https://via.placeholder.com/150",
		github: "https://github.com/user/project1",
	},
	{
		name: "project2",
		title: "02",
		image: "https://via.placeholder.com/150",
		github: "https://github.com/user/project2",
	},
	{
		name: "project3",
		title: "03",
		image: "https://via.placeholder.com/150",
		github: "https://github.com/user/project2",
	},
	// Add more projects as needed
];

const PortfolioPage = () => {
	return (
		<DefaultLayout>
			<h1>Portfolio Page</h1>
			<ProjectNavBar projects={projects} />

			{projects.map((project, index) => (
				<div id={project.name} key={index} style={{ paddingTop: "50px" }}>
					<h2>{project.title}</h2>
					<img src={project.image} alt={project.name} />
					<a href={project.github}>Github Link</a>
				</div>
			))}
		</DefaultLayout>
	);
};

export default PortfolioPage;
