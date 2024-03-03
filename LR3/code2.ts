
interface Announcement {
    update(training: string): void;
}

class User implements Announcement {
    private name: string;

    constructor(name: string) {
        this.name = name;
    }

    update(training: string): void {
        console.log(`Користувач ${this.name} отримав сповіщення про найближче тренування: ${training}`);
    }
}

class TrainingSchedule {
    private observers: Announcement[] = [];
    private upcomingTraining: string = "";

    addObserver(observer: Announcement): void {
        this.observers.push(observer);
    }

    setTraining(training: string): void {
        this.upcomingTraining = training;
        this.notifyUsers();
    }

    private notifyUsers(): void {
        this.observers.forEach(obs => {
            obs.update(this.upcomingTraining);
        });
    }
}

// приклад використання патерну Спостерігач
const trainingSchedule = new TrainingSchedule();

trainingSchedule.addObserver( new User("John"));
trainingSchedule.addObserver(new User("Alice"));

trainingSchedule.setTraining("Фітнес заняття о 17:00");
