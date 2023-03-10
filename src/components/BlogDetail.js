import {useParams} from "react-router-dom";

function BlogDetail() {
  const urlParams = useParams();

  return (
    <>
      <h1>Blog Detail</h1>
      <p>Ini adalah detail dari {urlParams.slug}</p>
    </>
  );
}
export default BlogDetail;
