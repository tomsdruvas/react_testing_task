import React from 'react';
import Calculator from '../containers/Calculator';
import {mount, configure} from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

configure({adapter: new Adapter()});

describe('Calculator', () => {
  let container;
  beforeEach(() => {
    container = mount(<Calculator/>)

  })

  it('should change running total on number enter', () => {
    const button4 = container.find('#number4');
    const runningTotal = container.find('#running-total');
    button4.simulate('click');
    expect(runningTotal.text()).toEqual('4');
  })
  it(' add 1 to 4 and get 5', () => {
    const button1 = container.find('#number1')
    const button4 = container.find('#number4')
    const button_equal = container.find('#operator-equals')
    const button_add = container.find('#operator_add')
    const runningTotal = container.find('#running-total');
    button1.simulate('click');
    button_add.simulate('click');
    button4.simulate('click');
    button_equal.simulate('click');
    expect(runningTotal.text()).toEqual('5');
  })
  it(' subtract 4 from 7 and get 3', () => {
    const button7 = container.find('#number7')
    const button4 = container.find('#number4')
    const button_equal = container.find('#operator-equals')
    const button_subtract = container.find('#operator-subtract')
    const runningTotal = container.find('#running-total');
    button7.simulate('click');
    button_subtract.simulate('click');
    button4.simulate('click');
    button_equal.simulate('click');
    expect(runningTotal.text()).toEqual('3');
  })
  it('multiply 3 by 5 and get 15', () => {
    const button3 = container.find('#number3')
    const button5 = container.find('#number5')
    const button_equal = container.find('#operator-equals')
    const button_multiply = container.find('#operator-multiply')
    const runningTotal = container.find('#running-total');
    button3.simulate('click');
    button_multiply.simulate('click');
    button5.simulate('click');
    button_equal.simulate('click');
    expect(runningTotal.text()).toEqual('15');
  })
  it('divide 21 by 7 and get 3', () => {
    const button2 = container.find('#number2')
    const button1 = container.find('#number1')
    const button7 = container.find('#number7')
    const button_equal = container.find('#operator-equals')
    const button_divide = container.find('#operator-divide')
    const runningTotal = container.find('#running-total');
    button2.simulate('click');
    button1.simulate('click');
    button_divide.simulate('click');
    button7.simulate('click');
    button_equal.simulate('click');
    expect(runningTotal.text()).toEqual('3');
  })
  it('concatenate multiple number button clicks', () => {
    const button2 = container.find('#number2')
    const button1 = container.find('#number1')
    const button7 = container.find('#number7')
    const runningTotal = container.find('#running-total');
    button2.simulate('click');
    button1.simulate('click');
    button7.simulate('click');

    
    expect(runningTotal.text()).toEqual('217');
  })
  it('concatenate multiple number button clicks', () => {
    const button2 = container.find('#number2')
    const button1 = container.find('#number1')
    const button7 = container.find('#number7')
    const button_equal = container.find('#operator-equals')
    const runningTotal = container.find('#running-total');
    const button_add = container.find('#operator_add')
    const button_subtract = container.find('#operator-subtract')
    button2.simulate('click');
    button_add.simulate('click');
    button1.simulate('click');
    button_subtract.simulate('click');
    button7.simulate('click');
    button_equal.simulate('click');
    expect(runningTotal.text()).toEqual('-4');
  })
  it('clear the running total without affecting the calculation', () => {
    const button2 = container.find('#number2')
    const button1 = container.find('#number1')
    const button7 = container.find('#number7')
    const button4 = container.find('#number4')

    const button_equal = container.find('#operator-equals')
    const runningTotal = container.find('#running-total');
    const button_add = container.find('#operator_add')
    const buttonClear = container.find('#clear')
    button2.simulate('click');
    button_add.simulate('click');
    button1.simulate('click');
    button_equal.simulate('click');
    button_add.simulate('click');
    button7.simulate('click');
    buttonClear.simulate('click');
    button4.simulate('click');
    button_equal.simulate('click');
    expect(runningTotal.text()).toEqual('4');
  })





})
