import { useState } from "react";
import { PrimaryButton } from "./components/atom/button/PrimayButton";
import { SecondaryButton } from "./components/atom/button/SecondaryButton";
import { SearchInput } from "./components/molecules/SearchInput";
import { UserCard } from "./components/organisms/user/UserCard";
import { HeaderOnly } from "./components/template/HeaderOnly";

const user = {
  name: "りょうへい",
  image: "src/components/img/クラゲ.jpeg",
  email: "aaaa@gmail.com",
  phone: "000-0000-0000",
  company: {
    name: "テスト株式会社",
  },
  website: "http://a.com",
};

function App() {
  return (
    <HeaderOnly>
      <PrimaryButton>テスト</PrimaryButton>
      <SecondaryButton>検索</SecondaryButton>
      <br />
      <SearchInput />
      <UserCard user={user} />
    </HeaderOnly>
  );
}

export default App;
