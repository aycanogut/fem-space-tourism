import renderer from 'react-test-renderer'
import Destination from '.'

it('renders correctly', () => {
  const tree = renderer.create(<Destination />).toJSON()
  expect(tree).toMatchSnapshot()
})
