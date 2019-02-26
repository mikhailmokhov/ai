import Layer from "./layer";

export default class Sigmoid {
    bias: number;
    value: number;
    weights: number[];

    constructor(numberOfInputs?: number) {
        this.weights = [];
        this.value = 0;
        if (Number.isInteger(numberOfInputs)) {
            this.bias = randn_bm();
            for (let i = 0; i < numberOfInputs; i++) {
                this.weights.push(randn_bm());
            }
        } else {
            this.bias = 0;
        }
    }

    calculate(previousLayer: Layer): void {
        let inputsSum = 0;
        let weightsCount = this.weights.length;
        for (let i = 0; i < weightsCount; i++) {
            inputsSum += previousLayer.sigmoids[i].value * this.weights[i];
        }
        this.value = 1 / (1 + Math.exp(-(inputsSum + this.bias)));
    }

    static loadFromJson(json: string): Sigmoid {
        let sigmoidLike: any = JSON.parse(json);
        let sigmoid = new Sigmoid();
        if (typeof sigmoidLike === 'object') {
            if (isNaN(sigmoidLike.bias)) {
                throw 'bias ' + sigmoidLike.bias + ' is not a number';
            } else {
                sigmoid.bias = sigmoidLike.bias;
            }
            if (Array.isArray(sigmoidLike.weights)) {
                sigmoidLike.weights.forEach((weight) => {
                    if (isNaN(weight)) {
                        throw 'weight ' + weight + ' is not a number';
                    } else {
                        sigmoid.weights.push(weight);
                    }
                });
            }
        } else {
            throw 'sigmoid ' + sigmoidLike + ' is not an object';
        }
        return sigmoid;
    }
}

function randn_bm(): number {
    let u = 0, v = 0;
    while (u === 0) u = Math.random(); //Converting [0,1) to (0,1)
    while (v === 0) v = Math.random();
    let num = Math.sqrt(-2.0 * Math.log(u)) * Math.cos(2.0 * Math.PI * v);
    num = num / 10.0 + 0.5; // Translate to 0 -> 1
    if (num > 1 || num < 0) return randn_bm(); // resample between 0 and 1
    return num;
}