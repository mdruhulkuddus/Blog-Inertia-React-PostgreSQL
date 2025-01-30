import {Link} from "@inertiajs/react";

export default function Layout({children}) {
    return (
        <>
            <header>
                <nav className="bg-gray-400 dark:bg-amber-950">
                    <div className="max-w-screen-xl px-4 py-5 mx-auto">
                        <div className="flex items-center">
                            <ul className="flex flex-row  font-medium mt-0 space-x-8 rtl:space-x-reverse text-sm">
                                <li>
                                    <Link href="/" className="text-gray-900 dark:text-white hover:underline"
                                          aria-current="page">Home</Link>
                                </li>
                                <li>
                                    <Link href="/posts/create"
                                          className="text-gray-900 dark:text-white hover:underline">Create</Link>
                                </li>
                            </ul>
                        </div>
                    </div>
                </nav>
            </header>
            <main>
                {children}
            </main>
        </>
    )
}
