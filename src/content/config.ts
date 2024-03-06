import { defineCollection, z } from 'astro:content';

export const collections = {
	work: defineCollection({
		type: 'content',
		schema: z.object({
			title: z.string(),
			startDate: z.coerce.date(),
			endDate: z.coerce.date().optional(),
			displayMonth: z.coerce.boolean().optional(),
			tags: z.array(z.string()).optional(),
			img: z.string().optional(),
			img_alt: z.string().optional(),
		}),
	}),
	education: defineCollection({
		type: 'content',
		schema: z.object({
			title: z.string(),
			startDate: z.coerce.date(),
			endDate: z.coerce.date().optional(),
			img: z.string().optional(),
			img_alt: z.string().optional(),
		}),
	}),
};
