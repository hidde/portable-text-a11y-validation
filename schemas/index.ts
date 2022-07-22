import { noFakeHeadings } from "./validation-rules/noFakeHeadings";
import { avoidGenericLinkText } from "./validation-rules/avoidGenericLinkText";
import { noFakeLists } from "./validation-rules/noFakeLists";

export const schemaTypes = [
  {
    type: 'document',
    name: 'book',
    title: 'Books',
    fields: [
      {
        type: 'string',
        name: 'name',
        title: 'Book title'
      },
      {
        name: 'content',
        type: 'array',
        title: 'Review',
        of: [
          {
            type: 'block'
          }
        ],
        validation: (Rule) => 
          Rule
            .custom(noFakeHeadings)
            .custom(noFakeLists)
            .custom(avoidGenericLinkText)
      }
    ]
  }
]
