import type { Metadata } from 'next'
import './globals.css'
import React from "react";

export const metadata: Metadata = {
    title: 'Reaction',
    description: 'Reaction Website',
}

export default function RootLayout ({
                                        children,
                                    }: {
    children: React.ReactNode
}) {
    return (
        <html lang="en">
        <head>
            <link
                href="https://fonts.googleapis.com/css2?family=Poppins:wght@100;200;300;400;500;600;700;800;900&display=swap"
                rel="stylesheet"
            />
            {/* Google Tag Manager */}
            <script dangerouslySetInnerHTML={{
                __html: `
            (function(c,l,a,r,i,t,y){
              c[a]=c[a]||function(){(c[a].q=c[a].q||[]).push(arguments)};
              t=l.createElement(r);t.async=1;t.src="https://www.clarity.ms/tag/"+i;
              y=l.getElementsByTagName(r)[0];y.parentNode.insertBefore(t,y);
            })(window, document, "clarity", "script", "bq6zmhd8dg");
          `
            }}/>
            {/* End Google Tag Manager */}
            {/*Facebook Meta Pixel*/}
            <script dangerouslySetInnerHTML={{
                __html: `
            !function(f,b,e,v,n,t,s)
                {if(f.fbq)return;n=f.fbq=function(){n.callMethod?
                    n.callMethod.apply(n,arguments):n.queue.push(arguments)};
                    if(!f._fbq)f._fbq=n;n.push=n;n.loaded=!0;n.version='2.0';
                    n.queue=[];t=b.createElement(e);t.async=!0;
                    t.src=v;s=b.getElementsByTagName(e)[0];
                    s.parentNode.insertBefore(t,s)}(window, document,'script',
                'https://connect.facebook.net/en_US/fbevents.js');
                fbq('init', '959679564604076');
                fbq('track', 'PageView');
            `
            }}>
            </script>
            <noscript>
                <img alt="facebook pixel logo" height="1" width="1" style={{ display: 'none' }}
                     src="https://www.facebook.com/tr?id={your-pixel-id-goes-here}&ev=PageView&noscript=1"/>
            </noscript>
            {/*End Facebook Meta Pixel*/}

        </head>
        <body className='font-primary'>
        {children}
        </body>
        </html>
    )
}
