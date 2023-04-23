import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCalendar } from "@fortawesome/free-solid-svg-icons";
import { RichText } from '@graphcms/rich-text-react-renderer';
import Link from "next/link";
import Sidebar from "./Sidebar";


function PostPage({ post, posts }) {

    return (
        <section className='flex flex-row gap-7 w-full h-fit justify-between px-4'>
            <div className='w-[90%] md:w-[67%] mx-auto md:mx-0 h-full bg-white flex flex-col rounded-lg p-4 gap-5 pt-7 mb-9'>
                <h1 className='font-bold Ubuntu text-black text-2xl md:text-4xl tracking-wide text-center'>{post.title}</h1>
                <p className='text-center text-gray-500 font-bold md:text-lg Ubuntu tracking-wide'>
                    <span><FontAwesomeIcon icon={faCalendar} className='text-pink-500 mr-2' /></span> {post.dateCreated}
                </p>
                <div className='w-full h-fit overflow-hidden'>
                    <img className='ease-out w-full' src={post.image.url} alt='' />
                </div>
                <div className='mt-5 px-2'>
                    <RichText
                        content={post.content.json.children}
                        renderers={{
                            h1: () => '',
                            h2: ({ children }) => <h2 className='font-bold Ubuntu text-black text-xl md:text-3xl tracking-wide my-7'>{children}</h2>,
                            a: ({ children, openInNewTab, href }) => <Link
                                href={href} target={openInNewTab ? '_blank' : '_self'} className='text-blue-700 hover:text-purple-700 transition-all duration-300'>
                                {children}
                            </Link>,
                            img: ({src}) => <img src={src} alt='' className='mb-16 mt-8'></img>,
                            p: ({ children }) => <p className='text-lg text-gray-700 Ubuntu tracking-wider my-4'>{children}</p>,
                            bold: ({ children }) => <b className='text-black font-bold'>{children}</b>,
                            ul: ({ children }) => <ul className='flex flex-col gap-2 my-3'>{children}</ul>
                        }}
                    />
                </div>
            </div>
            <Sidebar posts={posts} />
        </section>
    )
}

export default PostPage