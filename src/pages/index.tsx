// src/pages/index.tsx
import React from 'react';
import { Redirect } from '@docusaurus/router';

export default function Home() {
    return <Redirect to="/blog/goodbye-treasure-island" />;
}