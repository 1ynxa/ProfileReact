import { useState } from "react";
import { PrimaryButton } from "./components/atom/button/PrimayButton";
import { SecondaryButton } from "./components/atom/button/SecondaryButton";
import { SearchInput } from "./components/molecules/SearchInput";
import { UserCard } from "./components/organisms/user/UserCard";
import { HeaderOnly } from "./components/template/HeaderOnly";
import { BrowserRouter } from "react-router-dom";
import { DefaultLayout } from "./components/template/DefaultLayout";
import { Router } from "./router/Router";

function App() {
  return <Router />;
}

export default App;
