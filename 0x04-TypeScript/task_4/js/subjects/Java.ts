namespace Subjects {
    // Extend the Teacher interface with Java experience
    export interface Teacher {
        experienceTeachingJava?: number;
    }

    // Create a Java class that extends Subject
    export class Java extends Subject {
        getRequirements(): string {
            return 'Here is the list of requirements for Java';
        }

        getAvailableTeacher(): string {
            const teacher = this.teacher;

            if (!teacher || teacher.experienceTeachingJava === undefined || teacher.experienceTeachingJava <= 0) {
                return 'No available teacher';
            }

            return `Available Teacher: ${teacher.firstName}`;
        }
    }
}