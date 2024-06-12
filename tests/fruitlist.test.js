import { shallowMount, } from '@vue/test-utils'
import FruitList from '../src/components/FruitList.vue'
import { test } from 'vitest'

describe('FruitList component test', () => {
    test("tests data attributes", () => {
        const wrapper = shallowMount(FruitList)
        expect(wrapper.vm.fruits).toEqual(["apple", "banana", "orange"])
    })

    test('return total number of fruits', () => {
        const wrapper = shallowMount(FruitList)
        expect(wrapper.vm.numFruits).toBe(3)
    })

    test('return total number of fruits needs to be 4', () => {
        const wrapper = shallowMount(FruitList)
        // set data
        wrapper.vm.addFruit('kiwi')

        expect(wrapper.vm.numFruits).toBe(4)
    })

    test('displays a list of fruits', () => {
        const wrapper = shallowMount(FruitList)
        const fruits = wrapper.findAll('li')
        expect(fruits.length).toBe(3)
        expect(fruits.at(0).text()).toBe('apple')
        expect(fruits.at(1).text()).toBe('banana')
        expect(fruits.at(2).text()).toBe('orange')
    })
    
    test('displays the number of fruits', () => {
        const wrapper = shallowMount(FruitList)
        const numFruits = wrapper.find('p')
        expect(numFruits.text()).toBe('Number of fruits: 3')
    })


})



