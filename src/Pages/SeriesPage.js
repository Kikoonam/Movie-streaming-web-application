import styled from "styled-components";
import Series from "../components/Series";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import db from "../firebase";
import { setMovies } from "../features/movie/movieSlice";
import { selectUserName } from "../features/user/userSlice";

const SeriesPage = (props) => {
  const dispatch = useDispatch();
  const userName = useSelector(selectUserName);
  let allSeries = [];


  useEffect(() => {
    console.log("hello");
    db.collection("movies").onSnapshot((snapshot) => {
      snapshot.docs.map((doc) => {
        console.log(allSeries);
        switch (doc.data().movie) {
          case "false":
            allSeries = [...allSeries, { id: doc.id, ...doc.data() }];
            break;
        }
      });

      dispatch(
        setMovies({
          allSerie: allSeries,
        })
      );
    });
  }, [userName]);

  return (
    <Container>
        <h1>ALL Series</h1>
       
      <Series/>
     

    </Container>
  );
};

const Container = styled.main`
  position: relative;
  min-height: calc(100vh - 250px);
  overflow-x: hidden;
  display: block;
  top: 72px;
  padding: 0 calc(3.5vw + 5px);

  &:after {
    background: url("/images/home-background.png") center center / cover
      no-repeat fixed;
    content: "";
    position: absolute;
    inset: 0px;
    opacity: 1;
    z-index: -1;
  }
`;



export default SeriesPage;