import {createConfig} from 'sanity'
import {deskTool} from 'sanity/desk'
import {schemaTypes} from './schemas'

export default createConfig({
  name: 'default',
  title: 'Hidde\'s validation playground',

  projectId: 'we6khygx',
  dataset: 'production',

  plugins: [deskTool()],

  schema: {
    types: schemaTypes,
  },
})
