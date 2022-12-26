import React from 'react'
import { motion } from 'framer-motion'

const Transition = (props: any) => {
  const { children } = props

  return <motion.div {...props}>{children}</motion.div>
}

export default Transition
