import renderer from 'react-test-renderer'
import Hero from '../../components/Hero'

it('renders correctly', () => {
  const tree = renderer
    .create(
      <Hero
        uppertitle="SO, YOU WANT TO TRAVEL TO"
        title="SPACE"
        description="Let’s face it; if you want to go to space, you might as well genuinely go to outer space and not hover kind of on the edge of it. Well sit back, and relax because we’ll give you a truly out of this world experience!"
      />
    )
    .toJSON()
  expect(tree).toMatchSnapshot()
})
