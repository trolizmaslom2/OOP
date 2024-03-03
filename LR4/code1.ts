
class Training {
    constructor(public id: number, public name: string, public time: string) {}
}


class TrainingService {
    private schedule: Training[] = [];

    addTraining(training: Training): void {
        this.schedule.push(training);
        console.log(`Added training: ${training.name} at ${training.time}`);
    }

    deleteTraining(trainingId: number): void {
        let index: number;
        // @ts-ignore
        index = this.schedule.findIndex(training => training.id === trainingId);
        if (index !== -1) {
            const deletedTraining = this.schedule.splice(index, 1)[0];
            console.log(`Deleted training: ${deletedTraining.name} at ${deletedTraining.time}`);
        }
    }

    checkAvailability(time: string): boolean {
        return this.schedule.some(training => training.time === time);
    }
}

interface Command {
    execute(): void;
}
class AddTrainingCommand implements Command {
    constructor(private service: TrainingService, private newTraining: Training) {}

    execute(): void {
        if (this.service.checkAvailability(this.newTraining.time)) {
            // якщо в цей час вже є тренування спитати  чи він хоче видалити існуюче
            console.log(`Training already exists at ${this.newTraining.time}.`);
            const answer = prompt(`Do you want to delete existing training at ${this.newTraining.time}? (yes/no)`);
            if (answer?.toLowerCase() === 'yes') {
                this.service.deleteTraining(this.newTraining.id);
                this.service.addTraining(this.newTraining);
            } else {
                console.log("Adding new training cancelled.");
            }
        } else {
            this.service.addTraining(this.newTraining);
        }
    }
}

//ghbrkfl dbrjyfyyz
const trainingService = new TrainingService();
const newTraining = new Training(4, "Zumba", "20:00");
const addTrainingMacroCommand = new AddTrainingCommand(trainingService, newTraining);
addTrainingMacroCommand.execute();