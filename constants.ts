import React from 'react';
import { Service } from './types';

// FIX: Replaced JSX with React.createElement to resolve parsing errors in a .ts file.
const FaceIcon: React.FC = () => (
    React.createElement('svg', {
        xmlns: "http://www.w3.org/2000/svg",
        className: "h-10 w-10",
        fill: "none",
        viewBox: "0 0 24 24",
        stroke: "currentColor",
        strokeWidth: 1
    }, React.createElement('path', {
        strokeLinecap: "round",
        strokeLinejoin: "round",
        d: "M14.828 14.828a4 4 0 01-5.656 0M9 10h.01M15 10h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
    }))
);

// FIX: Replaced JSX with React.createElement to resolve parsing errors in a .ts file.
const SyringeIcon: React.FC = () => (
    React.createElement('svg', {
        xmlns: "http://www.w3.org/2000/svg",
        className: "h-10 w-10",
        fill: "none",
        viewBox: "0 0 24 24",
        stroke: "currentColor",
        strokeWidth: 1
    }, React.createElement('path', {
        strokeLinecap: "round",
        strokeLinejoin: "round",
        d: "M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"
    }))
);

// FIX: Replaced JSX with React.createElement to resolve parsing errors in a .ts file.
const BodyIcon: React.FC = () => (
    React.createElement('svg', {
        xmlns: "http://www.w3.org/2000/svg",
        className: "h-10 w-10",
        fill: "none",
        viewBox: "0 0 24 24",
        stroke: "currentColor",
        strokeWidth: 1
    }, React.createElement('path', {
        strokeLinecap: "round",
        strokeLinejoin: "round",
        d: "M5.5 3.5v17m13-17v17M6 12a6 6 0 1112 0 6 6 0 01-12 0z"
    }))
);

// FIX: Replaced JSX with React.createElement to resolve parsing errors in a .ts file.
const LeafIcon: React.FC = () => (
    React.createElement('svg', {
        xmlns: "http://www.w3.org/2000/svg",
        className: "h-10 w-10",
        fill: "none",
        viewBox: "0 0 24 24",
        stroke: "currentColor",
        strokeWidth: 1
    }, React.createElement('path', {
        strokeLinecap: "round",
        strokeLinejoin: "round",
        d: "M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
    }))
);


// FIX: Replaced JSX component usage with React.createElement calls to be compatible with a .ts file.
export const services: Service[] = [
    {
        icon: React.createElement(FaceIcon),
        title: 'Harmonização Facial',
        description: 'Técnicas avançadas para realçar seus traços naturais com equilíbrio e sofisticação.',
    },
    {
        icon: React.createElement(SyringeIcon),
        title: 'Botox e Bioestimuladores',
        description: 'Rejuvenescimento, prevenção de rugas e estímulo de colágeno para uma pele firme e saudável.',
    },
    {
        icon: React.createElement(BodyIcon),
        title: 'Tratamentos Corporais',
        description: 'Protocolos para emagrecimento, gordura localizada e flacidez, com foco em resultados duradouros.',
    },
    {
        icon: React.createElement(LeafIcon),
        title: 'Saúde Integrativa',
        description: 'Cuidado completo que une estética e saúde, com planos de vitaminas e reposição hormonal.',
    },
];
