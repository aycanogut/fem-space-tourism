const screenSize = (width: number | undefined) => {
  if (width && width < 600) {
    return 'mobile'
  } else if (width && width < 1200) {
    return 'tablet'
  } else {
    return 'desktop'
  }
}

export default screenSize
