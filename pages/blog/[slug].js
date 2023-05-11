import fs from 'fs';

export default function PostPage() {
    return (
        <div>post</div>
    )
}


export async function getStaticProps() {
}


export async function getStaticPaths() {
    return {
        props: {},
    }
}