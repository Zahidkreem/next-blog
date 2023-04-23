import { Categories, PostCard, PostWidget } from '@/components'

const posts =[
  {title:'React',excerpt:'react'},
  {title:'Web Development',excerpt:'web-dev'},
]

export default function Home() {
  return (
    <main className="">
    <div className="grid grid-cols-12 lg:grid-cols-12 gap-12">
      <div className="col-span-1 lg:col-span-8 ">
      {posts.map((post) => (
            <PostCard post={post} key={post.title} />
          ))}
      </div>
      <div className="col-span-1 lg:col-span-4 ">
        <div className="lg:sticky relative top-8"></div>
        <PostWidget />
        <Categories />
      </div>
    </div>
  </main>
  )
}
