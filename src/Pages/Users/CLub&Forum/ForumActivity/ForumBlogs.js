import React from 'react';
import Card from '../Card/Card';
import "./ForumBlogs.css"
import { useEffect } from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import auth from '../../../../firebase.init';
import { useState } from 'react';
import { HiPencilAlt } from 'react-icons/hi';
import BlogPost from '../../../DynamicPages/DynamicForum/BlogPost';
const ForumBlogs = () => {
  const [user] = useAuthState(auth)
  const [blog, setBlog] = useState([])
  console.log(blog);
  useEffect(() => {
    const email = user?.email
    const url = `http://localhost:8000/myBlog?email=${email}`;
    fetch(url, {
      method: "GET",
    })
      .then((res) => res.json())
      .then((data) => setBlog(data));
  }, [user]);
  const [, setCancle] = useState(false);
  const crossHandle = () => {
    setCancle(false)
  }
  return (
    <section className="">
      <div className=" relative">
        <div className="Appes ">
          <div className="propertiest grid grid-cols-1 lg:grid-cols-3 ">
            {blog.map((item) => (
              <Card data={item} key={item.date} />
            ))}
          </div>
        </div>
        <div>
          {
            user?.email && <div className="absolute bottom-0 right-2">
              <label htmlFor="my-modal-6" className=" uppercase cursor-pointer"><h1 className="flex items-center full text-primary py-2 px-3 border-primary border-2">
                <HiPencilAlt className="mr-3 text-xl" />
                Blog Post
              </h1></label>
              <input type="checkbox" id="my-modal-6" className="modal-toggle" />
              <div className="modal md:pt-10 pt-40 w-full overflow-scroll">
                <div className="relative w-full rounded-lg md:w-9/12 lg:w-7/12 bg-black h-auto">
                  <label htmlFor="my-modal-6" onClick={crossHandle} className=" btn-sm text-white btn-circle absolute right-0 top-3 text-2xl font-bold">✕</label>
                  <BlogPost />
                </div>
              </div>
            </div>
          }
        </div>
      </div>
    </section>
  );
};

export default ForumBlogs;