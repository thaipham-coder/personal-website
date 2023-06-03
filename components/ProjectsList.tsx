import styles from '@/styles/modules/ProjectsList.module.scss';
import { useMemo } from 'react';
import Project from './Project';
import classNames from 'classnames';
import { PERSONAL_PROJECTS, PROJECTS } from '@/data/projects.data';

export enum ProjectsType {
    PROJECTS,
    PERSONAL_PROJECTS,
}

const PROJECTS_LIST = {
    [ProjectsType.PROJECTS]: PROJECTS,
    [ProjectsType.PERSONAL_PROJECTS]: PERSONAL_PROJECTS,
};

export default function ProjectsList({
    projectsType
}: {
    projectsType: ProjectsType
}) {
    const projects = useMemo(() => {
        return PROJECTS_LIST[projectsType];
    }, [projectsType]);

    return (
        <section className={classNames(
            'u-spacing--responsive--bottom',
            styles['c-projectsList']
        )}>
            <div className="o-container">
                <div className={styles['c-projectsList__list']}>
                    {projects.map((project, i) => (
                        <div key={i} className={styles['c-projectsList__item']}>
                            <Project
                                {...project}
                            />
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};