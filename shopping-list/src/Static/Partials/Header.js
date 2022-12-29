import React from 'react'

import DesktopHeader from './DeviceHeaders/DesktopHeader'
import MobileHeader from './DeviceHeaders/MobileHeader'

export default function Header() {
    return (
        <>
            <div class="on_mobile:hidden">
                <DesktopHeader />
            </div>
            <div class="on_desktop:hidden flex justify-around bg-black w-[90vw] m-auto">
                <MobileHeader />
            </div>
        </>
    )
}
