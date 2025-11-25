import type { Metadata } from 'next';

export const metadata: Metadata = {
    title: 'Contact Us - CloudPK ERP',
    description: 'Get in touch with CloudPK ERP. Contact us for your software development needs and project inquiries.',
};

export default function ContactLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    return children;
}
