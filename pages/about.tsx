import { HOBBIES_TABS } from '@/data/personalInterests.data';
import MetaData from '@/components/MetaData';
import AboutHeader from '@/components/AboutHeader';
import AboutIntroduction from '@/components/AboutIntroduction';
import PersonalInterests from '@/components/PersonalInterests';
import HobbiesTabs from '@/components/HobbiesTabs';
import CallToAction from '@/components/CallToAction';

export default function About() {
    return (
        <>
            <MetaData
                title="About | Gerard Colombi"
            />
            <AboutHeader />
            <AboutIntroduction />
            {/* <PersonalInterests
                index="02"
                tabs={HOBBIES_TABS}
            /> */}
            <HobbiesTabs
                index="02"
                tabs={HOBBIES_TABS}
            />
            <CallToAction
                index="03"
                title="Get in touch"
            />
        </>
    );
};