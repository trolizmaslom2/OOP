
class UserManagement {
    registeredUser(userData: any): boolean {
        return true
    }

    loginUser(email: string, password: string) { }
}

class SubscriptionManagement {
    purchasedSubscription(userId: string): string {
        return 'Standard';
    }
}

class TrainingManagement {
    bookedTraining(userId: string, trainingId: string) {}
    trainingSchedule(userId: string) {}
}

class EquipmentAnalytics {
    generateReport() { }
}
interface GymReports {
    registarationAndSubscribeType(userData: any);
    bookTrainingAndGenerateReport(userId: string, trainingId: string);
}
class GymReportsFacade implements GymReports{
    private userManagement = new UserManagement();
    private subscriptionManagement = new SubscriptionManagement();
    private trainingManagement = new TrainingManagement();
    private equipmentAnalytics = new EquipmentAnalytics();

    registarationAndSubscribeType(userData: any) {
        console.log('this user is ' +( this.userManagement.registeredUser(userData) ? '' : 'Un') + 'registered.' + 'Subscribtion type:' +  this.subscriptionManagement.purchasedSubscription(userData.userId));
    }

    bookTrainingAndGenerateReport(userId: string, trainingId: string) {
        this.trainingManagement.bookedTraining(userId, trainingId);
        return this.equipmentAnalytics.generateReport();
    }
}


// Використання тільки фасаду
const gymFacade = new GymReportsFacade();
gymFacade.registarationAndSubscribeType({ userId: "2132147861"});
gymFacade.bookTrainingAndGenerateReport("userId", "trainingId");

//реалізація проксі
enum UserRole {
    Admin = 'Admin',
    Trainer = 'Trainer',
    User = 'User',

}
class GymReportsProxy implements GymReports {
    private userRole: UserRole;
    private gymReportsFacade: GymReportsFacade;
    constructor(userRole: UserRole) {
        this.userRole = userRole;
        this.gymReportsFacade = new GymReportsFacade();
    }
    registarationAndSubscribeType(userData: any) {
        if (this.userRole === UserRole.Admin) {
            console.log(this.gymReportsFacade.registarationAndSubscribeType(userData));
        } else {
            console.log("Доступ заборонений. Недостатньо прав.");
        }
    }

    bookTrainingAndGenerateReport(userId: string, trainingId: string) {
        if (this.userRole === UserRole.Admin || this.userRole === UserRole.Trainer) {
            this.gymReportsFacade.bookTrainingAndGenerateReport(userId, trainingId);
        } else {
            console.log("Доступ заборонений. Недостатньо прав.");
        }
    }
}
// Використання  фасаду через проксі

const gymProxy = new GymReportsProxy(UserRole.Admin);
gymProxy.registarationAndSubscribeType({ userId: "2132147861"});
gymProxy.bookTrainingAndGenerateReport("userId", "trainingId");