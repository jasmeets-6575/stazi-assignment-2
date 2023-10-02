import { useNavigation } from "react-router-dom";
import Main from "../components/Main";

const HomeLayout = () => {
  const navigation = useNavigation();
  const isPageLoading = navigation.state === "loading";

  return (
    <div className="bg-gray-200">
      <section className="mx-auto my-0 py-5 px-2 w-[80vw] ">
        {isPageLoading ? <div className="loading" /> : <Main />}
      </section>
    </div>
  );
};
export default HomeLayout;
