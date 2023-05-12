export const revalidate = 1200; 

type Post = {
    title: string;
    content: string;
    slug: string;
}

type Props = {
    params: {slug: string}
}

export async function generateStaticParams() {
    const posts: Post[] = await fetch('http://localhost:3000/api/content').then(
      (res) => res.json()
    );
  
    return posts.map((post) => ({
      slug: post.slug,
    }));
  }
export default async function BlogPost({params}: Props) {
    const posts: Post[] = await fetch(`http://localhost:3000/api/content`)
        .then((res) => res.json())
    
    // bang tells compiler we will find it
    const post: Post = posts.find((post) => post.slug === params.slug)!;

    return(
        <div>
            <h1>{post.title}</h1>
            <p>{post.content}</p>
        </div>
    )
}