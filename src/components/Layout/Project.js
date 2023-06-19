import React from "react";
import {
	Box,
	Typography,
	Link,
	Card,
	CardMedia,
	CardContent,
	CardActionArea,
} from "@mui/material";

const Project = ({ project }) => {
	return (
		<Card id={project.name}>
			<CardActionArea
				href={project.github}
				target='_blank'
				rel='noopener noreferrer'
			>
				<CardMedia
					component='img'
					height='140'
					image={project.image}
					alt={project.name}
				/>
				<CardContent>
					<Typography gutterBottom variant='h5' component='div'>
						{project.name}
					</Typography>
					<Typography variant='body2' color='text.secondary'>
						{project.description}
					</Typography>
				</CardContent>
			</CardActionArea>
		</Card>
	);
};

export default Project;
