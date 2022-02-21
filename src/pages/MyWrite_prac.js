

const PostEdit = (props) => {
  const dispatch = useDispatch();
  const target_id = useParams().postId;

  //이미 App.js에서 세션이 있는지 확인했으니, is_login만 확인하면 된다.
  const is_login = useSelector((state) => state.user.is_login);
  const target = useSelector((state) => state.post.target);
  console.log(target);
  const preview = useSelector((state) => state.image.preview);

  const { history } = props;

  // const [image, setImage] = React.useState("");
  const [nickname, setNickname] = React.useState(target ? target.nickname : "");
  const [intro, setIntro] = React.useState(target ? target.intro : "");
  const [post_list, setPostList] = React.useState({});

  const editPost = () => {
    console.log(nickname, intro);

    // setPostList(temp_list);

    dispatch(
      postActions.editPostDB(
        target_id,
        nickname,
        intro
      )
    );
  };

 
  return (
    <Grid padding="0px 40px" width="70vw" margin="auto">
      <Grid padding="10px">
        <Text margine="0px" size="24px" bold>
          미리보기
        </Text>
        <Grid is_flex>
          <Image
            half
            shape="big_square"
            src={preview ? preview : target.imgUrl}
          />
          <Upload />
        </Grid>
      </Grid>

      <Grid padding="16px">
        <Input
          value={nickname}
          _onChange={(e) => {
            setNickname(e.target.value);
          }}
          label="닉네임"
          placeholder="닉네임을 입력해주세요"
        />
              
        <Input
          value={intro}
          textarea
          _onChange={(e) => {
            setIntro(e.target.value);
          }}
          multiLine
          label="소개"
          placeholder="소개를 작성해주세요"
        />
      </Grid>
      <Grid is_flex>
        <Button
          width="30vw"
          margin="10px auto"
          _onClick={editPost}
          _disabled={
            nickname === "" ||
            intro === ""
              ? true
              : false
          }
        >
          게시글 수정
        </Button>
      </Grid>
    </Grid>
  );
};

const Select = styled.select`
  margin: 5px 0 20px 0px;
  min-width: 0;
  display: block;
  width: 100%;
  padding: 8px 8px;
  font-family: inherit; // font 상속
  line-height: inherit;
  border: 2px solid #acacac;
  border-radius: 4px;
  color: inherit;
  background-color: transparent;
  &:focus {
    border-color: #61b165;
  }

  /* 방향 화살표 없애기 */
  /* -webkit-appearance: none;
  -moz-appearance: none;
  appearance: none; */
`;

const UploadBox = styled.label`
  margin: 0 8px 0 8px;
  label {
    display: inline-block;
    font-size: inherit;
    line-height: normal;
    vertical-align: middle;
    cursor: pointer;
  }
  input[type="file"] {
    position: absolute;
    width: 0;
    height: 0;
    padding: 0;
    margin: -1px;
    overflow: hidden;
    clip: rect(0, 0, 0, 0);
    border: 0;
  }
`;

export default PostEdit;
