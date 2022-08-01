import Table from 'react-bootstrap/Table';
import {useEffect, useState} from "react";
import axios from "axios";
import Container from "react-bootstrap/Container";
import Button from 'react-bootstrap/Button';
import '../App.css';

function DataList() {

    const baseUrl = "http://localhost:8080";

    const[dataList, setDataList] = useState([]);
    const[likeItmsNm, setLikeItemNm] = useState("");
    const[beginBasDt, setBeginBasDt] = useState("");
    const[endBasDt, setEndBasDt] = useState("");


    async function getData(e) {
        e.preventDefault();
        await axios
            .get(baseUrl + "/getDataList",
                {params: {
                    likeItmsNm: likeItmsNm,
                    beginBasDt: beginBasDt,
                    endBasDt: endBasDt
            }})
            .then((res) => {
                if(res.data.length === 0) {
                    alert("날짜를 다시 선택해주세요.");
                } else {
                    for(let i=0;i<res.data.length;i++){
                        setDataList([...res.data ,res.data[i] ]);
                    }
                }
            })
            .catch((error) => {
              console.log(error);
            })
    }

    function changeItmsNm(e){
        e.preventDefault();
        setLikeItemNm(e.target.value);
    }

    function changeBeginBasDt(e){
        e.preventDefault();
        setBeginBasDt(e.target.value);
    }

    function changeEndBasDt(e){
        e.preventDefault();
        setEndBasDt(e.target.value);
    }

    return (
      <div>
          <div className="InputTag">
              <Container>
                  <form onSubmit={getData}>
                      <label>종목명 : </label>&nbsp;
                      <input type="text" value={likeItmsNm} onChange={changeItmsNm} />&nbsp;
                      <label>날짜 : </label>&nbsp;
                      <input type="date" value={beginBasDt} onChange={changeBeginBasDt} />&nbsp; ~
                      <input type="date" value={endBasDt} onChange={changeEndBasDt} />&nbsp;
                      <Button variant="secondary" type="submit">검색</Button>
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

export default DataList;