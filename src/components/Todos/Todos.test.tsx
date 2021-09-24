import { shallow } from 'enzyme'
import Todos from './Todos'

describe('<Todos />', () => {
	let component

	beforeEach(() => {
		component = shallow(<Todos />)
	})

	test('It should mount', () => {
		expect(component.length).toBe(1)
	})
})
