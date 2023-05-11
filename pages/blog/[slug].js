import fs from 'fs';

export default function PostPage() {
    return (
        <div>post</div>
    )
}

// Next.js will pre-render a page at build time using these props
export async function getStaticProps() {
}


export async function getStaticPaths() {
    return {
        props: {},
    }
}