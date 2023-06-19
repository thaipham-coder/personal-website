import { MetaDataProps } from '@/types/components/global';
import { AboutHeaderProps } from '@/types/components/headers';
import { AboutIntroductionContent } from '@/types/components/introductions';

export const META_ABOUT: MetaDataProps = {
    title: `About | ${process.env.NEXT_PUBLIC_SITE_NAME}`
}

export const ABOUT_HEADER: AboutHeaderProps = {
    titles: ['Passionate', 'Front-end', 'Developer'],
    image: '/static/images/about-header.jpg'
}

export const ABOUT_INTRODUCTION: AboutIntroductionContent = {
    content: [
        'Lorem ipsum dolor sit amet consectetur adipisicing elit. Incidunt alias cumque odit quod aut? Molestiae labore deleniti aperiam commodi quos, nam id, tenetur illo sit iste, vel iure. Nulla, eius. Molestiae labore deleniti aperiam modus.',
        'Lorem ipsum dolor sit amet consectetur adipisicing elit. Iste, quos doloribus maiores laboriosam aspernatur voluptatibus.'
    ],
    image: '/static/images/about-portrait.jpg'
}