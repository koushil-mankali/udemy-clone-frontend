import { useState } from "react";
import { Link } from "react-router-dom";

import monitorIcon from "/icons/monitor.png";
import downArrowIcon from "/icons/down-arrow.svg";

import css from "./InstructorMenuBar.module.css";

const InstructorMenuBar = () => {
  const [menuHide, setMenuHide] = useState(false);
  const [state, setState] = useState({});

  const jsonStructure = [
    {
      id: 1,
      name: "Dashboard",
      icon: monitorIcon,
      children: [
        {
          id: "c11",
          name: "Default",
          icon: monitorIcon,
          hovIcon: "",
          link: "c11",
        },
        {
          id: "c12",
          name: "Analytics",
          icon: monitorIcon,
          hovIcon: "",
          link: "c12",
        },
      ],
    },
    {
      id: 2,
      name: "Widget",
      icon: monitorIcon,
      children: [
        {
          id: "c21",
          name: "Statistics",
          icon: monitorIcon,
          hovIcon: "",
          link: "",
        },
        {
          id: "c22",
          name: "Data",
          icon: monitorIcon,
          hovIcon: "",
          link: "",
        },
        {
          id: "c23",
          name: "Chart",
          icon: monitorIcon,
          hovIcon: "",
          link: "",
        },
      ],
    },
    {
      id: 3,
      name: "Application",
      icon: monitorIcon,
      children: [
        {
          id: "c31",
          name: "Users",
          icon: monitorIcon,
          arrowIcon: downArrowIcon,
          hovIcon: "",
          link: "",
          children: [
            {
              id: "c31-1",
              name: "User1",
              link: "",
            },
            {
              id: "c31-2",
              name: "User2",
              link: "",
            },
          ],
        },
        {
          id: "c32",
          name: "Customer",
          icon: monitorIcon,
          hovIcon: "",
          arrowIcon: downArrowIcon,
          link: "",
          children: [
            {
              id: "c31-1",
              name: "User1",
              link: "",
            },
            {
              id: "c31-2",
              name: "User2",
              link: "",
            },
          ],
        },
        {
          id: "c33",
          name: "Chat",
          icon: monitorIcon,
          hovIcon: "",
          link: "",
        },
        {
          id: "c34",
          name: "Mail",
          icon: monitorIcon,
          hovIcon: "",
          link: "",
        },
        {
          id: "c35",
          name: "Calendar",
          icon: monitorIcon,
          hovIcon: "",
          link: "",
        },
        {
          id: "c36",
          name: "Contact",
          icon: monitorIcon,
          hovIcon: "",
          link: "",
        },
      ],
    },
  ];

  const changeState = (childItem) => {
    // if (childItem?.link === "") {
    setState((prev) => {
      return { [childItem?.name]: !prev[childItem?.name] };
    });
    //   return;
    // }
    return;
  };

  return (
    <>
      <button onClick={() => setMenuHide((prev) => !prev)}>Click</button>
      {menuHide ? (
        <div className={css.outerDiv}>
          <div className={css.innerDiv}>
            {jsonStructure?.map((item, id) => {
              return (
                <>
                  <div className={css.outerMenu} key={item?.id}>
                    <div className={css.menuTtl}>
                      {item?.icon ? (
                        <div className={css.ciconBox}>
                          <img
                            src={item?.icon}
                            alt="icon"
                            className={css.cicon}
                          />
                        </div>
                      ) : null}
                      <div className={css.name}>{item?.name}</div>
                    </div>
                    <div className={css.innerMenu}>
                      {item?.children?.map((childItem) => {
                        return (
                          <>
                            <Link
                              to={childItem?.link}
                              className={css.menuItem}
                              key={childItem?.id}
                              onClick={() => changeState(childItem)}
                            >
                              <div className={css.f1}>
                                {childItem?.icon ? (
                                  <div className={css.ciconBox}>
                                    <img
                                      src={childItem?.icon}
                                      alt="icon"
                                      className={css.cicon}
                                    />
                                  </div>
                                ) : null}
                                <div className={css.cname}>
                                  {childItem?.name}
                                </div>
                              </div>
                              {childItem?.arrowIcon ? (
                                <div className={css.carrowBox}>
                                  <img
                                    src={childItem?.arrowIcon}
                                    alt="arrow icon"
                                    className={[
                                      css.acicon,
                                      state[childItem?.name]
                                        ? css.transAcicon
                                        : "",
                                    ].join(" ")}
                                  />
                                </div>
                              ) : null}
                            </Link>
                            <div
                              className={[
                                css.subMenu,
                                state[childItem?.name] ? css.subMenuDis : "",
                              ].join(" ")}
                            >
                              {childItem?.children?.map((subChildItem) => {
                                return (
                                  <Link
                                    key={subChildItem.id}
                                    to={subChildItem?.link}
                                    className={css.subChildItem}
                                  >
                                    {subChildItem?.name}
                                  </Link>
                                );
                              })}
                            </div>
                          </>
                        );
                      })}
                    </div>
                  </div>
                  {jsonStructure?.length - 1 > id ? (
                    <hr className={css.hr} />
                  ) : null}
                </>
              );
            })}
          </div>
        </div>
      ) : (
        <div className={css.outerDivH2}>
          {jsonStructure?.map((item, id) => {
            return (
              <Link
                to={item?.link}
                className={[
                  css.miconBox,
                  state[item?.name] ? css.miconBoxActive : "",
                ].join(" ")}
                key={item?.id}
                onClick={() => changeState(item)}
              >
                {item?.icon ? (
                  <img src={item?.icon} alt="icon" className={css.micon} />
                ) : null}
              </Link>
            );
          })}
        </div>
      )}
    </>
  );
};

export default InstructorMenuBar;
