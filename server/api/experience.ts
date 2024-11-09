const experience: Experience[] = [{
  company: 'playon',
  location: 'Atlanta, GA',
  current: true,
  titles: [{
    title: 'Staff Software Engineer',
    start: '8/1/2024',
    end: 'Now',
    description: 'Led efforts to achieve busniess objectives with our stack of Nuxt/Vue, Ruby on Rails, MySQL, and AWS such as generate and showcase more short-form content, optimize web vitals, and migrate our search infrastructure from CloudSearch to OpenSearch.',
  }, {
    title: 'Lead Software Engineer',
    start: '5/1/2023',
    end: '8/1/2024',
    description: 'Implemented an "external link account" entitlement, enabling a bypass for in-app purchasing on iOS/tvOS native applications. Led an upgrade of the web project from Nuxt v2 to v3. Integrated Storybook and established a modular UI architecture with Nuxt Layers. Achieved an 85% reduction in Docker image size. Collaborated closely with product teams to transform feature ideas into detailed technical specifications.',
  }, {
    title: 'Senior Software Engineer',
    start: '4/1/2022',
    end: '5/1/2023',
    description: 'Web engineering team member dedicated to reducing tech debt, resolving critical bugs, and enhancing performance and load times across multiple microservices, achieving impactful milestones along the way.',
  }],
}, {
  company: 'Gulfstream Aerospace',
  location: 'Savannah, GA',
  current: false,
  titles: [{
    title: 'Application Designer II',
    start: '2/1/2020',
    end: '4/1/2022',
    description: 'Led an enhancement team utilizing Scrum methodology to improve critical business web applications. Contributed to a mobile app redesign project on the iOS/Swift development team.',
  }, {
    title: 'Application Designer I',
    start: '5/1/2018',
    end: '2/1/2020',
    description: 'Lead Engineer tasked with transforming the intranet portal into a fully responsive, mobile-friendly platform. Utilized SharePoint REST APIs and server-side caching to streamline article consolidation across departments. Introduced new technologies and development best practices to enhance team efficiency and code quality.',
  }, {
    title: 'Consultant',
    start: '9/1/2015',
    end: '5/1/2016',
    description: 'Brought in as a consultant after starting full time at Compassion to assist with SharePoint development and administration.',
  }, {
    title: 'Application Developer I',
    start: '2/1/2014',
    end: '9/1/2015',
    description: 'Served as the lead administrator for SharePoint 2013 deployments, overseeing the installation, configuration, and maintenance of a comprehensive on-premise SharePoint 2013 farm with over 40 servers across multiple environments.',
  }, {
    title: 'Application Developer Associate',
    start: '6/1/2013',
    end: '2/1/2014',
    description: 'Assisted in deploying a pilot instance of SharePoint 2013. Provided custom web development to meet specific business needs.',
  }, {
    title: 'Internship',
    start: '6/1/2012',
    end: '6/1/2013',
    description: 'Design and develop SharePoint site collections, web parts, InfoPath forms, workflows, and permissions to enhance collaboration and streamline efficiency across departments.',
  }],
}, {
  company: 'Compassion Christian Church',
  location: 'Savannah, GA',
  current: false,
  titles: [{
    title: 'Consultant',
    start: '10/1/2020',
    end: '6/1/2021',
    description: 'Trained new staff in audio fundamentals, covering key topics such as gain structure, compression, equalization, and essential console operations.',
  }, {
    title: 'Production Associate',
    start: '9/1/2015',
    end: '5/1/2018',
    description: 'Cultivated team leadership and development while overseeing audio/visual technology operations and maintenance at a our largest regional campus. Recruited, trained, and equipped a volunteer team to run weekly services, leading to an effective, dedicated team with steady growth. Built multiple web applications using AWS, React, and MySQL to address various ministry initiatives and streamline operations.',
  }],
}, {
  company: 'Airwave Networks',
  location: 'Statesboro, GA',
  current: false,
  titles: [{
    title: 'Call Center Technician',
    start: '6/1/2011',
    end: '6/1/2013',
    description: 'Managed the call center queue for three student apartment complexes while studying for a bachelor\'s degreee. Handled tasks such as splicing ethernet cables, replacing access points, and configuring dish receivers. Provided remote support to residents, troubleshooting internet and cable issues across 50+ nationwide locations when not on-site.',
  }],
}]

export default defineEventHandler(() => {
  return {
    total: experience.length,
    experience,
  }
})
