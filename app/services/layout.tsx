import type { Metadata } from 'next';

export const metadata: Metadata = {
    title: 'Our Services - CloudPK ERP',
    description: 'Explore our comprehensive software development services including custom development, web, mobile, desktop, cloud solutions, and more.',
};

export default function ServicesLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    return children;
}
