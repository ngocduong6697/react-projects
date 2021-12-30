import React from "react";
import { useSelector } from "react-redux";
import HobbyList from "../components/Home/HobbyList";
import { useDispatch } from "react-redux";
import { addNewHobby, setActiveHobby } from "../actions/hobby";

const randomNumber = () => {
  return 1000 + Math.trunc(Math.random() * 9000);
};

const HomePage = (props) => {
  // strict comparision, if update useSelector run again, compare old state & new state
  const hobbyList = useSelector((state) => state.hobby.list);
  const activeId = useSelector((state) => state.hobby.activeId);

  // shallow comparision, always return new object !== old object
  // shalowEqual from react-redux, khong nen sai neu khong ro
  // const hobbyState = useSelector((state) => ({
  //   list: state.hobby.list,
  //   activeId: state.hobby.list,
  // }), shallowEqual);
  const dispatch = useDispatch();

  const handleAddHobbyClick = () => {
    // Random hobbies object: id + title
    const newId = randomNumber();
    const newHobby = {
      id: newId,
      title: `Hobby ${newId}`,
    };

    // Dispatch action to add a new hobby to redux store
    const action = addNewHobby(newHobby);
    dispatch(action);
  };
  const handleHobbyClick = (hobby) => {
    const action = setActiveHobby(hobby);
    dispatch(action);
  }
  return (
    <div className="home-page">
      <h1>Redux Hooks - Home Page</h1>
      <button onClick={handleAddHobbyClick}>Random hobby</button>
      <HobbyList hobbyList={hobbyList} activeId={activeId} onHobbyClick={handleHobbyClick} />
    </div>
  );
};

export default HomePage;
