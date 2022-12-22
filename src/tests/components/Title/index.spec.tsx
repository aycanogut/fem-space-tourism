import renderer from 'react-test-renderer'
import Title from '../../../components/Title'

it('renders correctly', () => {
  const tree = renderer
    .create(<Title id="01" title="PICK YOUR DESTINATION" />)
    .toJSON()
  expect(tree).toMatchSnapshot()
})
