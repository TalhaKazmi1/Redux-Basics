import React, { useEffect, useState } from 'react'
import axios from 'axios'
import { useSharedDispatcher, useSharedSelector, actionAPI } from '../../shared'

function PostTable() {
    const [post,setPost] = useState([]);
    const dispatcher = useSharedDispatcher()
    useEffect(() => {
      dispatcher(actionAPI.getPosts())
    }, [])
    const { posts, postsLoading, postsError, postsErrorMessage } = useSharedSelector((state) => state.PostData)
    useEffect(() => {
      if(posts){
        setPost(posts)
      }
    }, [posts])
  return (
    <div class='flex flex-col '>
      <div class='sm:-mx-6 lg:-mx-8'>
        <div class='inline-block min-w-full py-2 sm:px-6 lg:px-8'>
          <div class=''>
            <table class='min-w-full text-left text-sm font-light'>
              <thead class='border-b font-medium dark:border-neutral-500'>
                <tr>
                  <th scope='col' class='px-6 py-4'>
                    ID
                  </th>
                  <th scope='col' class='px-6 py-4'>
                    Title
                  </th>
                  <th scope='col' class='px-6 py-4'>
                    Body
                  </th>
                </tr>
              </thead>
              <tbody>

              {post.map((post,index) => (
                <tr class='border-b dark:border-neutral-500' key={index}>
                  <td class='px-6 py-4'>{post.id}</td>
                  <td class='px-6 py-4'>{post.title}</td>
                  <td class='px-6 py-4'>{post.body}</td>
                </tr>
              ))}
              
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
}

export default PostTable;
