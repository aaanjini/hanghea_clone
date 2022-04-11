# 항해99 6조 클론코딩 - 콜리
<img width="207" alt="스크린샷 2022-02-24 오후 2 21 34" src="https://user-images.githubusercontent.com/89513776/155463152-66221846-ef4c-4565-8230-d05fd9d71ff2.png">

[콜리를 구경해보세요!](http://colley-hanghea.s3-website.ap-northeast-2.amazonaws.com/)

#### 프론트 - 안진희,소정현 [깃허브](https://github.com/aaanjini/hanghea_clone) 
#### 백 - 이강욱,신동석,최원준 [깃허브](https://github.com/Kanguk1/hanghae99_7w)

<hr/>

## API 설계서🌈
https://www.notion.so/7-6-0d5d64e9fb2a41c1a4347383853d7e3b


## 와이어프레임✨

<details>
<summary>와이어 프레임</summary>
  <img width="475" alt="스크린샷 2022-02-24 오후 2 27 33" src="https://user-images.githubusercontent.com/89513776/155463686-abb4396f-59d7-43fd-9bca-47dc72e4697f.png" style="width:300px; display:inline-block"> <img width="496" alt="스크린샷 2022-02-24 오후 2 27 44" src="https://user-images.githubusercontent.com/89513776/155463699-e4434ca7-469e-44d4-be07-0191676f8980.png" style="width:300px; display:inline-block"><img width="459" alt="스크린샷 2022-02-24 오후 2 27 57" src="https://user-images.githubusercontent.com/89513776/155463705-8c6716a7-159b-40c5-abc2-8f6b86a1976f.png" style="width:300px; display:inline-block"><img width="474" alt="스크린샷 2022-02-24 오후 2 28 03" src="https://user-images.githubusercontent.com/89513776/155463709-ba715832-422f-4f97-a02e-b2ac906c7061.png" style="width:300px; display:inline-block"><img width="476" alt="스크린샷 2022-02-24 오후 2 28 12" src="https://user-images.githubusercontent.com/89513776/155463716-cb6e385e-865b-4929-bcde-6f7830972d7d.png" style="width:300px; display:inline-block"><img src="https://user-images.githubusercontent.com/89513776/155465078-a0261404-8685-4c7a-b914-79a02934474a.png" style="width:300px; display:inline-block">
</details>




## 트러블슈팅☄️

<b>BE</b>
<ul>
  <li>
    특정이미지 안올라가던 문제(해결)
    <p>-> s3업로드에서 자체적으로 1MB로 이미지 크기를 제한하고있었음 -> 용량제한 해제</p>
  </li>
  <li>
    좋아요 기능 구상(해결)
    <p> -> 따로 테이블 만들어서 해결</p>
  </li>
  <li>
     게시글 수정 시 파일을 안바꾸고 수정하면 오류가 나는 현상(해결)
     <p>->이미지 업로드과정에서 파일이 null일경우 예외처리 만들어서 해결</p>
  </li>
  <li>
    태그 수정 시 반영되지 않던 문제(해결)
    <p>-> 각 상황에맞는 예외처리과정을 추가하여 해결</p>
  </li>
</ul>

  
<b>FE</b>
 <ul>
  <li>
    검색을 했을 때 검색단어를 가지고 페이지로 넘어가게끔 만들기 
    <p>-> location.state 로 단어를 넘겨주는 방식으로 해결 </p>
  </li>
  <li>
    검색하고 난 다음에 재검색을 할 경우에 기존 검색어가 남아있던 문제
    <p> -> localStorage에 저장해뒀던 targetword를 페이지가 바뀌면 remove 시켜줌</p>
  </li>
  <li>    
    댓글 실시간으로 댓글 갯수 업데이트
    <p>-> 댓글을 쓰면 그 댓글 리스트의 length를 구해서 댓글 갯수로 사용</p>
  </li>
  <li>
    게시글 수정 시 파일을 안바꾸고 수정하면 오류가 나는 현상
    <p>->이미지가 바뀌지않을 경우 null로 처리해서 백단으로 전송</p>
  </li>
</ul>




