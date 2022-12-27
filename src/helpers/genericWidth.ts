const getGenericWidth = (item: string) => {
  if (item === 'Douglas Hurley') {
    return '160px'
  } else if (item === 'Mark Shuttleworth') {
    return '146px'
  } else if (item === 'Victor Glover') {
    return '178px'
  } else {
    return '206px'
  }
}

export default getGenericWidth
