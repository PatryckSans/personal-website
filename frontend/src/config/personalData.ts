export const personalData = {
  name: 'Patryck Sans',
  role: 'Desenvolvedor Full Stack com foco em Front-end',
  company: 'ST IT Cloud',
  location: 'São Paulo, SP',

  contact: {
    email: 'patrycksans@gmail.com',
    linkedin: 'https://linkedin.com/in/patryck-sans',
    github: 'https://github.com/patryck-sans',
  },

  skills: {
    frontend: [
      { name: 'React', level: 90, expertise: 'Avançado' },
      { name: 'TypeScript', level: 85, expertise: 'Avançado' },
      { name: 'JavaScript', level: 88, expertise: 'Avançado' },
      { name: 'HTML5', level: 95, expertise: 'Especialista' },
      { name: 'CSS3', level: 90, expertise: 'Avançado' },
      { name: 'Styled Components', level: 85, expertise: 'Avançado' },
      { name: 'Ant Design', level: 80, expertise: 'Intermediário' },
    ],
    backend: [
      { name: 'Node.js', level: 80, expertise: 'Intermediário' },
      { name: 'Express', level: 75, expertise: 'Intermediário' },
      { name: 'Python', level: 70, expertise: 'Intermediário' },
    ],
    cloud: [
      { name: 'AWS Lambda', level: 75, expertise: 'Intermediário' },
      { name: 'API Gateway', level: 70, expertise: 'Intermediário' },
      { name: 'DynamoDB', level: 65, expertise: 'Básico' },
    ],
    design: [
      { name: 'UX/UI Design', level: 85, expertise: 'Avançado' },
      { name: 'Figma', level: 80, expertise: 'Intermediário' },
    ],
    tools: [
      { name: 'Git', level: 90, expertise: 'Avançado' },
      { name: 'Vite', level: 85, expertise: 'Avançado' },
      { name: 'Docker', level: 70, expertise: 'Intermediário' },
    ],
  },

  experiences: [
    {
      title: 'Analista de Desenvolvimento',
      company: 'ST IT Cloud',
      period: '2021 - Presente',
      description:
        'Análise, Design, Desenvolvimento, Testes e Manutenção em sistemas web com foco em aplicações React. Especialização em soluções de UX Design e Front-end Web.',
      type: 'work',
    },
  ],

  education: [
    {
      title: 'Análise e Desenvolvimento de Sistemas',
      company: 'Centro Universitário Senac Santo Amaro',
      period: '2022 - 2025',
      description:
        'Graduação em Análise e Desenvolvimento de Sistemas com foco em desenvolvimento web, lógica de programação e construção de interfaces gráficas.',
      type: 'education',
    },
    {
      title: 'Técnico em Automação Industrial',
      company: 'Tecnólogo Takashi Morita',
      period: '2018 - 2020',
      description:
        'Formação técnica em Automação Industrial, onde aprofundei conhecimentos em tecnologia e desenvolvi projetos de IoT, incluindo a criação de uma "Harpa Laser".',
      type: 'education',
    },
  ],

  hobbies: [
    'Canoagem',
    'Movimento Escoteiro (7 anos)',
    'Navegação a vela',
    'Projetos IoT',
    'Festivais e shows de música',
    'Astrofísica',
    'Convivência com gatos',
  ],

  projects: [
    {
      name: 'Harpa Laser',
      description:
        'Projeto de IoT criativo utilizando sensores e tecnologia para criar uma harpa interativa com lasers.',
      technologies: ['IoT', 'Sensores', 'Automação'],
    },
  ],
}
