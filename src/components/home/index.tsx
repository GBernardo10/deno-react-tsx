/// <reference path="https://deno.land/x/types/react/v16.13.1/react.d.ts" />;

import React from "https://dev.jspm.io/react";
import { styles } from "./style.ts";

export default () => {
  return (
    <body style={styles.body}>
      <div style={styles.container}>
        <ul style={styles.ul}>
          <li style={styles.li}>
            <p style={{ margin: "0 30px 0 0" }}>Deno</p>
            <img
              style={styles.img}
              src="https://upload.wikimedia.org/wikipedia/commons/8/84/Deno.svg"
            />
          </li>
          <p style={{ fontSize: "7rem" }}>+</p>
          <li style={styles.li}>
            <p style={{ margin: "0 30px 0 0" }}>React</p>
            <img
              style={styles.img}
              src="data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9Ii0xMS41IC0xMC4yMzE3NCAyMyAyMC40NjM0OCI+CiAgPHRpdGxlPlJlYWN0IExvZ288L3RpdGxlPgogIDxjaXJjbGUgY3g9IjAiIGN5PSIwIiByPSIyLjA1IiBmaWxsPSIjNjFkYWZiIi8+CiAgPGcgc3Ryb2tlPSIjNjFkYWZiIiBzdHJva2Utd2lkdGg9IjEiIGZpbGw9Im5vbmUiPgogICAgPGVsbGlwc2Ugcng9IjExIiByeT0iNC4yIi8+CiAgICA8ZWxsaXBzZSByeD0iMTEiIHJ5PSI0LjIiIHRyYW5zZm9ybT0icm90YXRlKDYwKSIvPgogICAgPGVsbGlwc2Ugcng9IjExIiByeT0iNC4yIiB0cmFuc2Zvcm09InJvdGF0ZSgxMjApIi8+CiAgPC9nPgo8L3N2Zz4K"
            />
          </li>
          <p style={{ fontSize: "7rem" }}>+</p>
          <li style={styles.li}>
            <p style={{ margin: "0 30px 0 0" }}>TypeScript</p>
            <img
              style={styles.img}
              src="https://miro.medium.com/max/1400/1*mn6bOs7s6Qbao15PMNRyOA.png"
            />
          </li>
          <p style={{ fontSize: "7rem", color: "#fff" }}>=</p>
        </ul>
        <img
          style={styles.eyes}
          src="https://cdn.shopify.com/s/files/1/1061/1924/products/Eyes_Emoji_large.png?v=1571606063"
        />
        <p>Promissor</p>
      </div>
    </body>
  );
};
