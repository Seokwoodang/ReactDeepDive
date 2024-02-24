import React from "react";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";

const ChapterList = () => {
  const navigate = useNavigate();
  return (
    <div>
      <StChapter
        onClick={() => {
          navigate(`/first`);
        }}
      >
        1 장
      </StChapter>
    </div>
  );
};

const StChapter = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100px;
  height: 40px;
  background-color: lightcoral;
  cursor: pointer;
`;

export default ChapterList;
