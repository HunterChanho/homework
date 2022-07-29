import Table from 'react-bootstrap/Table';
import {useEffect, useState} from "react";
import axios from "axios";
import Container from "react-bootstrap/Container";
import '../App.css';
import data from "bootstrap/js/src/dom/data";

function TableBoot() {

  const baseUrl = "http://localhost:8080";

  const[dataList, setDataList] = useState([]);
  const[likeItmsNm, setLikeItemNm] = useState("");
  const[basDt, setBasDt] = useState("");

  useEffect(() => {
      getData();
  }, [])

  async function getData(e) {
      e.preventDefault();
    await axios
        .get(baseUrl + "/getData",
            {params: {
                likeItmsNm: likeItmsNm,
                    basDt: basDt
            }
            })
        .then((res) => {
          console.log(res.data);
            console.log(res.data.length);
          for(let i=0;i<res.data.length;i++){
              setDataList([...res.data ,res.data[i] ]);

          }
            console.log(dataList);
        })
        .catch((error) => {
          alert(error)
        })

  }

  function changeText(e){
        e.preventDefault();
        setLikeItemNm(e.target.value);
  }

  function changeBasDt(e){
        e.preventDefault();
        setBasDt(e.target.value);
    }
  return (
      <div>
          <div className="InputTag">
              <Container>
                  <form onSubmit={getData}>
                      <label>종목명 : </label>&nbsp;
                      <input type="text" value={likeItmsNm} onChange={changeText} /><br />
                      <label>날짜 : </label>&nbsp;
                      <input type="text" value={basDt} onChange={changeBasDt} />
                      <input type="submit" value="검색"/>
                  </form>
              </Container>
          </div>
      <Table striped bordered hover size="sm">
        <thead>
        <tr>
          <th>코드(srtnCd)</th>
          <th>구분(mrktCtg)</th>
          <th>이름(itmsNm)</th>
          <th>종가(clpr)</th>
          <th>최고가(hipr)</th>
          <th>최저가(lopr)</th>
          <th>변동금액(vs)</th>
        </tr>
        </thead>
        <tbody>
        {dataList.map((item,index)=>(
            <tr key={index}>
                <td>{item.srtnCd}</td>
                <td>{item.mrktCtg}</td>
                <td>{item.itmsNm}</td>
                <td>{item.clpr}</td>
                <td>{item.hipr}</td>
                <td>{item.lopr}</td>
                <td>{item.vs}</td>
            </tr>
            ))}
        </tbody>
      </Table>
      </div>

  );
}

export default TableBoot;