import { GetStaticProps, GetStaticPaths, InferGetStaticPropsType, NextPage } from 'next'


import client from '../../client'
import ContentList from '../../components/ContentList/ContentList'
import Contents from '../../components/Contents/Contents'
import Footer from '../../components/Footer/Footer'
import Header from '../../components/Header/Header'
import NavBar from '../../components/NavBar/NavBar'

import PostInterface from '../../interfaces/PostInterface'
import Section from '../../components/Section/Section';

import globalStyles from '../../styles/Home.module.scss';
import styles from './Blog.module.scss';


const Post: NextPage<InferGetStaticPropsType<typeof getStaticProps>> = ({ post }) => {
  if (!post) {
    return (
      <h1>404 - Page Not Found</h1>
    )
  }  

  console.log(post);

  return (    
    <div className={globalStyles.app} >
      <NavBar />
      <Header title={post.title} subtitle="" mainImage={post.mainImageUrl} />
      <div className={styles.app__blogBody}>
        <Section title='' body={post.body} />
        {post.sections.map((section, index) => <Section title={section.sectionName} body={section.body} key={`section ${index}`} />)}
      </div>
      <Footer />
    </div>
  )
}

export const getStaticPaths: GetStaticPaths = async () => {
  const paths = await client.fetch(`*[_type == "post" && defined(slug.current)][].slug.current`)

  return {
    paths: paths.map((slug: string) => ({params: {slug}})),
    fallback: true,
  }
}

export const getStaticProps: GetStaticProps = async (context) => {
  const slug = context.params ? context.params.slug : '';
  const post: PostInterface[] | undefined = await client.fetch(`*[_type == "post" && slug.current == $slug]{
    ...,
    tags[]->,
    "mainImageUrl": mainImage.asset->url,
    author->
  }[0]`, { slug })  

  return {
    props: {
      post,
    }
  }
}

export default Post