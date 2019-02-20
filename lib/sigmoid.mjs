class Input {

    constructor(sigmoid) {
        this.sigmoid = sigmoid || null; // Reference to other layer sigmoid
        this.weight = 0;
    }
}

export class Sigmoid {

    constructor(sigmoids,) {
        if (sigmoids) {
            this.inputs = [];
            sigmoids.forEach(sigmoid => this.inputs.push(new Input(sigmoid)));
        }
        this.value = 0;
        this.bias = 0;
    }

    calculate() {
        let inputsSum = 0;
        this.inputs.forEach(input => inputsSum += input.sigmoid.value * input.weight);
        this.value = 1 / (1 + Math.exp(-(inputsSum + this.bias)));
    }
}