import React, { useState } from "react";
import {
  selectUsers,
  selectLoading,
  selectVisibleTweets,
} from "../../redux/selectors";
import { useDispatch, useSelector } from "react-redux";
import { CardItem } from "../CardItem/CardItem";
import css from "./CardList.module.css";
import { updateFollowers } from "../../redux/operations";
import { animateScroll } from "react-scroll";
import { removeFollower, setFollower } from "../../redux/filterSlice";

export const CardList = () => {
  const dispatch = useDispatch();
  const items = useSelector(selectUsers);
  const isLoading = useSelector(selectLoading);
  const [page, setPage] = useState(1);
  const [loadMore, setLoadMore] = useState(3);

  const filteredItems = useSelector(selectVisibleTweets);
  const countItems = Math.round(filteredItems.length / 3);

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

  const handleLoadMore = () => {
    setLoadMore((state) => state + 3);
    setPage((state) => state + 1);
    smoothScroll();
  };

  const smoothScroll = () => {
    animateScroll.scrollToBottom({
      duration: 250,
      delay: 10,
      smooth: "linear",
    });
  };

  return (
    <>
      <div className={css.list}>
        {[...filteredItems].splice(0, loadMore).map((user) => (
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

      {!isLoading && (
        <>
          {page < countItems && (
            <div className={css.buttonBox}>
              <button className={css.button} onClick={handleLoadMore}>
                Load more
              </button>
            </div>
          )}
        </>
      )}
    </>
  );
};
