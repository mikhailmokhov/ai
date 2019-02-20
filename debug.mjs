import {Layer} from './index';


// 4 sigmoids with no inputs
var firstLayer = new Layer(4);
// 16 sigmoids with 4 inputs each connected to one of the first layer sigmoid
var secondLayer = new Layer(16, firstLayer.sigmoids);

firstLayer.sigmoids[0].output = 0.17567;
firstLayer.sigmoids[1].output = 0.2567;
firstLayer.sigmoids[3].output = 0.567;


secondLayer.sigmoids[0].bias = 0.01;
secondLayer.sigmoids[0].inputs[0].weight = 0.01;

secondLayer.calculate();

console.log('firstLayer'+firstLayer.toString());
console.log('secondLayer'+secondLayer.toString());