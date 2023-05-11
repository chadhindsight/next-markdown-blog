import fs from 'fs';
import path from 'path';

export default function PostPage() {
    return (
        <div>post</div>
    )
}

export async function getStaticPaths() {


}
// Next.js will pre-render a page at build time using these props
export async function getStaticProps() {
    return {
        props: {},
    }
}

