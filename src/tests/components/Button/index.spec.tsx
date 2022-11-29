import renderer from 'react-test-renderer'
import Button from '../../../components/Button'

it('renders correctly', () => {
  const tree = renderer.create(<Button text="explore" />).toJSON()
  expect(tree).toMatchSnapshot()
})
