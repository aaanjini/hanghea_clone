import React from "react";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";

import { Grid, Text } from "../elements";
import { actionCreators as MyActions } from "../redux/modules/mypage";

const MyPage = (props) => {
  const dispatch = useDispatch();
  const post_list = useSelector((state) => state.mypage.my_list);
  const like_post = useSelector((state) => state.mypage.my_like);
  console.log(post_list);
  React.useEffect(() => {
    dispatch(MyActions.myPostDB());
    dispatch(MyActions.myLikeDB());
  }, []);
  return (
    <Grid center padding="15px 0px" width="50vw" margin="auto">
      <Grid padding="15px" margin="5px auto" border="1px solid">
        <Text size="25px" bold>
          내가 작성한 글
        </Text>
        {post_list.map((p, idx) => {
          return (
            <Grid margin="10px">
              {/* <ComplexGrid key={p.id} {...p} /> */}
            </Grid>
          );
        })}
      </Grid>

      <Grid padding="10px" margin="25px 0px" border="1px solid">
        <Text size="25px" bold>
          내가 담은 글
        </Text>
        {like_post.map((p, idx) => {
          return (
            <Grid margin="10px">
              {/* <ComplexGrid key={p.id} {...p} /> */}
            </Grid>
          );
        })}
      </Grid>
    </Grid>
  );
};

export default MyPage;