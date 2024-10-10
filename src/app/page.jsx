import dynamic from 'next/dynamic';

const PdfTemplate = dynamic(() => import('./Component/Template'), { ssr: false });

const Page = () => {
    return (
        <>
            <PdfTemplate />
        </>
    );
};

export default Page;