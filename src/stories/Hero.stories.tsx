// boilerplate story example

import { ComponentMeta, ComponentStory } from '@storybook/react'
import Hero from '../components/Hero'
import { IHeroProps } from '../interfaces/Hero.interface'

export default {
  title: 'Hero',
  component: Hero,
  // More on argTypes: https://storybook.js.org/docs/react/api/argtypes
  argTypes: {},
} as ComponentMeta<typeof Hero>

// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
const Template: ComponentStory<typeof Hero> = (args) => <Hero {...args} />

export const Base = Template.bind({})
// More on args: https://storybook.js.org/docs/react/writing-stories/args

Base.args = {
  label: 'Hero',
  uppertitle: 'so, you want to travel to',
  title: 'space',
  description:
    'Let’s face it; if you want to go to space, you might as well genuinely go to outer space and not hover kind of on the edge of it. Well sit back, and relax because we’ll give you a truly out of this world experience!',
} as IHeroProps
