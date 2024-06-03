import Link from 'next/link'
 
export default function NotFound() {
  return (
    <div className='my-8'>
      <h2>Sorry, I am building this page</h2>
      <Link className="text-blue-600" href="/">Return Home</Link>
    </div>
  )
}