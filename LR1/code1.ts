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
const basicMembership = factory.createMembership(MembershipType.Basic);
console.log(basicMembership.getDescription());

const goldMembership = factory.createMembership(MembershipType.Gold);
console.log(goldMembership.getDescription());
