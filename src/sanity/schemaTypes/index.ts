import { type SchemaTypeDefinition } from 'sanity'

import { testimonialType } from './testimonialType'
import { projectType } from './projectType'
import { portfolioType } from './portfolioType'
import { faqType } from './faqType'

export const schema: { types: SchemaTypeDefinition[] } = {
  types: [testimonialType, projectType, portfolioType, faqType],
}
