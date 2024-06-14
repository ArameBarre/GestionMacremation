"use client";
import Link from "next/link";
import React from "react";
import styles from "./links.module.css";
import { usePathname } from "next/navigation";
import { useState } from "react";
import MenuIcon from "@mui/icons-material/Menu";

const tab = [
  {
    title: "Accueil",
    path: "/",
  },
  {
    title: "Motifs",
    path: "/motifs",
  },
  {
    title: "Contact",
    path: "/contact",
  },
  {
    title: "Artiste",
    path: "/artiste",
  },
  {
    title: "Admin",
    path: "/admin",
  },
];

const Links = () => {
  const [open, setOpen] = useState(false);
  const pathName = usePathname();
  const isActive = true;

  const onClickHandler = () => {
    setOpen(!open);
  };
  return (
    <>
      <div className={styles.container}>
        <div className={styles.LinksContainer}>
          {tab.map((item, index) => (
            <div key={index}>
              <Link
                className={`${styles.container} ${
                  pathName === item.path && styles.active
                }`}
                href={item.path}
              >
                {item.title}
              </Link>
            </div>
          ))}
        </div>
        <div className={styles.mobilelinksContainer}>
          <MenuIcon
            color="error"
            className={styles.mobileButton}
            onClick={onClickHandler}
          />
          {open && (
            <div className={styles.mobileLinks}>
              {tab.map((item, index) => (
                <div key={index}>
                  <Link
                    className={`${styles.container} ${
                      pathName === item.path && styles.active
                    }`}
                    href={item.path}
                  >
                    {item.title}
                  </Link>
                </div>
              ))}
            </div>
          )}
        </div>
      </div>
    </>
  );
};

export default Links;
