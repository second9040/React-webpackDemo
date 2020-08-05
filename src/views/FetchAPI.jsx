import React, { useEffect } from "react";
import "./../assets/FetchAPI.css";
import "@fortawesome/fontawesome-free/css/all.css";

const FetchAPI = () => {
  const [repoRes, setRepoRes] = React.useState([]);
  const [hintText, setHintText] = React.useState("取得 github repo");
  const [acc, setAcc] = React.useState("second9040");
  const [check, setCheck] = React.useState("");
  const [searchRes, setSearchRes] = React.useState("");
  const [loading, setLoading] = React.useState(false);

  let getGithub = () => {
    setHintText("loading...");
    setSearchRes("");
    setRepoRes("");
    setLoading(true);
    setAcc("");
    let tmpAcc = acc;
    setCheck(acc);
    if (tmpAcc !== check) {
      // 避免重複查詢浪費流量
      fetch(`https://api.github.com/users/${acc}/repos`, {
        method: "GET",
      }) /*設定使用GET*/
        .then((res) => res.json()) /* 處理cors問題 */
        .then((data) => {
          let tmp = [];
          data.forEach((item) => {
            let x = [item.name, item.clone_url];
            tmp.push(x);
          });
          setRepoRes(tmp);
          setHintText("取得 github repo");
          setLoading(false);
        })
        .catch((e) => {
          setRepoRes([]);
          setHintText("取得 github repo");
          setLoading(false);
          setSearchRes("查無此帳號");
          /*發生錯誤時要做的事情*/
        });
    } else {
      setLoading(false);
      setHintText("取得 github repo");
    }
  };
  let showLoading = (isLoading) => {
    if (isLoading) {
      return <i className="fas fa-spinner loading"></i>;
    }
  };

  return (
    <div className="App">
      <div className="titleContainer">
        <h2 className="title fetchAPI">Fetch API</h2>
      </div>
      <div className="data-display">
        <input
          type="text"
          placeholder="輸入github帳號"
          value={acc}
          onChange={(event) => {
            setAcc(event.target.value);
          }}
        ></input>
        <button className="btnStyle" onClick={() => getGithub()}>
          {hintText}
        </button>
        <div className="inlineTitleBox">
          <button className="inlineTitle">搜尋結果</button>
        </div>
        <div className="resField">
          {repoRes.length > 0
            ? repoRes.map((item, index) => (
                <div key={index}>
                  <a target="_blank" href={item[1]}>
                    {item[0]}
                  </a>
                </div>
              ))
            : searchRes}
          {showLoading(loading)}
        </div>
      </div>
    </div>
  );
};
export default FetchAPI;
