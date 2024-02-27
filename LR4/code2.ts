abstract class Training {
    createSchedule(): void {
        this.createWarmUp();
        this.createMainWorkout();
        this.createCoolDown();
    }

    abstract createWarmUp(): void;
    abstract createMainWorkout(): void;
    abstract createCoolDown(): void;
}

class WeightliftingTraining extends Training {
    createWarmUp(): void {
        console.log("Perform dynamic stretches for warm-up.");
    }

    createMainWorkout(): void {
        console.log("Perform squats, deadlifts, and bench press.");
    }

    createCoolDown(): void {
        console.log("Finish with static stretches for cool-down.");
    }
}

class CardioTraining extends Training {
    createWarmUp(): void {
        console.log("Start with light jogging or cycling for warm-up.");
    }

    createMainWorkout(): void {
        console.log("Perform high-intensity interval training (HIIT).");
    }

    createCoolDown(): void {
        console.log("Finish with a slow-paced walk or jog for cool-down.");
    }
}
//приклад використання
let cardio = new CardioTraining()
cardio.createSchedule();