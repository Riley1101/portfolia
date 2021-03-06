import { defineDocumentType, makeSource, ComputedFields, defineNestedType } from 'contentlayer/source-files'
import readingTime from 'reading-time';
import remarkGfm from 'remark-gfm';

import rehypePrism from 'rehype-prism-plus';


const computedFields: ComputedFields = {
    readingTime: { type: 'json', resolve: (doc) => readingTime(doc.body.raw) },
    wordCount: {
        type: 'number',
        resolve: (doc) => doc.body.raw.split(/\s+/gu).length
    },

    slug: {
        type: 'string',
        resolve: (doc) => doc._raw.sourceFileName.replace(/\.mdx$/, '')
    }
};

const Category = defineNestedType(() => ({
    name: 'Category',
    fields: {
        name: { type: 'string', required: true },
    },
}))

export const Blog = defineDocumentType(() => (
    {
        name: 'Blog',
        filePathPattern: `blog/*/*.mdx`,
        bodyType: 'mdx',
        fields: {
            title: { type: 'string', required: true },
            image: { type: 'string', required: true },
            summary: { type: 'string', required: true },
            publishedAt: { type: 'string', required: true },
            pinned: { type: 'boolean', default: false },
            locale: { type: 'string', default: 'en' },
            categories: {
                type: 'list',
                of: Category,
            },
        },
        computedFields
    }
))

export const Snippets = defineDocumentType(() => ({
    name: 'Snippets',
    filePathPattern: `snippets/en/*.mdx`,
    bodyType: 'mdx',
    fields: {
        title: { type: 'string', required: true },
        summary: { type: 'string', required: true },
        publishedAt: { type: 'string', required: true },
    },
    computedFields
}))

export default makeSource({
    contentDirPath: 'data',
    documentTypes: [Blog, Snippets],
    mdx: {
        remarkPlugins: [remarkGfm],
        rehypePlugins: [
            rehypePrism,
        ]
    }
})