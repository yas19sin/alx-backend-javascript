namespace Subjects {
    // Extend the Teacher interface with React experience
    export interface Teacher {
        experienceTeachingReact?: number;
    }

    // Create a React class that extends Subject
    export class React extends Subject {
        getRequirements(): string {
            return 'Here is the list of requirements for React';
        }

        getAvailableTeacher(): string {
            const teacher = this.teacher;

            if (!teacher || teacher.experienceTeachingReact === undefined || teacher.experienceTeachingReact <= 0) {
                return 'No available teacher';
            }

            return `Available Teacher: ${teacher.firstName}`;
        }
    }
}