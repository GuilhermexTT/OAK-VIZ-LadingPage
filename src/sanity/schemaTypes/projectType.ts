import { defineField, defineType } from 'sanity'

export const projectType = defineType({
  name: 'project',
  title: 'Projeto / Álbum',
  type: 'document',
  fields: [
    defineField({
      name: 'title',
      title: 'Título do Projeto (ex: Festival de Inverno)',
      type: 'string',
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'slug',
      title: 'Slug (URL)',
      type: 'slug',
      options: {
        source: 'title',
        maxLength: 96,
      },
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'category',
      title: 'Categoria do Projeto',
      type: 'string',
      options: {
        list: [
          { title: 'Arquitetura', value: 'arquitetura' },
          { title: 'Corporativo', value: 'corporativo' },
        ],
        layout: 'radio',
      },
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'coverImage',
      title: 'Foto de Capa',
      type: 'cloudinary.asset',
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'gallery',
      title: 'Galeria de Fotos',
      type: 'array',
      of: [{ type: 'cloudinary.asset' }],
      description: 'Adicione todas as fotos deste projeto aqui.',
    }),
    defineField({
      name: 'youtubeVideos',
      title: 'Vídeos do YouTube (Opcional)',
      type: 'array',
      of: [{ type: 'url' }],
      description: 'Cole aqui os links dos vídeos do YouTube referentes a este projeto.',
    }),
    defineField({
      name: 'order',
      title: 'Ordem de Exibição',
      type: 'number',
    }),
  ],
})
