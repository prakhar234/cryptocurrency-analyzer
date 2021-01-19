import React from "react";

import styles from "./PageTitle.module.css";

export interface Title {
    title: String
}

const PageTitle = (props: Title) => {
    return <div className={styles.PageTitle}>{props.title}</div>
}

export default PageTitle;