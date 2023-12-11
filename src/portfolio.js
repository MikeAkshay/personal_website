const header = {
  // all the properties are optional - can be left empty or deleted
  homepage: 'https://github.com/mikeakshay/',
  title: 'MD',
}

const about = {
  // all the properties are optional - can be left empty or deleted
  name: 'Mike Akshay Dominique',
  role: 'Software Engineer',
  description:
    'Experienced software engineer with a distinction-awarded master’s degree in information technology. Proven in designing custom software solutions, driving feature development, and coordinating with cross-functional teams. Passionate about data analytics and visualization, always seeking new challenges.',
}

const projects = [
  // projects can be added an removed
  // if there are no projects, Projects section won't show up
  {
    name: 'Inferring User Interests in Targeted Advertisements',
    description:
      'Built a recommendation model to predict and classify user interests from social media engagement, to send targeted advertisements boosting sales probability by 61.4 %', 
    stack: ['Tensorflow', 'Matplotlib', 'Tableau', 'NLTK'],
    sourceCode: 'https://github.com',
    livePreview: 'https://github.com',
  },
  {
    name: 'Understanding the Ethnography and Sociology of Credit Card Defaulters',
    description:
      'Designed a credit card defaulters’ information dashboard to identify potential risk of credit default clients and visualize this information based on criterion such as income, gender, occupation, etc',
    stack: ['Tableau'],
    sourceCode: 'https://github.com',
    livePreview: 'https://github.com',
  },
  {
    name: 'Twitter Flu Trend',
    description:
      'Extracted geospatial information from Tweets to analyze and visualize how people reacted to the spread of influenza',
    stack: ['Hadoop', 'Jupyter', 'Google Map', 'R', 'R Studio', 'R Shiny', 'Tableau', 'D3JS', 'Postman', 'RESTful API'],
    sourceCode: 'https://github.com',
    livePreview: 'https://github.com',
  },
]


const education = [
  {
    name: 'Master of Science in Information Technology',
    description:'Arizona State University, Tempe, AZ', 
  },
  {
    name: 'Bachelor of Technology in Information Technology',
    description:'Anna University, Chennai, India',
  }
]

const skills = [
'Neo4J', 'Apollo GraphQL'
]

const skills1 = [
  // skills can be added or removed
  // if there are no skills, Skills section won't show up
  {'Programming Languages': ['Java', 'Python', 'Ruby', 'Shell', 'NodeJS', 'C/C++', 'SQL', 'R']},
  {'Cloud': ['Amazon Web Services', 'Google Cloud Platform', 'IBM Cloud']},
  {'Web': ['HTML5', 'CSS3', 'JavaScript', 'JQuery', 'AngularJS', 'Ionic', 'ExpressJS']},
  {'Bigdata': ['Spark', 'Hadoop', 'Kafka', 'Hive', 'Hbase', 'MongoDB', 'Cassandra']},
  {'ML/Data visualization': ['TensorFlow','Scikit-learn','Keras','Pytorch', 'NLTK','Tableau', 'Microsoft Power BI', 'Looker']},
  {'Guidewire': ['Gosu', 'Policy Center', 'Billing Center', 'Claim Center']},
  {'Graph': ['Neo4J', 'Apollo GraphQL']},
  {'Devops': ['Git','Docker','Ansible','ELK','Kubernetes','Jenkins']}
]

const contact = {
  // email is optional - if left empty Contact section won't show up
  email: 'mdominiq@asu.edu',
  social: {
    linkedin: 'https://www.linkedin.com/in/mikeakshay/',
    github: 'https://github.com/mikeakshay/',
  },
}

export { header, about, projects, skills, skills1, education, contact }
