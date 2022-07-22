export const noFakeLists = blocks => {
  const fakeListBlocks = (blocks || []).filter(
    block =>
      block._type === 'block' &&
      block.children.some(blockPart =>
        blockPart._type === 'span' &&
        blockPart.text.includes('\n-')
      )
  ).map(
    (block, index) => [{_key: block._key}] || [index]
  ) || [];

  return fakeListBlocks.length === 0
    ? true
    : {
        message: 'This looks like a list, but it is plain text. Use the bulleted list.',
        paths: fakeListBlocks
      }
}