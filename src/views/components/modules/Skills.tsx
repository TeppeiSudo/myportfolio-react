import { Container, Typography, Grid } from "@material-ui/core";
import useStyles from "style/style";
import SkillCard, { SkillCardType } from "../blocks/SkillCard";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faDocker,
  faPython,
  faGoogle,
  faAws,
  faUbuntu,
  faLinux,
  faHtml5,
  faCss3,
  faJs,
  faReact,
} from "@fortawesome/free-brands-svg-icons";
import { faDatabase } from "@fortawesome/free-solid-svg-icons";

const Skills = () => {
  const classes = useStyles();
  const docker: SkillCardType = {
    font: <FontAwesomeIcon icon={faDocker} />,
    name: "Docker",
    star: 2,
    details: "docker-compose",
    moredetails: `I used docker-compose in order to share 
    the development environment. So I can write docker-compose.yml at least :) 
    Now I'm studying container tools like Docker, 
    Kubernates.`,
  };
  const python: SkillCardType = {
    font: <FontAwesomeIcon icon={faPython} />,
    name: "Python",
    star: 5,
    details: "Machine Learning, Competitive Programing, Web Scraping, etc.",
    moredetails: `Pyhotn is one of my favorite langage and 
    the first language I learned. 
    I always use in competitive programing contest and data science competition, 
    so I'm very good at writing pythonic code.`,
  };
  const go: SkillCardType = {
    font: <FontAwesomeIcon icon={faGoogle} />,
    name: "Go",
    star: 4,
    details: "gin, gorm, gin-jwt, RESTful-API",
    moredetails: `I love golang because of the easy to write 
    like Python and of the fast to run. I used go 
    in RESTful-API as backend-API of chatting SNS service. 
    We will launch that chatting SNS someday... Please check my twitter.`,
  };
  const sql: SkillCardType = {
    font: <FontAwesomeIcon icon={faDatabase} />,
    name: "DataBase",
    star: 3,
    details: "postgreSQL, dymamoDB, graphQL",
    moredetails: `I'm experienced in postgreSQL with go-gorm, 
    dymamoDB with python-boto3 and dynamoDB with graphQL(amazon amplify).
    Actually I'm not sure the merit of NoSQL... I would learn more.`,
  };
  const aws: SkillCardType = {
    font: <FontAwesomeIcon icon={faAws} />,
    name: "AWS",
    star: 2,
    details: "Amplify, AppSync, DynamoDB",
    moredetails: `I'm experienced in Amplify, AppSync and DynamoDB. 
    I used AWS Amplify with a simple web application as hosting frontend and backend. 
    Also I used AppSync in hosting DynamoDB server and creating backend query (graphQL).`,
  };
  const linux: SkillCardType = {
    font: (
      <>
        <FontAwesomeIcon icon={faLinux} /> / <FontAwesomeIcon icon={faUbuntu} />
      </>
    ),
    name: "Linux",
    star: 3,
    details: "ubuntu, bash, vim",
    moredetails: `I can use typical linux command 
    because ubuntu is installed in my desktop PC. 
    Actually, windows is also installed in same PC as dual boot 
    in order to play PC game like APEX :)`,
  };
  const html: SkillCardType = {
    font: (
      <>
        <FontAwesomeIcon icon={faHtml5} /> / <FontAwesomeIcon icon={faCss3} />
      </>
    ),
    name: "HTML / CSS",
    star: 4,
    details: "bootstrap, material-ui, Single Page Application,",
    moredetails: `I usually would like to do backend, 
    but I often write frontend like this portfolio site. 
    So I can made a simple web UI. this site's design looks not bad right? :)`,
  };
  const js: SkillCardType = {
    font: <FontAwesomeIcon icon={faJs} />,
    name: "JavaScript",
    star: 2,
    details: "TypeScript, React, Font Awesome",
    moredetails: `This portfolio site is made with JavaScript(TypeScript), 
    React and Material-UI. This site is a first Application in 
    JavaScript(TypeScript) and React. And this site had been made in about a week 
    since I learned JS(TS) and React.`,
  };
  const react: SkillCardType = {
    font: <FontAwesomeIcon icon={faReact} />,
    name: "React",
    star: 3,
    details: "Material-UI, redux",
    moredetails: `Almost same as JS. 
    I would like to learn state management like redux more.`,
  };

  return (
    <Container maxWidth="lg" className={classes.content}>
      <div id="skills" className={classes.offset} />
      <Typography variant="h3">skills</Typography>
      <div className={classes.offset} />
      <Grid
        container
        spacing={4}
        xs={12}
        direction="row"
        justify="center"
        alignItems="center"
      >
        <SkillCard {...python} />
        <SkillCard {...go} />
        <SkillCard {...docker} />
        <SkillCard {...sql} />
        <SkillCard {...aws} />
      </Grid>
      <Grid
        container
        spacing={4}
        xs={12}
        direction="row"
        justify="center"
        alignItems="center"
      >
        <SkillCard {...linux} />
        <SkillCard {...html} />
        <SkillCard {...js} />
        <SkillCard {...react} />
      </Grid>
    </Container>
  );
};

export default Skills;
