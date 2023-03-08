import styles from "./Request.module.css";
import Category from "../../components/common/category/Category";
import Button from "../../components/common/button/Button";
import Posts from "../../server/config/Posts";
import Nav from "../../components/common/nav/Nav";

function Request() {
  return (
    <div>
      <Nav />
      <Category category={"신고 / 순찰 요청"} text={"순찰요청"} />
      <div className={styles.title}>
        순찰이 필요하다면 언제든지 삐용이에게 요청하세요!
      </div>
      <span className={styles.btn}>
        <Button selectBtn={1} text={"작성하기"} />
      </span>
      <Posts />
    </div>
  );
}

export default Request;
