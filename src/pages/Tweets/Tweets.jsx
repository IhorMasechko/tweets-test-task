import { CardList } from "../../components/CardList/CardList";
import css from "./Tweets.module.css";
import { fetchUsers } from "../../redux/operations";
import { useEffect } from "react";
import { useDispatch } from "react-redux";

const Tweets = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchUsers());
  }, [dispatch]);

  return (
    <div className={css.box}>
      <CardList />
    </div>
  );
};

export default Tweets;
