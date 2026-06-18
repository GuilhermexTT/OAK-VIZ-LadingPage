import createImageUrlBuilder from '@sanity/image-url'
import type { SanityImageSource } from '@sanity/image-url'
import { dataset, projectId } from '../env'

// https://www.sanity.io/docs/image-url
const builder = createImageUrlBuilder({ projectId, dataset })

export const urlFor = (source: SanityImageSource) => {
  return builder.image(source)
}

/**
 * Helper to generate optimized Cloudinary URLs on-the-fly.
 * Injects quality/format auto and optional width transformations.
 */
export const getOptimizedCloudinaryUrl = (url: string | undefined, width?: number) => {
  if (!url) return '';

  if (url.includes('res.cloudinary.com')) {
    const transformation = width ? `q_auto,f_auto,w_${width}` : 'q_auto,f_auto';
    if (url.includes('/upload/')) {
      return url.replace('/upload/', `/upload/${transformation}/`);
    }
  }

  return url;
};

