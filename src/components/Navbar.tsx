    import { Link } from 'react-router-dom'
export function Navbar() {

    return (
        <nav>
            <ul>
                <svg width="118" height="118" viewBox="0 0 118 118" fill="none" xmlns="http://www.w3.org/2000/svg">
<g filter="url(#filter0_di_2_981)">
<circle cx="59" cy="59" r="53" fill="#201E1E"/>
<circle cx="59" cy="59" r="51" stroke="#55EC20" stroke-opacity="0.5" stroke-width="4" stroke-dasharray="2 2"/>
</g>
<path d="M47.8633 32.5H62.9385C64.2479 32.5002 65.2127 33.7503 64.8857 35.0225L60.4326 48.5938L60.2168 49.25H72.9883C74.5389 49.2502 75.5017 50.9349 74.7236 52.2656L74.7227 52.2676L56.2979 84.0918C55.9287 84.7295 55.2578 85.0986 54.5527 85.0986C53.2699 85.0985 52.299 83.8993 52.6006 82.626L57.4258 62.2646L57.5723 61.6494H44.5137C43.2991 61.6494 42.3586 60.5768 42.5176 59.3682L45.8672 34.2441C46.0012 33.2471 46.857 32.5001 47.8633 32.5Z" fill="#201E1E" stroke="#55EC20"/>
<defs>
<filter id="filter0_di_2_981" x="0" y="0" width="118" height="118" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
<feFlood flood-opacity="0" result="BackgroundImageFix"/>
<feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha"/>
<feOffset/>
<feGaussianBlur stdDeviation="3"/>
<feComposite in2="hardAlpha" operator="out"/>
<feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.25 0"/>
<feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow_2_981"/>
<feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow_2_981" result="shape"/>
<feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha"/>
<feMorphology radius="2" operator="erode" in="SourceAlpha" result="effect2_innerShadow_2_981"/>
<feOffset/>
<feGaussianBlur stdDeviation="4"/>
<feComposite in2="hardAlpha" operator="arithmetic" k2="-1" k3="1"/>
<feColorMatrix type="matrix" values="0 0 0 0 0.358333 0 0 0 0 0.358333 0 0 0 0 0.358333 0 0 0 0.25 0"/>
<feBlend mode="normal" in2="shape" result="effect2_innerShadow_2_981"/>
</filter>
</defs>
</svg>

                <li>
                <link>Oversigt</link>
                </li>
                <li className="w-[78px] h-[22px] absolute top-16px left-[203px] text-[#55EC20]"> 
                <link >Lige nu</link>
                </li>
                <li><Link to="/about">Historik</Link></li>


            </ul>
        </nav>
    )
}