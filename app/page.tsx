import { getProjects } from '@/sanity/sanity-utils';

export default async function Home() {
	const projects = await getProjects();

	return (
		<>
			{projects.map((project) => (
				<article key={project._id}>
					<h2>{project.name}</h2>
				</article>
			))}
		</>
	);
}
