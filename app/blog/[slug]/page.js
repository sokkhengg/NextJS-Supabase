import { notFound } from "next/navigation"

const titles = {
  'first' : 'Hello First!',
  'second': 'Hello Second!'
}

export async function generateMetadata({ params, searchParams }, parent) {
  const description = (await parent).description ?? 'Default desc'
  return {
    title: titles[params.slug]
  }
}

export default function BlogPost({params}) {
  if (!['first', 'second'].includes(params.slug)) {
    notFound()
  }
  return (
    <>Hello! {params.slug}</>
  )
}
