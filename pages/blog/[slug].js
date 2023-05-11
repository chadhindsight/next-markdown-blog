import fs from 'fs';
import path from 'path';

export default function PostPage() {
    return (
        <div>post</div>
    )
}

export async function getStaticPaths() {
    // Get posts 
    const files = fs.readdirSync(path.join('posts'))

    const paths = files.map((filename) => ({
        params: {
            slug: filename.replace('.md', ''),
        },
    }))

    return {
        // array of accessible paths
        paths,
        fallback: false,
    }

}
// Next.js will pre-render a page at build time using these props
export async function getStaticProps() {
    return {
        props: {},
    }
}

