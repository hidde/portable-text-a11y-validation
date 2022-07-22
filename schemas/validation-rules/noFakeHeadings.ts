export const noFakeHeadings = blocks => {
  const emptyBlocks = (blocks || []).filter(
    block =>
      block._type === 'block' &&
      block.style === 'normal' &&
      block.children.every(blockPart =>
        blockPart._type === 'span' &&
        blockPart.marks.length > 0 && 
        blockPart.marks.every(mark => mark === "strong")
      )
  )

  console.log(blocks)
  
  const pointersToErroneousFields = emptyBlocks.map(
    (block, index) => [{_key: block._key}] || [index]
  ) || [];

  return pointersToErroneousFields.length === 0
    ? true
    : {
        message: 'It looks like this should be a heading, not bold text.',
        paths: pointersToErroneousFields
      }
}