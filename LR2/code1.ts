
class Exercise {
    constructor(public name: string, public description: string) {}

    clone(): Exercise {
        return new Exercise(this.name, this.description);
    }
}

class TrainingProgram {
    exercises: Exercise[] = [];
    name: string;
    addExercise(exercise: Exercise) {
        this.exercises.push(exercise);
    }
}

interface Builder {
    addExercise(name: string, description: string): Builder;
    getResult(): TrainingProgram;
}

class TrainingProgramBuilder implements Builder {
    private trainingProgram: TrainingProgram;

    constructor(private name: string) {
        this.trainingProgram = new TrainingProgram();
        this.trainingProgram.name = name;
    }

    addExercise(name: string, description: string): Builder {
        this.trainingProgram.addExercise(new Exercise(name, description));
        return this;
    }

    getResult(): TrainingProgram {
        return this.trainingProgram;
    }
}

class TrainingProgramPrototype {
    private prototype: TrainingProgram;

    constructor(trainingProgram: TrainingProgram) {
        this.prototype = trainingProgram;
    }

    clone(): TrainingProgram {
        const clonedProgram = new TrainingProgram();
        clonedProgram.exercises = this.prototype.exercises.map(exercise => exercise.clone());
        return clonedProgram;
    }
}

// Приклади використання

// будівельник для  тренуваня
const builder = new TrainingProgramBuilder("Full Body Workout");
// додаємо вправи
builder
    .addExercise("Squats", "Leg exercise")
    .addExercise("Push-ups", "Upper body exercise");



// Клонуємо  тренуваня з використанням прототипу та додаєм ще одну вправу в нове тренування
const clonedProgram = new TrainingProgramPrototype(builder.getResult()).clone();
clonedProgram.addExercise(new Exercise("Squats", "Leg exercise"));


// Відображаємо інформацію про клоновану програму тренувань
console.log(`Cloned Training Program: ${clonedProgram.name}`);
console.log("Exercises:");
clonedProgram.exercises.forEach(exercise => {
    console.log(`- ${exercise.name}: ${exercise.description}`);
});