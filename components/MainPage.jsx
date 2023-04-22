import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCalendar, faArrowRight } from "@fortawesome/free-solid-svg-icons";
import Link from "next/link";
import Sidebar from "./Sidebar";

function MainPage({ posts }) {
    return (
        <section className='flex flex-row gap-7 w-full h-full justify-between px-4'>
            <div className='grid grid-cols-1 w-[90%] md:w-[65%] mx-auto md:mx-0 h-full'>
                {posts.map((post, idx) => (
                    <div className='flex flex-col items-center justify-between bg-white px-4 pt-4 pb-10 mb-10 rounded-lg h-fit' key={idx}>
                        <div className='w-full h-fit overflow-hidden cursor-pointer'>
                            <img className='hover:scale-110 transition-all duration-500 ease-out w-full' src={post.image.url} alt='' />
                        </div>
                        <div className='flex flex-col gap-6 mt-4'>
                            <h2 className='font-bold Ubuntu text-black text-2xl md:text-4xl tracking-wider text-center'>{post.title}</h2>
                            <p className='text-center text-gray-500 font-bold md:text-lg Ubuntu tracking-wide'>
                                <span><FontAwesomeIcon icon={faCalendar} className='text-pink-500 mr-2' /></span> {post.dateCreated}
                            </p>
                            <p className='text-center text-gray-700 font-bold text-[16px] md:text-lg Ubuntu tracking-wide'>
                                {post.metaDescription}
                            </p>
                            <Link href={`/posts/${post.slug}`} className='border-blue-700 font-semibold Ubuntu tracking-wider border-[2px] w-fit p-3 rounded-xl text-blue-700 hover:text-white hover:bg-blue-700 transition-all duration-500 ease-out self-center mt-2'>
                                Continue Reading <span className='ml-2'> <FontAwesomeIcon icon={faArrowRight} /> </span>
                            </Link>
                        </div>
                    </div>
                ))}
            </div>
            <Sidebar posts={posts} />
        </section>
    )
}

export default MainPage