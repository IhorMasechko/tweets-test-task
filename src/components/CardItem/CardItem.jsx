import React from "react";
import css from "./CardItem.module.css";
import logo from "../images/Logo.png";
import { useSelector } from "react-redux";
import { selectIdFollowers } from "../../redux/selectors";
import { Button } from "./ButtonSubscribeStyles";

export const CardItem = ({ id, tweets, avatar, followers, onClick }) => {
  const followId = useSelector(selectIdFollowers);
  const isFollow = followId.includes(id);

  return (
    <div className={css.card}>
      <img alt="logo" className={css.logo} src={logo}></img>
      <div className={css.wrapper}>
        <div className={css.picture}></div>
        <div className={css.avatar}>
          <img alt="avatar" src={avatar} className={css.avatarInner}></img>
        </div>
      </div>
      <p className={css.tweetsText}> {tweets} tweets</p>
      <p className={css.followersText}>
        {followers.toLocaleString("en-US")} Followers
      </p>
      <div className={css.buttonBox}>
        <Button
          className={isFollow ? "green" : "white"}
          onClick={() => onClick(id, isFollow)}
        >
          {isFollow ? "Following" : "Follow"}
        </Button>
      </div>
    </div>
  );
};
