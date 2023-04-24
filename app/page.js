
import { Categories, PostCard, PostWidget } from '@/components'
import { getPosts } from '@/services'


const getPostsData=async()=>{
  const result=await getPosts()
  return result
  
}

export default async  function  Home() {
  const posts=await  getPostsData()  ;
  return (
    <main className="container mx-auto px-10 mb-8 ">
    <div className="grid grid-cols-12 lg:grid-cols-12 gap-12">
      <div className="col-span-1 lg:col-span-8 ">
      {posts.map((post) => (
            <PostCard post={post.node} key={post.title} />
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
