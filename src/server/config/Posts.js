import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import Pagination from "./Pagination";

function Posts() {
  const [posts, setPosts] = useState([]);
  const limit = 10;
  // const [limit, setLimit] = useState(10);
  const [page, setPage] = useState(1);
  const offset = (page - 1) * limit;

  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/posts")
      .then((res) => res.json())
      .then((data) => setPosts(data));
  }, []);

  return (
    <div>
      {/* <label>
        페이지 당 표시할 게시물 수:&nbsp;
        <select
          type="number"
          value={limit}
          onChange={({ target: { value } }) => setLimit(Number(value))}
        >
          <option value="10">10</option>
          <option value="12">12</option>
          <option value="20">20</option>
          <option value="50">50</option>
          <option value="100">100</option>
        </select>
      </label> */}

      <main>
        {posts.slice(offset, offset + limit).map(({ id, title }) => (
          <div>
            <article
              key={id}
              style={{
                display: "flex",
                alignItems: "center",
                justifyContent: "space-between",
                fontSize: "1.25rem",
              }}
            >
              <p
                style={{
                  margin: "0",
                  padding: "15px 10px",
                  width: "5%",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                }}
              >
                {id}
              </p>
              <h3
                style={{
                  margin: "0",
                  padding: "15px 10px",
                  width: "85%",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "flex-start",
                }}
              >
                <Link to={`/request-details/${id}`}>{title}</Link>
              </h3>
              <p
                style={{
                  margin: "0",
                  padding: "15px 10px",
                  width: "10%",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                }}
              >
                진행상태
              </p>
              {/* <p>{body}</p> */}
            </article>
            <Hr />
          </div>
        ))}
      </main>

      <footer>
        <Pagination
          total={posts.length}
          limit={limit}
          page={page}
          setPage={setPage}
        />
      </footer>
    </div>
  );
}

const Hr = styled.hr`
  height: 0.8px;
  width: 100%;
  background-color: rgba(0, 0, 0, 0.2);
  border: 0;
  margin: auto;
`;

export default Posts;

// https://www.daleseo.com/react-pagination/
