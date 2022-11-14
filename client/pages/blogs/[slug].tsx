import { GetStaticProps, GetStaticPaths, InferGetStaticPropsType, NextPage } from 'next'


import client from '../../client'
import ContentList from '../../components/ContentList/ContentList'
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

  return (    
    <div className={globalStyles.app} >
      <NavBar />
      <Header title={post.title} subtitle="" mainImage={post.mainImageUrl} mainPage={false} />
      <div className={styles.app__blogBody}>
        <div className={styles.app__blogBodyMain}>
          <Section title='' body={post.body} slug="Introduction" />
          {post.sections ? post.sections.map((section: PostInterface, index: number) => <Section title={section.title} body={section.body} slug={section.slug.current} key={`section ${index}`} />): <></>}
        </div>
        <div className={styles.app__blogBodyList}>
          <ContentList contents={post.sections} />
        </div>
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