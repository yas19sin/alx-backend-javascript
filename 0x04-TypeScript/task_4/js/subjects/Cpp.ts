namespace Subjects {
    // Extend the Teacher interface using declaration merging
    export interface Teacher {
        experienceTeachingC?: number;
    }

    // Create a Cpp class that extends Subject
    export class Cpp extends Subject {
        getRequirements(): string {
            return 'Here is the list of requirements for Cpp';
        }

        getAvailableTeacher(): string {
            const teacher = this.teacher;

            if (!teacher || teacher.experienceTeachingC === undefined || teacher.experienceTeachingC <= 0) {
                return 'No available teacher';
            }

            return `Available Teacher: ${teacher.firstName}`;
        }
    }
}