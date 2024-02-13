//типи абонемента
export enum MembershipType{
    Basic = 'Basic',
    Premium = 'Premium',
    Gold = 'Gold'
}

abstract class Membership {
    abstract getDescription(): string;
    abstract getType(): MembershipType;
}

// базовий
class BasicMembership extends Membership {
    getDescription(): string {
        return 'Basic Membership';
    }
    getType(): MembershipType {
        return MembershipType.Basic;
    }
}

// середінй
class PremiumMembership extends Membership {
    getDescription(): string {
        return 'Premium Membership';
    }
    getType(): MembershipType {
        return MembershipType.Premium;
    }
}

// топовий
class GoldMembership extends Membership {
    getDescription(): string {
        return 'Gold Membership';
    }
    getType(): MembershipType {
        return MembershipType.Gold;
    }
}

// фабричний метод для створення абонементів
class MembershipFactory {
    createMembership(type: MembershipType): Membership {
        switch (type) {
            case MembershipType.Basic:
                return new BasicMembership();
            case MembershipType.Premium:
                return new PremiumMembership();
            case MembershipType.Gold:
                return new GoldMembership();
            default:
                throw new Error('Unsupported membership type');
        }
    }
}

// приклад використаня фабричного методу
const factory = new MembershipFactory();
const basicMembership = factory.createMembership(MembershipType.Premium);
console.log(basicMembership.getDescription());


// реєстрація юзерів
abstract class Registration {
    abstract register(): void;
}
//абстрактна фабрика для створення сімейства
abstract class RegistrationFactory {
    abstract createRegistration(): Registration;
}

// звичайний
class UserRegistration extends Registration {
    register(): void {
        console.log('User registered');
    }
}

// тренер
class TrainerRegistration extends Registration {
    register(): void {
        console.log('Trainer registered');
    }
}

// фабрика для реєстрації звичайних юзерів
class UserRegistrationFactory extends RegistrationFactory {
    createRegistration(): Registration {
        return new UserRegistration();
    }
}

// фабрика для реєстрації тренерів
class TrainerRegistrationFactory extends RegistrationFactory {
    createRegistration(): Registration {
        return new TrainerRegistration();
    }
}




// Приклад використання абстрактної фабрики
const userFactory = new UserRegistrationFactory();
const userRegistration = userFactory.createRegistration();
userRegistration.register();

const trainerFactory = new TrainerRegistrationFactory();
const trainerRegistration = trainerFactory.createRegistration();
trainerRegistration.register();