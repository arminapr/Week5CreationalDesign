import { AbstractCalculatorModelFactory } from "./AbstractCalculatorModelFactory";
import { RoundingCalculator } from "./roundingCalculator.model";
import { StandardCalculatorModelFactory } from "./StandardCalculatorModelFactory";

export class RoundingCalculatorModelFactory extends AbstractCalculatorModelFactory {
  private precision: number;
  

  constructor(precision: number) {
    super();
    this.precision = precision;
  }

  public create(): RoundingCalculator {
    return new RoundingCalculator(this.precision);
  }
}
