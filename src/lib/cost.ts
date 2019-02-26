import Sigmoid from "./sigmoid";

class Output {
    source: Sigmoid;
    desiredValue: number;
    constructor(sigmoid) {
        this.source = sigmoid;
        this.desiredValue = 0;
    }

    get actualValue() {
        return this.source.value;
    }
}

export default class Cost {
    costs: number[];
    outputs: Output[];
    constructor(sigmoids) {
        this.costs = [];
        this.outputs = [];
        sigmoids.forEach((sigmoid) => {
            this.outputs.push(new Output(sigmoid));
        });
    }

    calculate(desired) {
        let outputsLength = this.outputs.length;
        if (desired.length !== outputsLength) throw 'desired array should the same length as sigmoids in connected layer';
        for (let i = 0; i < outputsLength; i++) {
            this.outputs[i].desiredValue = desired[i];
        }
        let cost = 0;
        this.outputs.forEach((output) => {
            cost += output.desiredValue - output.actualValue;
        });
        this.costs.push(cost);
    }

    get last() {
        return this.costs[this.costs.length - 1];
    }

    get quadratic() {
        let sum = 0;
        this.costs.forEach(cost => sum += Math.pow(cost, 2));
        return 1 / (2 * this.costs.length) * sum;
    }

    get average() {
        let sum = 0;
        this.costs.forEach(cost => sum += cost);
        return sum / this.costs.length;
    }

}