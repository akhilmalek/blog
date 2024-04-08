import { allPosts } from "@/.contentlayer/generated"
import Link from "next/link"

export default function Home() {
  return (
    <div className="pt-3">
      {allPosts.map((post) => (
        <>
        <article key={post._id} className="py-3 prose dark:prose-invert w-full">
          <Link href={post.slug}>
            <h2>{post.title}</h2>
          </Link>
          {post.description && <p>{post.description}</p>}
        </article>
        
        <hr className="" /></>
      ))}
    </div>
  )
}
