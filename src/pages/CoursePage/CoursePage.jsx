import { useState } from "react";
import { createPortal } from "react-dom";
import { Link } from "react-router-dom";

import LoginModal from "../../components/Auth/LoginModal/LoginModal";

import Navbar from "../../components/Navbar1/Navbar";
import Footer from "../../components//Footer/Footer";
import TextPointsNoter from "../../components/TextPointsNoter/TextPointsNoter";
import CourseIncludesCard from "../../components/Cards/CourseIncludesCard/CourseIncludesCard";
import CourseReqComp from "../../components/CourseReqComp/CourseReqComp";
import CourseDescriptionComp from "../../components/CourseDescriptionComp/CourseDescriptionComp";
import FeaturedReviewComp from "../../components/FeaturedReviewComp/FeaturedReviewComp";
import StudentsAlsoBought from "../../components/StudentsAlsoBought/StudentsAlsoBought";
import CourseInstructorComp from "../../components/CourseInstructorComp/CourseInstructorComp";
import CourseCard from "../../components/Cards/CourseCard/CourseCard";

import Button1 from "../../utils/Buttons/Button1/Button1";

import playIcon from "/icons/play-button.png";
import articleIcon from "/icons/application.png";
import certificateIcon from "/icons/certificate.png";
import cardImg from "/images/card.jpg";

import css from "./CoursePage.module.css";

const CoursePage = () => {
  const [modal, setModal] = useState(false);
  const Learnings = {
    ttl: "What you'll learn",
    points: [
      "Create their own Python Programs",
      "Become an experienced Python Programmer",
      "Parse the Web and Create their own Games",
    ],
    // prefix: "✅",
  };

  const courseIncludes = [
    {
      id: 1,
      img: playIcon,
      txt: "14 hours of video",
    },
    {
      id: 2,
      img: articleIcon,
      txt: "4 articles + resources",
    },
    {
      id: 3,
      img: certificateIcon,
      txt: "Certificate of completion",
    },
  ];

  const courseDetails = {
    secs: "15",
    lects: "146",
    duration: "14h 42m",
  };

  const courseData = [
    {
      ttl: "Getting Started",
      lects: "10",
      dur: "41min",
      list: [
        {
          ttl: "Welcome to the Course!",
          dur: "01:04",
          preview: true,
          type: "video",
          desc: "",
        },
        {
          ttl: "Welcome to the Course!",
          dur: "01:04",
          preview: true,
          type: "video",
          desc: "",
        },
        {
          ttl: "Welcome to the Course!",
          dur: "01:04",
          preview: true,
          type: "video",
          desc: "",
        },
        {
          ttl: "Welcome to the Course!",
          dur: "01:04",
          preview: true,
          type: "doc",
          desc: "This is a sample document description.",
        },
        {
          ttl: "Welcome to the Course!",
          dur: "01:04",
          preview: false,
          type: "doc",
          desc: "This is a sample document description.",
        },
        {
          ttl: "Welcome to the Course!",
          dur: "01:04",
          preview: true,
          type: "video",
          desc: "",
        },
        {
          ttl: "Welcome to the Course!",
          dur: "01:04",
          preview: false,
          type: "video",
          desc: "",
        },
        {
          ttl: "Welcome to the Course!",
          dur: "01:04",
          preview: false,
          type: "query",
          desc: "This is a sample document description.",
        },
      ],
    },
    {
      ttl: "Javascript Refresher",
      lects: "10",
      dur: "41min",
      list: [
        {
          ttl: "Welcome to the Course!",
          dur: "01:04",
          preview: true,
          type: "video",
          desc: "",
        },
        {
          ttl: "Welcome to the Course!",
          dur: "01:04",
          preview: true,
          type: "video",
          desc: "",
        },
        {
          ttl: "Welcome to the Course!",
          dur: "01:04",
          preview: true,
          type: "video",
          desc: "",
        },
        {
          ttl: "Welcome to the Course!",
          dur: "01:04",
          preview: true,
          type: "doc",
          desc: "This is a sample document description.",
        },
        {
          ttl: "Welcome to the Course!",
          dur: "01:04",
          preview: false,
          type: "doc",
          desc: "This is a sample document description.",
        },
        {
          ttl: "Welcome to the Course!",
          dur: "01:04",
          preview: true,
          type: "video",
          desc: "",
        },
        {
          ttl: "Welcome to the Course!",
          dur: "01:04",
          preview: false,
          type: "video",
          desc: "",
        },
        {
          ttl: "Welcome to the Course!",
          dur: "01:04",
          preview: false,
          type: "query",
          desc: "This is a sample document description.",
        },
      ],
    },
  ];

  const courseReq = {
    ttl: "Requirements",
    reqs: [
      "JavaScript + HTML + CSS fundamentals are absolutely required",
      "You DON'T need to be a JavaScript expert to succeed in this course!",
      "ES6+ JavaScript knowledge is beneficial but not a must-have",
      "NO prior React or any other JS framework experience is required!",
    ],
  };

  const desc = `The standard Lorem Ipsum passage, used since the 1500s
  "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."
  
  Section 1.10.32 of "de Finibus Bonorum et Malorum", written by Cicero in 45 BC
  "Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem. Ut enim ad minima veniam, quis nostrum exercitationem ullam corporis suscipit laboriosam, nisi ut aliquid ex ea commodi consequatur? Quis autem vel eum iure reprehenderit qui in ea voluptate velit esse quam nihil molestiae consequatur, vel illum qui dolorem eum fugiat quo voluptas nulla pariatur?"
  
  1914 translation by H. Rackham
  "But I must explain to you how all this mistaken idea of denouncing pleasure and praising pain was born and I will give you a complete account of the system, and expound the actual teachings of the great explorer of the truth, the master-builder of human happiness. No one rejects, dislikes, or avoids pleasure itself, because it is pleasure, but because those who do not know how to pursue pleasure rationally encounter consequences that are extremely painful. Nor again is there anyone who loves or pursues or desires to obtain pain of itself, because it is pain, but because occasionally circumstances occur in which toil and pain can procure him some great pleasure. To take a trivial example, which of us ever undertakes laborious physical exercise, except to obtain some advantage from it? But who has any right to find fault with a man who chooses to enjoy a pleasure that has no annoying consequences, or one who avoids a pain that produces no resultant pleasure?"
  
  Section 1.10.33 of "de Finibus Bonorum et Malorum", written by Cicero in 45 BC
  "At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque corrupti quos dolores et quas molestias excepturi sint occaecati cupiditate non provident, similique sunt in culpa qui officia deserunt mollitia animi, id est laborum et dolorum fuga. Et harum quidem rerum facilis est et expedita distinctio. Nam libero tempore, cum soluta nobis est eligendi optio cumque nihil impedit quo minus id quod maxime placeat facere possimus, omnis voluptas assumenda est, omnis dolor repellendus. Temporibus autem quibusdam et aut officiis debitis aut rerum necessitatibus saepe eveniet ut et voluptates repudiandae sint et molestiae non recusandae. Itaque earum rerum hic tenetur a sapiente delectus, ut aut reiciendis voluptatibus maiores alias consequatur aut perferendis doloribus asperiores repellat."
  
  1914 translation by H. Rackham
  "On the other hand, we denounce with righteous indignation and dislike men who are so beguiled and demoralized by the charms of pleasure of the moment, so blinded by desire, that they cannot foresee the pain and trouble that are bound to ensue; and equal blame belongs to those who fail in their duty through weakness of will, which is the same as saying through shrinking from toil and pain. These cases are perfectly simple and easy to distinguish. In a free hour, when our power of choice is untrammelled and when nothing prevents our being able to do what we like best, every pleasure is to be welcomed and every pain avoided. But in certain circumstances and owing to the claims of duty or the obligations of business it will frequently occur that pleasures have to be repudiated and annoyances accepted. The wise man therefore always holds in these matters to this principle of selection: he rejects pleasures to secure other greater pleasures, or else he endures pains to avoid worse pains."`;

  const featuredReviewUserData = {
    img: "",
    name: "Obada Q.",
    courses: 23,
    reviews: 12,
    rated: 5,
    date: "Sun Apr 04 2020",
    cmmt: "An amazing course to start building React applications, the instructor is extremely great, he explains everything in different ways and shows us all the possible ways to work with React. If you're thinking about taking your career to the next level and learn something trendy, I really advise you in this course. Lastly, I want to thank the instructor for such a lovely course, I wish you all the best. Regards",
  };

  const instructorData = [
    {
      img: "",
      name: "Obada Q.",
      desc: "CEO of TheCodex.me - Teaching 500,000+ Students how to code",
      courses: 23,
      reviews: 12,
      rating: 5,
      students: 200,
      date: "Sun Apr 04 2020",
      cmmt: "An amazing course to start building React applications, the instructor is extremely great, he explains everything in different ways and shows us all the possible ways to work with React. If you're thinking about taking your career to the next level and learn something trendy, I really advise you in this course. Lastly, I want to thank the instructor for such a lovely course, I wish you all the best. Regards An amazing course to start building React applications, the instructor is extremely great, he explains everything in different ways and shows us all the possible ways to work with React. If you're thinking about taking your career to the next level and learn something trendy, I really advise you in this course. Lastly, I want to thank the instructor for such a lovely course, I wish you all the best. Regards, An amazing course to start building React applications, the instructor is extremely great, he explains everything in different ways and shows us all the possible ways to work with React. If you're thinking about taking your career to the next level and learn something trendy, I really advise you in this course. Lastly, I want to thank the instructor for such a lovely course, I wish you all the best. Regards, An amazing course to start building React applications, the instructor is extremely great, he explains everything in different ways and shows us all the possible ways to work with React. If you're thinking about taking your career to the next level and learn something trendy, I really advise you in this course. Lastly, I want to thank the instructor for such a lovely course, I wish you all the best. Regards An amazing course to start building React applications, the instructor is extremely great, he explains everything in different ways and shows us all the possible ways to work with React. If you're thinking about taking your career to the next level and learn something trendy, I really advise you in this course. Lastly, I want to thank the instructor for such a lovely course, I wish you all the best. Regards An amazing course to start building React applications, the instructor is extremely great, he explains everything in different ways and shows us all the possible ways to work with React. If you're thinking about taking your career to the next level and learn something trendy, I really advise you in this course. Lastly, I want to thank the instructor for such a lovely course, I wish you all the best. Regards An amazing course to start building React applications, the instructor is extremely great, he explains everything in different ways and shows us all the possible ways to work with React. If you're thinking about taking your career to the next level and learn something trendy, I really advise you in this course. Lastly, I want to thank the instructor for such a lovely course, I wish you all the best. Regards",
    },
  ];

  const moreCourses = [
    {
      instructor: "Avinash",
      link: "/",
      courses: [
        {
          img: cardImg,
          ttl: "Learn Python: The Complete Python Programming CourseLearn A-Z everything about Python, from the basics, to advanced topics like Python GUI, Python Data Analysis, and more!Rating: 4.3 out of 53675 reviews14.5 total hours146 lecturesAll LevelsCurrent price: ₹649Original price: ₹3,399",
          authDet: "Koushil Mankali, Nani",
          prc: 649,
          oldprc: 1338,
          stars: { a: 5, b: 1, c: 1, d: 1, e: 1 },
          noOfRats: 9,
        },
        {
          img: cardImg,
          ttl: "Learn Python: The Complete Python Programming CourseLearn A-Z everything about Python, from the basics, to advanced topics like Python GUI, Python Data Analysis, and more!Rating: 4.3 out of 53675 reviews14.5 total hours146 lecturesAll LevelsCurrent price: ₹649Original price: ₹3,399",
          authDet: "Koushil Mankali, Nani",
          prc: 649,
          oldprc: 1338,
          stars: { a: 5, b: 1, c: 1, d: 1, e: 1 },
          noOfRats: 9,
        },
      ],
    },
    {
      instructor: "The codex",
      link: "/",
      courses: [
        {
          img: cardImg,
          ttl: "Learn Python: The Complete Python Programming CourseLearn A-Z everything about Python, from the basics, to advanced topics like Python GUI, Python Data Analysis, and more!Rating: 4.3 out of 53675 reviews14.5 total hours146 lecturesAll LevelsCurrent price: ₹649Original price: ₹3,399",
          authDet: "Koushil Mankali, Nani",
          prc: 649,
          oldprc: 1338,
          stars: { a: 5, b: 1, c: 1, d: 1, e: 1 },
          noOfRats: 9,
        },
      ],
    },
  ];

  return (
    <>
      {modal
        ? createPortal(
            <LoginModal setModal={setModal} />,
            document.getElementById("modal")
          )
        : ""}
      <Navbar />
      <div className={css.outerDiv}>
        <div className={css.innerDiv}>
          <div className={css.bodySec}>
            <TextPointsNoter data={Learnings} />
            <div className={css.boxSection}>
              <div className={css.secTtl}>This course includes:</div>
              <div className={css.secBdy}>
                {courseIncludes?.map((item) => {
                  return <CourseIncludesCard key={item.id} data={item} />;
                })}
              </div>
            </div>
            <div className={css.boxSection}>
              <div className={css.secTtl}>Course content</div>
              <div className={css.secBdy}></div>
            </div>
            <div className={css.boxSection}>
              <CourseReqComp data={courseReq} />
            </div>
            <div className={css.boxSection}>
              <CourseDescriptionComp ttl="Description" desc={desc} />
            </div>
            <div className={css.boxSection}>
              <StudentsAlsoBought ttl="Students also bought" />
            </div>
            <div className={css.boxSection}>
              <FeaturedReviewComp data={featuredReviewUserData} />
            </div>
            <div className={css.boxSection}>
              <div className={css.secTtl}>
                {instructorData?.length > 1 ? "Instructors" : "Instructor"}
              </div>
              {instructorData?.map((item) => {
                return <CourseInstructorComp key={item.id} data={item} />;
              })}
            </div>
            {moreCourses?.map((course, id) => {
              return (
                <div className={css.boxSection} key={id}>
                  <div className={css.secTtl}>
                    More courses by{" "}
                    <Link to={course.link}>{course.instructor}</Link>
                  </div>
                  <div className={css.secBdy}>
                    {course.courses?.map((item) => {
                      return <CourseCard key={item.id} data={item} />;
                    })}
                  </div>
                </div>
              );
            })}
            <hr />
            <Button1 txt="Report abuse" extraCss={{ width: "100%" }} />
          </div>
          <div className={css.rightSidebar}></div>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default CoursePage;
