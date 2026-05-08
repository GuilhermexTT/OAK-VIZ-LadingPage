import { type SchemaTypeDefinition } from 'sanity'

import { testimonialType } from './testimonialType'
import { projectType } from './projectType'

export const schema: { types: SchemaTypeDefinition[] } = {
  types: [testimonialType, projectType],
}
