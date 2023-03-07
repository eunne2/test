import styles from "./Request.module.css";
import Category from "../../components/common/category/Category";

function Request() {
  return (
    <div>
      <Category category={"신고 / 순찰 요청"} text={"순찰요청"} />
      <div>
        <div>순찰이 필요하다면 언제든지 삐용이에게 요청하세요!</div>
        <div></div>
      </div>
    </div>
  );
}

export default Request;
