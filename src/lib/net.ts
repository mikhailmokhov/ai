import Layer from "./layer";

export default class Net {
    layers: Layer[];

    constructor(...numberOfSigmoidsInLayers: number[]) {
        this.layers = [];
        let connectToNumberOfSigmoids = 0;
        let numberOfLayers = numberOfSigmoidsInLayers.length;
        for (let i = 0; i < numberOfLayers; i++) {
            this.layers.push(new Layer(numberOfSigmoidsInLayers[i], connectToNumberOfSigmoids));
            connectToNumberOfSigmoids = numberOfSigmoidsInLayers[i];
        }
    }

    calculate(): void {
        let layersCount = this.layers.length;
        // skip input layer
        for (let i = 1; i < layersCount; i++) {
            this.layers[i].calculate(this.layers[i - 1]);
        }
    }

    static loadFromJsonString(json: string): Net {
        let netLike: any = JSON.parse(json);
        let net = new Net();
        if (netLike && Array.isArray(netLike.layers)) {
            netLike.layers.forEach((layerLike) => {
                net.layers.push(Layer.loadFromJsonString(layerLike));
            });
        }
        return net;
    }

}