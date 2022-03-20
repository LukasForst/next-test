import { Project } from '../model/Project';
import Image from 'next/image';
import styles from './Project.module.css';

export default function ProjectDetail({ project }: { project: Project }) {
  return (
    <a className={`card ${styles.project}`}
       href={project.githubLink}
       target={'_blank'}
       rel={'noreferrer'}
    >
      <div className={`card-img-top ${styles.logo}`}>
        <Image
          src={`/assets/${project.language}.png`}
          alt={`${project.language} icon`}
          height={`60px`}
          width={`60px`}
          layout={'responsive'}
        />
      </div>
      <div className="card-body">
        <h5 className="card-title">{project.title}</h5>
        <p className="card-text">{project.description}</p>
      </div>
    </a>
  );
}
