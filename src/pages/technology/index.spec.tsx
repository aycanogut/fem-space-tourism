import renderer from 'react-test-renderer'
import Technology from '.'

it('renders correctly', () => {
  const tree = renderer.create(<Technology />).toJSON()
  expect(tree).toMatchSnapshot()
})
