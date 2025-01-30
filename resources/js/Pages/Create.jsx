import {Head, useForm} from "@inertiajs/react";

export default function Create() {

    const {data, setData, post, errors, processing} = useForm({
        title: "",
        body: ""
    });

    function handleSubmit(e) {
        e.preventDefault();
        post("/posts"); // post method
    }

    // console.log(errors)

    return (
        <>
            <Head title="Create Posts"/>
            <h1 className=" text-center mb-2 py-2 text-2xl font-bold leading-none tracking-tight text-gray-900">
                Create new Post
            </h1>
            <form onSubmit={handleSubmit}
                  className="max-w-sm mx-auto border border-gray-200 p-5 rounded-md bg-white mt-5">
                <div className="mb-5">
                    <label htmlFor="title"
                           className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Title</label>
                    <input type="text" id="title"
                           value={data.title}
                           onChange={(e) => setData("title", e.target.value)}
                           className={`bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5
            ${errors.title && '!ring-red-500 border-red-500'}`}
                           placeholder="Write a title"/>
                    {errors.title && <p className="text-xs text-red-500 flex items-center mt-2">{errors.title}</p>}
                </div>
                <div className="mb-5">
                    <label htmlFor="body"
                           className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Body</label>
                    <textarea id="body" rows="4"
                              value={data.body}
                              onChange={(e) => setData("body", e.target.value)}
                              className="block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500"
                              placeholder="Write post description..."></textarea>
                    {errors.body && <p className="text-xs text-red-500 flex items-center mt-2">{errors.body}</p>}
                </div>
                <button
                    type="submit"
                    disabled={processing}
                    className={`text-white font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center focus:ring-4 focus:outline-none
    ${processing ? 'bg-gray-400 cursor-not-allowed' : 'bg-blue-700 hover:bg-blue-800 focus:ring-blue-300'}`}
                >Submit
                </button>
            </form>

        </>
    );
}
