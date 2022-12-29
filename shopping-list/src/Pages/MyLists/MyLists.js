import React from 'react'
import { Helmet } from 'react-helmet'

import Header from '../../Static/Partials/Header'

export default function MyLists() {
    return (
        <>
            <Helmet>
                <title>My Lists</title>
            </Helmet>
            <div class="m-auto bg-main_bg_color text-text_white min-h-screen">
                <Header />
            </div>
        </>
    )
}
