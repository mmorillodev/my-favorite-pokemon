import { shallow, configure, EnzymeAdapter } from 'enzyme'
import Todos from './Todos'

configure({ adapter: new EnzymeAdapter() })

describe('<Todos />', () => {
  let component

  beforeEach(() => {
    component = shallow(<Todos />)
  })

  test('It should mount', () => {
    expect(component.length).toBe(1)
  })
})
