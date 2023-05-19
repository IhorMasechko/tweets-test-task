import React from "react";
import { selectUsers } from "../../redux/selectors";
import { useDispatch, useSelector } from "react-redux";
import { CardItem } from "../CardItem/CardItem";
import css from "./CardList.module.css";
import { updateFollowers } from "../../redux/operations";
import { removeFollower, setFollower } from "../../redux/filterSlice";

export const CardList = () => {
  const dispatch = useDispatch();
  const items = useSelector(selectUsers);

  const handleOnClick = (id, isSubscribed) => {
    const subscribed = items.filter((item) => item.id === id);

    if (isSubscribed) {
      const followers = decrement(...subscribed);
      dispatch(updateFollowers({ ...subscribed[0], followers }));
      dispatch(removeFollower(id));
      return;
    } else {
      const followers = increment(...subscribed);
      dispatch(updateFollowers({ ...subscribed[0], followers }));
      dispatch(setFollower(id));
    }
  };

  const increment = (subscribed) => {
    return subscribed.followers + 1;
  };

  const decrement = (subscribed) => {
    return subscribed.followers - 1;
  };

  return (
    <>
      <div className={css.list}>
        {items.map((user) => (
          <CardItem
            id={user.id}
            key={user.id}
            tweets={user.tweets}
            avatar={user.avatar}
            followers={user.followers}
            onClick={handleOnClick}
          ></CardItem>
        ))}
      </div>
      <div className={css.buttonBox}>
        <button className={css.button}>Load more</button>
      </div>
    </>
  );
};
