/* eslint-disable */
import {useState} from 'react';
import './App.css';

/*
  1. html css로 미리 디자인
  2. 현재 UI상태를 state에 저장해둠
  3. state에 따라 UI가 어떻게 보일지 작성
 */

  function App() {
  let [글제목, 글제목변경] = useState(['남자코트 추천', '강남 우동 맛집', '리액트독학']);  
  let [따봉, 따봉변경] = useState([0,0,0]);
  let [modal, setModal] = useState (false); 
  let [title, setTitle] = useState(0);
  let [입력값, 입력값변경] = useState('');

  const onCheckEnter = (e) => {
    if(e.key === 'Enter') {
      //function();
    }
  }

  return (// App() > return START
      
      <div className="App"> {/* App() > return > div.APP START*/}

        <div className="black-nav">
          <div onClick={()=>{location.reload();}}>React Blog</div>
        </div>

        <div className="nav_menu">

          <button onClick={()=>{
            let sort_copy = [...글제목];
            sort_copy.sort();
            글제목변경(sort_copy)
            console.log(글제목);
            }}>정렬
          </button>

          <button onClick={()=>{ 
            let copy = [...글제목];
            copy[0] = '여자코트 추천';
            글제목변경(copy);
            }}>0번째 배열 값만 변경
          </button>

          <button onClick={()=>{
            글제목변경(['여자코트추천', '드레스', '아우터'])
            }}>배열값 변경
          </button>

          <button onClick={()=>{
            let sort_add = [...글제목];
            sort_add.push('a');
            글제목변경(sort_add)
            console.log(글제목);
            }}>글제목배열추가
          </button>

          <button onClick={()=>{
            let sort_delete = [...글제목];
            sort_delete.pop();
            글제목변경(sort_delete)
            console.log(글제목);
            
            console.log('삭제')
            }}>
            글삭제
          </button>

        </div>

        <div className="list">

          <div className="edit">

            <h3>{글제목}</h3>

            <input type="text" onChange={(e)=>{  
              입력값변경(e.target.value)
              //console.log(입력값);              
            }}/>

            <button className="button_click" onClick={()=>{
              let 글제목add = [...글제목];
              // 글제목add.push(입력값);
              글제목add.unshift(입력값);
              글제목변경(글제목add);
              }} >글등록
            </button>

          </div>

          { 
            글제목.map (function(value, index) {
              return (
                <div key={[index]}>
                  
                  <h4> 
                    {/* 글제목 */}
                    <span onClick={ () => { setModal((!modal)); setTitle(index)} }>
                      { 글제목[index] } 
                    </span>

                    {/* 따봉카운트 */}
                    <span onClick = { (event) => { event.stopPropagation();
                      let 따봉분리 = [...따봉];
                      따봉분리[index] = 따봉분리[index] + 1; 
                      따봉변경(따봉분리) 
                    }}> 👍 
                    </span>
                    {따봉[index]}

                    {/* 글삭제 */}
                    <button onClick={()=>{
                      let sort_delete = [...글제목];
                      sort_delete.splice(index, 1);
                      글제목변경(sort_delete)
                      }}>
                      삭제
                    </button>

                    <p>날짜: 2월 18일 발행</p>

                  </h4>                
                </div>
              )
            })
          }

        {/* <button onClick={()=>{ setTitle(0) }}>글제목0</button> */}       

        </div>

        {/* { modal == true ? <Modal/> : null } */}
        
        {/* prop1. Props 사용을 위해 State이름 생성 */}
        {/* { modal == true ? <Modal 작명={ state이름 } /> : null } */}

        {/* prop3. 작명이름은 귀찮으니까 state이름과 동일하게 만듦 */}
        {/* { modal == true ? <Modal 글제목={ 글제목 } /> : null } */}

        { modal == true 
          ? <Modal 글제목={ 글제목 } 글제목변경={ 글제목변경 } title={ title } setModal={setModal} /> 
          : null }

        

      </div>// App() > return > div.APP END
    
    );// App() > return END
    
  }// App() END



  //prop2. props 파라미터 등록 후 props.작명 사용
  function Modal(props){
    return(
      <div className="modal" onClick={ () => { props.setModal(false)} }>
        <h3>{ props.글제목 [props.title] }</h3>
        <span>날짜</span>
        <span>상세내용</span>
        <button>글수정</button>
        {/* 
        <button className="pixed" onClick={() => {
          let copy = [...props.글제목];
              copy[0] = '여자코트 추천';
              props.글제목변경(copy);
          }}>글수정:특정배열갈기
        </button>

        <button className="pixed" onClick={() => {
          props.글제목변경(['여자코트 추천', '강남 우동 맛집', '리액트독학'])
          }}>글수정:배열갈기
        </button>
        */}
      </div>
    )
  }  
  // Modal() END



export default App;
