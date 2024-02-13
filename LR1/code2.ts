
abstract class Exercise {
    abstract getDescription(): string;
}

// група "ноги"
class Legs extends Exercise {
    getDescription(): string {
        return 'Legs exercise';
    }
}

// група "руки"
class Arm extends Exercise {
    getDescription(): string {
        return 'Arm exercise';
    }
}

// абстрактна фабрика для створення вправ
abstract class ExerciseFactory {
    abstract createExercise(): Exercise;
}

// фабрика для створення вправ ніг
class LegsFactory extends ExerciseFactory {
    createExercise(): Exercise {
        return new Legs();
    }
}

// фабрика для створення вправ рук
class ArmFactory extends ExerciseFactory {
    createExercise(): Exercise {
        return new Arm();
    }
}

// Приклад використання абстрактної фабрики
const legs = new LegsFactory();
console.log(legs.createExercise().getDescription());

const arms = new ArmFactory();
console.log(arms.createExercise().getDescription());