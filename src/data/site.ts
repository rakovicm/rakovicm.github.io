export const githubUsername = 'rakovicm'

export const site = {
  name: 'Mirko Raković',
  shortName: 'MR',
  title: 'Full Professor of Robotics',
  affiliation: 'Faculty of Technical Sciences, University of Novi Sad',
  location: 'Novi Sad, Serbia',
  email: 'rakovicm@uns.ac.rs',
  githubUsername,
  tagline:
    'Humanoid locomotion, human–robot cooperation, and robotic fabrication.',
  summary:
    'I lead research on how robots walk, anticipate people, and make physical things. My group works on biped locomotion in unstructured environments, gaze and action models for shared workspaces, assistive humanoids, and robot-driven architectural fabrication.',
  scholar: {
    citations: 944,
    hIndex: 16,
    i10Index: 20,
    url: 'https://scholar.google.pt/citations?user=hSUzJK0AAAAJ',
  },
  links: {
    github: `https://github.com/${githubUsername}`,
    scholar: 'https://scholar.google.pt/citations?user=hSUzJK0AAAAJ',
    orcid: 'https://orcid.org/0000-0002-8818-2739',
    linkedin: 'https://www.linkedin.com/in/mirko-rakovic-0a3aa859',
    ftn: 'https://ftn.uns.ac.rs/1201/mirko-rakovic',
    isr: 'https://isr.tecnico.ulisboa.pt/author/mirkorakovic/',
  },
}

export const researchAreas = [
  {
    title: 'Biped locomotion',
    body: 'Online walk generation from reconfigurable motion primitives, dynamic balance under disturbance, and path planning on unknown terrain.',
  },
  {
    title: 'Human–robot interaction',
    body: 'Action anticipation, gaze dialogue, and sequence prediction so robots can share workspaces and cooperate rather than merely react.',
  },
  {
    title: 'Robotic fabrication',
    body: 'Industrial robots as making tools: freeform foam, terracotta molds, bricklaying scripts, and surface patterns driven by image sampling.',
  },
  {
    title: 'Assistive humanoids',
    body: 'The MARKO platform and related work on therapy for children with cerebral palsy, anthropomorphic hands, and ambient service robots.',
  },
]

export const appointments = [
  {
    role: 'Full Professor',
    org: 'Faculty of Technical Sciences, University of Novi Sad',
    period: '2024 — present',
    detail: 'Chair of Mechatronics, Robotics and Automation.',
  },
  {
    role: 'Co-founder & CEO',
    org: 'Sigmoid doo',
    period: '2017 — present',
    detail: 'Software development and quality assurance, Novi Sad.',
  },
  {
    role: 'Associate Professor',
    org: 'University of Novi Sad',
    period: '2019 — 2024',
    detail: 'Robotics group lead; human–robot interaction and locomotion.',
  },
  {
    role: 'Visiting / postdoctoral work',
    org: 'Instituto Superior Técnico, Lisbon',
    period: '2017 — 2018',
    detail: 'Co-coordinator of H2020 ACTICIPATE at ISR / LARSyS.',
  },
  {
    role: 'Assistant Professor',
    org: 'University of Novi Sad',
    period: '2014 — 2019',
    detail: 'Humanoid walking, MARKO, and robotic fabrication.',
  },
  {
    role: 'Research associate & visiting posts',
    org: 'NTU Singapore · Technikum Vienna · SRH Heidelberg',
    period: '2010 — later visits',
    detail: 'Short research stays and visiting teaching in robotics.',
  },
]

export const projects = [
  {
    name: 'ACTICIPATE',
    period: 'H2020',
    body: 'Action understanding in human and robot dyadic interaction: models that let a humanoid generate upper-body motion and anticipate a co-worker’s next action.',
    href: 'https://acticipate.eu/',
  },
  {
    name: 'Online planning & walking',
    period: 'MATLAB',
    body: 'Framework for online path planning and walk generalization with reconfigurable adaptive motion primitives — code for the Frontiers in Neurorobotics paper.',
    href: 'https://github.com/rakovicm/Online_Planning_Walking_Unknown_Environment',
  },
  {
    name: 'Humanoid MARKO',
    period: 'UNS',
    body: 'Assistive humanoid used in therapy for children with cerebral palsy, combining locomotion, manipulation, and interaction.',
    href: 'https://ftn.uns.ac.rs/1201/mirko-rakovic',
  },
  {
    name: 'FTN robot hand',
    period: 'UNS',
    body: 'Underactuated anthropomorphic hand as a platform for sensing, grasping, and fuzzy position–velocity finger control.',
    href: 'https://doi.org/10.3233/JIFS-169461',
  },
]

export type PaperTopic = 'HRI' | 'Locomotion' | 'Fabrication' | 'Control'

export const papers: {
  title: string
  authors: string
  venue: string
  year: number
  citations: number
  topic: PaperTopic
  href: string
}[] = [
  {
    title: 'Action anticipation: Reading the intentions of humans and robots',
    authors: 'N. F. Duarte, M. Raković, J. Tasevski, M. I. Coco, A. Billard, J. Santos-Victor',
    venue: 'IEEE Robotics and Automation Letters',
    year: 2018,
    citations: 115,
    topic: 'HRI',
    href: 'https://doi.org/10.1109/LRA.2018.2861569',
  },
  {
    title:
      'Anticipation in human-robot cooperation: A recurrent neural network approach for multiple action sequences prediction',
    authors: 'P. Schydlo, M. Rakovic, L. Jamone, J. Santos-Victor',
    venue: 'IEEE ICRA',
    year: 2018,
    citations: 106,
    topic: 'HRI',
    href: 'https://doi.org/10.1109/ICRA.2018.8460838',
  },
  {
    title: 'The gaze dialogue model: Nonverbal communication in HHI and HRI',
    authors: 'M. Raković, N. F. Duarte, J. Marques, A. Billard, J. Santos-Victor',
    venue: 'IEEE Transactions on Cybernetics',
    year: 2022,
    citations: 26,
    topic: 'HRI',
    href: 'https://doi.org/10.1109/TCYB.2022.3221934',
  },
  {
    title:
      'Realization of biped walking in unstructured environment using motion primitives',
    authors: 'M. Raković, B. Borovac, M. Nikolić, S. Savić',
    venue: 'IEEE Transactions on Robotics',
    year: 2014,
    citations: 23,
    topic: 'Locomotion',
    href: 'https://doi.org/10.1109/TRO.2014.2344431',
  },
  {
    title:
      'Human-inspired online path planning and biped walking realization in unknown environment',
    authors: 'M. Raković, S. Savić, J. Santos-Victor, M. Nikolić, B. Borovac',
    venue: 'Frontiers in Neurorobotics',
    year: 2019,
    citations: 14,
    topic: 'Locomotion',
    href: 'https://doi.org/10.3389/fnbot.2019.00036',
  },
  {
    title:
      'Robotic fabrication of freeform foam structures with quadrilateral and puzzle shaped panels',
    authors: 'M. Jovanović, M. Raković, B. Tepavčević, B. Borovac, M. Nikolić',
    venue: 'Automation in Construction',
    year: 2017,
    citations: 53,
    topic: 'Fabrication',
    href: 'https://doi.org/10.1016/j.autcon.2016.11.003',
  },
  {
    title:
      'Creating terracotta panels through grayscale image processing and robotic hotwire cut molds',
    authors: 'M. Jovanović, M. Vučić, V. Stojaković, B. Tepavčević, M. Raković',
    venue: 'Computers & Graphics',
    year: 2024,
    citations: 0,
    topic: 'Fabrication',
    href: 'https://doi.org/10.1016/j.cag.2024.103905',
  },
  {
    title: 'ZMP — Where Are We After Fifty-Five Years?',
    authors: 'B. Borovac, M. Nikolić, M. Raković, S. Savić',
    venue: 'International Journal of Humanoid Robotics',
    year: 2024,
    citations: 0,
    topic: 'Control',
    href: 'https://doi.org/10.1142/S0219843623500305',
  },
]

export const fallbackRepos = [
  {
    name: 'Online_Planning_Walking_Unknown_Environment',
    html_url:
      'https://github.com/rakovicm/Online_Planning_Walking_Unknown_Environment',
    description:
      'Online path planning and walk generalization using reconfigurable adaptive motion primitives.',
    language: 'MATLAB',
    stargazers_count: 1,
    forks_count: 1,
    fork: false,
    updated_at: '2023-08-11T10:05:06Z',
  },
  {
    name: 'labstreaminglayer',
    html_url: 'https://github.com/rakovicm/labstreaminglayer',
    description: 'Multi-modal time-synched data transmission over local network.',
    language: 'C++',
    stargazers_count: 0,
    forks_count: 0,
    fork: true,
    updated_at: '2017-11-23T13:03:26Z',
  },
]
