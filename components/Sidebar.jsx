import Link from "next/link"

function Sidebar({ posts }) {
    return (
        <div className='bg-white w-[32%] hidden md:flex flex-col h-fit rounded-lg pb-8 px-3 gap-5'>
            <h3 className='text-lg text-black Ubuntu font-bold tracking-wider mt-4'>Featured Posts</h3>
            <hr />
            <div className='flex flex-col gap-4'>
                {posts.map((post, idx) => {
                    if (post.featured === true) {
                        return (
                            <Link href={`/posts/${post.slug}`} key={idx} className='flex justify-between'>
                                <div className='w-[55px] h-[55px] rounded-full'
                                    style={{ backgroundImage: `url(${post.image.url})`, backgroundRepeat: 'no-repeat', backgroundSize: 'cover', backgroundPosition: 'center' }} />
                                <div className='w-[78%]'>
                                    <p className='font-bold Ubuntu tracking-wide'>{post.title}</p>
                                    <p className='text-gray-500 font-bold Ubuntu tracking-wide'>{post.dateCreated}</p>
                                </div>
                            </Link>
                        )
                    }
                })}
            </div>
        </div>
    )
}

export default Sidebar