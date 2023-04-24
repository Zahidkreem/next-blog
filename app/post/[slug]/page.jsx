import React from 'react'
import { getPostDetails } from '@/services'
import {Categories,PostWidget} from '../../../components'
import {PostDetail} from '../../../components/PostDetail'
import { Author } from '@/components/Author'
import { CommentsForm } from '@/components/CommentsForm'
import { Comments } from '@/components/Comments'


const getPostDetailsData=async(slug)=>{
  const result=await getPostDetails(slug)
  return result
  
}


const page = async ({params}) => {
  const postData=await  getPostDetailsData(params.slug)
  console.log('*********************************')
  console.log(postData)
  console.log('*********************************')
  return (
    <div className='container mx-auto px-10 mb-8 '>
      <div className='grid grid-cols-1 lg:grid-cols-12 gap-12'>
        <div className='col-span-1 lg:col-span-8'>
       <PostDetail post={postData}/>
       <Author author={postData.author}/>
       <CommentsForm slug={postData.slug}/>
       <Comments slug={postData.slug}/>
        </div>
        <div className='col-span-1 lg:col-span-4'>
          <div className='relative lg:stick top-8'>
            <PostWidget slug={postData.slug} />
            <Categories/>
          </div>
        </div>
      </div>
    </div>
  )
}

export default page