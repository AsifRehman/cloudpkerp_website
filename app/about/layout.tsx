import type { Metadata } from 'next';

export const metadata: Metadata = {
    title: 'About Us - CloudPK ERP',
    description: 'Learn about CloudPK ERP, our mission, vision, and commitment to delivering exceptional software solutions.',
};

export default function AboutLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    return children;
}
