export class Sigmoid {

    constructor(sigmoids) {
        if (sigmoids) {
            this.inputs = [];
            sigmoids.forEach(sigmoid => this.inputs.push(new Input(sigmoid)));
        }
        this.output = 0;
        this.bias = 0;
    }

    calculate() {
        let inputsSum = 0;
        this.inputs.forEach(input => inputsSum += input.sigmoid.output * input.weight);
        this.output = 1 / (1 + Math.exp(-inputsSum - this.bias));
    }

}


export class Input {

    constructor(sigmoid) {
        this.sigmoid = sigmoid || null; // Reference to other layer sigmoid
        this.weight = 0;
    }
}

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
        let result = []
        this.sigmoids.forEach(sigmoid => result.push(sigmoid.output));
        return '(' + result.join(',') + ')';
    }

}
