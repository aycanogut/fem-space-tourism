import renderer from 'react-test-renderer'
import Icon from '../../../components/Icon'

it('renders correctly', () => {
  const tree = renderer.create(<Icon icon="logo" />).toJSON()
  expect(tree).toMatchSnapshot()
})
