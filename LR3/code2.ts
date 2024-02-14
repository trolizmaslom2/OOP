
interface Annoncement {
    update(training: string): void;
}

// користувач виступає як спостерігач
class User implements Annoncement {
    private name: string;

    constructor(name: string) {
        this.name = name;
    }

    update(training: string): void {
        console.log(`Користувач ${this.name} отримав сповіщення про найближче тренування: ${training}`);
    }
}

// обєкт тренування грає роль субєкта
class TrainingSchedule {
    private observers: Annoncement[] = [];
    private upcomingTraining: string = "";

    addObserver(observer: Annoncement): void {
        this.observers.push(observer);
    }

    setTraining(training: string): void {
        this.upcomingTraining = training;
        this.notifyObservers();
    }

    // надіслати всім спостерігачам
    private notifyObservers(): void {
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

// результат:
// Користувач John отримав сповіщення про найближче тренування: Фітнес заняття о 17:00
// Користувач Alice отримав сповіщення про найближче тренування: Фітнес заняття о 17:00