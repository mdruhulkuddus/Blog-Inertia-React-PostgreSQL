import './bootstrap';
import '../css/app.css';

import {createInertiaApp} from '@inertiajs/react';
import {createRoot} from 'react-dom/client';
import Layout from "@/Layouts/Layout.jsx";

createInertiaApp({
    title: title => title ? `${title} - Laravel Inertia React App` : "Laravel Inertia React App",
    resolve: name => {
        const pages = import.meta.glob('./Pages/**/*.jsx', {eager: true})
        // return pages[`./Pages/${name}.jsx`]
        let page = pages[`./Pages/${name}.jsx`];
        page.default.layout = page.default.layout || ((page) => <Layout children={page}/>);
        return page;
    },
    setup({el, App, props}) {
        createRoot(el).render(<App {...props} />)
    },

    progress: {
        color: '#29d',
        showSpinner: true,
    }
})
