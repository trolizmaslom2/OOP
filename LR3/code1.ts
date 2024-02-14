
interface MembershipStrategy {
    calculatePrice(): number;
}
enum MembershipPeriodType {
    Month = 'Month',
    Year = 'Year'
}
// стратегія місячного абонемента
class MonthlyMembershipStrategy implements MembershipStrategy {
    calculatePrice(): number {
        return 100;
    }
}

// стратегія річного абонемента
class YearlyMembershipStrategy implements MembershipStrategy {
    calculatePrice(): number {
        return 1000;
    }
}

// клас, який визначає стратегію та обчислює вартість абонементу
class MembershipPriceContext {
    private membershipStrategy: MembershipStrategy;

    constructor(membershipType: MembershipPeriodType) {
        switch (membershipType) {
            case MembershipPeriodType.Month:
                this.membershipStrategy = new MonthlyMembershipStrategy();
                break;
            case MembershipPeriodType.Year:
                this.membershipStrategy = new YearlyMembershipStrategy();
                break;
        }

    }

    getPrice(): number {
        return this.membershipStrategy.calculatePrice();
    }
}

// Приклад використання стратегії

console.log(`Вартість місячного абонементу: ${new MembershipPriceContext(MembershipPeriodType.Month).getPrice()} грн`);

console.log(`Вартість річного абонементу: ${new MembershipPriceContext(MembershipPeriodType.Year).getPrice()} грн`);