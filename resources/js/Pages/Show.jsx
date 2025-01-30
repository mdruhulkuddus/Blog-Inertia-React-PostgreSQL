import {Link, useForm} from "@inertiajs/react";

export default function Show({post}) {

    const {delete: destroy} = useForm();

    function submit(e) {
        e.preventDefault();
        // destroy(`/posts/${post.id}`);
        destroy(route('posts.destroy', post));
    }

    return (
        <>
            <div className="bg-gray-100 px-2 py-10">
                <article
                    className="mx-auto my-10 max-w-md flex-col rounded-2xl bg-white px-4 shadow md:max-w-5xl md:flex-row md:items-center">
                    <div className="py-4 sm:py-8">
                        <a href="#" className="mb-6 block text-2xl font-medium text-gray-700">{post.title}</a>
                        <p className="mb-6 text-gray-500">{post.body}</p>
                        <div className="flex justify-between items-center ">
                            {/* Left side: User name and date */}
                            <div className="flex items-center">
                                <img
                                    className="h-10 w-10 rounded-full object-cover"
                                    src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSQvMsycyGjZfw6yb4UK5AqwMKa82IVd3xwGA&s"
                                    alt="Simon Lewis"
                                />
                                <p className="ml-4 w-56">
                                    <strong className="block font-medium text-gray-700">Johanson Levinsiki</strong>
                                    <span
                                        className="text-sm text-gray-400">{new Date(post.created_at).toLocaleDateString()}{" "}
                                        {new Date(post.created_at).toLocaleTimeString()}</span>
                                </p>
                            </div>

                            {/* Right side: Edit and Delete buttons */}
                            <div className="flex items-end space-x-2">
                                {/*<Link href={`/posts/${post.id}/edit`}*/}
                                {/*      className="text-blue-500  hover:text-blue-700">Edit</Link>*/}

                                <Link href={route('posts.edit', post)}
                                      className="text-blue-500  hover:text-blue-700">Edit</Link>

                                <form onSubmit={submit}>
                                    <button
                                        type="submit"
                                        className="text-red-500 hover:text-red-700">Delete
                                    </button>
                                </form>
                            </div>
                        </div>

                    </div>
                </article>
            </div>
        </>
    );
}
