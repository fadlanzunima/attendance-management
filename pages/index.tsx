import { GetStaticProps } from 'next';
import Link from 'next/link'
import Layout from '../components/Layout'
import prisma from '../prisma/client';



const IndexPage = () => (

  <Layout title="Home | Next.js + TypeScript Example">
    <h1>Hello Next.js 👋</h1>
    <p>
      <Link href="/about">About</Link>
    </p>
  </Layout>
)

export default IndexPage
