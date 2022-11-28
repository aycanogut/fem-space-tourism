import renderer from 'react-test-renderer'
import Crew from '.'

it('renders correctly', () => {
  const tree = renderer.create(<Crew />).toJSON()
  expect(tree).toMatchSnapshot()
})
