import {Layer} from './lib/layer';
import {Cost} from './lib/cost';

function main() {


    // 4 sigmoids with no inputs
    const firstLayer = new Layer(4);
    // 16 sigmoids with 4 inputs each connected to the firstLayer sigmoid
    const secondLayer = new Layer(16, firstLayer.sigmoids);
    // connect cost calculator to the last layer
    const cost = new Cost(secondLayer.sigmoids);

    secondLayer.calculate();

    cost.calculate([0.5, 0.5, 0.5, 0.5, 0.5, 0.5, 0.5, 0.5, 0.5, 0.5, 0.5, 0.5, 0.5, 0.5, 0.5, 0.5]);

    console.log('cost1 = ' + cost.last);

    cost.calculate([0.5, 0.5, 0.5, 0.9, 0.5, 0.8, 0.5, 0.5, 0.5, 0.5, 0.5, 0.5, 0.5, 0.5, 0.5, 0.5]);

    console.log('cost2 = ' + cost.last);

    cost.calculate([0.5, 0.5, 0.5, 0.9, 0.5, 0.5, 0.9, 0.5, 0.5, 0.5, 0.5, 0.5, 0.5, 0.5, 0.5, 0.5]);

    console.log('cost3 = ' + cost.last);

    console.log('average cost = ' + cost.average);

    console.log('firstLayer' + firstLayer.toString());
    console.log('secondLayer' + secondLayer.toString());
}

main();
