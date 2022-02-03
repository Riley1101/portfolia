import { defineDocumentType, makeSource, ComputedFields, } from 'contentlayer/source-files'
import highlight from 'rehype-highlight'
import readingTime from 'reading-time';
import remarkGfm from 'remark-gfm';
import rehypeCodeTitles from 'rehype-code-titles';
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

export const Blog = defineDocumentType(() => ({
    name: 'Blog',
    filePathPattern: `blog/en/*.mdx`,
    bodyType: 'mdx',
    fields: {
        title: { type: 'string', required: true },
        image: { type: 'string', required: true },
        summary: { type: 'string', required: true },
        publishedAt: { type: 'string', required: true },
        pinned: { type: 'boolean', default: false }
    },
    computedFields
}))

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
            rehypeCodeTitles,
            rehypePrism,
        ]
    }
})