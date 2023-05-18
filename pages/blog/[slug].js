import fs from 'fs';
import path from 'path';
import matter from 'gray-matter'
import marked from 'marked'
import Link from 'next/link'

export default function PostPage() {
    return (
        <Link href="/">
            <a className='btn btn-back'>Go Back</a>
        </Link>
    )
}

export async function getStaticProps({ params: { slug } }) {
    const markdownWithMeta = fs.readFileSync(
        path.join('posts', slug + '.md'),
        'utf-8'
    )
    // dsfdsfs
    const { data: frontmatter, content } = matter(markdownWithMeta)

    return {
        // Next.js pre-renders a page at build time using these props
        props: {
            frontmatter,
            slug,
            content,
        },
    }
}
