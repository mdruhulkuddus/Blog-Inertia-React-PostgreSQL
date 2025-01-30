import Layout from "@/Layouts/Layout.jsx";
import {Link, usePage} from "@inertiajs/react";
import SuccessToast from "@/Components/SuccessToast.jsx";
import {Head} from '@inertiajs/react'

// import {useRoute} from "../../../vendor/tightenco/ziggy"; // automatically import this when i call route

function Home({posts}) {


    // const route = useRoute();
    // console.log(usePage());
    const {flash} = usePage().props;

    return <>
        <Head title="Home"/>

        <h1 className=" text-center mb-2 py-2 text-2xl font-bold leading-none tracking-tight text-gray-900">
            Hello {name || 'Guest'}
        </h1>
        {flash.message && <SuccessToast message={flash.message}/>}
        <div>
            {posts.data.map((post) => (
                <div className="bg-gray-100 py-1" key={post.id}>
                    <article
                        className="mx-auto flex max-w-md flex-col rounded-2xl bg-white px-4 shadow md:max-w-3xl md:flex-row md:items-center">
                        <div className="py-2 sm:py-2">
                            <a href="#"
                               className="mb-1 block text-2xl font-medium text-gray-700">{post.title.length > 50 ? post.title.slice(0, 50) + "..." : post.title}</a>
                            <p className="mb-1 text-gray-500"> {post.body.length > 90 ? post.body.slice(0, 90) + "" : post.body}</p>

                            {/*<Link href={`/posts/${post.id}`} className="text-blue-500">Read*/}
                            {/*    More...</Link>*/}

                            <Link href={route('posts.show', post)} className="text-blue-500">Read
                                More...</Link>


                            <div className="flex items-center">
                                <img className="h-10 w-10 rounded-full object-cover"
                                     src="https://cdn3.iconfinder.com/data/icons/flatastic-4-1/256/male_user_edit-512.png"
                                     alt="Simon Lewis"/>
                                <p className="ml-4 w-56">
                                    <strong className="block font-medium text-gray-700">Johanson Levinsiki</strong>
                                    <span
                                        className="text-sm text-gray-400">{new Date(post.created_at).toLocaleTimeString()}</span>
                                </p>

                            </div>
                        </div>
                    </article>
                </div>
            ))}
        </div>

        <div className="py-2 px-2 border-gray-200">
            {posts.links.map((link) => (
                link.url ?
                    <Link
                        key={link.label}
                        href={link.url}
                        dangerouslySetInnerHTML={{__html: link.label}}
                        className={`p-1 mx-1 ${link.active ? "text-blue-500 font-bold" : ""}`}
                    />
                    :
                    (
                        <span
                            key={link.label}
                            dangerouslySetInnerHTML={{__html: link.label}}
                            className="p-1 mx-1 text-stone-500">
                        </span>
                    )
            ))}
        </div>
    </>
}

// Home.layout = page => <Layout children={page}/>

export default Home;
