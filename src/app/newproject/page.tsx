import MainChooseProjectPage from "@/components/ChooseProject/MainChooseProjectPage";
import PageNavbar from "@/components/WelcomePage/PageNavbar";

const ChooseProject: React.FC = () => {
  const xml: React.ReactElement = (
    <>
      <PageNavbar />
      <MainChooseProjectPage />
    </>
  );
  return xml;
};

export default ChooseProject;
