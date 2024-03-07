interface Mediator {
    notify(sender: object, event: string): void;
}

class BaseMediatorComponent {
    protected mediator: Mediator;

    constructor(mediator?: Mediator) {
        this.mediator = mediator!;
    }

    public setMediator(mediator: Mediator): void {
        this.mediator = mediator;
    }
}
class Admin extends BaseMediatorComponent {
    public send(message: string): void {
        console.log(`Trainer sends: ${message}`);
        this.mediator.notify(this, message);
    }
}

class Client extends BaseMediatorComponent {
    public send(message: string): void {
        console.log(`Client sends: ${message}`);
        this.mediator.notify(this, message);
    }

    public receive(message: string): void {
        console.log(`Client receives: ${message}`);
    }
}
class GymMediator implements Mediator {
    public admin = new Admin();
    public client = new Client();

    constructor() {
        this.admin.setMediator(this);
        this.client.setMediator(this);
    }

    public notify(sender: object, event: string): void {
        if (sender instanceof Admin) {
            console.log('Mediator reacts on Trainer and triggers following operations:');
            this.client.receive(event);
        } else if (sender instanceof Client) {
            console.log('Mediator reacts on Client and triggers following operations:');
        }
    }
}

const mediator = new GymMediator();

mediator.admin.send("Need to renew your subscription.");
mediator.client.send("Can I book a personal training session?");