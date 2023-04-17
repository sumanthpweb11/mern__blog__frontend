import { Link } from "react-router-dom";
import BreadCrumbs from "../../components/BreadCrumbs";
import MainLayout from "../../components/MainLayout";
import { Images } from "../../constants";
import SuggestedPosts from "./container/SuggestedPost";
import CommentsContainer from "../../components/comments/CommentsContainer";
import SocialShareButtons from "../../components/SocialShareButtons";

const ArticleDetailPage = () => {
  const breadCrumbsData = [
    {
      name: "Home",
      link: "/",
    },
    {
      name: "Blog",
      link: "/blog",
    },
    {
      name: "Article Title",
      link: "/blog/1",
    },
  ];

  const postsData = [
    {
      _id: "1",
      image: Images.Post1,
      title: "Help children get better education",
      createdAt: "2023-01-28T15:35:53.607+0000",
    },
    {
      _id: "2",
      image: Images.Post1,
      title: "Help children get better education",
      createdAt: "2023-01-28T15:35:53.607+0000",
    },
    {
      _id: "3",
      image: Images.Post1,
      title: "Help children get better education",
      createdAt: "2023-01-28T15:35:53.607+0000",
    },
    {
      _id: "4",
      image: Images.Post1,
      title: "Help children get better education",
      createdAt: "2023-01-28T15:35:53.607+0000",
    },
  ];

  const tagsData = [
    "Medical",
    "Lifestyle",
    "Learn",
    "Healthy",
    "Food",
    "Diet",
    "Education",
  ];

  return (
    <MainLayout>
      <section className="container mx-auto max-w-5xl flex flex-col px-5 py-5 lg:flex-row gap-x-5 lg:items-start  ">
        <article className="flex-1 ">
          <BreadCrumbs data={breadCrumbsData} />
          <img
            className="rounded-xl w-full"
            src={Images.Post1}
            alt="post details"
          />
          <Link
            className="text-primary text-sm font-roboto inline-block mt-4 md:text-base"
            to="/blog?category=selectedCategory"
          >
            Education
          </Link>
          <h1 className="text-xl font-medium font-roboto md:text-[26px] ">
            Let children get better education
          </h1>
          <div className="mt-4 text-dark-soft">
            <p className="leading-7">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Quaerat
              voluptas placeat quis. Commodi, labore! Cum neque magni dolor vel
              architecto sunt delectus, quibusdam beatae asperiores aliquid
              rerum a earum quas repellat dolorum! A facilis, ipsum aliquam
              illum, quasi expedita perferendis unde fuga excepturi accusamus
              eum totam, consequuntur temporibus quaerat tempora.
            </p>
          </div>

          {/*COMMENTS COMPONENT */}
          <CommentsContainer className="mt-10 " loggedInUserId="a" />
          {/*COMMENTS COMPONENT */}
        </article>
        <div>
          <SuggestedPosts
            header="Latest Article"
            posts={postsData}
            tags={tagsData}
            className="mt-8 lg:mt-0 lg:max-w-xs "
          />
          <div className="mt-7">
            <h2 className="font-roboto font-medium text-dark-hard mb-4 md:text-xl">
              Share on:
            </h2>
            <SocialShareButtons
              url={encodeURI(
                "https://moonfo.com/post/client-side-and-server-side-explanation"
              )}
              title={encodeURIComponent(
                "Client-side and Server-side explanation"
              )}
            />
          </div>
        </div>
      </section>
    </MainLayout>
  );
};

export default ArticleDetailPage;
