import './index.css';
import numeral from 'numeral';

const courseValue = numeral(1000).format('$0,0.00');
//create a breakpoint: this will provide the sourcemap for dev
//debugger;

/* eslint-disable no-console */
// The above line will cause elslint to ignore the following console.log
console.log(`I would pay ${courseValue} for this awesome course!`);
