import React from "react";
import RankingListPage from "./components/RankingListPage";
import { RAMEN_CONFIG } from "../rankings";

const Ramen = () => <RankingListPage config={RAMEN_CONFIG} />;

export default Ramen;
