

interface Equipment {
    accept(visitor: UsageAnalyticsVisitor): void;
}

class CardioMachine implements Equipment {
    analiticsData = "Стан кардіо машини"
    accept(visitor: UsageAnalyticsVisitor): void {
        visitor.visitCardioMachine(this);
    }
}

class StrengthMachine implements Equipment {
    analiticsData = "Стан силового тренажера"
    accept(visitor: UsageAnalyticsVisitor): void {
        visitor.visitStrengthMachine(this);
    }
}


class UsageAnalyticsVisitor {
    visitCardioMachine(cardioMachine: CardioMachine): void {
        console.log("Збираємо дані про: " + cardioMachine.analiticsData);
    }

    visitStrengthMachine(strengthMachine: StrengthMachine): void {
        console.log("Збираємо дані про: " + strengthMachine.analiticsData);
    }

}

// використання
const cardioMachine = new CardioMachine();
const strengthMachine = new StrengthMachine();

const analyticsVisitor = new UsageAnalyticsVisitor();

cardioMachine.accept(analyticsVisitor);
strengthMachine.accept(analyticsVisitor);