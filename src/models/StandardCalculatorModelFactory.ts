import {AbstractCalculatorModelFactory} from './AbstractCalculatorModelFactory'
import { StandardCalculatorModel } from './calculator.model';
export class StandardCalculatorModelFactory extends AbstractCalculatorModelFactory {

    public create() : StandardCalculatorModel {
        return new StandardCalculatorModel;
    }

}