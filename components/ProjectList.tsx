import { Project } from '../model/Project';
import ProjectDetail from './Project';

export default function ProjectList({ projects }: { projects: Project[] }) {
  return (
    <div className={'container'}>
      <div className={'row'}>
        {projects.map((p, idx) => (
          <div className={'col'} style={{
            marginBottom: '20px',
            display: 'flex',
            justifyContent: 'center'
          }} key={idx}>
            <ProjectDetail project={p} key={idx}/>
          </div>
        ))}
      </div>
    </div>
  );
}
