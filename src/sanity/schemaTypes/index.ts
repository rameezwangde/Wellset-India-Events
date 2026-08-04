import { type SchemaTypeDefinition } from 'sanity'
import { categoryType } from './categoryType'
import { projectType } from './projectType'

export const schema: { types: SchemaTypeDefinition[] } = {
  types: [categoryType, projectType],
}
