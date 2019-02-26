import Sigmoid from "./sigmoid";

export default class Layer {
    sigmoids: Sigmoid[];

    constructor(numberOfSigmoids?: number, numberOfInputs?: number) {
        this.sigmoids = Array.from({length: numberOfSigmoids}, () => new Sigmoid(numberOfInputs));
    }

    calculate(previousLayer: Layer): void {
        this.sigmoids.forEach(sigmoid => sigmoid.calculate(previousLayer));
    }

    toString(): string {
        return '(' + this.sigmoids.map(sigmoid => sigmoid.value).join(',') + ')';
    }

    static loadFromJsonString(json: string): Layer {
        let layerLike: any = JSON.parse(json);
        let layer = new Layer();
        if (layerLike && Array.isArray(layerLike.sigmoids)) {
            layerLike.sigmoids.forEach((sigmoidLike) => {
                layer.sigmoids.push(Sigmoid.loadFromJson(sigmoidLike));
            });
        }
        return layer;
    }
}