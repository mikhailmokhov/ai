import Net from './lib/net';
import Cost from './lib/cost';

function main() {

    const net = new Net(4, 16);
    const cost = new Cost(net.layers[net.layers.length - 1].sigmoids);

    net.calculate();

    cost.calculate([0.5, 0.5, 0.5, 0.5, 0.5, 0.5, 0.5, 0.5, 0.5, 0.5, 0.5, 0.5, 0.5, 0.5, 0.5, 0.5]);

    console.log('cost1 = ' + cost.last);

    net.calculate();

    cost.calculate([0.5, 0.5, 0.5, 0.5, 0.5, 0.51, 0.5, 0.5, 0.5, 0.5, 0.5, 0.5, 0.5, 0.5, 0.5, 0.5]);

    net.calculate();

    console.log('cost2 = ' + cost.last);

    cost.calculate([0.5, 0.5, 0.5, 0.5, 0.5, 0.5, 0.52, 0.5, 0.5, 0.5, 0.5, 0.5, 0.5, 0.5, 0.5, 0.5]);

    net.calculate();

    console.log('cost3 = ' + cost.last);

    console.log('quadratic cost = ' + cost.quadratic);

    console.log('average cost = ' + cost.average);

    console.log('firstLayer' + net.layers[0].toString());
    console.log('secondLayer' + net.layers[1].toString());

}

main();
