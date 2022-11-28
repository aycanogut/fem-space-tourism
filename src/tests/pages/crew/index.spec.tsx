import renderer from 'react-test-renderer'
import Crew from '../../../pages/crew'

it('renders correctly', () => {
  const tree = renderer.create(<Crew />).toJSON()
  expect(tree).toMatchSnapshot()
})
