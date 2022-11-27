// motion-framer animation variants by screen width

const variants = (width: number | undefined) => {
  if (width && width <= 600) {
    return {
      open: { opacity: 1, y: 0 },
      closed: { opacity: 0, y: '-100%' },
    }
  } else {
    return {
      open: { opacity: 1, y: 0 },
      closed: { opacity: 1, y: 0 },
    }
  }
}

export default variants
