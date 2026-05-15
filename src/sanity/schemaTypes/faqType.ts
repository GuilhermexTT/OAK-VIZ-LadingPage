import { defineField, defineType } from 'sanity'

export const faqType = defineType({
  name: 'faq',
  title: 'Dúvidas Frequentes (FAQ)',
  type: 'document',
  fields: [
    defineField({
      name: 'question',
      title: 'Pergunta',
      type: 'string',
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'answer',
      title: 'Resposta',
      type: 'text',
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'order',
      title: 'Ordem de Exibição',
      type: 'number',
      initialValue: 0,
    }),
  ],
})
