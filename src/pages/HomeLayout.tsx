import { Outlet, useNavigation } from "react-router-dom";

const HomeLayout = () => {
  const navigation = useNavigation();
  const isPageLoading = navigation.state === "loading";

  return (
    <div className="bg-gray-200">
      <section className="mx-auto my-0 py-5 px-2 w-[80vw] ">
        {isPageLoading ? <div className="loading" /> : <Outlet />}
      </section>
    </div>
  );
};
export default HomeLayout;
