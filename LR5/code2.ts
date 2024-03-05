class Membership {
    private state: State;

    constructor() {
        this.state = new ActiveState();
    }
    setState(state: State) {
        this.state = state;
        console.log(`State changed to: ${this.state.getName()} but not applied`);
    }

    applyState() {
        this.state.applyState(this);
    }
}
interface State {
    applyState(context: Membership): void;
    getName(): string;
}
class ActiveState implements State {
    applyState(context: Membership): void {
        console.log("Membership is now active.");
    }

    getName(): string {
        return 'Active';
    }
}

class SuspendedState implements State {
    applyState(context: Membership): void {
        console.log("Membership has been suspended.");
    }

    getName(): string {
        return 'Suspended';
    }
}

class ExpiredState implements State {
    applyState(context: Membership): void {
        console.log("Membership has expired.");
    }

    getName(): string {
        return 'Expired';
    }
}


const membership = new Membership();
membership.applyState();
membership.setState(new SuspendedState());
membership.applyState();

