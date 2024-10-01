import { AbstractCalculatorModelFactory } from "./AbstractCalculatorModelFactory";
import { StandardCalculatorModel } from "./calculator.model";
export class StandardCalculatorModelFactory extends AbstractCalculatorModelFactory {
  private static calculatorInstance: StandardCalculatorModelFactory;

  private constructor() {
    super();
  }

  public create(): StandardCalculatorModel {
    return new StandardCalculatorModel();
  }

  public static get instance(): StandardCalculatorModelFactory {
    if (!StandardCalculatorModelFactory.calculatorInstance) {
      StandardCalculatorModelFactory.calculatorInstance = new StandardCalculatorModelFactory();
    }

    return StandardCalculatorModelFactory.calculatorInstance;
  }
}
