import renderer from 'react-test-renderer'
import Destination from '../../../pages/destination'

it('renders correctly', () => {
  const tree = renderer.create(<Destination />).toJSON()
  expect(tree).toMatchSnapshot()
})
