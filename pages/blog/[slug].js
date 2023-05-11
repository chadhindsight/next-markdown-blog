import fs from 'fs';
import path from 'path';
import matter from 'gray-matter'
import marked from 'marked'
import Link from 'next/link'

export default function PostPage() {
    return (
        <Link>

        </Link>
    )
}

export async function getStaticProps({ params: { slug } }) {
    const markdownWithMeta = fs.readFileSync(
        path.join('posts', slug + '.md'),
        'utf-8'
    )

    const { data: frontmatter, content } = matter(markdownWithMeta)

    return {
        // Next.js will pre-render a page at build time using these props
        props: {
            frontmatter,
            slug,
            content,
        },
    }
}
