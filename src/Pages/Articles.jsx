import React from 'react'
import articles from '../assets/articles.svg'

const Articles = () => {
  return (
    <section className='article'>
      <h3>Hãy theo dõi để cập nhật những bài viết mới nhất</h3>
      <img src={articles} alt="articles" />
    </section>
  )
}

export default Articles
