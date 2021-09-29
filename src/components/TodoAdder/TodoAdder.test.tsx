import { EnzymeAdapter, shallow, configure } from 'enzyme'
import TodoAdder from './TodoAdder'
import {} from '@testing-library/react'

configure({ adapter: new EnzymeAdapter() })

describe('<TodoAdder />', () => {
  let component

  beforeEach(() => {
    component = shallow(<TodoAdder />)
  })

  test('It should mount', () => {
    expect(component.length).toBe(1)
  })
})
