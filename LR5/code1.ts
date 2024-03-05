interface Iterator<T> {
    next(): T | null;
    hasNext(): boolean;
}
class Exercise{
    constructor(public name: string) {}
}
interface IterableCollection<T> {
    createIterator(): Iterator<T>;
}
class ExerciseIterator implements Iterator<Exercise> {
    private collection: Exercise[];
    private position: number = 0;

    constructor(collection: Exercise[]) {
        this.collection = collection;
    }

    public next(): Exercise | null {
        if (this.hasNext()) {
            return this.collection[this.position++];
        }
        return null;
    }

    public hasNext(): boolean {
        return this.position < this.collection.length;
    }
}
class ExerciseCollection implements IterableCollection<Exercise> {
    private exercises: Exercise[] = [];

    public addExercise(ex: Exercise): void {
        this.exercises.push(ex);
    }
    public deleteExercise(id: string): void {
        this.exercises = this.exercises.filter(x => x.name != id);
    }
    public createIterator(): Iterator<Exercise> {
        return new ExerciseIterator(this.exercises);
    }
}

// приклад використання
const collection = new ExerciseCollection();
collection.addExercise(new Exercise("Squats"));
collection.addExercise(new Exercise("lift"));
const iterator = collection.createIterator();
while (iterator.hasNext()) {
    console.log(iterator.next()?.name);
}