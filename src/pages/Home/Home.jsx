import React from "react";
import css from "./Home.module.css";
import label from "../../components/images/Label.png";

const Home = () => {
  return (
    <>
      <div className={css.box}>
        <div className={css.header}>
          <img src={label} alt="" width={120} height={90} />
          <h1 className={css.text}>Tweets Home Page</h1>
        </div>
        <div className={css.div}>
          <span className={css.span}>
            Tweets are short messages or posts shared on the social media
            platform Twitter. They are limited to a maximum of 280 characters,
            which was the original character limit until Twitter expanded it
            from the previous limit of 140 characters in 2017. Tweets can
            contain text, hashtags, links, images, videos, and other media.
          </span>
          <span className={css.span}>
            Twitter is a popular social networking service where users can share
            their thoughts, opinions, news, and various other content. Tweets
            are designed to be concise and quickly shareable, allowing users to
            express themselves or share information in a brief and easily
            digestible format.
          </span>

          <span className={css.span}>
            On Twitter, users can post tweets to their own profiles, follow
            other users to see their tweets in their timeline, and engage with
            tweets by liking, retweeting, or replying to them. Tweets can also
            be shared publicly or sent privately through direct messages.
          </span>
          <span className={css.span}>
            Twitter has become a significant platform for real-time news
            updates, discussions, and interactions among individuals,
            organizations, celebrities, and public figures across a wide range
            of topics.
          </span>
        </div>
      </div>
    </>
  );
};

export default Home;
