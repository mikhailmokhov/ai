import {Sigmoid} from "./sigmoid";

export class Layer {

    constructor(numberOfSigmoids, connectToSigmoids) {
        this.sigmoids = [];
        for (let i = 0; i < numberOfSigmoids; i++) {
            this.sigmoids.push(new Sigmoid(connectToSigmoids));
        }
    }

    calculate() {
        this.sigmoids.forEach(sigmoid => sigmoid.calculate());
    }

    toString() {
        let result = [];
        this.sigmoids.forEach(sigmoid => result.push(sigmoid.value));
        return '(' + result.join(',') + ')';
    }
}