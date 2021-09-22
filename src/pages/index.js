import Head from 'next/head'
import Image from 'next/image'
import Link from "next/link";
import styles from '../styles/Home.module.css'

export default function HomePage() {

  return <div>Welcome to Next.js!

<p>
          Ir a <Link href="/advices">advices</Link>
        </p>
  </div>
}

