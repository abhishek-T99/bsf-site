import React from 'react'
import '../Styles/BlogBox.css'
import BlogBox from './BlogBox'
import blogimg1 from '../Images/blog-01.jpg'
import blogimg2 from '../Images/blog-02.jpg'
import blogimg3 from '../Images/blog-03.jpg'

function Blog() {
  return (
    <div className='blog component__space' id='Blog'>
        <div className="heading">
            <h1 className='heading'>
                Latest News
            </h1>
            
            <p className="heading p__color">
                Lorem ipsum dolor sit, amet consectetur adipisicing elit. Expedita numquam ipsam, consequuntur delectus 
                dolorem voluptas quasi est adipisci ut eveniet.
            </p>
            
            <p className='heading p__color'>
                dolorem voluptas quasi est adipisci ut eveniet.
            </p>
        </div>

        <div className="container">
            <div className="row">
                <div className="col__3">
                    <BlogBox 
                        image={blogimg1}
                        heading='Blog post 1'
                        description='This is the first blog post'
                    />
                </div>
                <div className="col__3">
                    <BlogBox 
                        image={blogimg2}
                        heading='Blog post 1'
                        description='This is the first blog post'
                    />
                </div>
                <div className="col__3">
                    <BlogBox 
                        image={blogimg3}
                        heading='Blog post 1'
                        description='This is the first blog post'
                    />
                </div>
            </div>
        </div>
    </div>
  )
}

export default Blog