import { Images } from "../../constants";

const Comment = ({ comment }) => {
  return (
    <div className="flex flex-nowrap items-start gap-x-3 bg-[#F2F4F5] p-3 rounded-lg">
      <img className="w-6 h-6" src={Images.PostProfile} alt="comment-profile" />
    </div>
  );
};

export default Comment;
