interface Command {
    execute(): void;
}
class MarkExerciseCommand implements Command {
    private exerciseName: string;

    constructor(exerciseName: string) {
        this.exerciseName = exerciseName;
    }

    execute(): void {
        console.log(`Відмічено виконання вправи: ${this.exerciseName}`);
    }
}
class UndoMarkExerciseCommand implements Command {
    private exerciseName: string;

    constructor(exerciseName: string) {
        this.exerciseName = exerciseName;
    }

    execute(): void {
        console.log(`Скасовано відмітку виконання вправи: ${this.exerciseName}`);
    }
}
class CommandInvoker {
    private command: Command;

    setCommand(command: Command): void {
        this.command = command;
    }

    executeCommand(): void {
        if (this.command) {
            this.command.execute();
        } else {
            console.log("Не встановлено команду для виконання.");
        }
    }
}
// приклад використання
const commandInvoker = new CommandInvoker();

// створення команд
const markExerciseCommand = new MarkExerciseCommand("Присідання");
const undoMarkExerciseCommand = new UndoMarkExerciseCommand("Присідання");

// виконання команд
commandInvoker.setCommand(markExerciseCommand);
commandInvoker.executeCommand();
commandInvoker.setCommand(undoMarkExerciseCommand);
commandInvoker.executeCommand();