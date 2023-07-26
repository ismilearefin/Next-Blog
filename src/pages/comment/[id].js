import RootLayout from "../../components/Layouts/RootLayout";

export default function Id() {
  return <div>Dynamic</div>;
}

Id.getLayout = function getLayout(page) {
  return <RootLayout>{page}</RootLayout>;
};
