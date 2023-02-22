import { useRouter } from "next/router";

const id = () => {
  const router = useRouter();
  const id = router.query.id;
  return (
    <div>
      <h1>this is {id} page</h1>
    </div>
  );
};

export default id;
