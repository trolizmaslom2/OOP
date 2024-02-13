
abstract class ExerciseGroup {
    abstract getDescription(): string;
}

// група "ноги"
class Legs extends ExerciseGroup {
    getDescription(): string {
        return 'Legs exercise';
    }
}

// група "руки"
class Arm extends ExerciseGroup {
    getDescription(): string {
        return 'Arm exercise';
    }
}

// абстрактна фабрика для створення вправ
abstract class ExerciseFactory {
    abstract createExercise(): ExerciseGroup;
}

// фабрика для створення вправ ніг
class LegsFactory extends ExerciseFactory {
    createExercise(): ExerciseGroup {
        return new Legs();
    }
}

// фабрика для створення вправ рук
class ArmFactory extends ExerciseFactory {
    createExercise(): ExerciseGroup {
        return new Arm();
    }
}

// Приклад використання абстрактної фабрики
const legs = new LegsFactory();
console.log(legs.createExercise().getDescription());

const arms = new ArmFactory();
console.log(arms.createExercise().getDescription());