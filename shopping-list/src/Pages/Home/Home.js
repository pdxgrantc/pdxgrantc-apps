import React from 'react'
import { Helmet } from 'react-helmet'

import Header from '../../Static/Partials/Header'

export default function Home() {
    return (
        <>
            <Helmet>
                <title>Home</title>
            </Helmet>
            <div class="m-auto bg-main_bg_color text-text_white min-h-screen">
                <Header />
            </div>
        </>
    )
}
