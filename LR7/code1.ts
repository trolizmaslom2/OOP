class TrainingProgram {
    private state: string;

    constructor(state: string) {
        this.state = state;
    }

    public getState(): string {
        return this.state;
    }

    public setState(state: string): void {
        this.state = state;
    }

    public save(): TrainingProgramMemento {
        return new TrainingProgramMemento(this.state);
    }

    public restore(memento: TrainingProgramMemento): void {
        this.state = memento.getState();
    }
}
class TrainingProgramMemento {
    private readonly state: string;

    constructor(state: string) {
        this.state = state;
    }

    public getState(): string {
        return this.state;
    }
}
class Caretaker {
    private mementos: TrainingProgramMemento[] = [];

    public addMemento(memento: TrainingProgramMemento): void {
        this.mementos.push(memento);
    }

    public getMemento(index: number): TrainingProgramMemento {
        return this.mementos[index];
    }
}

// Використання
const program = new TrainingProgram("Initial State");
const caretaker = new Caretaker();

caretaker.addMemento(program.save());
program.setState("Updated State");
program.restore(caretaker.getMemento(0));
console.log(program.getState());