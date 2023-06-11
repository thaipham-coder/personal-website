import '@/styles/style.scss';
import gsap from 'gsap';
import ScrollTrigger from 'gsap/dist/ScrollTrigger';
import localFont from 'next/font/local';
import type { AppProps } from 'next/app';
import { useRouter } from 'next/router';
import { useEffect, useState } from 'react';
import useNextCssRemovalPrevention from '@/hooks/useNextCssRemovalPrevention';
import { ThemeProvider } from 'next-themes';
import { GoogleReCaptchaProvider } from 'react-google-recaptcha-v3';
import { TransitionContextProvider } from '@/context/transitionContext';
import { NavigationContextProvider } from '@/context/navigationContext';
import Layout from '@/components/Layout';
import Loader from '@/components/Loader';

const neueMontreal = localFont({
    fallback: ['-apple-systen', 'BlinkMacSystemFont', 'Segoe UI', 'Roboto', 'Oxygen', 'Ubuntu', 'Cantarell', 'Fira Sans', 'Droid Sans', 'Helvetica Neue', 'sans-serif'],
    src: [
        {
            path: '../public/fonts/NeueMontreal-Regular.woff',
            weight: '400',
            style: 'normal',
        },
        {
            path: '../public/fonts/NeueMontreal-Regular.woff2',
            weight: '400',
            style: 'normal'
        },
        {
            path: '../public/fonts/NeueMontreal-Medium.woff',
            weight: '500',
            style: 'normal',
        },
        {
            path: '../public/fonts/NeueMontreal-Medium.woff2',
            weight: '500',
            style: 'normal'
        }
    ],
    display: 'swap'
});

gsap.registerPlugin(ScrollTrigger);

export default function App({ Component, pageProps }: AppProps) {
    const router = useRouter();
    const [isLoading, setIsLoading] = useState(true);
    const [isReady, setIsReady] = useState(false);

    /* Removes focus from next/link element after page change */
    useEffect(() => {
        document.activeElement instanceof HTMLElement && document.activeElement.blur();
    }, [router]);

    /* Temporary fix to avoid flash of unstyled content (FOUC) during route transitions */
    useNextCssRemovalPrevention();

    return (
        <>
            <ThemeProvider disableTransitionOnChange>
                {isLoading &&
                    <Loader setIsLoading={setIsLoading} setIsReady={setIsReady} />
                }
                {isReady &&
                    <GoogleReCaptchaProvider
                        reCaptchaKey={process.env.NEXT_PUBLIC_RECAPTCHA_SITE_KEY}
                        scriptProps={{
                            async: true,
                            defer: true,
                            appendTo: 'body'
                        }}
                    >
                        <TransitionContextProvider>
                            <NavigationContextProvider>
                                <style jsx global>
                                    {
                                        `
                                            :root {
                                                --font-primary: ${neueMontreal.style.fontFamily};
                                            }
                                        `
                                    }
                                </style>
                                <Layout>
                                    <Component {...pageProps} />
                                </Layout>
                            </NavigationContextProvider>
                        </TransitionContextProvider>
                    </GoogleReCaptchaProvider>
                }
            </ThemeProvider>
        </>
    );
}