import GlobalStyles from "@mui/material/GlobalStyles";

const GlobalCssOverride = () => {
  return (
    <>
      <GlobalStyles styles={{ h1: { color: "grey" } }} />
      <h1>Elemento H1 cinza</h1>
    </>
  );
};
export default GlobalCssOverride;
