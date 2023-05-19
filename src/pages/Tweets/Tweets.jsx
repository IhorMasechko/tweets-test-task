import { CardList } from "../../components/CardList/CardList";
import css from "./Tweets.module.css";
import { fetchUsers } from "../../redux/operations";
import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { Buttonback } from "../../components/ButtonBack/Buttonback";
import { Filter } from "../../components/Filter/Filter";

const Tweets = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchUsers());
  }, [dispatch]);

  return (
    <div className={css.box}>
      <Buttonback />
      <Filter />
      <CardList />
    </div>
  );
};

export default Tweets;
