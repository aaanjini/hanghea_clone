import React from "react";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import { TagGrid, Tag } from "../elements";
import { Grid, Text } from "../elements";
// import { actionCreators as MyActions } from "../redux/modules/mypage";

const Mypage = (props) => {
  const dispatch = useDispatch();
  const post_list = useSelector((state) => state.mypage.my_list);
  const like_post = useSelector((state) => state.mypage.my_like);
  console.log(post_list);
//   React.useEffect(() => {
//     dispatch(MyActions.myPostDB());
//     dispatch(MyActions.myLikeDB());
//   }, []);
  return (
    <TagGrid>

    </TagGrid>
  )
};

export default Mypage;