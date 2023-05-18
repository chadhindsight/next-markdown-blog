import fs from 'fs';
import path from 'path';
import matter from 'gray-matter'
import marked from 'marked'
import Link from 'next/link'

export default function PostPage() {
    return (
        <>
            <Link href="/">
                <a className='btn btn-back'>Go Back</a>
            </Link>
            <div className='card card-page'>
                <h1 className='post-title'>{title}</h1>
                <div className='post-date'>Posted on {date}</div>
            </div>
        </>
    )
}

export async function getStaticProps({ params: { slug } }) {
    const markdownWithMeta = fs.readFileSync(
        path.join('posts', slug + '.md'),
        'utf-8'
    )

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
