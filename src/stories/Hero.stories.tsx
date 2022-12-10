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
} as IHeroProps
