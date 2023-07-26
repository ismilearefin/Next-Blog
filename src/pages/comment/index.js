import RootLayout from "../../components/Layouts/RootLayout";

export default function Comment() {
  return <div>Comment</div>;
}

Comment.getLayout = function getLayout(page) {
  return <RootLayout>{page}</RootLayout>;
};
