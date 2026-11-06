import { Project, Skill, ContactInfo } from '../types';

export const SKILLS_DATA: Skill[] = [
  {
    title: 'Programación & Lógica',
    category: 'Java / Core',
    description: 'Conceptos avanzados de orientación a objetos, estructuras de datos y lógica de programación desarrollada de forma autónoma y académica.',
  },
  {
    title: 'Bases de Datos & Persistencia',
    category: 'SQL',
    description: 'Diseño de esquemas relacionales, modelado y consultas estructuradas en MySQL con soltura.',
  },
  {
    title: 'Desarrollo Web & Frontend',
    category: 'Frontend',
    description: 'Construcción de aplicaciones web interactivas con JavaScript, HTML5, React y Tailwind CSS.',
  },
  {
    title: 'Integración de IA & Automatización',
    category: 'IA',
    description: 'Dominio de modelos de Inteligencia Artificial, prompt engineering y uso de herramientas de IA para desarrollo acelerado de software.',
  },
];

export const PROJECTS_DATA: Project[] = [
  {
    id: 'rekayu',
    number: '01',
    title: 'Rekayu — Web para Recordatorios y Tareas',
    stackBadge: 'React · TypeScript',
    description: 'Aplicación web diseñada para centralizar tus tareas y recordatorios en una interfaz intuitiva, limpia y optimizada para la productividad diaria.',
    tags: ['React', 'TypeScript', 'Productividad'],
    webUrl: 'https://rekayu.vercel.app',
    githubUrl: 'https://github.com/PolVallesDev/Rekayu',
    imageUrl: '/projects/rekayu.png',
  },
  // {
  //   id: 'rekayu',
  //   number: '01',
  //   title: 'Rekayu - Web para Recordatorios y Tareas',
  //   stackBadge: 'React · TypeScript',
  //   description: 'Rekayu es una página web para centralizar todas tus tareas y recordatorios en una sola interfaz limpia.',
  //   tags: ['TypeScript', 'IA', 'React'],
  //   webUrl: 'https://rekayu.vercel.app',
  //   githubUrl: 'https://github.com/PolVallesDev/Rekayu',
  //   imageUrl: '/projects/descarga.png',
  // },
];

export const CONTACT_DATA: ContactInfo = {
  email: 'polvallesss@email.com',
  github: 'https://github.com/PolVallesDev/',
  linkedin: 'https://www.linkedin.com/in/pol-valles-174896386/',
  location: 'España, Mataró (Presencial / Remoto / Híbrido)',
  degree: 'Grado Superior DAM (1º año)',
  status: 'Abierto a todo tipo de propuestas',
};
