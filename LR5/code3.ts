class Handler {
    successor: Handler | null = null;

    setSuccessor(successor: Handler): void {
        this.successor = successor;
    }

    handle(request: string): void {
        if (this.successor) {
            this.successor.handle(request);
        }
    }
}
const USER_STATE = {
    UserRegistered: false,
    UserAuthorized: false,
    UserSignDisclaimer: false,
    UserProfiled: false
}
class RegistrationHandler extends Handler {
    public handle(request: string): void {
        if (request === "Registration") {
            console.log("Handling user registration");
            USER_STATE.UserRegistered = true;
            if (this.successor) {
                this.successor.handle("Authorization");
            }
        } else {
            super.handle(request);
        }
    }
}

class AuthorizationHandler extends Handler {
    public handle(request: string): void {
        if (request === "Authorization") {
            console.log("Handling user authorization");
            USER_STATE.UserAuthorized = true;
            if (this.successor) {
                this.successor.handle("Disclaimer");
            }
        } else {
            super.handle(request);
        }
    }
}

class DisclaimerHandler extends Handler {
    public handle(request: string): void {
        if (request === "Disclaimer") {
            console.log("Showing disclaimer to the user");
            USER_STATE.UserSignDisclaimer = true;
            if (this.successor) {
                this.successor.handle("ProfileSetup");
            }
        } else {
            super.handle(request);
        }
    }
}

class ProfileSetupHandler extends Handler {
    public handle(request: string): void {
        if (request === "ProfileSetup") {
            USER_STATE.UserProfiled = true;
            console.log("Handling profile setup");
        } else {
            super.handle(request);
        }
    }
}
class StartUseHandler extends Handler {
    public handle(request: string): void {
        if (request === "StartUse") {
            console.log("Now U can start to use product");
        } else {
            super.handle(request);
        }
    }
}

const registrationHandler = new RegistrationHandler();
const authorizationHandler = new AuthorizationHandler();
const disclaimerHandler = new DisclaimerHandler();
const profileSetupHandler = new ProfileSetupHandler();
const startUseHandler = new StartUseHandler();


registrationHandler.setSuccessor(authorizationHandler);
authorizationHandler.setSuccessor( USER_STATE.UserSignDisclaimer ? (USER_STATE.UserProfiled ? startUseHandler: profileSetupHandler) : disclaimerHandler);
disclaimerHandler.setSuccessor(USER_STATE.UserProfiled ? startUseHandler: profileSetupHandler);
profileSetupHandler.setSuccessor(startUseHandler);


registrationHandler.handle("Registration");