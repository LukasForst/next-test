import { Project } from '../model/Project';

export const loadProjects = async () => {
  const { projects } = require('../public/projects.json');
  return projects as Project[];
};
