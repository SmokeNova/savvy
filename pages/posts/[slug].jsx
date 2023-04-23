import React from 'react'
import { GraphQLClient, gql } from 'graphql-request';
import Prism from 'prismjs';
import Head from 'next/head';
import Header from '@/components/Header';
import PostPage from '@/components/PostPage';


function post({ post, posts }) {
    return (
        <>
            <Head>
                <title>Savvy</title>
                <meta name="description" content={post.metaDescription} />
                <meta name="viewport" content="width=device-width, initial-scale=1" />
                <link rel="icon" href="/favicon.ico" />
            </Head>
            <div id="cont">
                <Header />
                <main className='xl:w-[80%] bg-transparent xl:mx-auto mt-14 h-[78vh] mb-8'>
                    <PostPage post={post} posts={posts} />
                </main>
            </div>
        </>
    )
}

export default post

export async function getStaticPaths() {
    const hygraph = new GraphQLClient(
        `${process.env.HYGRAPH_ENDPOINT}`
    );
    const QUERY = gql`
    query Assets {
        posts {
          slug
        }
      }
    `
    const { posts } = await hygraph.request(QUERY);
    const paths = posts.map((post) => ({
        params: {
            slug: post.slug
        }
    }))
    return {
        paths,
        fallback: false
    }
}

export async function getStaticProps({ params }) {
    const { slug } = params

    const hygraph = new GraphQLClient(
        `${process.env.HYGRAPH_ENDPOINT}`
    );
    const QUERY = gql`
    query MyQuery {
        post(where: {slug: "${slug}"}) {
          content {
            json
          }
          dateCreated
          image {
            url
          }
          title
          metaDescription
        }
      }
  `
    const { post } = await hygraph.request(QUERY);

    const query = gql`
  query Assets {
    posts {
      slug
      id
      image {
        url
      }
      metaDescription
      dateCreated
      featured
      title
    }
  }
  `
  const { posts } = await hygraph.request(query);
  posts.reverse();
    
    return {
        props: {
            post,
            posts,
        }
    }
}