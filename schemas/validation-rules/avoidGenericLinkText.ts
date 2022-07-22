const genericLinkNames = [
  'click here',
  'read more',
  'here',
  'learn more'
];

export const avoidGenericLinkText = blocks => {
  const blocksWithGenericLinks = (blocks || []).filter(
    block =>
      block._type === 'block' &&
      block.markDefs && 
      block.children.some(markDef =>
        markDef._type === 'span' &&
        genericLinkNames.includes(markDef.text.toLowerCase())
      ) 
  ).map(
    (block, index) => [{_key: block._key}] || [index]
  ) || []

  return blocksWithGenericLinks.length === 0
    ? true
    : {
        message: 'Some links in this paragraph are too generic. Use a link text that describes the link destination and could be used out of context.',
        paths: blocksWithGenericLinks
      }
}