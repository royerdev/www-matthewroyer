const experience: Experience[] = [{
  company: 'playon',
  location: 'Atlanta, GA',
  current: true,
  titles: [{
    title: 'Staff Software Engineer',
    start: '8/1/2024',
    end: 'Now',
    description: 'Promoted to staff engineer. Started planning work for moving from AWS CloudSearch to OpenSearch.',
  }, {
    title: 'Lead Software Engineer',
    start: '5/1/2023',
    end: '8/1/2024',
    description: 'Promoted to lead engineer. Successfully applied "external link account" entitlement bypassing In-App Purchase for subscriptions on iOS and tvOS native appications. Upgraded web project from Nuxt v2 to v3. Implemented Storybook and Nuxt Layer UI architecture. Reduced docker image size by 85%. Worked directly with product to translate feature ideas into technical specifications.',
  }, {
    title: 'Senior Software Engineer',
    start: '4/1/2022',
    end: '5/1/2023',
    description: 'Web team member. Achieved significant milestones in removing tech debt, squashing bugs, improving performance and load times across various microservices.',
  }],
}, {
  company: 'Gulfstream Aerospace',
  location: 'Savannah, GA',
  current: false,
  titles: [{
    title: 'Application Designer II',
    start: '2/1/2020',
    end: '4/1/2022',
    description: 'Organized an enhancement team that used scrum methodology to enhance existing applications. Participated on a mobile app redesign project as a member of the iOS / Swift team.',
  }, {
    title: 'Application Designer I',
    start: '5/1/2018',
    end: '2/1/2020',
    description: 'Responsible for converting the intranet portal into a responsive and mobile friendly layout. Leveraged SharePoint REST APIs and server caching to consolidate articles across departments. Implemented new technologies and best practices on our development team.',
  }, {
    title: 'Application Developer I',
    start: '2/1/2014',
    end: '5/1/2016',
    description: 'Lead administrator for SharePoint 2013 builds. Responsible for installing, configuring, and maintaining an on-premise SharePoint 2013 farm which consisted of over 40 servers and multiple environments.',
  }, {
    title: 'Application Developer Associate',
    start: '6/1/2013',
    end: '3/1/2014',
    description: 'Helped deploy a pilot instance of SharePoint 2013. Performed custom development for the business.',
  }, {
    title: 'Internship',
    start: '6/1/2012',
    end: '6/1/2013',
    description: 'Develop SharePoint site collections, web parts, InfoPath forms, workflows, permissions, and more to increase collaboration and efficiency in different departments.',
  }],
}, {
  company: 'Compassion Christian Church',
  location: 'Savannah, GA',
  current: false,
  titles: [{
    title: 'Consultant',
    start: '10/1/2020',
    end: '6/1/2021',
    description: 'Responsible for training new staff on audio concepts like gain structure, compression, equalization, and basic console operations/routing. Developed a portal for congregants to collaborate on weekly devotionals.',
  }, {
    title: 'Production Associate',
    start: '9/1/2015',
    end: '5/1/2018',
    description: 'Fostered team leadership and development. Responsible for audio/visual technology maintenance and operations at a reginal campus. Trained, equipped, and scheduled volunteers for weekend services. Grew the volunteer team 10x during my tenure.',
  }],
}, {
  company: 'Airwave Networks',
  location: 'Statesboro, GA',
  current: false,
  titles: [{
    title: 'Call Center Technician',
    start: '7/1/2011',
    end: '6/1/2013',
    description: 'Responsible for the call center queue of three complexes around campus. Work would range from splicing ethernet cables and replace access points to configuring dish receivers. When I was not working on campus, I was accepting calls to help residents troubleshoot internet and cable issues from one of the 50+ locations nationwide.',
  }],
}]

export default defineEventHandler(() => {
  return {
    total: experience.length,
    experience,
  }
})
