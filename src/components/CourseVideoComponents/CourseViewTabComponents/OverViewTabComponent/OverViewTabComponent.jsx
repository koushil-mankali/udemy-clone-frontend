import { Link } from "react-router-dom";
import Button1 from "../../../../utils/Buttons/Button1/Button1";

import showcaseImg from "/images/showcase.jpg";

import css from "./OverViewTabComponent.module.css";

const OverViewTabComponent = () => {
  const data = {
    ttl: "About this course",
    desc: "Learn and master GraphQL by building real web apps with React and Node",
    skillLevel: "Intermediate Level",
    students: 59241,
    languages: ["English"],
    captions: "Yes",
    lectures: 116,
    totalDur: "13.5",
    crsDesc: `Note: This course assumes you are familiar with React!

    If you're tired of spinning your wheels trying to figure out what type of backend server to use, this is the course for you.
    
    Authentication? You will learn it.  Apollo Data? Included.  Integration with React? Of course!
    
    This course will get you up and running with GraphQL quickly, and teach you the core knowledge you need to deeply understand and build React applications quickly.
    
    Both OSX and Windows supported.
    
    We'll start by mastering the fundamentals of GraphQL, including data types, schemas, and integration with Express and React. Source code is provided for each lecture, so you will always stay up-to-date with the course pacing.  Special attention has been paid to creating code that you'll be able to make use of on your own fantastic projects.
    
    If you are new to GraphQL, or if you've been working to learn it but sometimes feel like you still don't quite 'get it', this is the GraphQL course for you! To learn GraphQL you have to understand it.
    
    Learn how to use GraphQL's schema to define relations between your data objects
    Learn the process of combining a backend server with a front end React
    Master the process of thinking about your applications data in terms of a graph structure
    Grasp the difference between GraphQL, Apollo, and Relay, and when to use each
    Develop apps that are unique, fun, and responsive.
    Build servers that can be used with both React and React Native applications
    Master handling authentication with GraphQL
    Learn the core principles of navigation with React Router and GraphQL
    I've built the course that I would have wanted to take when I was learning GraphQL. A course that explains the concepts and how they're implemented in the best order for you to learn and deeply understand them.
    
    What you’ll learn
    Build amazing single page applications with React JS and GraphQL
    Master fundamental concepts behind structuring GraphQL servers
    Realize the power of building flexible data schemas
    Be the engineer who explains how GraphQL works to everyone else, because you know the fundamentals so well
    Become fluent in the ecosystem supporting GraphQL, including the differences between Apollo and Relay
    Are there any course requirements or prerequisites?
    Familiarity with React
    Who this course is for:
    Programmers looking to learn GraphQL`,
    instructor: {
      name: "Stephen Grider",
      img: showcaseImg,
      ttl: "Engineering Architect",
      desc: "Stephen Grider has been building complex Javascript front ends for top corporations in the San Francisco Bay Area.  With an innate ability to simplify complex topics, Stephen has been mentoring engineers beginning their careers in software development for years, and has now expanded that experience onto Udemy, authoring the highest rated React course. He teaches on Udemy to share the knowledge he has gained with other software engineers.  Invest in yourself by learning from Stephen's published courses.",
    },
  };

  return (
    <div className={css.outerDiv}>
      <div className={css.box}>
        <h1 className={css.ttl}>{data.ttl}</h1>
        <div className={css.desc}>{data.desc}</div>
      </div>
      <div className={css.box1}>
        <div className={css.sTtl}>By the numbers</div>
        <div className={css.sinBox}>
          <div className={css.item}>
            <span className={css.itemTtl}>Skill Level:</span>
            <span className={css.itemVal}>{data.skillLevel}</span>
          </div>
          <div className={css.item}>
            <span className={css.itemTtl}>Students:</span>
            <span className={css.itemVal}>{data.skillLevel}</span>
          </div>
          <div className={css.item}>
            <span className={css.itemTtl}>Languages:</span>
            <span className={css.itemVal}>{data.languages?.toString()}</span>
          </div>
          <div className={css.item}>
            <span className={css.itemTtl}>Captions:</span>
            <span className={css.itemVal}>{data.captions}</span>
          </div>
          <div className={css.item}>
            <span className={css.itemTtl}>Lectures:</span>
            <span className={css.itemVal}>{data.lectures}</span>
          </div>
          <div className={css.item}>
            <span className={css.itemTtl}>Video:</span>
            <span className={css.itemVal}>{data.totalDur}</span>
          </div>
        </div>
      </div>
      <div className={css.box1}>
        <div className={css.sTtl}>Certificates</div>
        <div className={css.sinBox}>
          <div className={css.ttlTxt}>
            Get Udemy certificate by completing entire course
          </div>
          <Button1
            txt="Udemy Certificate"
            color="var(--light-gray)"
            disableBtn={true}
            extraCss={{ width: "50%" }}
          />
        </div>
      </div>
      <div className={css.box1}>
        <div className={css.sTtl}>Features</div>
        <div className={css.sinBox}>
          <div className={css.ttlTxt}>
            Available on
            <Link to="/" className={css.link}>
              iOS
            </Link>
            and
            <Link className={css.link} to="/">
              Android
            </Link>
          </div>
        </div>
      </div>
      <div className={css.box1}>
        <div className={css.sTtl}>Description</div>
        <div className={css.sinBox}>
          <div className={css.crsDesc}>{data.crsDesc}</div>
        </div>
      </div>
      <div className={css.box1}>
        <div className={css.sTtl}>Instructor</div>
        <div className={css.sinBox}>
          <div className={css.instructorBox}>
            <div className={css.leftInstBox}>
              <img
                src={data.instructor.img}
                alt="profile"
                className={css.instImg}
              />
            </div>
            <div className={css.rightInstBox}>
              <div className={css.instName}>{data.instructor.name}</div>
              <div className={css.instTtl}>{data.instructor.ttl}</div>
            </div>
          </div>
          <div className={css.instDesc}>{data.instructor.desc}</div>
        </div>
      </div>
    </div>
  );
};

export default OverViewTabComponent;
