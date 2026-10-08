import { Project, Skill, ContactInfo } from '../types';

export const SKILLS_DATA: Skill[] = [
  {
    title: 'Java',
    category: 'Core',
    description: 'Programación orientada a objetos, diseño modular y APIs REST con Spring Boot.',
  },
  {
    title: 'Bases de Datos & Persistencia',
    category: 'SQL Relacional',
    description: 'Diseño relacional en MySQL / PostgreSQL y consultas.',
  },
  {
    title: 'Web & Experiencias Interactivas',
    category: 'Frontend',
    description: 'JavaScript moderno, HTML5 y maquetación con Tailwind CSS.',
  },
];

export const PROJECTS_DATA: Project[] = [
  {
    id: 'rekayu',
    number: '01',
    title: 'Rekayu - Web para Recordatorios y Tareas',
    stackBadge: 'React · TypeScript',
    description: 'Rekayu es una página web para centralizar todas tus tareas y recordatorios en una sola interfaz limpia.',
    tags: ['TypeScript', 'IA', 'React'],
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
