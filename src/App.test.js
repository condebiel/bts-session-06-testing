import { render } from '@testing-library/vue'

import App from './App.vue'

describe('App component', () => {
	test('renders App.vue', () => {
		const { getByText } = render(App)
		const title = getByText('Hello there!')
		expect(title).toBeInTheDocument()
	})

	test('renders an apple element', () => {
		const { getByText } = render(App)
		const fruit = getByText('apple')
		expect(fruit).toBeInTheDocument()	
	})

	test('renders count of all elements', () => {
		const { getByText } = render(App)
		const fruits = getByText('Number of fruits: 3')
		expect(fruits).toBeInTheDocument()
	})
})