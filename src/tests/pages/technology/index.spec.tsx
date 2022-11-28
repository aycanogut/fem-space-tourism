import renderer from 'react-test-renderer'
import Technology from '../../../pages/technology'

it('renders correctly', () => {
  const tree = renderer.create(<Technology />).toJSON()
  expect(tree).toMatchSnapshot()
})
