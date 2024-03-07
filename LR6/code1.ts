interface Expression {
    interpret(context: { [key: string]: string }): string;
}

class VariableExpression implements Expression {
    constructor(private name: string) {}

    interpret(context: { [key: string]: string }): string {
        return context[this.name] || "";
    }
}

class TextExpression implements Expression {
    constructor(private text: string) {}

    interpret(context: { [key: string]: string }): string {
        return this.text;
    }
}
class TemplateParser {
    parse(template: string, context: { [key: string]: string }): string{
        const regex = /\{\{(\w+)\}\}/g;
        let regExecResult: RegExpExecArray | null;
        let lastIndex = 0;
        const expressions: Expression[] = [];

        while ((regExecResult = regex.exec(template)) !== null) {
            if (regExecResult.index > lastIndex) {
                expressions.push(new TextExpression(template.substring(lastIndex, regExecResult.index)));
            }
            expressions.push(new VariableExpression(regExecResult[1]));
            lastIndex = regex.lastIndex;
        }

        if (lastIndex < template.length) {
            expressions.push(new TextExpression(template.substring(lastIndex)));
        }

        return expressions.map(expression => expression.interpret(context)).join('');
    }
}

const template = "Dear {{name}},\n\nYour subscription expires on {{expiryDate}}.\nPlease renew it.";
const parser = new TemplateParser();
const context =  {"name": "John Doe",  "expiryDate": "2024-03-04"};
const  notification = parser.parse(template, context);


console.log(notification);