import { loadProjects } from '../lib/loaders';
import { Project } from '../model/Project';
import ProjectList from '../components/ProjectList';
import About from '../components/About';

export async function getStaticProps(): Promise<{ props: HomeProps }> {
  return {
    props: {
      projects: await loadProjects()
    }
  };
}

interface HomeProps {
  projects: Project[];
}

export default function Home({ projects }: HomeProps) {
  return (
    <div className={''}>
      <main className={''}>
        <About/>
        <ProjectList projects={projects}/>
      </main>
    </div>
  );
};
