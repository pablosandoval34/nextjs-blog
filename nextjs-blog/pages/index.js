// pages/index.js
import Head from 'next/head';
import Layout, { siteTitle } from '../components/layout';
import utilStyles from '../styles/utils.module.css';
import { getSortedPostsData } from '../lib/posts-json'; // your JSON-based data
import Link from 'next/link';

export default function Home({ allPostsData }) {
  return (
    <Layout home>
      <Head>
        <title>{siteTitle}</title>
      </Head>

      {/* Intro Section */}
      <section className={utilStyles.headingMd}>
        <p>[]</p>Hello. My name is Steve A. I am a web developer from Santa Rosa, CA
        <p>
          (This is a sample website - you’ll be building a site like this in{' '}
          <a href="https://nextjs.org/learn">our Next.js tutorial</a>.)
        </p>
      </section>

      {/* Blog Section */}
      <section className={`${utilStyles.headingMd} ${utilStyles.padding1px}`}>
        <h2 className={utilStyles.headingLg}>Blog</h2>
        <ul className={utilStyles.list}>
          {allPostsData.map(({ id, title, date }) => (
            <li className={utilStyles.listItem} key={id}>
              <Link href={`/posts/${id}`}>{title}</Link>
              <br />
              <small className={utilStyles.lightText}>
                {date} {/* display division directly instead of Date component */}
              </small>
            </li>
          ))}
        </ul>
      </section>

      {/* Extra Links Section */}
      <section className={utilStyles.headingMd}>
        <h2>Absolute URLs</h2>
        <p>
          <a href="https://www.w3.org/" target="_blank" rel="noopener noreferrer">
            W3C
          </a>
        </p>
        <p>
          <a href="https://www.google.com/" target="_blank" rel="noopener noreferrer">
            Google
          </a>
        </p>

        <h2>Relative URLs</h2>
        <p>
          <a href="html_images.asp">HTML Images</a>
        </p>
        <p>
          <a href="/css/default.asp">CSS Tutorial</a>
        </p>
      </section>
    </Layout>
  );
}

export async function getStaticProps() {
  const allPostsData = getSortedPostsData();
  return {
    props: {
      allPostsData,
    },
  };
}
